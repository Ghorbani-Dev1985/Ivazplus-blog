import React from "react";
import Link from "next/link";
import { BiSolidLeftArrow } from "react-icons/bi";
import { useRouter } from "next/router";

const Category = ({ categories }) => {
  const { query, pathname } = useRouter();
  return (
    <div className="flex flex-col border border-gray-100 rounded-3xl h-64 min-h-64 overflow-auto sticky top-0">
      <h2 className="font-extrabold text-xl bg-gray-100 text-primary text-center p-3">
        دسته بندی ها
      </h2>
      <ul className="child:text-gray-500">
        <li>
          <Link
            href="/blogs"
            className={`${
              pathname === "/blogs" &&
              "bg-emerald-50 text-emerald-500 hover:text-emerald-700 font-extrabold rounded-lg"
            } group flex items-center gap-1 p-3`}
          >
            <BiSolidLeftArrow
              className={`${
                pathname === "/blogs"
                  ? "fill-emerald-500 group-hover:fill-emerald-700"
                  : "fill-primary group-hover:fill-secondary"
              } transition-colors size-4`}
            />{" "}
            همه مقاله‌ها
          </Link>
        </li>
        {categories.map(({ _id, title, englishTitle }) => {
          return (
            <React.Fragment key={_id}>
              <li>
                <Link
                  href={`/blogs/${englishTitle}`}
                  className={`${
                    query.categorySlug === englishTitle &&
                    "bg-emerald-50 text-emerald-500 hover:text-emerald-700 font-extrabold rounded-lg"
                  } group flex items-center gap-1 p-3`}
                >
                  <BiSolidLeftArrow
                    className={`${
                      query.categorySlug === englishTitle
                        ? "fill-emerald-500 group-hover:fill-emerald-700"
                        : "fill-primary group-hover:fill-secondary"
                    } transition-colors size-4`}
                  />
                  {title}
                </Link>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
