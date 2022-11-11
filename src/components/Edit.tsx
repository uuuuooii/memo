import { useState } from "react";
import styled from "@emotion/styled";
import Button from "./Button";
import Cookies from "js-cookie";
import Memo from "../interfaces/Memo";

const TitleInput = styled.input`
`

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
    memoIdx: number | null;
}

const Edit = ({ setMode, memoIdx }: EditProps) => {
    const [title, setTitle] = useState(() => {
        if (Number.isInteger(memoIdx)) {
            const memo = JSON.parse((Cookies.get('memo') ?? null)!)
            const memoList: Memo[] = memo ?? []
            return memoList[memoIdx as number].title
        }
        return ''
    })
    const [contents, setContents] = useState(() => {
        if (Number.isInteger(memoIdx)) {
            const memo = JSON.parse((Cookies.get('memo') ?? null)!)
            const memoList: Memo[] = memo ?? []
            return memoList[memoIdx as number].contents
        }
        return ''
    })

    return (< >
        <EditContainer >
            <TitleInput value={title} onChange={e => setTitle(e.currentTarget.value)} />
            <ContentInput value={contents} onChange={e => setContents(e.currentTarget.value)} />
            {/* <div className="a"> */}
            <ButtionContainer>
                <Button onClick={() => setMode("view")}>뒤로가기</Button>
                <Button onClick={() => {
                    if (!(title.length && contents!.length)) {
                        alert("제목과 내용을 적어주세요.")
                        return;
                    }

                    const memo = JSON.parse((Cookies.get('memo') ?? null)!)
                    const memoList = memo ?? [];

                    if (Number.isInteger(memoIdx))
                        memoList[memoIdx as number] = {
                            title,
                            contents
                        }
                    else
                        memoList.push({
                            title,
                            contents
                        })

                    Cookies.set('memo', JSON.stringify(memoList))
                    alert('저장 되었습니다')
                    setMode("view")
                }
                }>저장</Button>
            </ButtionContainer>
            {/* </div> */}
        </EditContainer>
    </>)
}

export default Edit  