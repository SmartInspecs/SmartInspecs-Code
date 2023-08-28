import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

const Menu = styled.div`
    width: 24%;
    height: 100vh;
    background-color: var(--color-grey-0);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    .inner-container {

    }
`;

export { Container, Menu }