import React, { ReactNode } from 'react'
import { PLACES } from '../constants/places'

import { WEATHER_INFOS } from '../constants/weatherInfos'
import { Forecast } from '../types/models'

interface WeatherContextProps {
  weather: Forecast
  setWeather: React.Dispatch<React.SetStateAction<Forecast>>
  searchPlace: string
  setSearchPlace: React.Dispatch<React.SetStateAction<string>>
  dailyMinTemperatures: number[] | undefined
  dailyMaxTemperatures: number[] | undefined
  dailyWeatherCodes: number[] | undefined
}

interface WeatherContextProviderProps {
  children: ReactNode
}
export const WeatherContext = React.createContext({} as WeatherContextProps)

export function WeatherContextProvider({
  children,
}: WeatherContextProviderProps) {
  const [weather, setWeather] = React.useState<Forecast>(WEATHER_INFOS)
  const [searchPlace, setSearchPlace] = React.useState<string>(PLACES[0].value)

  const dailyMaxTemperatures = weather.dailyINFO?.temperature_2m_max
  const dailyMinTemperatures = weather.dailyINFO?.temperature_2m_min
  const dailyWeatherCodes = weather.dailyINFO?.weathercode

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
        searchPlace,
        setSearchPlace,
        dailyMaxTemperatures,
        dailyMinTemperatures,
        dailyWeatherCodes,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}
