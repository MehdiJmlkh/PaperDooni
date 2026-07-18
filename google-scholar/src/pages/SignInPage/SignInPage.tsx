import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Link from "../../components/Link";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <Form>
        <h1 className="form__heading">Sign in</h1>
        <Input placeholder="Username" />
        <PasswordInput placeholder="Password" />
        <Button>Sign in</Button>
        <div className="form__footer">
          <span>Not a member yet? </span>
          <Link to="">Sign Up</Link>
        </div>
      </Form>
    </div>
  );
};

export default SignInPage;
