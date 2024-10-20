import { faArrowLeft, faKey } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordScreen() {
  const navigate = useNavigate();
  return (
    <div className="login-screen">
      <div className="back-arrow">
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="title">
        <FontAwesomeIcon icon={faKey} />
      </div>
      <h2>Forgot password?</h2>
      <p>No worries, we'll send you reset instructions.</p>
      <label>Email ID</label>
      <input placeholder="Enter your email"></input>

      <div className="sign-in" onClick={() => navigate("/check-email")}>
        Reset password
      </div>
    </div>
  );
}
