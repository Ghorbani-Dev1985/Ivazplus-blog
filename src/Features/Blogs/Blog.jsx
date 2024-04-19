import Image from "next/image";
import Link from "next/link";
import img from '/public/1.jpg'
const Blog = () => {
    return ( 
        <Link href="#" className="group flex flex-col md:flex-row md:items-center gap-3">
           <div className="w-full flex-center md:w-1/3">
            <Image 
             width={372}
             height={267}
             alt="ghorbani-dev.ir"
             src={img}
             className="object-cover rounded-2xl"
            />
           </div>
           <div className="flex flex-1 flex-col gap-3">
            <h4 className="font-extrabold">  جدید ترین مدل شلوار زنانه عید </h4>
            <p className="text-sm text-gray-300 line-clamp-2">
            یکی از لباس‌های کاربردی که در کمد هر خانمی انواعی از آن وجود دارد، شلوار زنانه است.شلوار زنانه عید، شلواری است که با توجه به ترندهای سال جدید طراحی شده و برای مراسم‌ها و مهمانی‌های عید نوروز و یا سایر موقعیت‌های مورد نظ...                            
            </p>
            <div className="flex items-center gap-3 text-sm">
                <span className="bg-gray-100 group-hover:bg-primary group-hover:text-white px-3 py-1 rounded-full transition-colors">مقاله ها</span>
                <span className="group-hover:text-zinc-800">1402/12/29</span>
            </div>
           </div>
        </Link>
     );
}
 
export default Blog;