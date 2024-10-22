import Layout from "@/Containers/Layout";
import Http from "@/Services/HttpService";
import { Divider } from "@nextui-org/react";
import BlogShare from "@/Features/Blog/BlogShare";
import BlogTag from "@/Features/Blog/BlogTag";
import RelatedBlog from "@/Features/Blog/RelatedBlog";
import BlogBody from "@/Features/Blog/BlogBody";
import BlogInfos from "@/Features/Blog/BlogInfos";
import BlogBreadcrumb from "@/Features/Blog/BlogBreadcrumb";
import BlogComment from "@/Features/Blog/BlogComment/BlogComment";
const Blog = ({ blog }) => {
  const {
    _id,
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
      <BlogComment comments={comments} blogId={_id} />
    </Layout>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  const { query , req} = context
  const { data: singleBlog } = await Http.get(`/posts/${query.blogSlug}` , {
    headers : {
      Cookie: req.headers.cookie || ""
    }});
  const { data } = singleBlog;
  return {
    props: {
      blog: data,
    },
  };
}
