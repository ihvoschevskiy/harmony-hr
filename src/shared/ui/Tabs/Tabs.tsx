"use client";

import { FC, useRef } from "react";
import { Tabs as ShadcnTabs, TabsList, TabsTrigger } from "@shared/shadcn/tabs";
import { useTabs } from "./useTabs";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Button from "../Button/Button";
import { Option } from "@shared/types/option";
import { MoreIcon } from "../Icons";
import { cn } from "@shared/utils";

interface TabsProps {
  value: string;
  options: Option[];
  className?: string;
  onChange: (value: string) => void;
}

const Tabs: FC<TabsProps> = ({ value, options, onChange }) => {
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const [visibleOptions, hidingOptions] = useTabs(options, tabsRef);

  return (
    <ShadcnTabs value={value} onValueChange={onChange} className="relative">
      <TabsList
        ref={tabsRef}
        className="overflow-hidden w-full p-0 h-auto text-black bg-accent-100"
      >
        <div className="flex flex-wrap flex-1 max-h-14">
          {visibleOptions.map((item, index) => (
            <TabsTrigger
              key={index}
              value={item.value}
              className={cn(
                "flex-1 min-w-24 p-4 h-14",
                value === item.value &&
                "data-[state=active]:bg-background-50 data-[state=active]:rounded-b-none data-[state=active]:rounded-t-lg",
              )}
            >
              <div className="flex gap-2 items-center">
                {item.Icon && <item.Icon size={16} />}
                {item.label}
              </div>
            </TabsTrigger>
          ))}
        </div>
        {!!hidingOptions.length && (
          <DropdownMenu
            trigger={
              <Button
                variant="ghost"
                suffixIcon={<MoreIcon size={16} className="text-accent-500" />}
              >
                More
              </Button>
            }
            options={hidingOptions}
            onItemClick={onChange}
          />
        )}
      </TabsList>
    </ShadcnTabs>
  );
};

export default Tabs;
