import { FC, forwardRef } from "react";
import {
  AvatarFallback,
  AvatarImage,
  Avatar as ShadcnAvatar,
} from "@shared/shadcn/avatar";
import { createFallback } from "./helpers";

interface AvatarProps {
  avatarUrl: string;
  name: string;
  className?: string;
}

const RawAvatar: FC<AvatarProps> = ({ avatarUrl, name, className }) => {
  return (
    <ShadcnAvatar className={className}>
      <AvatarImage src={avatarUrl} alt={`${name} avatar`} />
      <AvatarFallback>{createFallback(name)}</AvatarFallback>
    </ShadcnAvatar>
  );
};

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) =>
  RawAvatar(props, ref),
);

Avatar.displayName = "Avatar";

export default Avatar;
