import ModalPlacement from "@/UI/ModalPlacement";
import { BiFilterAlt, BiSortUp } from "react-icons/bi";


const MobileFilterSort = () => {
    return ( 
        <section className="flex-between gap-x-3 md:hidden mb-4 border-t pt-3">      
            <ModalPlacement title="فیلتر‌ها" icon={<BiFilterAlt />} btnText="فیلتر‌ها" >
                 فیلتر
                </ModalPlacement> 
            <ModalPlacement title="مرتب سازی" icon={<BiSortUp />} btnText="مرتب‌ سازی">
                مرتب سازی
            </ModalPlacement>
        </section>
     );
}
 
export default MobileFilterSort;