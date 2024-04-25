import RouterPush from "@/Utils/RouterPush";
import { Tab, Tabs } from "@nextui-org/react";
import { useRouter } from "next/router";
import { TbSortAscending2 } from "react-icons/tb";
const SortOptions = [
    {id: "newest" , title: "جدیدترین"},
    {id: "most" , title: "پربازدیدترین"},
    {id: "popular" , title: "محبوب‌ترین"}
]
const Sort = () => {
    const router = useRouter()
    const SortHandler = (e) => {
   router.query.sort = e;
   RouterPush(router);
    }
    return ( 
        <div className="w-full hidden md:flex bg-gray-100 rounded-3xl mb-6">
            <div className="w-32 flex-center md:gap-1">
            <TbSortAscending2 className="size-4 md:size-5 stroke-primary"/>
                مرتب سازی
            </div>
              <Tabs color="primary" defaultSelectedKey="newest" onSelectionChange={(e) => SortHandler(e)} aria-label="Tabs colors" radius="full" className="w-full max-w-96 overflow-y-auto sticky">
             {
                SortOptions.map(({id , title}) => (<Tab key={id} id={id} title={title} />))
             }
        </Tabs>
        </div>
     );
}
 
export default Sort;