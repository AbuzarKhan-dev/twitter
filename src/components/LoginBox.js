import Button from "./Button";
import GoogleIcon from "../images/google.svg";
import AppleIcon from "../images/apple.svg";
import Heading from "./Heading";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";

function LoginBox() {
    const history = useHistory();
    
    
    async function createUser() {
        try
          {
          const provider = new GoogleAuthProvider();
          await signInWithPopup(auth, provider)
          history.push("/home")
          }
          catch(e) {
              console.log("Error:", e)
          }
    }

    function popUp() {
        const popUp = document.getElementById("pop_top");
        popUp.style.display = "block";
    }

    return (
        <>
            <Button leftimgsrc={GoogleIcon} divclass="google_login_button_container" divwrapperclass="login_button_container_wrapper" contentdivclass="login_button_container_content" leftimgclass="login_input_img" rightimgclass="display_none_img" text="Sign up with Google" textclass="g_s_h" onclick={createUser}/>
            <Button leftimgsrc={AppleIcon} divclass="login_button_container" divwrapperclass="login_button_container_wrapper" contentdivclass="login_button_container_content" leftimgclass="apple_input_img" rightimgclass="display_none_img" text="Sign up with Apple" textclass="a_s_h" onclick={popUp}/>
            <div className="or_borders">
            <div className="or_border_left"></div>
            <Heading classname="L_B_T" text="or"/>
            <div className="or_border_right"></div>
            </div>
            <Button divclass="login_button_container blue" divwrapperclass="login_button_container_wrapper" contentdivclass="login_button_container_content" text="Sign up with phone or email" textclass="a_s_h" onclick={popUp}/>
            <p className="para">By signing up, you agree to the <span>Terms of Services</span> and <span>Privacy Policy</span>, including <span>Cookie Use</span> </p>
            <Heading classname="g_s_h_a " text="Already have an account?" textclass="a_s_h" />
            <Button divclass="login_button_container font" divwrapperclass="login_button_container_wrapper" contentdivclass="login_button_container_content" leftimgclass="display_none_img" rightimgclass="display_none_img" text="Sign in" textclass="a_s_h"/>
        </>
    )

} 

export default LoginBox;