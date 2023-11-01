import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;

    .dash{
        margin: 40px auto;
        width: 100%;
        max-width: 1440px;
    }

    .dash > header{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .dash > header > h2{
        font-size: 1.625rem;
        font-weight: var(--font-weight-2);
    }
    
    .dash > header > h2 > span{
        color: var(--green-destaque);
    }
`;

const StyledMenu = styled.div`
    width: 24%;
    max-width: 350px;
    height: 100vh;
    background-color: var(--color-grey-0);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    .inner-container {
        margin: 40px auto;
        width: 90%;
    }

    .side-options {
        margin-top: 36px;
        display: flex;
        flex-direction: column;
        width: 100%;
        gap:20px;
    }
    .side-option-buttom{
        display:flex;
        align-items:center;
        gap:1rem;
        padding-left:1rem;
    }

    .side-options > h3 {
        font-size: 1.125rem;
        font-weight: var(--font-weight-1);
        margin-top:20px;
    }

    .side-options > a {
        text-decoration: none;
        font-size: 0.9rem;
        margin-top: 20px;
        color: var(--color-grey-3);
    }

    .side-option {
        display: flex;
        flex-direction: column;
        gap: 20px;
    } 

    .side-option-button {
        width: 80%;
        height: 50px;
        cursor: pointer;
        background-color: transparent;
        border-radius: 8px;
        border: 2px solid var(--primary-color);
        font-size: 0.9rem;
        font-weight: var(--font-weight-2);
        font-family: 'Poppins', sans-serif;
    }

    .side-option-button:hover {
        background-color: var(--primary-color);
        color: var(--white);
        transition: 0.3s ease;
    }

    .side-option-button-selected{
        width: 80%;
        height: 50px;
        cursor: pointer;
        border-radius: 8px;
        background-color: var(--primary-color);
        color: var(--white);
        border: 2px solid var(--primary-color);
        font-size: 0.9rem;
        font-weight: var(--font-weight-2);
        font-family: 'Poppins', sans-serif;
    }
`;

const StyledLogo = styled.h2`
    font-size: 2rem;
    font-weight: var(--font-weight-1);
`
export { Container, StyledMenu, StyledLogo }