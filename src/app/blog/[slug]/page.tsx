import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allBlogPosts } from "@/lib/blog-posts";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog-types";
import { getBlogCoverImage } from "@/lib/blog-images";
import WhatsAppButton from "@/components/WhatsAppButton";
import { messages } from "@/lib/whatsapp";

export const revalidate = 86400;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(allBlogPosts, slug);
  if (!post) return {};
  const coverImage = getBlogCoverImage(post.slug, post.category, allBlogPosts.indexOf(post));
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `https://drprasannasomvanshi.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDate,
      authors: ["Dr. Prasanna Somvanshi"],
      images: [{ url: coverImage, width: 800, height: 500, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(allBlogPosts, slug);
  if (!post) notFound();

  const postIndex = allBlogPosts.indexOf(post);
  const coverImage = getBlogCoverImage(post.slug, post.category, postIndex);

  const published = getPublishedPosts(allBlogPosts);
  const currentIndex = published.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < published.length - 1 ? published[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? published[currentIndex - 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishDate,
    author: {
      "@type": "Person",
      name: "Dr. Prasanna Somvanshi",
      url: "https://drprasannasomvanshi.com/about",
    },
    publisher: {
      "@type": "Person",
      name: "Dr. Prasanna Somvanshi",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://drprasannasomvanshi.com/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text line-clamp-1">{post.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary capitalize">
                {post.category}
              </span>
              <time className="text-sm text-gray-500" dateTime={post.publishDate}>
                {new Date(post.publishDate).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <h1 className="text-3xl font-extrabold text-text font-[family-name:var(--font-heading)] sm:text-4xl leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{post.excerpt}</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">PS</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-text">
                  Dr. Prasanna Somvanshi
                </p>
                <p className="text-xs text-gray-500">
                  MCh Plastic Surgery, Mumbai
                </p>
              </div>
            </div>
          </header>

          {/* Cover Image */}
          <div className="relative mb-10 h-64 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-96">
            <Image
              src={coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Content */}
          <div
            className="prose sm:prose-lg max-w-none
              prose-headings:font-[family-name:var(--font-heading)] prose-headings:text-text
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-600 prose-p:leading-relaxed
              prose-li:text-gray-600
              prose-strong:text-text
              prose-a:text-primary hover:prose-a:text-primary-dark"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-cream-dark p-8 text-center">
            <h3 className="text-xl font-bold text-text font-[family-name:var(--font-heading)]">
              Need Expert Advice?
            </h3>
            <p className="mt-2 text-gray-600">
              Consult Dr. Prasanna Somvanshi for personalised guidance on your
              treatment options.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/book"
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-colors"
              >
                Book Consultation
              </Link>
              <a
                href="tel:+919819691487"
                className="rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-secondary-dark transition-colors"
              >
                Call Now
              </a>
              <WhatsAppButton message={messages.general} label="WhatsApp" />
            </div>
          </div>

          {/* Prev/Next */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex-1 rounded-xl border border-cream-dark p-4 hover:border-primary/30 transition-colors"
              >
                <span className="text-xs text-gray-400">&larr; Previous</span>
                <p className="mt-1 text-sm font-semibold text-text group-hover:text-primary transition-colors line-clamp-1">
                  {prevPost.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex-1 rounded-xl border border-cream-dark p-4 hover:border-primary/30 transition-colors text-right"
              >
                <span className="text-xs text-gray-400">Next &rarr;</span>
                <p className="mt-1 text-sm font-semibold text-text group-hover:text-primary transition-colors line-clamp-1">
                  {nextPost.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      </article>
    </>
  );
}
