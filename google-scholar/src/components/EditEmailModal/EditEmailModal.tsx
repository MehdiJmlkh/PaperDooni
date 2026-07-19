import { z } from "zod";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import "./EditEmailModal.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditEmail } from "../../queries/useEditEmail";

interface Props {
  show: boolean;
  onClose: () => void;
}

const schema = z.object({
  newEmail: z.string().email("Email must be valid").or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

const EditEmailModal = ({ show, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const canSubmit = watch("newEmail")?.trim() !== "";

  const editEmail = useEditEmail();

  return (
    <Modal title="Edit Email" show={show} onClose={onClose}>
      <Input
        {...register("newEmail")}
        placeholder="New Email"
        error={errors.newEmail?.message}
      />
      <Button
        disable={!canSubmit}
        onClick={handleSubmit((data) => editEmail.mutate(data))}
      >
        Submit
      </Button>
    </Modal>
  );
};

export default EditEmailModal;
