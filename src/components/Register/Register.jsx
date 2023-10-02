import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted =e.target.terms.checked;
    console.log(email, password, accepted);

    // reset error
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one uppercase characters"
      );
    }
    else if (!accepted){
        setRegisterError("please accept our terms and condition");
        return;
    }

    //   user created
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("user create successfully");

        // send verification email
        sendEmailVerification(result.user)
        .then(()=>{
            alert("please check your email and verify your account")
        })
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div className="mx-auto w-1/2">
      <div className="">
        <h2 className="text-2xl font-bold mb-4 ">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-full p-2 text-xl rounded"
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />
          <br />
          <div className="relative">
            <input
              className=" w-full p-2 text-xl rounded"
              type={showPassword ? "text" : "password"}
              name="password"
              id=""
              placeholder="Password"
              required
            />
            <span
              className="absolute mt-3 right-4 text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEye></AiOutlineEye>
              ) : (
                <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
              )}
            </span>
          </div>
          <br />
           <div className="mb-1">
           <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Condition</a></label>
           </div>
            <br />
          <input
            className="btn w-full bg-secondary text-xl rounded"
            type="submit"
            value="Register"
          />
        </form>
        {registerError && <p className="text-red-500">{registerError}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <p>Already have an account ? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
