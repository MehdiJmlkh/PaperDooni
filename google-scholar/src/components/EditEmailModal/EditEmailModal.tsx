import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import "./EditEmailModal.css";

interface Props {
  show: boolean;
  onClose: () => void;
}

const EditEmailModal = ({ show, onClose }: Props) => {
  return (
    <Modal title="Edit Email" show={show} onClose={onClose}>
      <Input placeholder="New Email" />
      <Button className="">Submit</Button>
    </Modal>
  );
};

export default EditEmailModal;
