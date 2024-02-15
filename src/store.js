import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set, get) => ({
  type: 'Linear',
  rotation: 0,
  stopsArr: [
    { color: '#681193', position: 0 },
    { color: '#4542C9', position: 0.51 },
    { color: '#2472FC', position: 1 },
  ],
  activeStop: 0,
  randomCalls: 0,
  showCopyModal: false,
  draggable: false,
  setDraggable: (draggable) => {
    set({ draggable }), false, 'setDraggable';
  },
  setShowCopyModal: () =>
    set(
      (old) => ({ showCopyModal: !old.showCopyModal }),
      false,
      'setShowCopyModal'
    ),
  setType: (type) => set({ type }, false, 'setType'),
  setRotation: (rotation) => set({ rotation }, false, 'setRotation'),
  setActiveStop: (activeStop) => set({ activeStop }, false, 'setActiveStop'),
  setColor: (color) => {
    const updatedStopsArr = [...get().stopsArr];
    updatedStopsArr[get().activeStop].color = color;
    set({ stopsArr: updatedStopsArr }, false, 'setColor');
  },
  setPosition: (position) => {
    const updatedStopsArr = [...get().stopsArr];
    updatedStopsArr[get().activeStop].position = position;
    set({ stopsArr: updatedStopsArr }, false, 'setPosition');
  },
  setRandomGradient: (stopsArr) => {
    set(
      { stopsArr, rotation: 90, randomCalls: get().randomCalls + 1 },
      false,
      'setRandomGradient'
    );
  },
  addStop: (color, position) => {
    const updatedStopsArr = [...get().stopsArr];
    let index = 0;
    for (let i = 0; i < updatedStopsArr.length; i++) {
      const currentPos = updatedStopsArr[i].position;
      if (position > currentPos) {
        index = i + 1;
      }
    }
    updatedStopsArr.splice(index, 0, { color: color, position: position });
    set({ stopsArr: updatedStopsArr }, false, 'setPosition');
  },
});

const useStore = create(devtools(store));

export default useStore;
