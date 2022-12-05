import styled from 'styled-components'

export const Form = styled.form`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 767px) and (max-width: 1180px) {
    width: 80vw;
  }
  @media screen and (max-width: 767px) {
    width: 80vw;
  }
`

export const ButtonsContainer = styled.div`
  width: 100%;
  margin: 10px auto 0;
  display: flex;
  justify-content: flex-end;
  position: relative;
  @media screen and (max-width: 767px) {
    gap: 10px;
  }
`

export const Btn = styled.button<{ bgColor: string }>`
  padding: 7px 10px;
  min-width: 100px;
  border-radius: 6px;
  margin-top: 10px;
  margin-right: 10px;
  font-size: 1.3rem;
  cursor: pointer;
  background-color: ${({ bgColor }) =>
    bgColor === 'search'
      ? 'rgba(255, 255, 255, 0.4)'
      : 'rgba(255, 255, 255, 0.9)'};
  border: ${({ bgColor }) =>
    bgColor === 'search'
      ? '1px solid rgba(255, 255, 255, 0.6)'
      : '1px solid rgb(255, 255, 255)'};
  @media screen and (max-width: 767px) {
    padding: 3px 8px;
    min-width: 70px;
    margin-top: 0px;
    margin-right: 0px;
    font-size: 1rem;
  }
`
