import { z } from "zod";
import { useEditEmail } from "../../queries/useEditEmail";
import EditModal from "../EditModal";
import "./EditEmailModal.css";

interface Props {
  show: boolean;
  onClose: () => void;
}

const schema = z.object({
  newEmail: z.string().email("Email must be valid").or(z.literal("")),
});


const EditEmailModal = ({ show, onClose }: Props) => {
  return (
    <EditModal
      show={show}
      onClose={onClose}
      title="Edit Email"
      fieldName="newEmail"
      placeholder="New Email"
      schema={schema}
      mutation={useEditEmail()}
    />
  );
};

export default EditEmailModal;
