import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodSchema } from "zod";
import { UseMutationResult } from "@tanstack/react-query";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import "./EditModal.css";

interface Props {
  show: boolean;
  onClose: () => void;
  title: string;
  fieldName: string;
  placeholder: string;
  schema: ZodSchema<Record<string, string>>;
  mutation: UseMutationResult<any, string, string, unknown>;
}

type FormData = Record<string, string>;

const EditModal = ({
  show,
  onClose,
  title,
  fieldName,
  placeholder,
  schema,
  mutation,
}: Props) => {
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

  const value = watch(fieldName);

  const canSubmit = typeof value === "string" && value.trim() !== "";

  return (
    <Modal title={title} show={show} onClose={onClose}>
      <Input
        {...register(fieldName)}
        placeholder={placeholder}
        error={mutation.error || errors[fieldName]?.message}
      />

      <Button
        disable={!canSubmit}
        onClick={handleSubmit((data) => mutation.mutate(data[fieldName]))}
      >
        Submit
      </Button>
    </Modal>
  );
};

export default EditModal;
