import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <div className="sign-in-form">
        <h1 className="sign-in-form__heading">Sign in</h1>
        <Input placeholder="Username" />
        <PasswordInput placeholder="Password" />
        <Button>Sign in</Button>
        <div className="sign-in-form__footer">
          <span>Not a member yet? </span>
          <Link to="">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
