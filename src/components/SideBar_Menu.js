import TwitterIcon from "../images/twitter-icon.svg";
import Image from "./Image";
import UserDp from "../images/user.jpg"
import SidebarItem from "./SideBar_Item";
import HomeIcon from "../images/home.svg"
import HashIcon from "../images/hash.svg";
import BellIcon from "../images/bell.svg";
import MessageIcon from "../images/message.svg";
import BookmarkIcon from "../images/bookmark.svg";
import ListIcon from "../images/list.svg";
import ProfileIcon from "../images/profile.svg";
import MoreIcon from "../images/more.svg";
import DotsIcon from "../images/moredot.svg";
import Button from "./Button";
import { useSelector } from "react-redux";



function SidebarMenu () {
    const data = useSelector(state => state.getUser)
    console.log(data.user)
    return (
        <div className="sibebar_menu">
            <div className="home_logo">
            <Image img={TwitterIcon} alt="twitter-icon" imagedivclass="h_icon_div" classname="h_twitter_icon"/>
            </div>
            <div className="sidebar_icons">
            <SidebarItem img={ HomeIcon } text="Home" height="23px"/>
            <SidebarItem img={ HashIcon } text="Explore" height="24px"/>
            <SidebarItem img={ BellIcon } text="Notifications"/>
            <SidebarItem img={ MessageIcon } text="Messages"/>
            <SidebarItem img={ BookmarkIcon } text="Bookmarks"/>
            <SidebarItem img={ ListIcon } text="Lists"/>
            <SidebarItem img={ ProfileIcon } text="Profile"/>
            <SidebarItem img={ MoreIcon } text="More"/>
            </div>
            <div className="tweet_btn">
            <Button divclass="login_button_container_tweet blue" contentdivclass="login_button_container_content" text="Tweet" textclass="a_s_h"/>
            <Button divclass="login_button_container_user" divwrapperclass="user_button_container_wrapper" contentdivclass="user_button" leftimgsrc={UserDp} leftalt="userdp" rightimgsrc={DotsIcon} rightimgclass="dot_icon" leftimgclass="userdp" leftdivclass="user_dp_div" rightdivclass="dot_icon_div" text="AbuzarKhan" textclass="a_s_h"/>
            </div>
        </div>
    )
}

export default SidebarMenu;