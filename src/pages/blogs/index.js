import React from "react";
import Layout from "@/Containers/Layout";
import BlogList from "@/Features/Blogs/BlogList";
import BlogsFeature from "@/Features/Blogs/Blogs";
import Http from "@/Services/HttpService";

const Blogs = ({ blogsList }) => {
  return (
    <Layout>
      <BlogsFeature>
        <BlogList blogsList={blogsList} />
      </BlogsFeature>
    </Layout>
  );
};

export default Blogs;

export async function getServerSideProps(context) {
  const { data: result } = await Http.get("/posts?page=1&limit=5");
  const { data } = result;
  return {
    props: {
      blogsList: data,
    },
  };
}
