import styled from 'styled-components'

export const Form = styled.form`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 80vw;
  }
`

export const ButtonsContainer = styled.div`
  width: 100%;
  margin: 2vh auto 0;
  display: flex;
  justify-content: flex-end;
  position: relative;
  gap: 2vw;
  @media screen and (max-width: 767px) {
    gap: 3vw;
  }
`

export const Btn = styled.button<{ bgColor: string }>`
  padding: 1vh 2vw;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.5vw;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  background-color: ${({ bgColor }) =>
    bgColor === 'clear'
      ? 'rgba(255, 255, 255, 0.4)'
      : 'rgba(255, 255, 255, 0.9)'};
  border: ${({ bgColor }) =>
    bgColor === 'clear'
      ? '1px solid rgba(255, 255, 255, 0.6)'
      : '1px solid rgb(255, 255, 255)'};
  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    scale: 1.03;
  }
  @media screen and (max-width: 767px) {
    font-size: 2vw;
  }
  @media screen and (max-width: 430px) {
    font-size: 2.5vw;
    padding: 1vh 4.5vw;
  }
`
