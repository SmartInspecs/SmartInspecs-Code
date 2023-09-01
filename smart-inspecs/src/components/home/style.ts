import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;

    .dash{
        margin: 40px;
        width: 100%;
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
`;

const StyledLogo = styled.h2`
    font-size: 2rem;
    font-weight: var(--font-weight-1);
`
export { Container, StyledMenu, StyledLogo }