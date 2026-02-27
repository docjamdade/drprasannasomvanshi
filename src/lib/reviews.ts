import fs from "fs";
import path from "path";

export interface Review {
  name: string;
  text: string;
  rating: number;
  date?: string;
  profilePhoto?: string;
}

export interface ReviewsData {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
  fetchedAt: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const CACHE_FILE = path.join(DATA_DIR, "reviews.json");
const STALE_MS = 24 * 60 * 60 * 1000; // 24 hours

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function readCachedReviews(): ReviewsData | null {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const raw = fs.readFileSync(CACHE_FILE, "utf-8");
      return JSON.parse(raw) as ReviewsData;
    }
  } catch {
    // corrupt file — ignore
  }
  return null;
}

export function writeCachedReviews(data: ReviewsData): void {
  ensureDataDir();
  fs.writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export function isCacheStale(): boolean {
  try {
    if (!fs.existsSync(CACHE_FILE)) return true;
    const stat = fs.statSync(CACHE_FILE);
    return Date.now() - stat.mtimeMs > STALE_MS;
  } catch {
    return true;
  }
}

/**
 * Fetch reviews from SerpAPI Google Maps Reviews.
 * Requires env vars: SERPAPI_KEY, GOOGLE_PLACE_ID
 */
export async function fetchReviewsFromSerpAPI(): Promise<ReviewsData | null> {
  const apiKey = process.env.SERPAPI_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn("[reviews] SERPAPI_KEY or GOOGLE_PLACE_ID not set, skipping fetch.");
    return null;
  }

  try {
    const url = new URL("https://serpapi.com/search.json");
    url.searchParams.set("engine", "google_maps_reviews");
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("api_key", apiKey);
    url.searchParams.set("sort_by", "newestFirst");

    const res = await fetch(url.toString(), { signal: AbortSignal.timeout(15000) });
    if (!res.ok) {
      console.error(`[reviews] SerpAPI returned ${res.status}`);
      return null;
    }

    const json = await res.json();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const placeInfo: any = json.place_info || {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawReviews: any[] = json.reviews || [];

    const reviews: Review[] = rawReviews.map((r) => ({
      name: String(r.user?.name || r.author_title || "Anonymous"),
      text: String(r.snippet || r.extracted_snippet?.original || ""),
      rating: Number(r.rating) || 5,
      date: r.date ? String(r.date) : undefined,
      profilePhoto: r.user?.thumbnail ? String(r.user.thumbnail) : undefined,
    }));

    return {
      reviews,
      averageRating: Number(placeInfo.rating) || 5.0,
      totalReviews: Number(placeInfo.reviews) || reviews.length,
      fetchedAt: new Date().toISOString(),
    };
  } catch (err) {
    console.error("[reviews] SerpAPI fetch failed:", err);
    return null;
  }
}

/** Hardcoded fallback reviews from the original Google listing. */
export const FALLBACK_REVIEWS: ReviewsData = {
  reviews: [
    {
      name: "Deepak Gupta",
      text: "Dr. Prasanna is one of the finest doctors I have ever met. He was very proficient in his work. My daughter (4 yr old) had recently one surgery with Dr. Prasanna. His knowledge about the subject is very deep and does surgery with extreme precision. He was very caring, meticulous and dedicated to his work. He listened to my concerns regarding immediate travel after this surgery and assured me that the same can be taken. Further, he called us twice during our tour to check everything is fine. This type of exceptional care I have never imagined. I highly recommend Dr. Prasanna for any surgery.",
      rating: 5,
    },
    {
      name: "Trupti Navale",
      text: "My husband recently underwent leg surgery with Dr. Prasanna Somvanshi, and I am thoroughly impressed by the exceptional care he provided. What truly sets Dr. Prasanna Somvanshi apart is his genuine compassion for his patients. He takes the time to listen, answer all questions, and provide personalized care that makes a significant difference. The doctor is friendly, supportive, and always available whenever we needed assistance. I highly recommend Dr. Prasanna Somvanshi to anyone considering leg plastic surgery or related procedures.",
      rating: 5,
    },
    {
      name: "Khan Faisal",
      text: "I recently had hand surgery with Dr. Prasanna Somvanshi, and I am extremely grateful for the outstanding care I received. Dr. Somvanshi is not only highly skilled and professional but also genuinely compassionate, taking the time to thoroughly explain every step of the procedure and answer all my questions. His calm and reassuring approach made me feel confident and at ease throughout the process. The surgery itself went smoothly, and my recovery has been quicker and more comfortable than I expected.",
      rating: 5,
    },
    {
      name: "Jami Asweez",
      text: "My wife had an accident that resulted in a deep cut on her hand, requiring a three-hour surgery performed by Dr. Prasanna. Throughout the entire process, Dr. Prasanna remained calm, humble, and extremely patient with us. He is always easily accessible.",
      rating: 5,
    },
    {
      name: "Anup Pandey",
      text: "I visited Dr Prasanna a few months back for a cosmetic procedure. I found his attitude very friendly and he patiently answered all our doubts. Loved his professionalism and his work is extremely neat. He\u2019s now our family doctor for all cosmetic needs and we trust him implicitly.",
      rating: 5,
    },
    {
      name: "Sumit Lodha",
      text: "We had very good experience with Dr. Prasanna for our daughter\u2019s treatment. Thank you Dr. Prasanna for explaining us everything in detail and always available for Amyra\u2019s treatment!!",
      rating: 5,
    },
    {
      name: "Vaibhav Ingle",
      text: "I had my surgery in December 2024. I honestly felt that Dr. Prasanna sir is very very professional surgeon and he is very kind person.",
      rating: 5,
    },
    {
      name: "Natasha Ramrakhiani",
      text: "Excellent Doctor, very helpful during an emergency surgery we had to do for our child.",
      rating: 5,
    },
    {
      name: "Devraj Mestry",
      text: "Doctor Prasanna is the best plastic surgeon when it comes to hospitality and taking care of the patient. I am a very lucky guy to have him as my surgeon he changed my life by his skillful hands. After the operation now I am confident that my personality is grown.",
      rating: 5,
    },
    {
      name: "Rishav Kumar",
      text: "Very supportive and too humble. He gave me the best advice.",
      rating: 5,
    },
  ],
  averageRating: 5.0,
  totalReviews: 14,
  fetchedAt: "2026-02-22T00:00:00.000Z",
};
