import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1060px;
    margin: 0 auto;
    height: 100vh;

    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2.75rem;
    }

    nav > ul {
        display: flex;
        gap: 50px;
    }

    nav > ul > li:hover{
        border-bottom: 4px solid var(--green-destaque);
        transition: 0.15s ease;
    }
    
    a{
        text-decoration: none;
        color: var(--color-grey-3);
        font-size: var(--subtitle-2)rem;
        font-weight: var(--font-weight-3);
    }
    
    .logo{
        color: var(--color-grey-3);
        font-size: 2.25rem;
        font-weight: var(--font-weight-1);
    }

    nav > button{
        background-color: var(--primary-color);
        border: 2px solid var(--primary-color);
        padding: 0.5rem 1.75rem;
        color: var(--white);
        font-size: 1.25rem;
        font-weight: var(--font-weight-2);
        border-radius: 0.5rem;
        cursor: pointer;
    }

    .callToAction{
        margin-top: 5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .callToActionRight{
        margin-left: 2rem;
    }

    .callToAction__title{
        font-size: 2.625rem;
        font-weight: var(--font-weight-1);
    }

    
`