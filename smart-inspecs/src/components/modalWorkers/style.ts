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

    .modal-box-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }

    .modal-box-content > form{
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }

    .modal-content-text{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 1rem;
    }

    .modal-content-text > ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 450px;
        overflow-y: scroll;
    }

    .func-card{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border: 1px solid var(--color-grey-3);
        border-radius: 8px;
        padding: 1rem;
        gap: 1rem;
    }

    .func-card-left{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .func-card-left > span{
        display: flex;
        gap: 1rem;
    }

    .func-card-right{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        button{
            width: 100%;
            height: 45px;
            border: none;
            border-radius: 8px;
            background-color: transparent;
            color: var(--white);
            font-weight: var(--font-weight-1);
            cursor: pointer;
            transition: 0.3s ease;
        }

        button:hover{
            transform: scale(1.1);
        }

        img{
            width: 25px;
            height: 25px;
        }
    }

    .modal-content-text > ul >li > span{
        display: flex;
        gap: 1rem;
        margin-top: 0.75rem;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }

    form > input{
        height: 45px;
    }
`