"use client";

import { FC, useRef, useState } from "react";
import { Tabs as ShadcnTabs, TabsList, TabsTrigger } from "@shared/shadcn/tabs";
import { SelectOption } from "../Select/types";
import { useTabs } from "./useTabs";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Button from "../Button/Button";
import { Option } from "@shared/types/option";

interface TabsProps {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
}

const Tabs: FC<TabsProps> = ({ value, options, onChange }) => {
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const [visibleOptions, setVisibleOptions] = useState<SelectOption[]>([]);
  const [hidingOptions, setHidingOptions] = useState<SelectOption[]>([]);

  useTabs(options, tabsRef);

  return (
    <ShadcnTabs value={value} onValueChange={onChange} className="relative">
      <div className="relative">
        <TabsList
          ref={tabsRef}
          className="flex flex-shrink overflow-hidden w-full"
        >
          {options.map(({ value, label, Icon }, index) => (
            <TabsTrigger key={index} value={value} className="flex-1 min-w-24">
              <div className="flex gap-2 items-center">
                {Icon && <Icon size={16} />}
                {label}
              </div>
            </TabsTrigger>
          ))}
          {!!hidingOptions.length && (
            <DropdownMenu
              trigger={<Button>More</Button>}
              options={hidingOptions}
              onItemClick={onChange}
            />
          )}
        </TabsList>
      </div>
    </ShadcnTabs>
  );
};

export default Tabs;
