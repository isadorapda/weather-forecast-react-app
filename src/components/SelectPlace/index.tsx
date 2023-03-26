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
const mobileBreakpoint = 430
const laptopBreakpoint = 1024
const width = window.innerWidth
export const typoSize = () => {
  if (width <= mobileBreakpoint) {
    return '3.5vw'
  } else if (width > mobileBreakpoint && width <= laptopBreakpoint) {
    return '2vw'
  } else {
    return '1vw'
  }
}

const customStyles: StylesConfig<Option> = {
  menu: (provided) => ({
    ...provided,
    backgroundColor: ' rgba(255, 255, 255, 0.6)',
    borderRadius: '12px',
    backdropFilter: 'saturate(180%) blur(5px)',
    WebkitBackdropFilter: ' blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    fontSize: `${typoSize()}`,
    color: 'black',
  }),
  option: (provided) => ({
    ...provided,
    borderRadius: '6px',
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
    fontSize: `${typoSize()}`,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'white',
  }),
}

export const InputSelectContainer: React.FC = () => {
  const { setSearchPlace, searchPlace } = useContext(WeatherContext)

  return (
    <SelectContainer>
      <CreatableSelect
        options={PLACES}
        styles={customStyles}
        isMulti={false}
        value={PLACES.find((place) => place.value === searchPlace)}
        onChange={(newPlace) => {
          newPlace ? setSearchPlace(newPlace.value) : ''
        }}
        isClearable
      />
    </SelectContainer>
  )
}
