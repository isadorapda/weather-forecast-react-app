import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    a{
        text-decoration: none;
        color: black;
    }
    body{
        font-family: 'IBM Plex Sans', sans-serif;
        .parallax{
            height: 200vh;
            width: 100vw;

        }
        .wrapper{
            position: absolute;
            inset: 0;
            z-index: 10;
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15vh;
            padding: 10vh 0;
              @media screen and (max-width:430px){
                 padding: 5vh 3vw;
                 width: 100%;
                 gap: 5vh;
                }
        }
    }
    h1, h2,h3,h4{
        font-weight: 400;
        line-height: 2;
       
    }
   h1{
    font-size: 2.2rem;
    }
    h2{
        font-size: 1.5rem;
    }
  
}
`

export default GlobalStyle
