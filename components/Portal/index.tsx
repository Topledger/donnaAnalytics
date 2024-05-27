import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const Portal = ({
  children,
  container,
}: PropsWithChildren<{ container?: any }>) => {
  return container ? createPortal(children, container) : <></>;
};

Portal.defaultProps = {
  container: null,
};

export default Portal;
