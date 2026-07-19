import Card from "../Card";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { LuMail } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import "./UserAccount.css";
import Button from "../Button";
import { useLogout } from "../../queries/useLogout";
import EditEmailModal from "../EditEmailModal";
import EditPhoneNumberModal from "../EditPhoneNumberModal";
import EditPasswordModal from "../EditPasswordModal";
import { useState } from "react";

interface Props {
  className?: string;
}

const UserAccount = ({ className }: Props) => {
  const logout = useLogout();
  const [editEmail, setEditEmail] = useState(false);
  const [editPhoneNumber, setEditPhoneNumber] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

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

      <div className="edit-btns">
        <Button className="edit-btn" onClick={() => setEditEmail(true)}>
          Edit Emial
        </Button>
        <Button className="edit-btn" onClick={() => setEditPhoneNumber(true)}>
          Edit Phone Number
        </Button>
        <Button className="edit-btn" onClick={() => setEditPassword(true)}>
          Edit Password
        </Button>
      </div>

      <EditEmailModal show={editEmail} onClose={() => setEditEmail(false)} />
      <EditPhoneNumberModal
        show={editPhoneNumber}
        onClose={() => setEditPhoneNumber(false)}
      />
      <EditPasswordModal
        show={editPassword}
        onClose={() => setEditPassword(false)}
      />
    </>
  );
};

export default UserAccount;
