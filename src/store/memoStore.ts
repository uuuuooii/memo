import create from "zustand";
import Memo from "../interfaces/Memo";

interface MemoState {
  memoList: Memo[];
  selectedIdx: number | null;
  addMemoList: (memo: Memo) => void;
  clear: () => void;
  setSelectedIdx: (idx: number | null) => void;
  editMemo: (idx: number, memo: Memo) => void;
}

const useMemo = create<MemoState>((set) => ({
  selectedIdx: null,
  memoList: JSON.parse((localStorage.getItem("memo.memoList") ?? null)!) ?? [],

  setSelectedIdx: (idx: number | null) => {
    set({ selectedIdx: idx });
  },
  addMemoList: (memo: Memo) => {
    set((prev) => {
      const memoList = [...prev.memoList, memo];
      localStorage.setItem("memo.memoList", JSON.stringify(memoList));

      return {
        memoList,
      };
    });
  },
  clear: () => {
    set({
      memoList: [],
    });
    localStorage.setItem("memo.memoList", "[]");
  },
  editMemo: (idx: number, memo: Memo) => {
    set(({ memoList }) => {
      memoList[idx] = memo;
      localStorage.setItem("memo.memoList", JSON.stringify(memoList));
      return { memoList };
    });
  },
}));

export default useMemo;
