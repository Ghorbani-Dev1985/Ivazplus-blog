import Alert from "@/UI/Alert";
import TextAreaField from "@/UI/TextAreaField";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";
import SingleComment from "./SingleComment";
import ReplayComment from "./ReplyComment";


const Comment = ({comments}) => {
    return ( 
        <section className="flex flex-col">
        <div className="w-full flex flex-col items-center md:flex-row md:flex-between gap-y-4 bg-primary text-white rounded-xl px-3 py-8 mb-2">
    <p><span className="font-extrabold md:text-xl">دیدگاه کاربران</span><span className="mx-1 md:mx-3">|</span> شما هم می توانید در مورد این مطلب نظر بدهید</p>
       <CommentModal btnText="افزودن نظر" headerText="ارسال نظر" submitBtnText="ارسال نظر" placeholderText=" لطفا دیدگاه خود را وارد نمایید" labelText="نظر شما" transparent/>
        </div>
        {
            comments.length ?
            comments.map((comment) => {
                return !comment.responseTo && comment.status === 2 &&  
                <React.Fragment key={comment._id}>
                 <SingleComment comment={comment}/>   
                 <ReplayComment comments={comments} parentCommentId={comment._id}/> 
                </React.Fragment>
            })
            :
            <Alert alertText="کاربر گرامی شما اولین فردی باشید که نظر می دهید."/>
        }
        </section>
        
     );
}
 
export default Comment;

const CommentModal = ({btnText , headerText , transparent , submitBtnText , placeholderText , labelText , CommentSubmitHandler}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
    } = useForm();
    const SubmitHandler = (data) => {
       CommentSubmitHandler(data)
       reset()
    }
  return(
    <>
     <Button variant="bordered" className={`${transparent ? "text-white hover:bg-white hover:opacity-100 hover:text-primary" : "bg-primary text-white hover:bg-white hover:text-primary border-primary"} p-4 text-lg transition-colors`} onPress={onOpen}>{btnText}</Button>
    <Modal 
        size="4xl"
        isOpen={isOpen} 
        onClose={onClose} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center gap-1 text-xl border-b"> {headerText}</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(CommentSubmitHandler)}>
                <TextAreaField name="Message" placeholder={placeholderText} label={labelText} required register={register} validationSchema={
            {
                required: {placeholderText},
                minLength:{
                    value: 5,
                    message: "حداقل ۵ کاراکتر وارد نمایید  "
                },
                maxLength: {
                    value: 250,
                    message: "حداکثر ۲۵۰ کاراکتر وارد نمایید"
                }
            }
        } errors={errors}/>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="bordered" className="px-8 h-12" onPress={onClose}>
                  انصراف
                </Button>
                <Button color="primary" className="px-8 h-12" onPress={onClose}>
                  {submitBtnText}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export {CommentModal}