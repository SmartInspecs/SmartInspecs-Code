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
        flex-direction: column;
        align-items: center;
    }

    .modal-box-content > form{
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }

    progress{
        width: 100%;
        color: var(--primary-color);
    }
`

export const customButtonStyle = {
    backgroundColor: "#006400",
    color: "white",
    padding: "10px",
    fontWeight: "600",
    fontSize: "24px",
  };

  export const customButtonStyleSecondary = {
    backgroundColor: "#fff",
    color: "#006400",
    border: "1px solid #006400",
    padding: "10px",
    fontWeight: "600",
    fontSize: "24px",
  };