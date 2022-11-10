import styled from "@emotion/styled";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Edit from "./components/Edit";
import Memo from "./interfaces/Memo";

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
  console.log(Cookies.get('memo'))

  const [mode, setMode] = useState<'edit' | 'view'>('view')
  const [memoList, setMemoList] = useState<Memo[]>([])
  const [selectedMemo, setSelectedMemo] = useState<Memo | null>(null)

  useEffect(() => {
    const memo = JSON.parse((Cookies.get('memo') ?? null)!)
    const memoList: Memo[] = memo ?? [];
    setMemoList(memoList)
  }, [mode])

  return (
    <>
      {
        mode === "view" &&
        < CardContainer >
          {
            memoList.map(memo => <Card title={memo.title} />)
          }
          <PlusCard onClick={() => setMode("edit")} >+</PlusCard>
        </ CardContainer >
      }
      {
        mode === "edit" &&
        <Edit setMode={setMode} />
      }
    </>
  )
}

export default App