import React from "react";
import LoginFrom from "../components/Login_Form";
import Image from "../components/Image";
import TwitterIcon from "../images/twitter-icon2.svg";
import Footer from "../components/Footer";
import PopupWin from "../components/PopupWin";

function LoginPage() {
  return (
    <div className="login_page">
      <div className="login_cover_form">
        <div className="login_form">
          <LoginFrom />
        </div>
        <div className="login_cover">
          <div className="login_cover_img">
            <Image
              img={TwitterIcon}
              alt="twitter_logo"
              imagedivclass="twitter_icon_div"
              classname="white_logo"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
      <div className="top_pop" id="pop_top">
        <div className="postion_pop_up">
          <div className="pop_up"></div>
          <PopupWin />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
