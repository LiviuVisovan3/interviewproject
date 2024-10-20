import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function CheckEmailScreen() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/reset-password");
  }, 10000);

  return (
    <div className="login-screen">
      <div className="back-arrow">
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="title">
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <h2>Check your email</h2>
      <p>We sent a password reset link to olivia@untitledui.com</p>

      <div className="sign-in">Open email app</div>
      <div className="extra-options">
        Didn't receive the email? <span> Click to resend</span>
      </div>
    </div>
  );
}
