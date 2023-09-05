import { styled } from "styled-components"

export const DashContent = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: 90%;

    .section-title{
        margin-top: 1rem;
        font-weight: var(--font-weight-2);
    }

    .dash-content-boxes{
        margin-top: 32px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    .dash-obras{
        margin-top: 32px;
    }

    .dash-content-box{
        height: 180px;
    }

    .obras-wrapper{
        background-color: var(--color-grey-0);
        margin-top: 1rem;
        padding: 16px;
    }
`