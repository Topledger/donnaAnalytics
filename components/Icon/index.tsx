import Image from "next/image";

import { basepath } from "@/helpers/constants";

const Icon = ({ className, style, name, height, width, ...props }: any) => {
  return (
    <Image
      {...props}
      className={className}
      style={style}
      src={`${basepath}/assets/images/icons/${name}.svg`}
      width={width ?? 24}
      height={height ?? 24}
      alt={`${name} icon`}
    />
  );
};

export default Icon;
