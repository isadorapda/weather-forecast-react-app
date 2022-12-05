import React, { useContext } from 'react'

import CreatableSelect from 'react-select/creatable'
import { StylesConfig } from 'react-select'

import { PLACES } from '../../constants/places'
import { WeatherContext } from '../../context/WeatherContext'
import { SelectContainer } from './selectPlaceStyles'

type Option = {
  value: string
  label: string
  country: string
  longitude: number
  latitude: number
  timezone: string
}

export type Options = Array<Option>

const customStyles: StylesConfig<Option> = {
  menu: (provided) => ({
    ...provided,
    backgroundColor: ' rgba(255, 255, 255, 0.6)',
    borderRadius: '12px',
    backdropFilter: 'saturate(180%) blur(5px)',
    WebkitBackdropFilter: ' blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    fontSize: '1.3rem',
  }),
  container: (provided) => ({
    ...provided,
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
    fontSize: '1.3rem',
    padding: '4px 5px',
  }),
}

export const InputSelectContainer: React.FC = () => {
  const { setSearchPlace } = useContext(WeatherContext)

  return (
    <SelectContainer>
      <CreatableSelect
        options={PLACES}
        styles={customStyles}
        isMulti={false}
        onChange={(newPlace) => {
          newPlace ? setSearchPlace(newPlace!.value) : ''
        }}
        placeholder="Select city"
        isClearable
      />
    </SelectContainer>
  )
}
