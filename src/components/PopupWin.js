import CrossIcon from "../images/cross.png";
import Image from "./Image";
import TwitterIcon from "../images/twitter-icon.svg";
import Heading from "./Heading";

function PopupWin() {
  function popUpClose () {
    const popUp = document.getElementById("pop_top");
    popUp.style.display = "none";
  }
  return (
    <div className="pop_up_win">
      <header>
        <div className="cross_icon_div">
          <Image img={CrossIcon} classname="cross_icon" onclick={popUpClose}/>
        </div>
        <Image
          img={TwitterIcon}
          imagedivclass="popup_icon"
          classname="twitter_icon"
        />
      </header>
      <div className="form_wrapper">
        <div className="form_content">
          <form>
            <Heading classname="form_heading" text="Create your account" />
            <div className="inputs_container"></div>
            <input type="text" placeholder="Email" className='form_input'/>
            <input type="password" placeholder="Password" className='form_input'/>
            <input value="Submit" type="Submit" className='submit_form'/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupWin;
