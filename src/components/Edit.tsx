import styled from "@emotion/styled";
import Button from "./Button";

const TitleInput = styled.input``

const ContentInput = styled.textarea``

const EditContainer = styled.div`
    display: flex;
    gap:16px;
    flex-direction: column;
`

const Edit = () => {

    return (< >
        <EditContainer >
            <TitleInput />
            <ContentInput />
            <Button>뒤로가기</Button>
        </EditContainer>
    </>)
}

export default Edit  