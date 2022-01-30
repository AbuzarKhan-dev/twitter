import React,{ useEffect, useState } from "react";
import { authHandler } from "../store/actions/AuthHandler";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import SidebarMenu from "../components/SideBar_Menu";
import HomePageHeading from "../components/Home_Page_Heading";
import AddTweet from "../components/Add_Tweet";

function HomePage() {
  const [ loading, setLoading ] = useState(true);  
  const dispatch = useDispatch();
  const user = "abuzar khan"; 


  useEffect (() => {
    if(user !== null || user !== undefined) {
    dispatch(authHandler(user))
    setLoading(false)
    } 
    },[])

  return (
    <div className="home_page">
        <div className="home_page_content">
      <div className="sidebar_container">
          <SidebarMenu />
      </div>
      <div className="feeds_container">
        <HomePageHeading /> 
        <AddTweet />
      </div>
      </div>
    </div>
  );
}

export default HomePage;
