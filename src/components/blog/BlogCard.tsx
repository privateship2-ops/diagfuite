import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, Tag } from "lucide-react";
import type { BlogPost } from "@/types";

type BlogCardProps = {
  post: BlogPost;
};

const categoryColors: Record<string, string> = {
  Assurance: "bg-blue-100 text-blue-700",
  Conseils: "bg-green-100 text-green-700",
  Réglementation: "bg-purple-100 text-purple-700",
  Techniques: "bg-orange-100 text-orange-700",
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-gray-100 text-gray-600"}`}>
              <Tag className="size-3" />
              {post.category}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-brand-text/50 mb-2">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
          </time>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="size-3" />
            {post.readingTime} min de lecture
          </span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h2 className="font-bold text-brand-dark text-base leading-snug mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>

        <p className="text-sm text-brand-text/70 leading-relaxed mb-4 line-clamp-2">
          {post.description}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:gap-2 transition-all"
        >
          Lire l'article
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
