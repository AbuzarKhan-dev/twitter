import UserDp from "../images/user.jpg";
import AddTweetInputIcons from "./Add_Tweet_Input_Icons";
import Image from "./Image";

function AddTweet() {
  return (
    <div className="add_tweet_container">
      <div className="add_tweet_container_wrapper">
        <div className="add_tweet_container_content">
          <div className="add_tweet_container_user-side">
            <Image
              img={UserDp}
              imagedivclass="userdp_tweet_container"
              classname="userdp_tweet"
            />
          </div>
          <div className="add_tweet_container_add-tweet">
            <AddTweetInputIcons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTweet;
