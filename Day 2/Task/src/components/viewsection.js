import { FaEye } from "react-icons/fa";


function ViewSection({ views }) {
    return <div className="reaction-main">
        <span className="reaction-text">{views}</span>
        <FaEye className="reaction-icon"/>
    </div>
}


export default ViewSection;