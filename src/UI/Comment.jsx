import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import TextAreaField from "./TextAreaField";
import Alert from "./Alert";

const Comment = ({comments}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
      } = useForm();
    return ( 
        <section className="flex flex-col">
        <div className="w-full flex flex-col items-center md:flex-row md:flex-between gap-y-4 bg-primary text-white rounded-xl px-3 py-8 mb-2">
    <p><span className="font-extrabold md:text-xl">دیدگاه کاربران</span><span className="mx-1 md:mx-3">|</span> شما هم می توانید در مورد این مطلب نظر بدهید</p>
    <Button variant="bordered" className="text-white hover:bg-white hover:opacity-100 hover:text-primary py-6 px-8 text-lg transition-colors" onPress={onOpen}>افزودن نظر</Button>
    <Modal 
        size="4xl"
        isOpen={isOpen} 
        onClose={onClose} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center gap-1 text-xl border-b"> ارسال نظر</ModalHeader>
              <ModalBody>
                <form>
                <TextAreaField name="Message" placeholder=" لطفا دیدگاه خود را وارد نمایید" label="نظر شما" required register={register} validationSchema={
            {
                required: "لطفا نظر خود را وارد نمایید",
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
                  ارسال نظر
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
        </div>
        {
            !comments.length &&
            <Alert alertText="کاربر گرامی شما اولین فردی باشید که نظر می دهید."/>
        }
        </section>
        
     );
}
 
export default Comment;