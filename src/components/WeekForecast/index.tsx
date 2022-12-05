import React, { useContext } from 'react'

import { WEATHER_ICONS } from '../../constants/weatherIcons'
import { DatesContext } from '../../context/DateTimeContext'
import { WeatherContext } from '../../context/WeatherContext'
import {
  DailyForecastContainer,
  MaxMinContainer,
  WeekDayItem,
} from './weekForecastStyles'

export const WeekForecast: React.FC = () => {
  const { dailyMinTemperatures, dailyMaxTemperatures, dailyWeatherCodes } =
    useContext(WeatherContext)
  const { weekDays, weekDayAtSelectedTimezone } = useContext(DatesContext)

  return (
    <DailyForecastContainer>
      {dailyWeatherCodes
        ? weekDays?.map((weekDayTitle, index) => (
            <WeekDayItem key={weekDayTitle}>
              <h3>
                {weekDayTitle === weekDayAtSelectedTimezone
                  ? 'Today'
                  : weekDayTitle}
              </h3>
              <img
                src={
                  WEATHER_ICONS.find((icon) =>
                    icon.code.includes(dailyWeatherCodes[index])
                  )?.img
                }
                alt={`${
                  WEATHER_ICONS.find((icon) =>
                    icon.code.includes(dailyWeatherCodes[index])
                  )?.label
                } icon`}
              />
              {dailyMaxTemperatures && dailyMinTemperatures ? (
                <MaxMinContainer>
                  <p>L:{dailyMinTemperatures[index]}°</p>
                  <p>H:{dailyMaxTemperatures[index]}°</p>
                </MaxMinContainer>
              ) : (
                ''
              )}
            </WeekDayItem>
          ))
        : null}
    </DailyForecastContainer>
  )
}
