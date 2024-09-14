import { FC } from "react";
import { Input, Logo } from "@shared/ui";
import { Navigation } from "@widgets/Navigation";
import { SearchIcon } from "@shared/ui/Icons";
import { HeaderControls } from "@widgets/HeaderControls";

const Header: FC = () => {
  return (
    <div className="flex items-center px-6 min-h-[86px]">
      <Logo />
      <Navigation />
      <Input
        prefixIcon={<SearchIcon size={16} />}
        placeholder="Search"
        className="ml-[60px] min-w-60"
      />
      <HeaderControls hasNotification className="ml-[60px]" />
    </div>
  );
};

export default Header;
