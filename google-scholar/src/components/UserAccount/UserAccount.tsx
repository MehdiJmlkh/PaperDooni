import Card from "../Card";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { LuMail } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import "./UserAccount.css";
interface Props {
  className?: string;
}

const UserAccount = ({ className }: Props) => {
  return (
    <Card className={`user-account ${className}`}>
      <div>
        <HiOutlineUserCircle className="user-account__icon" />
        <span>Username</span>
      </div>
      <div>
        <LuMail className="user-account__icon" />
        <span>user@domain.com</span>
      </div>
      <div>
        <LuPhone className="user-account__icon" />
        <span>09178313266</span>
      </div>
    </Card>
  );
};

export default UserAccount;
