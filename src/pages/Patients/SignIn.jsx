// import Aside from "../../components/aside";
import "../../css/SignIn.css";
function SignIn() {
  return (
    
    <div class="login-container">
      
      <h2>Login</h2>
      <form action="login.php" method="POST">
        
        <div class="input-group">
          
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div class="input-group">
          
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div class="forgot-password">
          
          <a href="forgot_password.php">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
      </form>
      <div class="signup-link">
        
        Don't have an account? <a href="signup.php">Sign Up</a>
      </div>
    </div>
  );
}

export default SignIn;
