import styled from 'styled-components'

export const CentralGrid = styled.section`
  display: grid;
  grid-template-columns: 30% 70%;
  width: 100%;
  min-height: 100vh;
  margin-top: 90px;
  inset: 1;
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    grid-template-columns: 50% 50%;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }
`
export const Local = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 50px;
  h1 {
    font-size: 3.2rem;
  }
  h2 {
    font-size: 2rem;
  }

  @media screen and (min-width: 1023px) and (max-width: 1280px) {
    h1 {
      font-size: 2.6rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    padding-left: 20px;
    height: 160px;
    justify-content: center;
    h1 {
      font-size: 2.4rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 767px) {
    padding-left: 0;
    h1 {
      font-size: 1.7rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`
