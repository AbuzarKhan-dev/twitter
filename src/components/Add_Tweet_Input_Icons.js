import React,{ useState} from "react";
import Button from "./Button";
import GlobeIcon from "../images/globe.svg";
import AttachmentsAndTweet from "./Attachments_Tweet";



function AddTweetInputIcons() {
    const [ val, setVal ] = useState("");
    return (
        <div className="add_tweet_input_icons">
            <div className="add_tweet_input_div">
                <div className="add_tweet_input">
                <input value={val} placeholder="What's happening?" onChange={(e) => setVal(e.target.value)} />
                </div>
                <Button divclass="add_tweet_button_div" divwrapperclass="add_tweet_button_wrapper_div" contentdivclass="add_tweet_button_content_div" leftimgsrc={GlobeIcon} leftalt="globe" leftimgclass="globe_icon" leftdivclass="globe_icon_div" text="Everyone can reply" textclass="globe_text"/>
            </div>
            <div className="att_icons_div">
                <AttachmentsAndTweet /> 
          </div>
        </div>
    )
}

export default AddTweetInputIcons;