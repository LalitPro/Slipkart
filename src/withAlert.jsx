import { useContext } from "react";
import { AlertContext } from "./Contexts";

function withAlert(IncomingComponent) {
  const OutgoingComponent = (props) => {
    const contextData = useContext(AlertContext);
    return <IncomingComponent {...props} {...contextData} />;
  };
  return OutgoingComponent;
}

export default withAlert;
