import { BiSolidDislike } from "react-icons/bi";

function DisLikeSection({ dislikes }) {
    return <div className="reaction-main">
        <span className="reaction-text">{dislikes}</span>
        <BiSolidDislike className="reaction-icon"/>
    </div>
}


export default DisLikeSection;