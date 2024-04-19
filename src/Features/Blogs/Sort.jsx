import { Tab, Tabs } from "@nextui-org/react";
import { TbSortAscending2 } from "react-icons/tb";
const Sort = () => {
    return ( 
        <div className="flex bg-gray-100 rounded-3xl mb-6">
            <div className="w-36 flex-center gap-1">
            <TbSortAscending2 className="size-5 stroke-primary"/>
                مرتب سازی
            </div>
              <Tabs color="secondary" aria-label="Tabs colors" radius="full" className="w-full">
          <Tab title="جدیدترین"/>
          <Tab title="پربازدیدترین"/>
          <Tab title="محبوب‌ترین"/>
        </Tabs>
        </div>
     );
}
 
export default Sort;