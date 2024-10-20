import { faArrowLeft, faKey } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function ResetPasswordScreen() {
  const navigate = useNavigate();
  return (
    <div className="login-screen">
      <div className="back-arrow">
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="title">
        <FontAwesomeIcon icon={faKey} />
      </div>
      <h2>Set new password</h2>
      <p>
        Your new password must be different to
        <br /> previously used passwords.
      </p>
      <label>Password</label>
      <input placeholder="Enter new password"></input>
      <p className="requirment">Must be at least 8 characters</p>
      <label>Confirm password</label>
      <input placeholder="Re-enter your password"></input>

      <div className="sign-in" onClick={() => navigate("/")}>
        Reset password
      </div>
    </div>
  );
}
