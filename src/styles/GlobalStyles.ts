import styled, { createGlobalStyle } from 'styled-components'

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

export const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default GlobalStyle
