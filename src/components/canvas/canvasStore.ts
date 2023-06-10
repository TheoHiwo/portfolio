import { create } from "zustand";

interface Constants {
  RADIUS: number;
}

export const constants: Constants = {
  RADIUS: 2,
};

export const defaultStates = {
  isSceneDragged: false,
  sectionNumber: 0,
  isCanvasHovered: false,
  isFullScreen: false,
  isScreenHovered: false,
  isScreenOccluded: false,
  isOpenCode: false,
  isOpenDesign: false,
  mousePosition: [5, 1.08, 6.74],
  isMouseHovered: false,
  isMouseGrabbed: false,
  isMouseClicked: false,
  isHomeKeyPressed: false,
  isArrowUpKeyPressed: false,
  isArrowDownKeyPressed: false,
  isArrowLeftKeyPressed: false,
  isArrowRightKeyPressed: false,
  isScreenScrollable: false, //fire when Occluded
  isScrollingUp: false,
  isScrollingDown: false,
};

interface CanvasState {
  //scene states
  isSceneDragged: boolean;
  setIsSceneDragged: (isDragged: boolean) => void;
  sectionNumber: number
  setSectionNumber: (offset: number) => void;

  //canvas states
  isCanvasHovered: boolean;
  setIsCanvasHovered: (isHovered: boolean) => void;

  //screen states
  isFullScreen: boolean;
  setIsFullScreen: (isFull: boolean) => void;
  isScreenHovered: boolean;
  setIsScreenHovered: (isHovered: boolean) => void;
  isScreenOccluded: boolean;
  setIsScreenOccluded: (isOcclude: boolean) => void;
  progressScreen: number | null;
  setProgressScreen: (progress: number) => void;

  //html states
  isOpenCode: boolean;
  setIsOpenCode: (isOpen: boolean) => void;
  isOpenDesign: boolean;
  setIsOpenDesign: (isOpen: boolean) => void;

  //mouse states
  mousePosition: number[];
  setMousePosition: (x: number, z: number) => void;
  isMouseHovered: boolean;
  setIsMouseHovered: (isHovered: boolean) => void;
  isMouseGrabbed: boolean;
  setIsMouseGrabbed: (isGrabbed: boolean) => void;
  isMouseClicked: boolean;
  setIsMouseClicked: (isClicked: boolean) => void;

  //Home keys states
  isHomeKeyPressed: boolean;
  setIsHomeKeyPressed: (isPressed: boolean) => void;

  //Arrow keys states
  isArrowUpKeyPressed: boolean;
  setIsArrowUpKeyPressed: (isPressed: boolean) => void;
  isArrowDownKeyPressed: boolean;
  setIsArrowDownKeyPressed: (isPressed: boolean) => void;
  isArrowLeftKeyPressed: boolean;
  setIsArrowLeftKeyPressed: (isPressed: boolean) => void;
  isArrowRightKeyPressed: boolean;
  setIsArrowRightKeyPressed: (isPressed: boolean) => void;

  //FullScreen keys states
  //setIsFullScreen: () => void

  //Scroll states
  isScreenScrollable: boolean; //fire when Occluded
  setIsScreenScrollable: (isScrollable: boolean) => void;
  isScrollingUp: boolean;
  setIsScrollingUp: (isScrollUp: boolean) => void;
  isScrollingDown: boolean;
  setIsScrollingDown: (isScrollDown: boolean) => void;
}

export const useCanvasStore = create<CanvasState>()((set) => ({
  //SCENE states
  isSceneDragged: defaultStates.isSceneDragged,
  setIsSceneDragged: (isDragged) => set((state) => ({ isSceneDragged: isDragged })),
  sectionNumber: defaultStates.sectionNumber,
  setSectionNumber: (sectionN:0 | 1 | 2 | 3) =>
    set((state) => ({
      //prevent a bug where no rerender occurred because identical value, so add a small value, floor the value by the consumer
      sectionNumber: sectionN+1 === state.sectionNumber ? sectionN+1+0.001 : sectionN+1,
    })),

  //CANVAS states
  isCanvasHovered: defaultStates.isCanvasHovered,
  setIsCanvasHovered: (isHovered) => set((state) => ({ isCanvasHovered: isHovered })),

  //SCREEN states
  isFullScreen: defaultStates.isFullScreen,
  setIsFullScreen: () =>
    set((state) => ({
      isFullScreen: !state.isFullScreen,
    })),

  isScreenHovered: false,
  setIsScreenHovered: (isHovered) => set((state) => ({ isScreenHovered: isHovered })),

  isScreenOccluded: false,
  setIsScreenOccluded: (isOcclude) => set((state) => ({ isScreenOccluded: isOcclude })),

  progressScreen: defaultStates.sectionNumber,
  setProgressScreen: (progress) =>
    set((state) => ({
      progressScreen: progress,
    })),
  //HTML states
  isOpenCode: defaultStates.isOpenCode,
  setIsOpenCode: (isOpen) => set((state) => ({ isOpenCode: isOpen })),
  isOpenDesign: defaultStates.isOpenDesign,
  setIsOpenDesign: (isOpen) => set((state) => ({ isOpenDesign: isOpen })),

  //MOUSE states
  mousePosition: defaultStates.mousePosition,
  setMousePosition: (x: number, z: number) =>
    set((state) => ({
      mousePosition: [x, state.mousePosition[1], z],
    })),

  isMouseHovered: defaultStates.isMouseHovered,
  setIsMouseHovered: (isHovered) => set((state) => ({ isMouseHovered: isHovered })),

  isMouseGrabbed: defaultStates.isMouseGrabbed,
  setIsMouseGrabbed: (isGrabbed) => set((state) => ({ isMouseGrabbed: isGrabbed })),

  isMouseClicked: defaultStates.isMouseClicked,
  setIsMouseClicked: (isClicked: boolean) => set((state) => ({ isMouseClicked: isClicked })),

  //Home KEYS states
  isHomeKeyPressed: defaultStates.isHomeKeyPressed,
  setIsHomeKeyPressed: (isPressed: boolean) => set((state) => ({ isHomeKeyPressed: isPressed })),

  //Arrow KEYS states
  isArrowUpKeyPressed: defaultStates.isArrowUpKeyPressed,
  setIsArrowUpKeyPressed: (isPressed: boolean) => set((state) => ({ isArrowUpKeyPressed: isPressed })),

  isArrowDownKeyPressed: defaultStates.isArrowDownKeyPressed,
  setIsArrowDownKeyPressed: (isPressed: boolean) => set((state) => ({ isArrowDownKeyPressed: isPressed })),

  isArrowLeftKeyPressed: defaultStates.isArrowLeftKeyPressed,
  setIsArrowLeftKeyPressed: (isPressed: boolean) => set((state) => ({ isArrowLeftKeyPressed: isPressed })),

  isArrowRightKeyPressed: defaultStates.isArrowRightKeyPressed,
  setIsArrowRightKeyPressed: (isPressed: boolean) => set((state) => ({ isArrowRightKeyPressed: isPressed })),

  //SCROLL states
  isScreenScrollable: defaultStates.isScreenScrollable, //fire when Occluded
  setIsScreenScrollable: (isScrollable) => set((state) => ({ isScreenScrollable: isScrollable })),

  isScrollingUp: defaultStates.isScrollingUp,
  setIsScrollingUp: (isScrollUp) => set((state) => ({ isScrollingUp: isScrollUp })),

  isScrollingDown: defaultStates.isScrollingDown,
  setIsScrollingDown: (isScrollDown: boolean) => set((state) => ({ isScrollingDown: isScrollDown })),
}));
