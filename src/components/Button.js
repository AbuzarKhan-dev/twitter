import Heading from "./Heading";
import Image from "./Image";


function Button({ divclass, contentdivclass, divwrapperclass, leftimgsrc, rightimgsrc, text, leftalt, rightalt, leftimgclass, rightimgclass, onclick, textclass, leftdivclass, rightdivclass }) {
    return (
        <div className={divclass} onClick={onclick}>
          <div className={divwrapperclass}>
              <div className={contentdivclass}>
              <Image img={leftimgsrc} alt={leftalt} imagedivclass={leftdivclass} classname={leftimgclass}/>
              <Heading  classname={textclass} text={text}/> 
              <Image img={rightimgsrc} alt={rightalt} imagedivclass={rightdivclass} classname={rightimgclass}/>
              </div>
              </div>  
        </div>
    )
}

export default Button;