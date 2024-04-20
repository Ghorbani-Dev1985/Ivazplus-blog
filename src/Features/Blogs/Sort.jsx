import { Tab, Tabs } from "@nextui-org/react";
import { TbSortAscending2 } from "react-icons/tb";
const Sort = () => {
    return ( 
        <div className="w-full hidden md:flex bg-gray-100 rounded-3xl mb-6">
            <div className="w-32 flex-center md:gap-1">
            <TbSortAscending2 className="size-4 md:size-5 stroke-primary"/>
                مرتب سازی
            </div>
              <Tabs color="secondary" aria-label="Tabs colors" radius="full" className="w-full max-w-96 overflow-y-auto sticky">
          <Tab title="جدیدترین"/>
          <Tab title="پربازدیدترین"/>
          <Tab title="محبوب‌ترین"/>
        </Tabs>
        </div>
     );
}
 
export default Sort;