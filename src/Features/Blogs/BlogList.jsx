import Http from "@/Services/HttpService";
import Loading from "@/UI/Loading";
import RouterPush from "@/Utils/RouterPush";
import ToLocalDateStringShort from "@/Utils/ToLocalDateStringShort";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import toast from "react-hot-toast";
import { BiBookmark, BiHeart, BiSolidHeart } from "react-icons/bi";
import {
  HiBookmark,
  HiOutlineChatAlt,
  HiOutlineClock,
} from "react-icons/hi";
import PaginationList from '@/UI/PaginationList'

const BlogList = ({ blogsList }) => {
  const router = useRouter()
  const LikeHandler = (postID) => {
    Http.put(`/posts/like/${postID}`)
    .then(({data}) => {
      RouterPush(router);
      toast.success(data.message)
    })
    .catch(err => toast.error(err?.response?.data?.message))
  }
  const BookmarkHandler = (postID) => {
    Http.put(`/posts/bookmark/${postID}`)
    .then(({data}) => {
      RouterPush(router) 
      toast.success(data.message)
    })
    .catch(err => toast.error(err?.response?.data?.message))
  }

  console.log(blogsList)
  if(!blogsList.docs.length) return <Loading />
  return (
    <>
    {
    blogsList.docs.map(
    ({
      _id,
      author,
      briefText,
      category,
      commentsCount,
      coverImage,
      createdAt,
      likesCount,
      readingTime,
      slug,
      title,
      isBookmarked , isLiked
    }) => {
      return (
        <React.Fragment key={_id}>
          <section>
              <div
            className="group flex flex-col md:flex-row md:items-center gap-3 p-2 my-4"
          >
            <Link href={`/blog/${slug}`} className="w-full flex-center md:w-1/3 aspect-w-16 aspect-h-9 mb-5 md:mb-0 lg:aspect-none">
              <Image
                width={372}
                height={267}
                alt="ghorbani-dev.ir"
                src={coverImage}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full rounded-2xl"
                />
            </Link>
            <div className="flex flex-1 flex-col gap-3">
              <Link href={`/blog/${slug}`}>
              <h4 className="group-hover:text-secondary font-extrabold line-clamp-2 h-12 min-h-12">
                {title}
              </h4>
              </Link>
              <p className="text-sm text-gray-500 line-clamp-2">{briefText}</p>
              <div className="w-full flex-between">
                <div className="flex items-center gap-3 text-sm">
                  <Image
                    width={32}
                    height={32}
                    alt="ghorbani-dev.ir"
                    src="/images/user/user.jpg"
                    className="size-8 object-center object-cover rounded-full"
                  />
                  <span>{author.name}</span>
                </div>
                <div className="flex items-end gap-3">
                  <Link
                    href={`/blogs/${category.englishTitle}`}
                    className="bg-gray-100 group-hover:bg-primary group-hover:text-white px-3 py-1 rounded-full transition-colors"
                  >
                    {category.title}
                  </Link>
                  <span className="group-hover:text-zinc-800">
                    {ToLocalDateStringShort(createdAt)}
                  </span>
                </div>
              </div>
              <div className="w-full flex-between">
                <div className="flex items-center gap-3 text-sm">
                  <Button
                    isIconOnly
                    className="border-none w-8 h-8 min-w-6 hover:bg-slate-300 rounded-lg"
                    variant="faded"
                  >
                    <HiOutlineChatAlt />
                    {commentsCount}
                  </Button>
                  <Button
                    onPress={() => LikeHandler(_id)}
                    isIconOnly
                    className="border-none w-8 h-8 min-w-6 bg-rose-100 text-rose-500 hover:bg-rose-300 rounded-lg"
                    variant="faded"
                    >
                    {
                            isLiked ?  <BiSolidHeart className="fill-rose-500" /> : <BiHeart className="text-rose-500"/>
                          }
                    {likesCount}
                  </Button>
                  <Button
                    onPress={() => BookmarkHandler(_id)}
                    isIconOnly
                    className="border-none w-8 h-8 min-w-6 bg-sky-100 hover:bg-sky-300 rounded-lg"
                    variant="faded"
                    aria-label="Take a photo"
                  >
                    {
                      isBookmarked ? <HiBookmark className="fill-sky-500" /> : <BiBookmark className="text-sky-500"/>
                    }
                    
                  </Button>
                </div>
                <div className="flex-center gap-2 text-gray-500">
                  <HiOutlineClock />
                  <span>
                    زمان مورد نیاز
                    <span className="text-emerald-500 font-bold">
                      {readingTime}
                    </span>
                    دقیقه
                  </span>
                </div>
              </div>
            </div>
          </div> <Divider />
            </section>
        </React.Fragment>
      );
    }
  )}
  <PaginationList page={blogsList.page} totalPages={blogsList.totalPages}/>
    </>
  )
};

export default BlogList;
