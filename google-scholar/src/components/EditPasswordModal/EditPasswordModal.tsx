import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import "./EditPasswordModal.css";

interface Props {
  show: boolean;
}

const EditPasswordModal = ({ show }: Props) => {
  return (
    <Modal title="Edit Password" show={show}>
      <Input placeholder="New Password" />
      <Button className="">Submit</Button>
    </Modal>
  );
};

export default EditPasswordModal;
