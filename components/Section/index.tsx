import cx from "clsx";

import styles from "./index.module.scss";

const Section = ({
  background,
  style,
  containerStyle,
  children,
  className,
  containerClassName,
  component: Component = "section",
  id,
  ...props
}: {
  background?: string;
  style?: any;
  containerStyle?: any;
  children?: any;
  className?: string;
  containerClassName?: string;
  component?: any;
  id?: string;
}) => (
  <Component
    {...props}
    className={cx(styles.section, className)}
    style={{ ...style, backgroundImage: `url(${background})` }}
    id={id}
  >
    <div
      className={cx(styles.container, containerClassName)}
      style={containerStyle}
    >
      {children}
    </div>
  </Component>
);

export default Section;
