import { Option } from "@shared/types/option";
import { MutableRefObject, useEffect, useState } from "react";
import { throttle } from "lodash-es";

const MIN_TAB_WITH = 96;

type UpdateTabsFn = (
  containerWidth: number,
  options: Option[],
  setVisibleOptions: (v: Option[]) => void,
  setHidingOptions: (v: Option[]) => void,
) => void;

const updateTabs: UpdateTabsFn = (
  containerWidth,
  options,
  setVisibleOptions,
  setHidingOptions,
) => {
  const visible = Math.trunc((containerWidth - MIN_TAB_WITH) / MIN_TAB_WITH);

  if (visible >= options.length) {
    setVisibleOptions(options);
    setHidingOptions([]);
  } else {
    setVisibleOptions(options.slice(0, visible));
    setHidingOptions(options.slice(visible));
  }
};

export const useTabs = (
  options: Option[],
  ref: MutableRefObject<HTMLDivElement | null>,
) => {
  const [visibleOptions, setVisibleOptions] = useState<Option[]>([]);
  const [hidingOptions, setHidingOptions] = useState<Option[]>([]);

  const handleResize = throttle(() => {
    if (!ref.current) return;

    updateTabs(
      ref.current.clientWidth,
      options,
      setVisibleOptions,
      setHidingOptions,
    );
  }, 200);

  useEffect(() => {
    if (!ref.current) return;

    updateTabs(
      ref.current.clientWidth,
      options,
      setVisibleOptions,
      setHidingOptions,
    );

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [visibleOptions, hidingOptions];
};
