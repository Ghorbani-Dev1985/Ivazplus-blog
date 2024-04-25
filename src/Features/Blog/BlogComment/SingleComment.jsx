import ToLocalDateStringShort from "@/Utils/ToLocalDateStringShort";
import { Chip } from "@nextui-org/react";
import Image from "next/image";
import CommentModal from "./CommentModal";
import { useRouter } from "next/router";


const SingleComment = ({comment , blogId}) => {
  const router = useRouter();
    const {_id,writer , createdAt , content , responseTo} = comment
    return ( 
        <section className="flex flex-col bg-slate-100 shadow-md rounded-3xl p-3 md:p-4 my-3">
            <div className="flex-col gap-y-4 md:gap-y-0 md:flex-row flex-between text-sm">
                <div className="flex gap-3">
                  <Image
                    width={48}
                    height={48}
                    alt="ghorbani-dev.ir"
                    src="/images/user/user.jpg"
                    className="size-12 object-cover rounded-full my-0"
                  />
                 <div className="flex flex-col gap-y-2">
                 <Chip color="primary" variant="dot" className="font-extrabold text-xl py-4 border-none">{writer.name}</Chip>
                    <p>{ToLocalDateStringShort(createdAt)}</p>
                 </div>
                </div>
                <CommentModal blogId={blogId} router={router} responseTo={_id} btnText="پاسخ" headerText="ارسال پاسخ" submitBtnText="رسال پاسخ" placeholderText=" لطفا پاسخ خود را وارد نمایید" labelText="پاسخ شما" />
                </div>
                 <p className="my-5 mr-16">{content}</p>
        </section>
     );
}
 
export default SingleComment;