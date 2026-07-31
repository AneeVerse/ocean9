import Image from "next/image";
import Link from "next/link";
import { User, Calendar } from "lucide-react";

export default function BlogSection() {
  const posts = [
    {
      title: "Unveiling the Wonders of Deep",
      date: "March 4, 2025",
      author: "kitpro",
      category: "Uncategorized",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      image: "/assets/home-Unveiling-the-Wonders-of-Deep-blog.jpg",
    },
    {
      title: "Freediving vs. Scuba Diving",
      date: "February 25, 2025",
      author: "kitpro",
      category: "Uncategorized",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      image: "/assets/home-Freediving-vs-Scuba-Diving-blog.jpg",
    },
    {
      title: "Protecting Our Ocean Reefs",
      date: "February 25, 2025",
      author: "kitpro",
      category: "Uncategorized",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      image: "/assets/home-Protecting-Our-Ocean-Reefs-blog.jpg",
    },
  ];

  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#030A16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Our Blog
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Lates Blog
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="bg-[#061833] rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              {/* Image with Category Badge */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-md bg-cyan-600/90 text-white text-[11px] font-semibold tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Meta & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-slate-400 text-xs font-medium">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-cyan-400" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    <Link href="#">{post.title}</Link>
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
