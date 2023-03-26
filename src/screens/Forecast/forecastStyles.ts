import styled from 'styled-components'

export const CentralGrid = styled.section`
  display: grid;
  grid-template-columns: 45% 60%;
  width: 100%;
  padding: 0 3vw;
  margin: 0 auto;
  gap: 5vh 0;
  inset: 1;
  justify-items: center;
  justify-content: center;
  @media screen and (max-width: 1023px) {
    grid-template-columns: 50% 50%;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
    padding: 0 3vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4vh;
  }
`
export const Local = styled.div`
  grid-column: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    font-size: 5vw;
  }
  h2 {
    font-size: 3vw;
  }

  @media screen and (max-width: 1023px) {
    justify-content: center;
  }
  @media screen and (max-width: 430px) {
    h1 {
      font-size: 7vw;
    }
    h2 {
      font-size: 5vw;
    }
  }
`
