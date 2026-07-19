import { z } from "zod";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Link from "../../components/Link";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import "./SignUpPage.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(6),
  email: z.string().email(),
  phoneNumber: z.string().min(11),
});

type FormData = z.infer<typeof schema>;

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  return (
    <Form onSubmit={handleSubmit((data) => console.log(data))}>
      <h1 className="form__heading">Sign Up</h1>
      <Input {...register("username")} placeholder="Username" />
      <PasswordInput {...register("password")} placeholder="Password" />
      <Input {...register("email")} placeholder="Email" />
      <Input {...register("phoneNumber")} placeholder="Phone Number" />
      <Button disable={!isValid}>Sign Up</Button>
      <div className="form__footer">
        <span>Already have an account? </span>
        <Link to="/sign-in">Sign in</Link>
      </div>
    </Form>
  );
};

export default SignUpPage;
