import styled from 'styled-components'

export const FiltersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  margin: 20px auto 0;
  padding: 15px 25px;
  justify-items: center;
  font-size: 1.4rem;
  line-height: 1.7;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: saturate(180%) blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  input {
    cursor: pointer;
  }
  @media screen and (min-width: 819px) and (max-width: 1180px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 767px) {
    visibility: hidden;
    margin-top: 0px;
    padding: 0px;
  }
`

export const DailyFilters = styled.div`
  grid-column: 1;
  height: min-content;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const HourlyFilters = styled.div`
  grid-column: 2;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const InputCheckbox = styled.input`
  margin-right: 5px;
`

export const LabelInputCheckbox = styled.label`
  margin-left: 5px;
  font-weight: 300;
`
