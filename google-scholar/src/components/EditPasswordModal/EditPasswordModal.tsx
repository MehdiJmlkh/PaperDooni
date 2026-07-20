import { z } from "zod";
import { useEditPassword } from "../../queries/useEditPassword";
import EditModal from "../EditModal";
import "./EditPasswordModal.css";

interface Props {
  show: boolean;
  onClose: () => void;
}

const schema = z.object({
  newPassword: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
      "Password must include uppercase, lowercase, and a number",
    ),
});

const EditPasswordModal = ({ show, onClose }: Props) => {
  return (
    <EditModal
      show={show}
      onClose={onClose}
      title="Edit Password"
      fieldName="newPassword"
      placeholder="New Password"
      schema={schema}
      mutation={useEditPassword()}
      password={true}
    />
  );
};

export default EditPasswordModal;
