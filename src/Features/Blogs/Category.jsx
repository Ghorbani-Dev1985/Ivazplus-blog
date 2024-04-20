import React from "react";
import Link from "next/link";
import { BiSolidLeftArrow } from "react-icons/bi";

const Category = ({categories}) => {
    console.log(categories)
  return (
    <div className="flex flex-col gap-5 border border-gray-100 rounded-3xl h-64 min-h-64 overflow-auto sticky top-0">
      <h2 className="font-extrabold text-xl bg-gray-100 text-primary text-center p-3">دسته بندی ها</h2>
      <ul className="child:text-gray-500 space-y-5 px-3">
      <li>
                <Link href="/blogs" className="group flex items-center gap-1"><BiSolidLeftArrow className="fill-primary group-hover:fill-secondary transition-colors size-4" /> همه مقاله‌ها</Link>
              </li>
        {categories.map(({ _id, title, englishTitle }) => {
          return (
              <React.Fragment key={_id}>
              <li>
                <Link href={`/blogs/${englishTitle}`} className="group flex items-center gap-1"><BiSolidLeftArrow className="fill-primary group-hover:fill-secondary transition-colors size-4" /> {title}</Link>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
