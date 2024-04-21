import Layout from "@/Containers/Layout";
import Http from "@/Services/HttpService";
import ToLocalDateStringShort from "@/Utils/ToLocalDateStringShort";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Image from "next/image";
import { BiCalendar, BiHeart, BiSolidUserCircle } from "react-icons/bi";
import { GoCommit } from "react-icons/go";
import { HiOutlineChatAlt } from "react-icons/hi";
import DOMPurify from "isomorphic-dompurify";
import Comment from "@/UI/Comment";
const Blog = ({blog}) => {
    console.log(blog)
    const {author , category , coverImage , createdAt , text , title , commentsCount , likesCount , comments} = blog
    return ( 
    <Layout>
        <Breadcrumbs
        variant="solid"
        separator={<GoCommit className="fill-primary" />}
        className="mb-5 font-extrabold text-3xl"
      >
        <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
        <BreadcrumbItem href="/blogs">همه مقاله‌ها</BreadcrumbItem>
        <BreadcrumbItem href={`/blogs/${category.englishTitle}`}>{category.title}</BreadcrumbItem>
        <BreadcrumbItem>{title}</BreadcrumbItem>
      </Breadcrumbs>
      <div className="w-full flex flex-col items-center aspect-w-16 aspect-h-9 lg:aspect-none !relative">
      <Image
                width={403}
                height={267}
                alt="ghorbani-dev.ir"
                src={coverImage}
                className="w-full h-full object-center object-cover lg:w-[700px] lg:h-full rounded-2xl"
              />
              <div className="!w-[38rem] flex flex-col items-center gap-y-2 bg-slate-50 p-5 rounded-lg !absolute !-bottom-8 ">
                     <h1 className="font-extrabold text-2xl">{title}</h1>
                     <div className="flex-center gap-8 text-gray-500">
                     <div className="flex-center gap-1">
                     <BiSolidUserCircle />
                     {author.name}
                     </div>
                        <div className="flex-center gap-1">
                        <HiOutlineChatAlt />
                        {commentsCount}
                        </div>
                        <div className="flex-center gap-1">
                        <BiHeart  />
                        {likesCount}
                        </div>
                        <div className="flex-center gap-1">
                        <BiCalendar />
                        {ToLocalDateStringShort(createdAt)}
                        </div>
                     </div>
              </div>
      </div>
      <div className="my-16 leading-9" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}></div>
      <Comment comments={comments}/>
    </Layout> );
}
 
export default Blog;

export async function getServerSideProps({ query}) {
    console.log(query)
  const { data :singleBlog } = await Http.get(`/posts/${query.blogSlug}`);
  const {data} = singleBlog
  return {
    props: {
      blog: data,
    },
  };
}