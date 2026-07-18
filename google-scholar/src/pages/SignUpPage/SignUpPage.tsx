import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Link from "../../components/Link";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <Form>
      <h1 className="form__heading">Sign Up</h1>
      <Input placeholder="Username" />
      <PasswordInput placeholder="Password" />
      <Input placeholder="Email" />
      <Input placeholder="Phone Number" />
      <Button>Sign Up</Button>
      <div className="form__footer">
        <span>Already have an account? </span>
        <Link to="/sign-in">Sign in</Link>
      </div>
    </Form>
  );
};

export default SignUpPage;
