import useThrottle from "@shared/hooks/useThrottle";
import { Option } from "@shared/types/option";
import { MutableRefObject, useEffect, useState } from "react";

const MIN_TAB_WITH = 96;

export const useTabs = (
  options: Option[],
  ref: MutableRefObject<HTMLDivElement | null>,
) => {
  const [visibleOptions, setVisibleOptions] = useState<Option[]>([]);
  const [hidingOptions, setHidingOptions] = useState<Option[]>([]);

  const throttledVisibleOptions = useThrottle(visibleOptions, 200);
  const throttledHiddingOptions = useThrottle(hidingOptions, 200);

  const handleResize = () => {
    const containerWidth = ref.current?.clientWidth;
    const tabsWidth = MIN_TAB_WITH * (options.length + 1);

    if (!containerWidth) return;

    if (containerWidth < tabsWidth) {
      const n = Math.trunc(containerWidth / MIN_TAB_WITH);
      console.log(n);
    }
    setVisibleOptions([]);
    setHidingOptions([]);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [throttledVisibleOptions, throttledHiddingOptions];
};
