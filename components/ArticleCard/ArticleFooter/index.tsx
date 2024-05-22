import cx from "classnames";

import Chip from "@/components/Chip";
import Button from "@/components/Button";

import styles from "./index.module.scss";
import SvgIcon from "@/components/SvgIcon";

const { Link } = Button;

const boolString = (value?: boolean) => (Boolean(value) ? "true" : "false");

export const getAction = ({
  type,
  isSelected,
  primary,
  secondary,
  tertiary,
  forwardArrow,
  ...props
}: any = {}) => {
  const primaryAttribute = primary || (isSelected && secondary);
  switch (type) {
    case "button":
      return (
        <Link
          {...props}
          primary={primaryAttribute}
          secondary={secondary && !isSelected}
          href={props.href}
          target={props.target}
          color="#085ED4"
        >
          {props.text}
          {forwardArrow && (
            <SvgIcon style={{ marginLeft: "0.5rem" }} name="forward-arrow" />
          )}
        </Link>
      );
    case "link":
      return (
        <Link
          {...props}
          color="#085ED4"
          primary={primaryAttribute}
          secondary={(!primary && !tertiary) || (secondary && !isSelected)}
          tertiary={!primary && !tertiary}
        >
          {props.text}
          {forwardArrow && (
            <SvgIcon style={{ marginLeft: "0.5rem" }} name="forward-arrow" />
          )}
        </Link>
      );
    case "comingSoon":
      return (
        <Chip
          color="#59B077"
          {...props}
          style={{ ...props?.style, width: "100%", textAlign: "center" }}
        >
          Coming Soon
        </Chip>
      );
    default:
      return <Button {...props} />;
  }
};

const FooterAction = ({ action }: any) => {
  return getAction(action);
};

const FooterActions = ({ actions = [] }) => {
  return (
    <div className={cx(styles.footer, styles.footerAction)}>
      {actions.length > 0 &&
        actions.map((action: any) => (
          <FooterAction key={action.id} action={action} />
        ))}
    </div>
  );
};

export default FooterActions;
