import Http from "@/Services/HttpService";
import TextAreaField from "@/UI/TextAreaField";
import RouterPush from "@/Utils/RouterPush";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CommentModal = ({btnText , headerText , transparent , submitBtnText , placeholderText , labelText , blogId , responseTo , router}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();
      const CommentSubmitHandler = (data) => {
        const CommentData = {
            content: data.content,
            postId: blogId,
            responseTo
        }
        Http.post('/post-comment/save-comment', CommentData)
        .then(({data}) => {
            toast.success(data.message);
            RouterPush(router)
        })
        .catch((err) => toast.error(err?.response?.data?.message))
        onClose()
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
                  <form onSubmit={handleSubmit(CommentSubmitHandler)}>
                <ModalBody>
                  <TextAreaField name="content" placeholder={placeholderText} label={labelText} required register={register} validationSchema={
              {
                  required: {placeholderText},
                  minLength:{
                      value: 5,
                      message: "حداقل ۵ کاراکتر وارد نمایید  "
                  },
                  maxLength: {
                      value: 450,
                      message: "حداکثر ۴۵۰ کاراکتر وارد نمایید"
                  }
              }
          } errors={errors}/>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="bordered" className="px-8 h-12" onPress={onClose}>
                    انصراف
                  </Button>
                  <Button type="submit" color="primary" className="px-8 h-12">
                    {submitBtnText}
                  </Button>
                </ModalFooter>
                  </form>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    )
  }
  
  export default CommentModal