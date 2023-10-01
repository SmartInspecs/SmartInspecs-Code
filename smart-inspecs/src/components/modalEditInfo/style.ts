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
        width: 100%;
        max-width: 600px;
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
        padding: 1rem;
    }

    .modal-box-header{
        padding: 1rem;
        width: 95%;
        display: flex;
        justify-content: space-between;
    }

    .modal-title{
        font-weight: var(--font-weight-1);
    }

    .modal-button{
        border: none;
        background-color:transparent;
        cursor:pointer;
        font-size:1rem;
        font-weight: var(--font-weight-1);
        transition: transform 0.3s ease;
    }

    .modal-button:hover{
        transform:scale(1.5);
    }

    .modal-box-content > form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .modal-box-content > form > button{
        margin: 1rem 0rem;
        height: 45px;
        width: 90%;
        background-color: var(--primary-color);
        border-radius: 8px;
        border: 2px solid var(--primary-color);
        font-size: 1rem;
        color: var(--white);
        font-weight: var(--font-weight-2);
        cursor: pointer;
        transition: 0.3s ease;
    }

    .modal-box-content > form > button:hover{
        transform: scale(1.1);
    }
`