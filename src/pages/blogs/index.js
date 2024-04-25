import React from "react";
import Layout from "@/Containers/Layout";
import BlogList from "@/Features/Blogs/BlogList";
import Http from "@/Services/HttpService";
import MobileFilterSort from "@/Features/Blogs/MobileFilterSort";
import Sort from "@/Features/Blogs/Sort";
import Category from "@/Features/Blogs/Category";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { GoCommit } from "react-icons/go";
import QueryString from 'query-string'
const Blogs = ({ blogsList, categories }) => {
 
  return (
    <Layout>
        <Breadcrumbs variant="solid" separator={<GoCommit className="fill-primary" />} className="mb-5 font-extrabold text-3xl">
          <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
          <BreadcrumbItem>همه مقاله‌ها</BreadcrumbItem>
        </Breadcrumbs>
      <section className="grid md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] gap-5 ">
        <div className="md:col-span-3 row-span-1 h-screen relative">
          <Category categories={categories}/>
        </div>
        <div className="md:col-span-9 md:row-span-2 row-span-2">
          <Sort />
          <MobileFilterSort />
          <BlogList blogsListDocs={blogsList.docs} blogsList={blogsList} />
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;

export async function getServerSideProps({req , query}) {
  const { data: blogsResult } = await Http.get(`/posts?${QueryString.stringify(query)}` , {
    headers : {
      Cookie: req.headers.cookie || ""
    }
  });
  const { data: categoriesResult } = await Http.get("/post-category");
  const { data: blogsData } = blogsResult;
  const {data : categoriesData} = categoriesResult;
  return {
    props: {
      blogsList: blogsData,
      categories: categoriesData,
    },
  };
}
