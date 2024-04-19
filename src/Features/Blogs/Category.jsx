import Link from "next/link";

const Category = () => {
    return ( 
        <div className="flex flex-col gap-5 border border-gray-100 rounded-3xl p-5">
            <h2 className="font-extrabold text-xl">دسته بندی ها</h2>
            <ul className="child:list-disc child:text-gray-500 pr-5 space-y-5">
                <li>
                    <Link href="#">همه</Link>
                </li>
                <li>
                    <Link href="#">اخبار</Link>
                </li>
                <li>
                    <Link href="#">مقاله ها</Link>
                </li>
                <li>
                    <Link href="#">آموزشی</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Category;