import React from "react";
import SingleComment from "./SingleComment";

const ReplayComment = ({comments , parentCommentId , blogId}) => {
    return comments.map(comment => {
        return parentCommentId === comment.responseTo && 
        <div key={comment._id} className="mr-8 bg-blue-400 rounded-3xl px-2 my-1">
           <SingleComment comment={comment} blogId={blogId}/>
           <ReplayComment comments={comments} parentCommentId={comment._id} blogId={blogId}/> 
        </div>
    })
}
 
export default ReplayComment;