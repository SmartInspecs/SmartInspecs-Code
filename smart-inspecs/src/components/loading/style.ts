import { styled } from "styled-components";

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 500px;
    margin: 0 auto;
    gap: 3rem;

    h1 {
        font-size: 3rem;
        font-weight: 700;
    }

    @keyframes spin {
     0% { transform: rotate(0deg); }
     100% { transform: rotate(360deg); }
    }

    .loading-spinner {
    border: 6px solid #f3f3f3;
    border-top: 6px solid #006400;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
    }
`;

