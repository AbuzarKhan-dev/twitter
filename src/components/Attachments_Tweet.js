import Image from "./Image";
import PicIcon from "../images/pic.svg";
import GifIcon from "../images/gif.svg";
import BarsIcon from "../images/bars.svg";
import SmileyIcons from "../images/smiley.svg";
import CalenderIcon from "../images/calender.svg";
import LocationIcon from "../images/location.svg";
import Button from "./Button";


function AttachmentsAndTweet () {
    return (
        <>
          <div className="att-icons-div-wrapper">
            <Image img={PicIcon} alt="pic_icon" imagedivclass="att_icn_div" classname="att_icon_pic"/>
            <Image img={GifIcon} alt="pic_icon" imagedivclass="att_icn_div" classname="att_icon_pic"/>
            <Image img={BarsIcon} alt="pic_icon" imagedivclass="att_icn_div" classname="att_icon_pic"/>
            <Image img={SmileyIcons} alt="pic_icon" imagedivclass="att_icn_div" classname="att_icon_pic"/>
            <Image img={CalenderIcon} alt="pic_icon" imagedivclass="att_icn_div" classname="att_icon_pic"/>
            <Image img={LocationIcon} alt="pic_icon" imagedivclass="att_icn_div" classname="att_icon_pic"/>
          </div>
            <Button divclass="tweet blue" contentdivclass="tweet-btn-content" text="Tweet" textclass="a_s_v"/>
        </>
    )
}

export default AttachmentsAndTweet;