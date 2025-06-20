import {Link} from "react-router-dom";

interface LeaveMessageProps {
  root: string;
  text: string;
}

export default function NavigateButton({ root, text }: LeaveMessageProps) {
  return (
    <Link to={`${root}`}>
      <button> 
        {text}
      </button>
    </Link>
  );

}