import styles from "./index.module.css";

interface OutlineButtonProps {
    text: String;
    icon: ImageData;
    action?: Function
}

const OutlineButton = ({ text, icon, action }: OutlineButtonProps) => {
    return <button>{text}</button>
}
export default OutlineButton;