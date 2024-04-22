import Layout from "@/Containers/Layout";
import Http from "@/Services/HttpService";
import ToLocalDateStringShort from "@/Utils/ToLocalDateStringShort";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Chip,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import {
  BiBookmark,
  BiCalendar,
  BiHeart,
  BiLogoInstagramAlt,
  BiLogoTelegram,
  BiLogoWhatsappSquare,
  BiSolidHeart,
  BiSolidUserCircle,
} from "react-icons/bi";
import { GoCommit } from "react-icons/go";
import { HiBookmark, HiOutlineChatAlt, HiOutlineClock } from "react-icons/hi";
import DOMPurify from "isomorphic-dompurify";
import Comment from "@/UI/Comment";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdContentCopy } from "react-icons/md";
import BlogList from "@/Features/Blogs/BlogList";
const Blog = ({ blog }) => {
  const [copied, setCopied] = useState(false);
  const CopyHandler = () => {
    setCopied(true);
    toast.success("لینک کپی شد");
  };
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
  console.log("related", related);
  return (
    <Layout>
      <Breadcrumbs
        variant="solid"
        separator={<GoCommit className="fill-primary" />}
        className="mb-5 font-extrabold text-3xl"
      >
        <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
        <BreadcrumbItem href="/blogs">همه مقاله‌ها</BreadcrumbItem>
        <BreadcrumbItem href={`/blogs/${category.englishTitle}`}>
          {category.title}
        </BreadcrumbItem>
        <BreadcrumbItem>{title}</BreadcrumbItem>
      </Breadcrumbs>
      {/* Cover & Text */}
      <section className="relative mb-12 md:mb-6">
        <div className="w-full flex flex-col items-center aspect-w-16 aspect-h-9 lg:aspect-none">
          <Image
            width={403}
            height={267}
            alt="ghorbani-dev.ir"
            src={coverImage}
            className="w-full h-full object-center object-cover lg:w-[700px] lg:h-full rounded-2xl"
          />
        </div>
        <div className="w-full max-w-sm md:max-w-lg flex flex-col items-center gap-y-2 bg-slate-50 p-5 rounded-lg absolute -bottom-20 md:-bottom-14 lg:-bottom-8 right-0 left-0 mx-auto">
          <h1 className="font-extrabold md:text-2xl">{title}</h1>
          <div className="flex-center flex-wrap gap-3 text-gray-500">
            <div className="flex-center gap-1">
              <BiSolidUserCircle />
              {author.name}
            </div>
            <div className="flex-center gap-1">
              <HiOutlineChatAlt />
              {commentsCount}
            </div>
            <div className="flex-center gap-1">
              {isLiked ? (
                <BiSolidHeart className="fill-rose-500" />
              ) : (
                <BiHeart className="text-rose-500" />
              )}
              {likesCount}
            </div>
            <div className="flex-center gap-1">
              <BiCalendar />
              {ToLocalDateStringShort(createdAt)}
            </div>
            <div className="flex-center gap-1">
              <HiOutlineClock />
              {readingTime}
              دقیقه
            </div>
            <div className="flex-center gap-1">
              {isBookmarked ? (
                <HiBookmark className="fill-sky-500" />
              ) : (
                <BiBookmark className="text-sky-500" />
              )}
              ذخیره
            </div>
          </div>
        </div>
      </section>
      <Divider className="mt-16 max-w-lg mx-auto" />
      <div className="flex-center">
        <article
          className="prose prose-xl md:prose-2xl prose-slate prose-p:text-justify prose-headings:text-orange-500 prose-headings:text-2xl prose-headings:md:text-4xl prose-h1:text-3xl prose-h1:font-extrabold my-16 prose-img:rounded-xl prose-img:mx-auto prose-img:shadow-lg prose-img:hover:scale-105 prose-img:transition-all prose-img:ease-linear prose-img:duration-300"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
        ></article>
      </div>
      <Divider className="mb-5" />
      <div className="flex flex-col items-center md:flex-between  md:flex-row">
        <div className="flex items-center flex-wrap gap-2 my-5">
          <h2 className="text-2xl">تگ‌ها:</h2>
          {tags.map((tag) => (
            <Chip key={tag} color="primary" variant="flat">
              {tag}
            </Chip>
          ))}
        </div>
        <div className="flex items-center justify-end flex-wrap gap-2 mb-4">
          <Button
            as={Link}
            href={`https://www.instagram.com/sharer.php?u=${process.env.NEXT_PUBLIC_DOMAIN_URL}/blogs/${slug}`}
            isIconOnly
            color="warning"
            variant="faded"
            className="border-none w-12 h-12 min-w-12 hover:bg-slate-200 rounded-lg"
          >
            <BiLogoInstagramAlt className="size-10 fill-pink-500" />
          </Button>
          <Button
            as={Link}
            href={`https://telegram.me/share/url?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/blogs/${slug}`}
            isIconOnly
            color="warning"
            variant="faded"
            className="border-none w-12 h-12 min-w-12 hover:bg-slate-200 rounded-lg"
          >
            <BiLogoTelegram className="size-10 fill-sky-500" />
          </Button>
          <Button
            as={Link}
            href={`whatsapp://send/?text=${process.env.NEXT_PUBLIC_DOMAIN_URL}/blogs/${slug}`}
            isIconOnly
            color="warning"
            variant="faded"
            className="border-none w-12 h-12 min-w-12 hover:bg-slate-200 rounded-lg"
          >
            <BiLogoWhatsappSquare className="size-10 fill-emerald-500" />
          </Button>
          <CopyToClipboard
            text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/blogs/${slug}`}
            onCopy={CopyHandler}
          >
            <p className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 px-2 text-slate-600 cursor-pointer py-3 rounded-lg transition-colors">
              <MdContentCopy className="size-6" /> کپی لینک
            </p>
          </CopyToClipboard>
        </div>
      </div>
      <Divider />
      <section className="flex flex-col my-5">
        <h2 className="text-2xl">مقاله‌های مرتبط</h2>
        <div className="grid grid md:grid-cols-2 gap-5">
          <BlogList blogsList={related} />
        </div>
      </section>
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
