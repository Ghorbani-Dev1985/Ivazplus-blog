import ToLocalDateStringShort from "@/Utils/ToLocalDateStringShort";
import { BiBookmark, BiCalendar, BiHeart, BiSolidHeart, BiSolidUserCircle } from "react-icons/bi";
import { HiBookmark, HiOutlineChatAlt, HiOutlineClock } from "react-icons/hi";
import Image from "next/image";
const BlogInfos = ({author, commentsCount, isLiked, likesCount, readingTime, isBookmarked , createdAt , coverImage , title}) => {
    return ( 
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
     );
}
 
export default BlogInfos;