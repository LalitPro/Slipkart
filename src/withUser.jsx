import { useContext } from "react";
import { UserContext } from "./Contexts";

function withUser(IncomingComponent) {
  const OutgoingComponent = (props) => {
    const contextData = useContext(UserContext);
    return <IncomingComponent {...props} {...contextData} />;
  };
  return OutgoingComponent;
}

export default withUser;
