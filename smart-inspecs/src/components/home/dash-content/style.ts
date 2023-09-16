import { styled } from "styled-components"


export const DashContent = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: 90%;

    .section-title{
        font-weight: var(--font-weight-2);
        margin-top: 1rem;
        
    }

    .dash-content-boxes{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        margin-top: 32px;
    }

    .dash-obras{
        margin-top: 32px;
    }

    .dash-content-box{
        background-color:#d9d9d9;
        height: 180px;
        border-radius: 5px;
        border: none;
        cursor:pointer;
        display:flex;
        flex-direction: column; 
        align-items: center;
        justify-content:center;
        
        
    }
   

    .obras-wrapper{
        background-color: var(--color-grey-0);
        border-radius: 8px;
        display: flex;
        overflow-x: scroll;
        gap: 24px;
        padding: 16px;
        margin-top: 1rem;
    }

`