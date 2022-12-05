import React, { useContext } from 'react'

import { WEATHER_ICONS } from '../../constants/weatherIcons'
import { DatesContext } from '../../context/DateTimeContext'
import { WeatherContext } from '../../context/WeatherContext'
import {
  CurrentTemperatureContainer,
  ImgContainer,
  Temperature,
  MaxMinTemperatureContainer,
} from './currentTemperatureStyles'

export type Icons = {
  value: string
  label: string
  code: number[]
  img: string
  period: string[]
}

type Props = {
  weatherIconsNight: Icons[]
  weatherIconsDay: Icons[]
  hourlyUnit: string | undefined
  dailyUnit: string | undefined
}

export const CurrentTemperature: React.FC<Props> = ({
  weatherIconsNight,
  weatherIconsDay,
  hourlyUnit,
  dailyUnit,
}) => {
  const {
    weather,
    dailyMinTemperatures,
    dailyMaxTemperatures,
    dailyWeatherCodes,
  } = useContext(WeatherContext)

  const {
    sunriseTimeHours,
    sunsetTimeHours,
    timeHrsArrayAtTimezone,
    hourAtSelectedTimeZone,
    matchingIndex,
  } = useContext(DatesContext)

  const hourlyWeatherCodes = weather.hourlyINFO?.weathercode
  const currentTemperature = weather.current_weather.temperature

  React.useEffect(() => {
    document.title = weather.placeName
      ? `${weather.placeName} ${currentTemperature}${dailyUnit} - ${weatherIcon?.label}`
      : 'Weather Forecast'
  }, [weather.placeName, currentTemperature])

  const showCurrentWeatherIcon = () => {
    if (
      sunsetTimeHours &&
      sunriseTimeHours &&
      timeHrsArrayAtTimezone &&
      hourAtSelectedTimeZone &&
      hourlyWeatherCodes &&
      matchingIndex
    ) {
      const icons =
        timeHrsArrayAtTimezone[matchingIndex] >= sunriseTimeHours[0] &&
        timeHrsArrayAtTimezone[matchingIndex] <= sunsetTimeHours[0]
          ? weatherIconsDay
          : weatherIconsNight

      return icons.find((icon) =>
        icon.code.includes(hourlyWeatherCodes[hourAtSelectedTimeZone])
      )
    }
    if (dailyWeatherCodes) {
      return WEATHER_ICONS.find((icon) =>
        icon.code.includes(dailyWeatherCodes[0])
      )
    }
    if (hourlyWeatherCodes && !dailyWeatherCodes) {
      const icon = weatherIconsDay.find((icon) => {
        return icon.code.includes(hourlyWeatherCodes[hourAtSelectedTimeZone])
      })
      return icon
    }
  }
  const weatherIcon = showCurrentWeatherIcon()

  return (
    <CurrentTemperatureContainer>
      {weatherIcon ? (
        <ImgContainer>
          <img src={weatherIcon?.img} alt={`${weatherIcon?.label} icon`} />
          <h4>{weatherIcon?.label}</h4>
        </ImgContainer>
      ) : null}

      <Temperature>
        {currentTemperature ? (
          <h1>{`${currentTemperature}${
            hourlyUnit ? hourlyUnit : dailyUnit
          }`}</h1>
        ) : null}
        <MaxMinTemperatureContainer>
          <span title="Lowest Temperature">
            {dailyMinTemperatures
              ? `L:${dailyMinTemperatures[0]}${
                  hourlyUnit ? hourlyUnit : dailyUnit
                }`
              : null}
          </span>
          <span title="Highest Temperature">
            {dailyMaxTemperatures
              ? `H:${dailyMaxTemperatures[0]}${
                  hourlyUnit ? hourlyUnit : dailyUnit
                }`
              : null}
          </span>
        </MaxMinTemperatureContainer>
      </Temperature>
    </CurrentTemperatureContainer>
  )
}
