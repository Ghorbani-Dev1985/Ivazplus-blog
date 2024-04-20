import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Button} from "@nextui-org/react";
const ModalPlacement = ({children , title , icon , btnText}) => {
    const {isOpen, onOpen , onOpenChange} = useDisclosure();
    return (
        <>
        <Button onPress={onOpen} variant="bordered" startContent={icon} className="max-w-fit border-gray-100">{btnText}</Button>
        <Modal 
        isOpen={isOpen} 
        placement="bottom"
        onOpenChange={onOpenChange} 
        >
        <ModalContent>
          {(onClose) => (
              <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
               {children}
              </ModalBody>
            
            </>
          )}
        </ModalContent>
      </Modal>
          </> 
     );
}
 
export default ModalPlacement;


