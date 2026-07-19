import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import "./EditPasswordModal.css";

interface Props {
  show: boolean;
  onClose: () => void;
}

const EditPasswordModal = ({ show, onClose }: Props) => {
  return (
    <Modal title="Edit Password" show={show} onClose={onClose}>
      <Input placeholder="New Password" />
      <Button className="">Submit</Button>
    </Modal>
  );
};

export default EditPasswordModal;
