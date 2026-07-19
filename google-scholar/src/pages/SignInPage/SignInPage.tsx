import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Link from "../../components/Link";
import { date, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import "./SignInPage.css";
import { useForm } from "react-hook-form";

const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <Form onSubmit={handleSubmit((data) => console.log(data))}>
      <h1 className="form__heading">Sign in</h1>
      <Input {...register("username")} placeholder="Username" />
      <PasswordInput {...register("password")} placeholder="Password" />
      <Button disable={!isValid}>Sign in</Button>
      <div className="form__footer">
        <span>Not a member yet? </span>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </Form>
  );
};

export default SignInPage;
