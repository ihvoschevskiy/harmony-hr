import { FC } from "react";

type SVGProps = React.SVGProps<SVGSVGElement>;

export type IconWrapperProps = Omit<SVGProps, "height" | "width"> & {
  size?: number;
  height?: number;
  width?: number;
  className?: string;
};

export function withIcon(
  Component: React.ComponentType<IconWrapperProps>,
): FC<IconWrapperProps> {
  return function renderIcon({ size, height, width, className }) {
    return (
      <div className={className}>
        <Component height={size || height} width={size || width} />
      </div>
    );
  };
}
