import styled from "@emotion/styled";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Edit from "./components/Edit";
import Memo from "./interfaces/Memo";
import useMemo from "./store/memoStore";

const CardContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  align-items: center;
 `

const PlusCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  border: solid 1px #707070;
  width: 80px;
  height: 80px;
  padding-bottom: 8px;
  box-sizing: border-box;
  margin: 80px;
`

const App = () => {
  const [mode, setMode] = useState<'edit' | 'view'>('view')
  // const [memoList, setMemoList] = useState<Memo[]>([])

  const { setSelectedIdx, memoList, clear } = useMemo();
  // const [selectedMemoIdx, setSelectedMemoIdx] = useState<number | null>(null)


  // cookie
  // useEffect(() => {
  //   const memo = JSON.parse((Cookies.get('memo') ?? null)!)
  //   const memoList: Memo[] = memo ?? [];
  //   setMemoList(memoList)
  // }, [mode])

  // local
  // useEffect(() => {
  //   const memo = JSON.parse((localStorage.getItem('memo') ?? null)!)
  //   const memoList: Memo[] = memo ?? [];
  //   setMemoList(memoList)
  // }, [mode])


  return (
    <>
      {
        mode === "view" &&
        < CardContainer >
          {
            memoList.map((memo, idx) => <Card
              key={idx}
              onClick={() => {
                setSelectedIdx(idx)
                setMode('edit')
              }}
              title={memo.title} />)
          }
          <PlusCard onClick={() => {
            setSelectedIdx(null)
            setMode("edit")
          }} >+</PlusCard>
          <PlusCard onClick={() => {
            setSelectedIdx(null)
            clear()
            // setMemoList([])
            // Cookies.remove('memo')
          }} >x</PlusCard>
        </ CardContainer >
      }
      {
        mode === "edit" &&
        // <Edit setMode={setMode} memoIdx={selectedMemoIdx} />
        <Edit setMode={setMode} />
      }
    </>
  )
}

export default App