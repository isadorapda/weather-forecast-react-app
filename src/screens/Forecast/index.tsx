import React, { useContext } from 'react'
import dayjs from 'dayjs'

import { CurrentTemperature } from '../../components/CurrentTemperature'
import { WeekForecast } from '../../components/WeekForecast'
import { TodaysForecast } from '../../components/TodaysForecast'
import { CentralGrid, Local } from './forecastStyles'
import { WEATHER_ICONS } from '../../constants/weatherIcons'

import { WeatherContext } from '../../context/WeatherContext'
import { DatesContext } from '../../context/DateTimeContext'

export const LocalForecast: React.FC = () => {
  const { weather } = useContext(WeatherContext)
  const { dateAtSelectedTimeZone, timeDiff } = useContext(DatesContext)
  const weatherIconsNight = WEATHER_ICONS.filter((icon) =>
    icon.period.includes('night')
  )
  const weatherIconsDay = WEATHER_ICONS.filter((icon) =>
    icon.period.includes('day')
  )
  const hourlyUnit = weather.hourly_units?.temperature_2m
  const dailyUnit = weather.daily_units?.temperature_2m_min

  return (
    <CentralGrid>
      {weather.placeName ? (
        <Local>
          <h1>
            {weather.placeName}, {weather.country}
          </h1>
          <h2>
            {timeDiff === 0
              ? `${dayjs().format('dddd, DD MMMM')}`
              : dateAtSelectedTimeZone}
          </h2>
        </Local>
      ) : (
        ''
      )}

      <CurrentTemperature
        weatherIconsNight={weatherIconsNight}
        weatherIconsDay={weatherIconsDay}
        hourlyUnit={hourlyUnit}
        dailyUnit={dailyUnit}
      />
      <TodaysForecast
        weatherIconsNight={weatherIconsNight}
        weatherIconsDay={weatherIconsDay}
        hourlyUnit={hourlyUnit}
        dailyUnit={dailyUnit}
      />
      <WeekForecast />
    </CentralGrid>
  )
}
