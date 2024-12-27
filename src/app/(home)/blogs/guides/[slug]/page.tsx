import { pathOr } from "ramda";
import type { FC } from "react";

import SectionBlogBody from "@/components/blog/SectionBlogBody";
import SectionBlogHero from "@/components/blog/SectionBlogHero";
import BlogCard from "@/components/BlogCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogs } from "@/data/content";
import ButtonLink from "@/shared/Button/ButtonLink";

type PageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getBlogData = (slug: string) => {
  return blogs.find((item) => item.slug === slug);
};

const page: FC<PageProps> = ({ params }) => {
  const selectedBlog = getBlogData(pathOr("", ["slug"], params));

  const breadcrumbItems = [
    { title: <ButtonLink href="/">Home</ButtonLink> },
    { title: pathOr("", ["title"], selectedBlog) },
  ];
  return (
    <div className="container pb-24">
      <Breadcrumbs Items={breadcrumbItems} />
      <div className="pt-2">
        <SectionBlogHero
          coverImage={pathOr("", ["coverImage"], selectedBlog)}
          title={pathOr("", ["title"], selectedBlog)}
          date={pathOr("", ["date"], selectedBlog)}
          tag={pathOr("", ["tag"], selectedBlog)}
        />
      </div>

      <div className="pb-24 pt-20">
        <SectionBlogBody blogData={pathOr(null, ["blogData"], selectedBlog)} />
      </div>

      <div className="border-t border-neutral-300 pb-36 pt-8">
        <h3 className="mb-4 text-sm text-neutral-500">YOU MAY BE INTERESTED</h3>
        <ul className="grid grid-cols-12 gap-x-2  gap-y-8">
          {blogs?.slice(0, 6).map((blog) => (
            <li key={blog.slug} className="col-span-2">
              <BlogCard
                coverImage={blog.coverImage}
                // brief={blog.brief}
                title={blog.title}
                // tag={blog.tag}
                // date={blog.date}
                slug={blog.slug}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
