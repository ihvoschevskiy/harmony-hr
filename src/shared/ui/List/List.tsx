"use client";

import { FC, ReactNode, useMemo, useState } from "react";
import { UserIcon, UsersIcon } from "../Icons";

interface ListProps {
  items: ReactNode[];
  defaultIsOpen?: boolean;
  limit?: number;
}

const List: FC<ListProps> = ({ items, defaultIsOpen = false, limit = 4 }) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const partialList = useMemo(
    () =>
      items.slice(0, limit).map((item, index) => (
        <div key={index} className="flex gap-2 items-center">
          <UserIcon size={16} className="text-accent-500" />
          <p>{item}</p>
        </div>
      )),
    [items, limit],
  );

  const fullList = useMemo(
    () =>
      items.map((item, index) => (
        <div key={index} className="flex gap-2 items-center">
          <UserIcon size={16} className="text-accent-500" />
          <p>{item}</p>
        </div>
      )),
    [items],
  );

  if (items.length <= limit) return fullList;

  return (
    <>
      {isOpen && fullList}
      {!isOpen && partialList}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex gap-2 items-center cursor-pointer"
      >
        <UsersIcon size={16} className="text-accent-500" />
        <p>{isOpen ? "Less..." : `${items.length - limit} More...`}</p>
      </div>
    </>
  );
};

export default List;
