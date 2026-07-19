import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Link from "../../components/Link";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { useLogin } from "../../queries/useLogin";
import "./SignInPage.css";

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

  const login = useLogin();

  return (
    <Form onSubmit={handleSubmit((data) => login.mutate(data))}>
      <h1 className="form__heading">Sign in</h1>
      <Input {...register("username")} placeholder="Username" />
      <PasswordInput {...register("password")} placeholder="Password" />
      <div>
        <p className="form__error">{login.error?.message}</p>
        <Button disable={!isValid}>Sign in</Button>
      </div>
      <div className="form__footer">
        <span>Not a member yet? </span>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </Form>
  );
};

export default SignInPage;
