"use client";

import { FC, useState } from "react";
import { Input, Logo } from "@shared/ui";
import { Navigation } from "@widgets/Navigation";
import { SearchIcon } from "@shared/ui/Icons";
import { HeaderControls } from "@widgets/HeaderControls";

const Header: FC = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex gap-12 justify-between items-center px-6 min-h-[86px]">
      <div className="flex gap-12 items-center self-stretch">
        <Logo />
        <Navigation className="s:hidden lg:flex" />
      </div>
      <div className="flex gap-4 justify-between">
        <Input
          value={value}
          onChange={setValue}
          prefixIcon={<SearchIcon size={16} />}
          placeholder="Search"
          className="min-w-60 max-w-80 s:hidden xl:inline-flex"
        />
        <HeaderControls hasNotification searchValue={value} setSearchValue={setValue} />
      </div>
    </div>
  );
};

export default Header;
