export default function HomePageRoute(props) {
  return (
    <div className={props.containerStyle} onClick={props.handleClick}>
      <img
        src={props.imageSrc}
        alt={props.title}
        className={props.iconStyle}
      ></img>
      {props.title}
    </div>
  );
}
