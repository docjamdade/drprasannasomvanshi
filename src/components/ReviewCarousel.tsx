"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface Review {
  name: string;
  text: string;
  rating: number;
  date?: string;
}

interface ReviewsData {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

const HARDCODED_REVIEWS: ReviewsData = {
  reviews: [
    { name: "Deepak Gupta", text: "Dr. Prasanna is one of the finest doctors I have ever met. He was very proficient in his work. My daughter (4 yr old) had recently one surgery with Dr. Prasanna. His knowledge about the subject is very deep and does surgery with extreme precision. He was very caring, meticulous and dedicated to his work. He listened to my concerns regarding immediate travel after this surgery and assured me that the same can be taken. Further, he called us twice during our tour to check everything is fine. This type of exceptional care I have never imagined. I highly recommend Dr. Prasanna for any surgery.", rating: 5 },
    { name: "Trupti Navale", text: "My husband recently underwent leg surgery with Dr. Prasanna Somvanshi, and I am thoroughly impressed by the exceptional care he provided. What truly sets Dr. Prasanna Somvanshi apart is his genuine compassion for his patients. He takes the time to listen, answer all questions, and provide personalized care that makes a significant difference. The doctor is friendly, supportive, and always available whenever we needed assistance. I highly recommend Dr. Prasanna Somvanshi to anyone considering leg plastic surgery or related procedures.", rating: 5 },
    { name: "Khan Faisal", text: "I recently had hand surgery with Dr. Prasanna Somvanshi, and I am extremely grateful for the outstanding care I received. Dr. Somvanshi is not only highly skilled and professional but also genuinely compassionate, taking the time to thoroughly explain every step of the procedure and answer all my questions. His calm and reassuring approach made me feel confident and at ease throughout the process. The surgery itself went smoothly, and my recovery has been quicker and more comfortable than I expected.", rating: 5 },
    { name: "Jami Asweez", text: "My wife had an accident that resulted in a deep cut on her hand, requiring a three-hour surgery performed by Dr. Prasanna. Throughout the entire process, Dr. Prasanna remained calm, humble, and extremely patient with us. He is always easily accessible.", rating: 5 },
    { name: "Anup Pandey", text: "I visited Dr Prasanna a few months back for a cosmetic procedure. I found his attitude very friendly and he patiently answered all our doubts. Loved his professionalism and his work is extremely neat. He\u2019s now our family doctor for all cosmetic needs and we trust him implicitly.", rating: 5 },
    { name: "Sumit Lodha", text: "We had very good experience with Dr. Prasanna for our daughter\u2019s treatment. Thank you Dr. Prasanna for explaining us everything in detail and always available for Amyra\u2019s treatment!!", rating: 5 },
    { name: "Vaibhav Ingle", text: "I had my surgery in December 2024. I honestly felt that Dr. Prasanna sir is very very professional surgeon and he is very kind person.", rating: 5 },
    { name: "Natasha Ramrakhiani", text: "Excellent Doctor, very helpful during an emergency surgery we had to do for our child.", rating: 5 },
    { name: "Devraj Mestry", text: "Doctor Prasanna is the best plastic surgeon when it comes to hospitality and taking care of the patient. I am a very lucky guy to have him as my surgeon he changed my life by his skillful hands. After the operation now I am confident that my personality is grown.", rating: 5 },
    { name: "Rishav Kumar", text: "Very supportive and too humble. He gave me the best advice.", rating: 5 },
  ],
  averageRating: 5.0,
  totalReviews: 14,
};

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function ReviewCarousel() {
  const [data, setData] = useState<ReviewsData>(HARDCODED_REVIEWS);
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Fetch reviews from API on mount
  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((json: ReviewsData) => {
        if (json.reviews && json.reviews.length > 0) {
          setData(json);
        }
      })
      .catch(() => {
        // Keep hardcoded fallback
      });
  }, []);

  const reviews = data.reviews;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(current + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading + Google Badge */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text font-[family-name:var(--font-heading)] sm:text-4xl">
            What Patients <span className="text-primary">Say</span>
          </h2>
          <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-full bg-white border border-cream-dark px-4 py-2.5 shadow-sm">
            <GoogleIcon />
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold text-text">
                {data.averageRating.toFixed(1)}
              </span>
              <StarRating />
            </div>
            <span className="text-sm text-gray-500">
              from {data.totalReviews} Google Reviews
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="mt-10 relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {getVisibleReviews().map((review, i) => (
              <div
                key={`${review.name}-${current}-${i}`}
                className={`rounded-2xl border border-cream-dark bg-gradient-to-br from-white to-cream/30 p-6 shadow-sm transition-all duration-300 ${i > 0 ? (i === 1 ? "hidden md:block" : "hidden lg:block") : ""}`}
              >
                <div className="flex items-center justify-between">
                  <StarRating count={review.rating} />
                  <GoogleIcon />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 line-clamp-5">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-primary">
                    &mdash; {review.name}
                  </p>
                  {review.date && (
                    <p className="text-xs text-gray-400">{review.date}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows + dots */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => { prev(); setIsAutoPlaying(false); }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-dark bg-white shadow-sm hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous review"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setIsAutoPlaying(false); }}
                  className={`rounded-full transition-all p-1 ${i === current ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-cream-dark hover:bg-primary/40"}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => { next(); setIsAutoPlaying(false); }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-dark bg-white shadow-sm hover:border-primary hover:text-primary transition-colors"
              aria-label="Next review"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* View all link */}
        <div className="mt-6 text-center">
          <a
            href="https://www.google.com/search?q=dr+prasanna+somvanshi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            <GoogleIcon />
            View all reviews on Google
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
