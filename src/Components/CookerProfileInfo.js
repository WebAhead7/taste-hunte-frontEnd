export default function CookerProfileInfo(props) {
  return (
    <div className="info-section ">
      <img
        src={props.cookerImg}
        alt="cooker"
        className={props.profileImg}
      ></img>
      <span>
        <p>name : {props.name}</p>
        <p>email:{props.email}</p>
        <p> work adrees:{props.work_address}</p>
      </span>
    </div>
  );
}
