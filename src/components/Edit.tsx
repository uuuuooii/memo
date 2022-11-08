import { useState } from "react";
import styled from "@emotion/styled";
import Button from "./Button";


const TitleInput = styled.input``

const ContentInput = styled.textarea`
    height: 360px;
`

const EditContainer = styled.div`
    display: flex;
    gap:16px;
    flex-direction: column;
`
const ButtionContainer = styled.div`
    display: flex;
    gap:16px;
    
`
interface EditProps {
    setMode: (mode: 'edit' | 'view') => void;
}

const Edit = ({ setMode }: EditProps) => {
    const [contents, setContents] = useState('')
    const [title, setTitle] = useState('')

    return (< >
        <EditContainer >
            <TitleInput value={title} onChange={e => setTitle(e.currentTarget.value)} />
            <ContentInput value={contents} onChange={e => setContents(e.currentTarget.value)} />
            {/* <div className="a"> */}
            <ButtionContainer>
                <Button onClick={() => setMode("view")}>뒤로가기</Button>
                <Button>저장</Button>
            </ButtionContainer>
            {/* </div> */}
        </EditContainer>
    </>)
}

export default Edit  