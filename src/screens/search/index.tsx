import React, { useContext } from 'react'

import { PLACES } from '../../constants/places'
import { SEARCH_WEATHER_BASE_API } from '../../constants/search'
import { WEATHER_INFOS } from '../../constants/weatherInfos'

import { InputSelectContainer } from '../../components/SelectPlace'
import { CheckboxFilters } from '../../components/checkbox/CheckboxFilters'
import { Btn, ButtonsContainer, Form } from './searchStyles'

import { WeatherContext } from '../../context/WeatherContext'

export const Search: React.FC = () => {
  const { searchPlace, setWeather } = useContext(WeatherContext)
  const [selectedFilterByDailyValue, setSelectedFilterByDailyValue] =
    React.useState<string[]>([])
  const [selectedFilterByHourlyValue, setSelectedFilterByHourlyValue] =
    React.useState<string[]>([])
  const [temperatureUnit, setTemperatureUnit] = React.useState<string>('')

  function toggleSelectedByDailyValue(value: string) {
    if (selectedFilterByDailyValue.includes(value)) {
      setSelectedFilterByDailyValue((prevState) =>
        prevState.filter((selectedFilterValue) => selectedFilterValue !== value)
      )
    } else {
      setSelectedFilterByDailyValue([...selectedFilterByDailyValue, value])
    }
  }

  function toggleSelectedByHourlyValue(value: string) {
    if (selectedFilterByHourlyValue.includes(value)) {
      setSelectedFilterByHourlyValue((prevState) =>
        prevState.filter((selectedFilterValue) => selectedFilterValue !== value)
      )
    } else {
      setSelectedFilterByHourlyValue([...selectedFilterByHourlyValue, value])
    }
  }
  const onResetHandler = () => {
    setSelectedFilterByDailyValue([])
    setSelectedFilterByHourlyValue([])
    setWeather(WEATHER_INFOS)
  }

  const onSubmitHandler = async (e: any) => {
    e.preventDefault()
    const foundPlace = PLACES.find(
      (local) => local.value === searchPlace.toLowerCase()
    )!

    const url = new URL(SEARCH_WEATHER_BASE_API)
    const selectedFiltersHourly = selectedFilterByHourlyValue.join(',')
    const selectedFiltersDaily = selectedFilterByDailyValue.join(',')
    const params = new URLSearchParams(url.search)
    params.set('latitude', `${foundPlace.latitude}`)
    params.set('longitude', `${foundPlace.longitude}`)
    if (selectedFiltersDaily) {
      params.set('daily', 'weathercode,' + selectedFiltersDaily)
    }
    if (selectedFiltersHourly) {
      params.set('hourly', 'weathercode,' + selectedFiltersHourly)
    }
    params.set('current_weather', 'true')
    if (temperatureUnit === 'fahrenheit') {
      params.set('temperature_unit', 'fahrenheit')
    }
    params.set('timezone', `${foundPlace.timezone}`)

    const response = await fetch(`
        ${url}${params.toString().replaceAll('%2C', ',')}`)
    const data = await response.json()
    const hourlyINFO = data.hourly ?? null

    const dailyINFO = data.daily ?? null
    const currentWeather = data.current_weather
    const hourlyUnits = data.hourly_units
    const dailyUnits = data.daily_units

    setWeather({
      placeName: foundPlace.label,
      country: foundPlace.country,
      latitude: data.latitude,
      longitude: data.longitude,
      hourlyINFO,
      dailyINFO,
      current_weather: currentWeather,
      timezone: foundPlace.timezone,
      hourly_units: hourlyUnits,
      daily_units: dailyUnits,
    })
  }

  return (
    <Form action="search" onSubmit={onSubmitHandler}>
      <InputSelectContainer />
      <CheckboxFilters
        toggleSelectedByDailyValue={toggleSelectedByDailyValue}
        toggleSelectedByHourlyValue={toggleSelectedByHourlyValue}
        setSelectedFilterByDailyValue={setSelectedFilterByDailyValue}
        setSelectedFilterByHourlyValue={setSelectedFilterByHourlyValue}
        setTemperatureUnit={setTemperatureUnit}
      />
      <ButtonsContainer>
        <Btn type="submit" bgColor="search">
          Search
        </Btn>
        <Btn bgColor="clear" type="reset" onClick={onResetHandler}>
          Reset
        </Btn>
      </ButtonsContainer>
    </Form>
  )
}
