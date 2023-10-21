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
        border-radius: 1rem;
        padding: 2rem;
    }

    .modal-box-header{
        padding: 1rem;
        width: 95%;
        display: flex;
        justify-content: space-between;
    }

    .modal-title{
        font-size: 1.25rem;
        font-weight: var(--font-weight-1);
    }

    .button-close{
        border: none;
        background-color:transparent;
        cursor:pointer;
        font-size: 1.25rem;
        font-weight: var(--font-weight-1);
        transition: transform 0.3s ease;
    }
    
    .button-close:hover{
        transform:scale(1.5);
    }

    

    .modal-box-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }

    .modal-box-content > form{
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }

    .modal-content-text{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 1rem;
    }

    .modal-content-text > ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
        width: 100%;
        
    }

    .button-modal{
        height:3.7rem;
        width: 70%;
        cursor: pointer;
        border-radius: 8px;
        border: none;
        background-color: var(--primary-color);
        color: var(--white);
        font-weight: var(--font-weight-1);
        padding: 0 1rem;
        transition: 0.2s ease;
        font-size: 1rem;
    }
    
    .button-modal:hover{
        transform:scale(1.1);
    }

    .func-list{
        overflow: hidden;
    }

    .func-card{
        display: flex;
        flex-direction: row;
        width: 95%;
        justify-content: space-between;
        background-color:#999999;
        border-radius: 10px;
        padding: 1rem ;
        gap: 1rem;
        

        
    }

    .func-card-left{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-size: 1rem;
        font-weight: var(--font-weight-2);

    }

    .func-card-left > span{
        display: flex;
        gap: 1rem;
    }

    .func-card-right{
        display: flex;
        flex-direction: column;
        


        button{
            width: 100%;
            height: 45px;
            border: none;
            
            background-color: transparent;
            cursor: pointer;
            transition: 0.3s ease;
        }

        button:hover{
            transform: scale(1.1);
        }

        
    }

    .modal-content-text > ul >li > span{
        display: flex;
        gap: 1rem;
        margin-top: 0.75rem;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }
    .form-campo{
        display: flex;
        flex-direction: column;
    }
    .campo-etiqueta {
        font-weight: var(--font-weight-1);
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
    form>button{
        align-self:center;
    }

`