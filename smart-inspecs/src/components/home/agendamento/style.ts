import styled from "styled-components";

export const StyledAgendamentoDiv = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: 90%;

    span{
        font-size: 1rem;
        font-weight: var(--font-weight-3);
    }

    .dash-content-box-area{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 45px;
        margin-top: 2rem;
    }

    .criar-agendamento{
        height:45px;
        cursor: pointer;
        border-radius: 8px;
        border: none;
        background-color: var(--primary-color);
        color: var(--white);
        font-weight: var(--font-weight-1);
        padding: 0 1rem;
        transition: 0.2s ease;
    }

    .criar-agendamento:hover{
        transform: scale(1.05);
    }

    .section-title{
        font-size: 1.25rem;
        font-weight: var(--font-weight-2);
    }

    .agendamentos{
        width: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .agendamentos-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        width: 100%;
        height: 100%;
        margin-top: 1rem;
        gap: 1rem;
        height:100px;
        max-height: 400px;
        overflow-y: auto;
    }

    .agendamentos-box > li{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 90%;
        height: 100%;
        margin-top: 1rem;
        gap: 1rem;
        border: 2px solid var(--color-grey-0-5);
        padding: 1rem;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    form > input{
        height: 33px;
        width: 100%;
    }
    
` 