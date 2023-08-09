import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    list-style: none;
  }
  input{
    margin:0;
    padding:0;
  }

  :root{

    /* Primary colors */
    --primary-color: #006400;
    --green-1: #00AA77;
    --green-2: #66CC99;
    --green-destaque:#9ACD32;
    --green-sutil: #CCE5B1; //50% para modal

    /* Color-grey */
    --white: #fff;
    --color-grey-0: #F5F5F5;
    --color-grey-0-5: #D9D9D9;
    --color-grey-1: #999999; 
    --color-grey-2: #666666 ;
    --color-grey-3: #333333;
    --hover-text: #003300;
    --black: #000;

    /* Font-weight */
    --font-weight-1: 700;
    --font-weight-2: 600; 
    --font-weight-3: 500; 
    --font-weight-4: 400;

    /* Font-size (rem)*/
    --title: 2.625; //(42px)
    --subtitle: 1.625; // (26px)
    --subtitle-2: 1.25; // (20px)
    --text: 1; //(16px)
    --sub-text: 0.625; // (10px)
}`

export default GlobalStyle;