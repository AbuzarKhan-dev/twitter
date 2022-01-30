

function Heading({ text, classname, divclass, textend }) {
  return (
    <div className={divclass}>
      <h1 className={ classname }>{text}<span>{textend}</span></h1>
    </div>
  );
}

export default Heading;
