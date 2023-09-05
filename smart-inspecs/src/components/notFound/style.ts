import { styled } from "styled-components";

export const Container = styled.div`
        height: 100vh;
        max-width: 1060px;
        margin: 0 auto;
        width: 100%;

        header {
            margin:0 0 3.13rem 0;
        }
        header > nav {
            align-items: center;
            display:flex;
            margin: 2.75rem 0 0 0;
            justify-content: space-between;
            
        }
        
        header > nav > .logo{
            color: var(--color-grey-3);
            font-size: 2.25rem;
            font-weight: var(--font-weight-1);
        
        }
        header > nav > ul{
            display:flex;
            gap: 3.13rem;
            
            
        }

        header > nav > ul > li{
            border-bottom: 4px solid transparent;
            list-style: none;
            paddin: 0 0.25rem;
            
        }

        header > nav > ul > li:hover {
            border-bottom: 4px solid var(--green-destaque);
            transition: 0.5s ease;
        }

        header > nav > ul > li > a{
            color: var(--color-grey-3);
            font-size: var(--subtitle-2)rem;
            font-weight: var(--font-weight-3);
            text-decoration: none;
        }

        button{
            cursor: pointer;
            font-family: 'Poppins', sans-serif;
            transition: 0.15s ease;
        }

        button:hover{
            transform: scale(1.1);
        }

        header > nav > button{
            background-color: var(--primary-color);
            border: 2px solid var(--primary-color);
            border-radius: 0.5rem;
            color: var(--white);
            font-size: 1.25rem;
            font-weight: var(--font-weight-2);
            padding: 0.5rem 1.75rem;
        }

        .error__page-content{
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 3.13rem;
            margin-bottom:3.13rem;
        }

        .error__page-content > h2{
            font-size:3rem;
            font-weight: var(--font-weight-1);
            text-shadow: 2px 5px 5px var(--color-grey-1);
        }

        .error__page-content > h1{
            font-size:12.5rem;
            font-weight: var(--font-weight-1);
            text-shadow: 2px 5px 5px var(--color-grey-1);
        }

        .error__page-content > button{
            background-color: var(--primary-color);
            border: 2px solid var(--primary-color);
            border-radius: 0.5rem;
            color: var(--white);
            font-size: 1.25rem;
            font-weight: var(--font-weight-2);
            padding: 0.5rem 8.5rem;
        }
        .division{
            border: 3px solid var(--green-destaque);
            border-radius: 8px;
            margin-top: 1rem;
        }
        .baseboard{
            display:flex;
            margin: 2.5rem 0 1rem 0 ;
            justify-content: space-between;
        }
        .networks-social__list{
            display:flex;
            margin:0.2rem 0;     
            justify-content: space-between;
            cursor:pointer;
        }
        .baseboard__list > li{
            list-style:none;
            margin: 1em 0;
            
        }
        .baseboard__title{
            font-size: 1.25rem;
            font-weight: var(--font-weight-2);
        }
        .baseboard__logo{
            color: var(--color-grey-3);
            font-size: 1.38rem;
            font-weight: var(--font-weight-1);

        }
        .baseboard__link{
            color: var(--color-grey-3);
            font-size: var(--subtitle-2)rem;
            font-weight: var(--font-weight-3);
            text-decoration:none;
        }

        .copy{
            color:var(--primary-color);
            display:flex;
            justify-content: center;
            font-weight: var(--font-weight-2);

        }

`
