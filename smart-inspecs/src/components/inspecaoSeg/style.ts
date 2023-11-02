import { styled } from "styled-components"

export const ContainerStyled = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: 90%;

    .navigation{
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        font-weight: var(--font-weight-3);
        margin-bottom: 1rem;
    }

    h3{
        font-size: 2rem;
        font-weight: var(--font-weight-2);
        line-height: 150%;
    }

    p{
        width: 80%;
        font-size: 1rem;
        font-weight: var(--font-weight-4);
        line-height: 150%;
        margin-top: 1rem;
    }

    .options{
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        font-weight: var(--font-weight-4);
        margin: 4rem 0;
    }
`
