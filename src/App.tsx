import styled from "@emotion/styled";
import { useState } from "react";
import Card from "./components/Card";
import Edit from "./components/Edit";


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

  return (
    <>
      {/* {
        mode === "view" ?
          < CardContainer >
            <Card title='hello' />
            <Card title='hello' />
            <Card title='hello' />
            <Card title='hello' />
            <Card title='hello' />
            <Card title='hello' />
            <Card title='hello' />
            <Card title='hello' />
            <PlusCard onClick={() => setMode("edit")} >+</PlusCard>
          </ CardContainer > : <Edit />
      }
      {
        mode === "edit" &&
        <Edit />
      } */}
      {
        mode === "view" &&
        < CardContainer >
          <Card title='hello' />
          <Card title='hello' />
          <Card title='hello' />
          <Card title='hello' />
          <Card title='hello' />
          <Card title='hello' />
          <Card title='hello' />
          <Card title='hello' />
          <PlusCard onClick={() => setMode("edit")} >+</PlusCard>
        </ CardContainer >
      }
      {
        mode === "edit" &&
        <Edit />
      }
    </>

  )

}

export default App