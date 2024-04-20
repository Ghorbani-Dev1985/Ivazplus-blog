import Layout from "@/Containers/Layout";
import BlogList from "@/Features/Blogs/BlogList";
import Category from "@/Features/Blogs/Category";
import MobileFilterSort from "@/Features/Blogs/MobileFilterSort";
import Sort from "@/Features/Blogs/Sort";
import Http from "@/Services/HttpService";
import Alert from "@/UI/Alert";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { GoCommit } from "react-icons/go";
import QueryString from 'query-string'
const CategorySlug = ({ blogsList, categories }) => {
  return (
    <Layout>
      <Breadcrumbs
        variant="solid"
        separator={<GoCommit className="fill-primary" />}
        className="mb-5 font-extrabold text-3xl"
      >
        <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
        <BreadcrumbItem href="/blogs">همه مقاله‌ها</BreadcrumbItem>
        <BreadcrumbItem>Artist</BreadcrumbItem>
      </Breadcrumbs>
      <section className="grid md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] gap-5 ">
        <div className="md:col-span-3 row-span-1 h-screen relative">
          <Category categories={categories} />
        </div>
        <div className="md:col-span-9 md:row-span-2 row-span-2">
          <Sort />
          <MobileFilterSort />
          {blogsList.docs.length ? (
            <BlogList blogsList={blogsList} />
          ) : (
            <Alert alertText="مقاله ای برای نمایش وجود ندارد." />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CategorySlug;

export async function getServerSideProps({ query}) {
    console.log(query)
  const { data: blogsResult } = await Http.get(
    `/posts?${QueryString.stringify(query)}`
  );
  const { data: categoriesResult } = await Http.get("/post-category");
  const { data: blogsData } = blogsResult;
  const { data: categoriesData } = categoriesResult;
  return {
    props: {
      blogsList: blogsData,
      categories: categoriesData,
    },
  };
}
