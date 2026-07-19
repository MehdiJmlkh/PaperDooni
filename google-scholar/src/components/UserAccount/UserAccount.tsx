import Card from "../Card";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { LuMail } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import "./UserAccount.css";
import Button from "../Button";
import { useLogout } from "../../queries/useLogout";
import Modal from "../Modal/Modal";
import EditEmailModal from "../EditEmailModal";
import EditPhoneNumberModal from "../EditPhoneNumberModal";
import EditPasswordModal from "../EditPasswordModal";
interface Props {
  className?: string;
}

const UserAccount = ({ className }: Props) => {
  const logout = useLogout();

  return (
    <>
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
        <Button className="logout-btn" onClick={() => logout.mutate()}>
          Logout
        </Button>
      </Card>

      <EditEmailModal show={false} />
      <EditPhoneNumberModal show={false} />
      <EditPasswordModal show={true}/>
    </>
  );
};

export default UserAccount;
