import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { allBlogPosts } from "@/lib/blog-posts";
import { getPublishedPosts } from "@/lib/blog-types";
import { getBlogCoverImage } from "@/lib/blog-images";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Blog | Plastic Surgery Articles & Patient Education",
  description:
    "Read expert articles on plastic and reconstructive surgery by Dr. Prasanna Somvanshi — rhinoplasty, cleft repair, burn treatment, liposuction, and more. Mumbai's trusted plastic surgeon.",
  alternates: { canonical: "https://drprasannasomvanshi.com/blog" },
};

export default function BlogPage() {
  const posts = getPublishedPosts(allBlogPosts);

  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 via-cream to-secondary/5 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-text font-[family-name:var(--font-heading)] sm:text-4xl">
            Our <span className="text-primary">Blog</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Expert articles on plastic and reconstructive surgery by
            Dr.&nbsp;Prasanna Somvanshi. Stay informed about procedures,
            recovery, and the latest advances.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">
              Blog posts coming soon. Stay tuned!
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-2xl border border-cream-dark bg-white shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={getBlogCoverImage(post.slug, post.category, i)}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-0.5 text-xs font-medium text-primary capitalize backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-gray-400">
                      {new Date(post.publishDate).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <h2 className="mt-1 text-lg font-bold text-text group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="mt-3 inline-block text-sm font-semibold text-primary">
                      Read More &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-heading)]">
            Have questions about a procedure?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Book a consultation with Dr. Prasanna Somvanshi to discuss your
            concerns and learn about your options.
          </p>
          <div className="mt-8">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-secondary-dark transition-all hover:shadow-xl"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
