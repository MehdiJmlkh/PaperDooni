import "./EditPhoneNumberModal.css";
import EditModal from "../EditModal";
import { useEditPhoneNumber } from "../../queries/useEditPhoneNumber";
import { z } from "zod";

interface Props {
  show: boolean;
  onClose: () => void;
}

const schema = z.object({
  newPhoneNumber: z
    .string()
    .regex(/^0/, "Phone number must start with 0")
    .length(11, "Phone number must contain 11 digits")
    .or(z.literal("")),
});

const EditPhoneNumberModal = ({ show, onClose }: Props) => {
  return (
    <EditModal
      show={show}
      onClose={onClose}
      title="Edit Phone Number"
      fieldName="newPhoneNumber"
      placeholder="New Phone Number"
      schema={schema}
      mutation={useEditPhoneNumber()}
    />
  );
};

export default EditPhoneNumberModal;
