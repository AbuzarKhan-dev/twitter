import Heading from "./Heading";
import Image from "./Image";


function Button({ divclass, contentdivclass, leftimgsrc, rightimgsrc, text, leftalt, rightalt, leftimgclass, rightimgclass, onclick, textclass }) {
    return (
        <div className={divclass} onClick={onclick}>
          <div className="login_button_container_wrapper">
              <div className={contentdivclass}>
              <Image img={leftimgsrc} alt={leftalt} classname={leftimgclass}/>
              <Heading  classname={textclass} text={text}/> 
              <Image img={rightimgsrc} alt={rightalt} classname={rightimgclass}/>
              </div>
              </div>  
        </div>
    )
}

export default Button;