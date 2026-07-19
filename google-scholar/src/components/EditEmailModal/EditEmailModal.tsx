import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import "./EditEmailModal.css";

interface Props {
  show: boolean;
}

const EditEmailModal = ({ show }: Props) => {
  return (
    <Modal title="Edit Email" show={show}>
      <Input placeholder="New Email" />
      <Button className="">Submit</Button>
    </Modal>
  );
};

export default EditEmailModal;
