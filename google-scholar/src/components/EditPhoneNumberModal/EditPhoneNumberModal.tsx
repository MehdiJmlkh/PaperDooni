import "./EditPhoneNumberModal.css";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";

interface Props {
  show: boolean;
  onClose: () => void;
}

const EditPhoneNumberModal = ({ show, onClose }: Props) => {
  return (
    <Modal title="Edit Phone Number" show={show} onClose={onClose}>
      <Input placeholder="New Phone Number" />
      <Button className="">Submit</Button>
    </Modal>
  );
};

export default EditPhoneNumberModal;
