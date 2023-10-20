import styled from "styled-components";

export const StyledModalWrapper = styled.div`
    position: fixed;
    inset:0;
    background-color: rgba(204, 229, 177, 0.5);
    height: 100vh;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .modal-box{
        width: 100%;
        max-width: 600px;
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-radius: 16px;
        
    }

    .modal-box-header{
        padding: 1rem;
        width: 95%;
        display: flex;
        justify-content: space-between;
    }

    .modal-title{
        font-weight: var(--font-weight-1);
    }
    
    
    .modal-box-content{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem;
        gap: 24px;
    }

    /* .modal-box-content > form{
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }

    progress{
        width: 100%;
        color: var(--primary-color);
    } */

    .modal-box-content-img{
        width: 60%;
    }

    .modal-box-content-info{
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .img-modal{
        width: 100%;
        height: 40%;
        object-fit: cover;
    }
`