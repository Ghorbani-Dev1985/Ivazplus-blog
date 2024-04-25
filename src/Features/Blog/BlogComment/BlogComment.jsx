import Alert from "@/UI/Alert";
import React from "react";
import SingleComment from "./SingleComment";
import ReplayComment from "./ReplyComment";
import CommentModal from "./CommentModal";
import { useRouter } from "next/router";


const Comment = ({comments , blogId}) => {
  const router = useRouter();
    return ( 
        <section className="flex flex-col">
        <div className="w-full flex flex-col items-center md:flex-row md:flex-between gap-y-4 bg-primary text-white rounded-xl px-3 py-8 mb-2">
    <p><span className="font-extrabold md:text-xl">دیدگاه کاربران</span><span className="mx-1 md:mx-3">|</span> شما هم می توانید در مورد این مطلب نظر بدهید</p>
       <CommentModal router={router} blogId={blogId} responseTo={null} btnText="افزودن نظر" headerText="ارسال نظر" submitBtnText="ارسال نظر" placeholderText=" لطفا دیدگاه خود را وارد نمایید" labelText="نظر شما" transparent/>
        </div>
        {
            comments.length ?
            comments.map((comment) => {
                return !comment.responseTo && comment.status === 2 &&  
                <React.Fragment key={comment._id}>
                 <SingleComment comment={comment} blogId={blogId}/>   
                 <ReplayComment comments={comments} parentCommentId={comment._id} blogId={blogId} /> 
                </React.Fragment>
            })
            :
            <Alert alertText="کاربر گرامی شما اولین فردی باشید که نظر می دهید."/>
        }
        </section>
        
     );
}
 
export default Comment;
