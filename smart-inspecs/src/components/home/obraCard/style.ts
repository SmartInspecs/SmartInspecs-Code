import { styled } from "styled-components";

export const Card = styled.li`
    width: 250px;
    background-color: var(--color-grey-0-5);
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    border-radius: 8px;

    img{
        height: 178px;
    }
    .img{
        width: 90%;
        height: 178px;
        background-color: var(--color-grey-3);
        border-radius: 8px;
    }

    .bottom-card{
        display: flex;
        flex-direction: column;
        width: 90%;
        gap: 12px;
    }

    .buttons{
        display: flex;
        justify-content: space-between;
    }

    button{
        border-radius: 8px;
        height: 37px;
        width: 90px;
        cursor: pointer;
    }

    .primary-button{
        background-color: var(--primary-color);
        border: 2px solid var(--primary-color);
        color: var(--white);
    }

    .secondary-button{
        background-color: var(--color-grey-0);
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
    }

    .bottom-card-edit{
        font-size: 12px;
    }
`