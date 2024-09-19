import { AiFillLike } from "react-icons/ai";

function LikeSection({ likes }) {
    return <div className="reaction-main">
        <span className="reaction-text">{likes}</span>
        <AiFillLike className="reaction-icon"/>
    </div>
}

export default LikeSection;