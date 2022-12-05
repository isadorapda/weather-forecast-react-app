import React from 'react'
import styled from 'styled-components'
import Select, { StylesConfig } from 'react-select'

import { FILTERS_DAILY, FILTERS_HOURLY } from '../../constants/searchFilters'

type Option = {
  value: string
  label: string
}
export type Options = Array<Option>

type SelectProps = {
  setSelectedFilterByDailyValue: (newValue: string[]) => void
  setSelectedFilterByHourlyValue: (newValue: string[]) => void
}

const customStyles: StylesConfig<Option> = {
  menu: (provided) => ({
    ...provided,
    backgroundColor: ' rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    boxShadow: ' 0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'saturate(180%) blur(5px)',
    WebkitBackdropFilter: ' blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  }),
  container: (provided) => ({
    ...provided,
    margin: '10px auto',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  }),

  control: (provided) => ({
    ...provided,
    backgroundColor: ' rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    backdropFilter: 'saturate(180%) blur(5px)',
    WebkitBackdropFilter: ' blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: ' rgba(255, 255, 255, 0.6)',
    fontSize: '1rem',
    borderRadius: '6px',
  }),
}

const SelectConatiner = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    align-items: center;
    width: 100%;
  }
`

export const SelectFilters: React.FC<SelectProps> = ({
  setSelectedFilterByDailyValue,
  setSelectedFilterByHourlyValue,
}) => {
  return (
    <SelectConatiner>
      <Select
        options={FILTERS_DAILY}
        isMulti
        styles={customStyles}
        onChange={(selectedItemsArray) => {
          setSelectedFilterByDailyValue(
            selectedItemsArray.map(({ value }) => value)
          )
        }}
        placeholder="Select Daily Filters"
      />
      <Select
        options={FILTERS_HOURLY}
        isMulti
        styles={customStyles}
        onChange={(selectedItemsArray) => {
          setSelectedFilterByHourlyValue(
            selectedItemsArray.map(({ value }) => value)
          )
        }}
        placeholder="Select Hourly Filters"
      />
    </SelectConatiner>
  )
}
