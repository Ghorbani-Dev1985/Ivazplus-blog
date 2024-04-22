import Layout from "@/Containers/Layout";
import Http from "@/Services/HttpService";
import { Divider } from "@nextui-org/react";
import Comment from "@/UI/Comment";
import BlogShare from "@/Features/Blog/BlogShare";
import BlogTag from "@/Features/Blog/BlogTag";
import RelatedBlog from "@/Features/Blog/RelatedBlog";
import BlogBody from "@/Features/Blog/BlogBody";
import BlogInfos from "@/Features/Blog/BlogInfos";
import BlogBreadcrumb from "@/Features/Blog/BlogBreadcrumb";
const Blog = ({ blog }) => {
  const {
    author,
    category,
    coverImage,
    tags,
    createdAt,
    text,
    title,
    commentsCount,
    likesCount,
    comments,
    readingTime,
    isBookmarked,
    isLiked,
    slug,
    related,
  } = blog;
  return (
    <Layout>
      <BlogBreadcrumb category={category} title={title} />
      {/* Cover & Text */}
      <BlogInfos
        author={author}
        commentsCount={commentsCount}
        isLiked={isLiked}
        likesCount={likesCount}
        readingTime={readingTime}
        isBookmarked={isBookmarked}
        createdAt={createdAt}
        coverImage={coverImage}
        title={title}
      />
      <Divider className="mt-16 max-w-lg mx-auto" />
      <BlogBody text={text} />
      <Divider className="mb-5" />
      <div className="flex flex-col items-center md:flex-between md:flex-row">
        <BlogTag tags={tags} />
        <BlogShare slug={slug} />
      </div>
      <Divider />
      <RelatedBlog related={related} />
      <Comment comments={comments} />
    </Layout>
  );
};

export default Blog;

export async function getServerSideProps({ query }) {
  console.log(query);
  const { data: singleBlog } = await Http.get(`/posts/${query.blogSlug}`);
  const { data } = singleBlog;
  return {
    props: {
      blog: data,
    },
  };
}
