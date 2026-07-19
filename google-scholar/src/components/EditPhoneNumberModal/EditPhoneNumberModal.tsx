import "./EditPhoneNumberModal.css";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";

interface Props {
  show: boolean;
}

const EditPhoneNumberModal = ({ show }: Props) => {
  return (
    <Modal title="Edit Phone Number" show={show}>
      <Input placeholder="New Phone Number" />
      <Button className="">Submit</Button>
    </Modal>
  );
};

export default EditPhoneNumberModal;
