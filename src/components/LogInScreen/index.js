import "./styles.css";

export default function LogInScreen() {
  return (
    <div className="login-screen">
      <div className="title">
        <img src="logo.png" alt="logo" />
        <h1>Logoipsum</h1>
      </div>
      <h2>Log in to your account</h2>
      <p>Welcome back! Please enter your details.</p>
      <label>Email ID</label>
      <input placeholder="Enter your email"></input>
      <label>Password</label>
      <input placeholder="Enter password here"></input>
      <div className="extra-options">
        <div className="checkbox-wrapper">
          <input type="checkbox" id="remember"></input>
          <label for="remember">Remember me</label>
        </div>

        <div className="forgot-password">Forgot password?</div>
      </div>
      <div className="sign-in">Sign in</div>
    </div>
  );
}
