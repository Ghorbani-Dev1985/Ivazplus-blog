import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { HiBookmark, HiHeart, HiOutlineBookmark, HiOutlineChatAlt, HiOutlineClock, HiOutlineHeart } from "react-icons/hi";

const Blog = () => {
    return ( 
        <Link href="#" className="group flex flex-col md:flex-row md:items-center gap-3">
           <div className="w-full flex-center md:w-1/3 aspect-w-16 aspect-h-9 lg:aspect-none">
            <Image 
             width={372}
             height={267}
             alt="ghorbani-dev.ir"
             src='/images/1.jpg'
             className="w-full h-full object-center object-cover lg:w-full lg:h-full rounded-2xl"
            />
           </div>
           <div className="flex flex-1 flex-col gap-3">
            <h4 className="font-extrabold line-clamp-2 h-12 min-h-12">  جدید ترین مدل شلوار زنانه عید  </h4>
            <p className="text-sm text-gray-500 line-clamp-2">
            یکی از لباس‌های کاربردی که در کمد هر خانمی انواعی از آن وجود دارد، شلوار زنانه است.شلوار زنانه عید، شلواری است که با توجه به ترندهای سال جدید طراحی شده و برای مراسم‌ها و مهمانی‌های عید نوروز و یا سایر موقعیت‌های مورد نظ...                            
            </p>
            <div className="w-full flex-between">
            <div className="flex items-center gap-3 text-sm">
            <Image 
             width={40}
             height={40}
             alt="ghorbani-dev.ir"
             src='/images/1.jpg'
             className="size-10 object-center object-cover rounded-full"
            />
            <span>صاحب محمدی</span>
               
            </div>
            <div className="flex items-end gap-3">
            <span className="bg-gray-100 group-hover:bg-primary group-hover:text-white px-3 py-1 rounded-full transition-colors">مقاله ها</span>
                <span className="group-hover:text-zinc-800">1402/12/29</span>
            </div>
            </div>
            <div className="w-full flex-between">
            <div className="flex items-center gap-3 text-sm">
            <Button isIconOnly className="border-none w-8 h-8 min-w-6 hover:bg-slate-300 rounded-lg"  variant="faded" aria-label="Take a photo">
            <HiOutlineChatAlt />
      </Button>
            <Button isIconOnly className="border-none w-8 h-8 min-w-6 bg-rose-100 hover:bg-rose-300 rounded-lg" variant="faded" aria-label="Take a photo">
            <HiHeart className="fill-rose-500"/>
      </Button>
      <Button isIconOnly className="border-none w-8 h-8 min-w-6 bg-sky-100 hover:bg-sky-300 rounded-lg" variant="faded" aria-label="Take a photo">
      <HiBookmark className="fill-sky-500"/>
      </Button>
            </div>
            <div className="flex-center gap-2 text-gray-500">
            <HiOutlineClock />
            <span>زمان مورد نیاز ۱۲ دقیقه</span>
            </div>
            </div>
           </div>
        </Link>
     );
}
 
export default Blog;