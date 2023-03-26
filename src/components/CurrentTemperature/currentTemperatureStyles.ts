import styled, { keyframes } from 'styled-components'

const Appear = keyframes`
0%{
  opacity: 0;
}
50%{
  opacity: 0.5;
}
100%{
  opacity: 1;
}
`
export const CurrentTemperatureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-column: 1;
  gap: 3vw;
  animation: ${Appear} 2s ease;
  @media screen and (max-width: 1023px) {
    grid-column: 2;
    gap: 5vw;
    justify-content: flex-start;
  }
  @media screen and (max-width: 430px) {
    gap: 7vw;
  }
`
export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h4 {
    font-size: 2vw;
    padding: 1vh 0;
  }
  img {
    width: 5vw;
  }

  @media screen and (max-width: 1023px) {
    justify-content: center;
    h4 {
      font-size: 2vw;
    }
    img {
      width: 7vw;
    }
  }
  @media screen and (max-width: 430px) {
    h4 {
      font-size: 4vw;
    }
    img {
      width: 8vw;
    }
  }
`

export const Temperature = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 6vw;
    text-transform: capitalize;
    line-height: 1;
  }
  @media screen and (max-width: 430px) {
    justify-content: flex-end;
    h1 {
      font-size: 10vw;
    }
  }
`

export const MaxMinTemperatureContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
  span {
    font-size: 2vw;
    padding-top: 3vh;
  }
  @media screen and (max-width: 1023px) {
    span {
      font-size: 2vw;
    }
  }
  @media screen and (max-width: 430px) {
    span {
      font-size: 3vw;
      padding-top: 1vh;
    }
  }
`
