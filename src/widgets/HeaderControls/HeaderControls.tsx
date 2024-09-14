"use client";

import { Avatar, Button, DropdownMenu } from "@shared/ui";
import { BellIcon, QuestionIcon, SettingsIcon } from "@shared/ui/Icons";
import { cn } from "@shared/utils";
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
    <div className={cn("flex gap-6 text-accent-500", className)}>
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
      {/*TODO: заменить avatarUrl и name на данные с бэкенда*/}
      <DropdownMenu
        options={userMenu}
        trigger={
          <div>
            <Avatar
              avatarUrl="/images/avatar-sm.png"
              name="Alexandra Kuibyshevskaya"
            />
          </div>
        }
        onItemClick={onItemClickHandler}
      />
    </div>
  );
};

export default HeaderControls;
