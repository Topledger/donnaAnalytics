import React from "react";
import Link from "next/link";
import cx from "clsx";
import PropTypes from "prop-types";

import SvgIcon from "../SvgIcon";

import styles from "./index.module.scss";
import { PropsWithChildren } from "react";

const getBtnProps = ({
  primary,
  secondary,
  tertiary,
  noArrow,
  ...props
}: any) => ({
  ...props,
  className: cx(styles.button, props.className, {
    [styles.primary]: primary,
    [styles.secondary]: secondary,
    [styles.tertiary]: tertiary,
    [styles.disabled]: props.disabled,
  }),
});

const getBtnStyle = ({ color, ...props }: any) => ({
  ...props?.style,
  ...(props.primary && { backgroundColor: color, backgroundImage: "none" }),
  ...(props.secondary && {
    backgroundColor: "transparent",
    backgroundImage: "none",
    borderColor: color,
    color,
  }),
  ...(props.tertiary && { color: color }),
});

const Button = ({ color, children, className, ...props }: any) => {
  const btnProps = getBtnProps({ ...props, className });

  const style = getBtnStyle({ color, ...btnProps });

  return (
    <button {...btnProps} style={style}>
      {children}
    </button>
  );
};

const Anchor = ({ children, ...props }: PropsWithChildren<any>) => (
  <a {...props}>{children}</a>
);

Button.Link = ({
  color,
  href,
  children,
  className,
  noArrow,
  arrowOnHover,
  ...props
}: PropsWithChildren<any>) => {
  const btnProps = getBtnProps({ ...props, className });
  const newWindowLink = props.target === "_blank";

  const style = getBtnStyle({ color, ...btnProps });

  const Component = href ? Link : Anchor;

  const renderedChildren = (
    <>
      {children}
      {newWindowLink && !noArrow && (
        <SvgIcon
          className={cx(styles.newWindowIcon, {
            [styles.arrowOnHover]: arrowOnHover,
          })}
          name="out-arrow"
        />
      )}
    </>
  );

  const allProps = {
    ...btnProps,
    className: cx(btnProps.className, styles.link),
    style: style,
  };

  return (
    <Component {...allProps} href={href}>
      {renderedChildren}
    </Component>
  );
};

(Button.Link as any).displayName = "Button.Link";

Button.propTypes = (Button.Link as any).propTypes = {
  color: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  noArrow: PropTypes.bool,
  arrowOnHover: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  disabled: PropTypes.bool,
  target: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
