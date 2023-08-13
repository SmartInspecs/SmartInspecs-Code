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

    button{
        transition: 0.15s ease;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
    }

    button:hover{
        transform: scale(1.1);
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
    }

    .callToAction{
        margin-top: 5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .callToAction--Right{
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .callToAction__title{
        font-size: 2.625rem;
        font-weight: var(--font-weight-1);
        line-height: 150%;
    }

    .callToAction__subtitle{
        font-size: 1.25rem;
        line-height: 150%;
    }

    .callToAction--Right__buttons{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    
    .callToAction--Right__buttons__teste{
        background-color: var(--primary-color);
        border: 2px solid var(--primary-color);
        border-radius: 0.5rem;
        width: 45%;
        height: 46px; 
        color: var(--white);
        font-weight: var(--font-weight-2);
        font-size: 1.25rem;
    }
    .callToAction--Right__buttons__conheca{
        background-color: none;
        border: 2px solid var(--primary-color);
        border-radius: 0.5rem;
        width: 45%;
        height: 46px; 
        color: var(--primary-color);
        font-weight: var(--font-weight-2);
        font-size: 1.25rem;
    }

    .division{
        width: 100%;
        display: flex;
        align-items: center;
    }

    .division > hr{
        border: 3px solid var(--green-destaque);
        border-radius: 8px;
        width: 40%;
    }

    .division > span{
        font-size: 1.25rem;
        font-weight: var(--font-weight-2);
    }

    .solutions{
        margin-top: 3rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .solutions__cards{
        width: 30%;
        height: 276px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--green-destaque);
        border-radius: 1rem;
        gap: 1.5rem;
        transition: 0.15s ease;
    }

    .solutions__cards:hover{
        transform: scale(1.05);
    }
    .solutions__cards > img{
        padding-top: 1rem;
    }

    .solutions__cards__title{
        width: 80%;
        text-align: center;
        font-size: 1.25rem;
        font-weight: var(--font-weight-1);
        line-height: 150%;
    }

    .aboutUs{
        margin-top: 9rem;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        width: 100%;
    }

    .aboutUs__card{
        display: flex;
        align-items: center;
        gap: 2.5rem;
    }

    .aboutUs_card_text{
        width: 60%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .aboutUs__card__text__title{
        font-size: 2.5rem;
        font-weight: var(--font-weight-1);
    }

    .aboutUs__card__text__subtitle{
        font-size: 1rem;
        font-weight: var(--font-weight-3);
        line-height: 150%;
    }
`