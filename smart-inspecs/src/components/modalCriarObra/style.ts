import styled from "styled-components";

export const StyledModalWrapper = styled.div`
    position: fixed;
    inset:0;
    background-color: rgba(204, 229, 177, 0.5);
    height: 100vh;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .modal-box{
        width: 90%;
        max-width: 600px;
        background-color: var(--white);
    }
`