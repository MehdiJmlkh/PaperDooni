import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Link from "../../components/Link";
import PasswordInput from "../../components/PasswordInput";
import { useSignUp } from "../../queries/useSignUp";
import "./SignUpPage.css";

const schema = z.object({
  username: z.string(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
      "Password must include uppercase, lowercase, and a number",
    ),
  email: z.string().email("Email must be valid").or(z.literal("")),
  phoneNumber: z
    .string()
    .regex(/^0/, "Phone number must start with 0")
    .length(11, "Phone number must contain 11 digits")
    .or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const signUp = useSignUp();

  const username = watch("username");
  const password = watch("password");
  const email = watch("email");
  const phoneNumber = watch("phoneNumber");

  const canSubmit =
    username?.trim() !== "" &&
    password?.trim() !== "" &&
    (email?.trim() !== "" || phoneNumber?.trim() !== "");

  return (
    <Form onSubmit={handleSubmit((data) => signUp.mutate(data))}>
      <h1 className="form__heading">Sign Up</h1>
      <Input
        {...register("username")}
        error={signUp.error?.username}
        placeholder="Username"
      />
      <PasswordInput
        {...register("password")}
        error={errors.password?.message}
        placeholder="Password"
      />
      <Input
        {...register("email")}
        error={errors.email?.message || signUp.error?.email}
        placeholder="Email"
      />
      <Input
        {...register("phoneNumber")}
        error={errors.phoneNumber?.message || signUp.error?.phoneNumber}
        placeholder="Phone Number"
      />
      <Button disable={!canSubmit}>Sign Up</Button>
      <div className="form__footer">
        <span>Already have an account? </span>
        <Link to="/sign-in">Sign in</Link>
      </div>
    </Form>
  );
};

export default SignUpPage;
