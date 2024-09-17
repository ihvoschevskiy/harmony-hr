"use client";

import { Avatar, Button, DropdownMenu, Popover } from "@shared/ui";
import {
  BellIcon,
  QuestionIcon,
  SearchIcon,
  SettingsIcon,
} from "@shared/ui/Icons";
import { cn } from "@shared/utils";
import { FC, useCallback } from "react";
import { userMenu } from "./constants";
import { Input } from "@shared/ui";
import { useUserStore } from "@shared/store/user/store";
import SessionService from "@shared/utils/session";
import { useRouter } from "next/navigation";

interface HeaderControlsProps {
  hasNotification?: boolean;
  className?: string;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const HeaderControls: FC<HeaderControlsProps> = ({
  hasNotification,
  className,
  searchValue,
  setSearchValue,
}) => {
  const setUser = useUserStore(({ setUser }) => setUser);
  const router = useRouter();
  const onItemClickHandler = useCallback(
    (id: string | number) => {
      if (id === "logout") {
        router.push("/login");
        SessionService.logout();
        setUser(null);
      }
    },
    [router, setUser],
  );

  return (
    <div className={cn("flex gap-6 text-accent-500", className)}>
      <div className="s:hidden sm:flex gap-6">
        <Popover
          trigger={
            <Button variant="ghost" size="icon" className="w-auto">
              <SearchIcon size={24} />
            </Button>
          }
          className="xl:hidden"
        >
          <Input
            value={searchValue}
            onChange={setSearchValue}
            prefixIcon={<SearchIcon size={16} />}
            placeholder="Search"
            className="min-w-60 max-w-80"
          />
        </Popover>
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
      </div>
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
