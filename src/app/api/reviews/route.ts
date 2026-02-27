import { NextResponse } from "next/server";
import {
  readCachedReviews,
  writeCachedReviews,
  isCacheStale,
  fetchReviewsFromSerpAPI,
  FALLBACK_REVIEWS,
} from "@/lib/reviews";

export const dynamic = "force-dynamic";

/**
 * GET /api/reviews
 *
 * Returns cached Google reviews. If the cache is stale (>24h),
 * fetches fresh data from SerpAPI and updates the cache.
 * Falls back to the last saved cache or hardcoded reviews.
 *
 * Query params:
 *   ?refresh=true  — force a fresh fetch regardless of cache age
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const forceRefresh = searchParams.get("refresh") === "true";

  // Read existing cache
  let cached = readCachedReviews();

  // Decide whether to fetch fresh data
  const shouldFetch = forceRefresh || isCacheStale();

  if (shouldFetch) {
    const fresh = await fetchReviewsFromSerpAPI();
    if (fresh && fresh.reviews.length > 0) {
      writeCachedReviews(fresh);
      return NextResponse.json(fresh, {
        headers: { "X-Reviews-Source": "serpapi-fresh" },
      });
    }
    // Fetch failed or returned empty — fall through to cache/fallback
    console.warn("[api/reviews] Fresh fetch failed or empty, using fallback.");
  }

  // Return cached data if available
  if (cached && cached.reviews.length > 0) {
    return NextResponse.json(cached, {
      headers: { "X-Reviews-Source": "cache" },
    });
  }

  // Last resort: hardcoded fallback
  // Also save it so subsequent requests don't hit this path
  writeCachedReviews(FALLBACK_REVIEWS);
  return NextResponse.json(FALLBACK_REVIEWS, {
    headers: { "X-Reviews-Source": "fallback" },
  });
}
