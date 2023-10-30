import styled from "styled-components";

export const StyledAgendamentoDiv = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: 90%;

    span{
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        font-weight: var(--font-weight-3);
    }

    .dash-content-box-area{
        display: flex;
        flex-direction:row;
        gap: 3rem;
        margin: 2rem 0 0 0;
    }

    .container-criar_agendamento{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #F5F5F5;
        width: 30%;
        height:20%;
        padding: 2rem 3rem;
        border-radius: 10px
        
    }

    .criar-agendamento{
        height:3.7rem;
        width: 100%;
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

    .form-agenda{
        display:flex;
        flex-direction: column;
        gap:2rem;
    }
    .form-campo {
        
        width: 100%;
        display:flex;
        flex-direction:column;
        
    }

    .campo-etiqueta {
        font-weight: var(--font-weight-2);
        line-height: 1.2rem;
    }
    
    .campo-escrita {
        
        height:2.5rem;
        border: 2px solid var(--color-grey-0-5);
        border-radius: 10px;
        background-color: #D9D9D9;
        padding: 1em;
        margin-top: .5em;
    }

    .agendar{
        height:3.7rem;
        width: 50%;
        cursor: pointer;
        border-radius: 8px;
        border: none;
        background-color: var(--primary-color);
        color: var(--white);
        font-weight: var(--font-weight-1);
        padding: 0 1rem;
        transition: 0.2s ease;

    }

    .section-title{
        font-size: 1.25rem;
        font-weight: var(--font-weight-2);
    }

    .agendamentos{
        width: 60%;
        height:100%;
        padding: 2rem;
        border-radius:10px;
        gap: 2rem;
        background-color: #F5F5F5;
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
        overflow:hidden;
    }

    .agendamentos-box > li{
        display: flex;
        justify-content:space-between;
        align-items: center;
        width: 90%;
        height: 3rem;
        margin-top: 1rem;
        gap: 1rem;
        background-color:#999999;
        border-radius: 10px;
        padding: 1rem;
        cursor:pointer;

            .atributos-agendamento{
                display:flex;
                flex-direction:column;
                gap:0.5rem;
            }
            .atributos-agendamento>span{
                font-size: 1rem;
                font-weight: var(--font-weight-2);
            }
            
    }
    .agendamentos-box > li>button{
        border: none;
        background-color:transparent;
        cursor:pointer;
        font-size:1.5rem;
        font-weight: var(--font-weight-1);
        transition: transform 0.3s ease;
    }

    .agendamentos-box > li>button:hover{
        
        transform:scale(1.5);
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