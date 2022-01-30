import { useSelector } from "react-redux";





function SidebarItem ({ img, text, height }) {
    const data = useSelector(state => state.getUser);
    console.log(data)
    return (
        <div className="h_menu_icon">
            <div className="h_menu_icon_wrap">
            <div className="h_menu_icon_width">
                <img src={img} style={{width:"23.6px",height:height}} alt="item"/>
            </div>
            <div className="item_heading">
                <h1>{text}</h1>
                </div>
                </div>
        </div>
    )
}

export default SidebarItem;