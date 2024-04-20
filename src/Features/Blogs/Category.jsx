import React from "react";
import Link from "next/link";

const Category = ({categories}) => {
    console.log(categories)
  return (
    <div className="flex flex-col gap-5 border border-gray-100 rounded-3xl p-5 h-64 md:h-80 overflow-auto">
      <h2 className="font-extrabold text-xl">دسته بندی ها</h2>
      <ul className="child:list-disc child:text-gray-500 pr-5 space-y-5">
      <li>
                <Link href="/blogs">همه مقاله‌ها</Link>
              </li>
        {categories.map(({ _id, title, englishTitle }) => {
          return (
            <React.Fragment key={_id}>
              <li>
                <Link href={`/blogs/${englishTitle}`}>{title}</Link>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
