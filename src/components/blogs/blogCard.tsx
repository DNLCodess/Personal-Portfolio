import type { Blog } from "@/lib/mockData/blogsData";
import Image from "next/image";
import Link from "next/link";

type PropsType = {
  blog: Blog;
  delay: string;
};
const BlogCard = ({ blog, delay }: PropsType) => {
  return (
    <div className="blog-item wow fadeInRight" data-wow-delay={delay}>
      <Link href="/blog-details">
        <Image
          width={416}
          height={270}
          sizes="100vw"
          src={blog.img}
          alt="thumbnail"
        />
      </Link>
      <div className="blog-meta d-inline-flex flex-wrap align-items-center gap-3 gap-xl-4">
        <span className="d-inline">
          by <span className="sub-text">{blog.author}</span> | {blog.category}
        </span>
        <span className="date d-inline-flex align-items-center">
          {blog.date.day} {blog.date.month} {blog.date.year}
        </span>
      </div>
      <h5>
        <Link href="/blog-details">{blog.title}</Link>
      </h5>
      <span className="read-more">
        <Link href="/blog-details">Read More</Link>
      </span>
    </div>
  );
};

export default BlogCard;
