import Heading from "./Heading";
import Image from "./Image";
import StarIcon from "../images/star.svg";




function HomePageHeading () {
    return (
        <div className="feed_header_container">
            <div className="feed_header_container_wrapper">
            <div className="feed_header_heading">
            <Heading divclass="heading_container" classname="feed_heading" text="Home"/>
            </div>
            <div className="feed_header_icon">
            <Image img={StarIcon} alt="star_icon" imagedivclass="star_icon_div" classname="star_icon" />
            </div>
            </div>
        </div>
    )
}

export default HomePageHeading;