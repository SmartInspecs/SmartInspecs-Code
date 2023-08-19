import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 555px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

    .logo {
        color: var(--color-grey-3);
        font-size: 2.625rem;
        font-weight: var(--font-weight-1);
        line-height: 150%;
    }

    .wrapper{
        margin-top: 5rem;
        width: 100%;
        background-color: var(--color-grey-0);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 42px 0px;
        box-shadow: 0px 16px 28px 0px rgba(149, 157, 165, 0.20);
        border-radius: 1rem;
    }

    .wrapper > form{
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

