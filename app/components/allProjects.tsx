import { formatDate, getProjects } from "@/app/mdxUtils/utils";
import Link from "next/link";
import Image from "next/image";

const AllProjects = () => {
  const allProjects = getProjects();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {allProjects
        .filter(
          (project) => project.metadata.shouldPublish.toUpperCase() == "YES"
        )
        .sort((a, b) =>
          new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ? -1
            : 1
        )
        .map((post) => (
          <Link
            key={post.slug}
            href={`/projects/${post.slug}`}
            className="group flex flex-col items-center"
          >
            <Image
              className="w-full h-48 object-cover rounded-2xl shadow-md group-hover:opacity-90 transition-opacity"
              src={
                post.metadata.image
                  ? post.metadata.image
                  : "/images/default_project.png"
              }
              alt={post.metadata.title}
              width={1000}
              height={1000}
            />
            <div className="text-center mt-3">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {post.metadata.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default AllProjects;
