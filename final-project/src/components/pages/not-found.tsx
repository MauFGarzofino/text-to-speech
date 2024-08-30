import TextAtom from "../atoms/typography/Text";
import "./styles/not-found.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <TextAtom text="404 - Page Not Found" fontSize="1.5rem"></TextAtom>
    </div>
  );
};

export default NotFound;
