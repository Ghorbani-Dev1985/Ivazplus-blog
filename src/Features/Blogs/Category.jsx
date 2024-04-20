import Http from "@/Services/HttpService";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [category, setCategory] = useState("");
  useEffect(() => {
    Http.get("/post-category")
      .then(({ data }) => {
       
        setCategory(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col gap-5 border border-gray-100 rounded-3xl p-5 h-64 md:h-80 overflow-auto">
      <h2 className="font-extrabold text-xl">دسته بندی ها</h2>
      <ul className="child:list-disc child:text-gray-500 pr-5 space-y-5">
        {/* {category.map(({ _id, title, englishTitle }) => {
          return (
            <React.Fragment key={_id}>
              <li>
                <Link href={englishTitle}>{title}</Link>
              </li>
            </React.Fragment>
          );
        })} */}
      </ul>
    </div>
  );
};

export default Category;
