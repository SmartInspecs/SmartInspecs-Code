import styled from 'styled-components';

export const DashObraStyled = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: 90%;

    span{
        font-size: 1rem;
        font-weight: var(--font-weight-3);
    }

    .dash-content-box-area{
        display: flex;
        gap: 45px;
        margin-top: 1rem;
    }

    /* coluna 1 - esquerda */
    .dash-content-box-gerenciamento{
        display: flex;
        flex-direction: column;
        width: 55%;
        gap: 1.5rem;
    }

    .dash-content-boxes{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: "box1 box2"
        "box3 box4"
        "box5 box6"
        "box7 box8";
        width: 100%;
        gap:1rem;
        height:100%;
    }
    .dash-content-boxes > button{
        height: 180px;
        display:flex;
        flex-direction: column; 
        align-items: center;
        justify-content: center;
        
    }
    .box1{
        grid-area: box1;

    }
    .box2{
        grid-area: box2;

    }
    .box3{
        grid-area: box3;

    }
    .box4{
        grid-area: box4;

    }
    .box5{
        grid-area: box5;

    }
    .box6{
        grid-area: box6;

    }
    .box7{
        grid-area: box7;
    }
    .box8{
        grid-area: box8;
    }

    /* coluna 2 - direita */
    .dash-content-box-detalhes{
        display: flex;
        flex-direction: column;
        width: 45%;
    }

    .dash-content-boxes-detalhes{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1.5rem;
        background-color: var(--color-grey-0-5);
        border-radius: 8px;
        width: 90%;
    }

    .dash-detalhes-img > img{
        max-width: 397px;
        width:100%;
        margin-top: 1.5rem;
    }

    .important-info{
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        padding: 1rem;
        width: 80%;
        gap: 0.5rem;
    }

    .warning{
        background-color: red;
        border-radius: 8px;
        color: var(--white);
        font-weight: var(--font-weight-2);
        padding: 1rem;
        gap: 1rem;
    }

    .important-info-list{
        background-color: var(--color-grey-0);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        padding: 1.25rem;
        gap: 1rem;
        width:90%;
    }

    .important-info-list > span{
        display: flex;
        gap: 1rem;
        font-weight: var(--font-weight-2);
    }

    .important-info-list > span > p{
        font-weight: var(--font-weight-4);
    }

`
