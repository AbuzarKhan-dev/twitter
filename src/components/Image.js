
function Image ({ imagedivclass, classname, onclick, img, alt }) {
    return (
        <div className={imagedivclass} onClick={onclick}>
            <img src={img} alt={alt} className={classname} />
        </div>
    )
}

export default Image;