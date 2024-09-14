// import { MutableRefObject, ReactNode } from "react";

// const ACTION_BTNS_GAP = 16; const MORE_BTN_RESERVED_WIDTH = 90;

// export const calculateVisibility = (
//   actionElements: ReactNode[],
//   actionElementsWidth: MutableRefObject<number[]>,
//   containerVisibleWidth: MutableRefObject<number>,
// ) => {
//   // variable for actual visible tabs width + gaps between tabs calculations
//   // to define if the next tab has a free space to be visible or not
//   let visibleElementsWidth = 0;
//
//   // variable for the list of hidden tabs which will be put to react state
//   const actionsMoreData: ReactNode[] = [];
//
//   // variable which works as a flag and changes to false with the
//   // first hidden tab during actionElements iteration
//   let isVisible = true;
//
//   [...actionElements].forEach((actionEl, i) => {
//     // necessary gap after the tab
//     const gapWidth = i === actionElements.length - 1 ? 0 : ACTION_BTNS_GAP;
//
//     // visibleElementsWidth will be increased by
//     // the corresponding width of the element + gapWidth
//     visibleElementsWidth += actionElementsWidth.current[i] + gapWidth;
//
//     // calculates how much space is necessary for all the previous
//     // tabs + the next tab or button "More"
//     const visibleSpaceWidth =
//       i !== actionElements.length - 1
//         ? visibleElementsWidth + MORE_BTN_RESERVED_WIDTH
//         : visibleElementsWidth;
//
//     // compare if container's actual width is enough to show all
//     // the elements that need space equal to visibleSpaceWidth width
//     if (visibleSpaceWidth <= containerVisibleWidth.current && isVisible) {
//       // add classNames for visible tabs
//       actionEl.className = "action visible";
//     } else {
//       if (isVisible) {
//         // calculate left property for button "More" which has absolute position
//         moreBtnLeftPosition.current =
//           actionElementsWidth.current
//             .slice(0, i)
//             .reduce((acc, item) => item + acc, 0) +
//           ACTION_BTNS_GAP * i;
//
//         // set isVisible to false for the first hidden tab
//         isVisible = false;
//       }
//       // add classNames for hidden tabs
//       actionEl.className = "action hidden";
//
//       // update actionsMoreData with the new hidden tab's data
//       actionsMoreData.push(ACTIONS_LIST[i]);
//     }
//   });
//
//   // update React state with the list of hidden tabs
//   setActionsMoreList([...actionsMoreData]);
// };
