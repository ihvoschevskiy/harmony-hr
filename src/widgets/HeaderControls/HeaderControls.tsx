"use client";

import { Button, DropdownMenu } from "@shared/ui";
import { BellIcon, QuestionIcon, SettingsIcon } from "@shared/ui/Icons";
import { cn } from "@shared/utils";
import Image from "next/image";
import { FC, useCallback } from "react";
import { userMenu } from "./constants";

interface HeaderControlsProps {
  hasNotification?: boolean;
  className?: string;
}

const HeaderControls: FC<HeaderControlsProps> = ({
  hasNotification,
  className,
}) => {
  const onItemClickHandler = useCallback((id: string | number) => {
    // TODO: Реализовать log out
    if (id === "logout") {
      // navigate(AppRoutes.login);
      // SessionService.logout();
      // dispatch(uiActions.setUser(null));
    }
  }, []);

  return (
    <div className={cn("flex gap-6", className)}>
      <Button variant="ghost" size="icon" className="w-auto">
        <SettingsIcon size={24} />
      </Button>
      <Button variant="ghost" size="icon" className="w-auto">
        <QuestionIcon size={24} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        withSign={hasNotification}
        className="w-auto"
      >
        <BellIcon size={24} />
      </Button>
      <DropdownMenu
        items={userMenu}
        trigger={
          <Image
            src="/images/avatar-sm.png"
            alt="user avatar"
            width={38}
            height={38}
          />
        }
        onItemClick={onItemClickHandler}
        className="bg-red-900"
      />
    </div>
  );
};

export default HeaderControls;
