import React, { ReactNode, useContext } from 'react'

import dayjs from 'dayjs'
import AdvancedFormat from 'dayjs/plugin/advancedFormat'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import { WeatherContext } from './WeatherContext'

dayjs.extend(AdvancedFormat)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat)

interface DatesContextProps {
  todaysDate: string
  todaysDay: string
  month: string
  hourAtSelectedTimeZone: number
  timeDiff: number | undefined
  dateAtSelectedTimeZone: string | undefined
  timeHrsArrayAtTimezone: number[] | undefined
  sunriseTimeHours: number[] | undefined
  sunsetTimeHours: number[] | undefined
  todaysTime: number | undefined
  matchingIndex: number | undefined
  formatedTimesArray: string[] | undefined
  weekDays: string[] | undefined
  weekDayAtSelectedTimezone: string | undefined
}

interface DatesContextProviderProps {
  children: ReactNode
}
export const DatesContext = React.createContext({} as DatesContextProps)

export function DateTimeContextProvider({
  children,
}: DatesContextProviderProps) {
  const { weather } = useContext(WeatherContext)
  const todaysDate = dayjs().format('DD')
  const todaysTime = Number(dayjs().format('H'))
  const todaysDay = dayjs().format('dddd')
  const month = dayjs().format('MMMM')

  const getDateSelectedTimezone = () => {
    if (weather.timezone || weather.hourlyINFO || weather.dailyINFO) {
      const hourAtSelectedTimeZone = Number(
        dayjs().tz(`${weather.timezone}`).format('H')
      )
      const timeDiff = hourAtSelectedTimeZone - todaysTime

      const dateAtSelectedTimeZone = dayjs()
        .tz(`${weather.timezone}`)
        .format('dddd, DD MMMM')

      const timeHrsArrayAtTimezone = weather.hourlyINFO?.time?.map((time) => {
        return Number(dayjs(time).tz(`${weather.timezone}`).format('H'))
      })

      const formatedTimesArray = weather.hourlyINFO?.time?.map((time) => {
        return dayjs(time).tz(`${weather.timezone}`).format('h A')
      })

      const matchingIndex = hourAtSelectedTimeZone - timeDiff

      const sunriseTimeHours = weather.dailyINFO?.sunrise?.map((hr) =>
        dayjs(hr).format('H')
      )
      const sunsetTimeHours = weather.dailyINFO?.sunset?.map((hr) =>
        dayjs(hr).format('H')
      )

      const weekDays = weather.dailyINFO?.time?.map((time) =>
        dayjs(time).tz(`${weather.timezone}`).format('dddd')
      )
      const weekDayAtSelectedTimezone = dayjs()
        .tz(`${weather.timezone}`)
        .format('dddd')

      return {
        hourAtSelectedTimeZone,
        timeDiff,
        dateAtSelectedTimeZone,
        timeHrsArrayAtTimezone,
        sunriseTimeHours,
        sunsetTimeHours,
        matchingIndex,
        formatedTimesArray,
        weekDays,
        weekDayAtSelectedTimezone,
      }
    }
  }
  const timezoneData = getDateSelectedTimezone()
  const sunriseTimeHours = timezoneData?.sunriseTimeHours?.map((hr) =>
    Number(hr)
  )
  const sunsetTimeHours = timezoneData?.sunsetTimeHours?.map((hr) => Number(hr))
  const timeHrsArrayAtTimezone = timezoneData?.timeHrsArrayAtTimezone
  const timeDiff = timezoneData?.timeDiff
  const dateAtSelectedTimeZone = timezoneData?.dateAtSelectedTimeZone
  const hourAtSelectedTimeZone = timezoneData?.hourAtSelectedTimeZone!
  const matchingIndex = timezoneData?.matchingIndex
  const formatedTimesArray = timezoneData?.formatedTimesArray
  const weekDays = timezoneData?.weekDays
  const weekDayAtSelectedTimezone = timezoneData?.weekDayAtSelectedTimezone

  return (
    <DatesContext.Provider
      value={{
        todaysDate,
        todaysDay,
        month,
        sunriseTimeHours,
        sunsetTimeHours,
        timeHrsArrayAtTimezone,
        dateAtSelectedTimeZone,
        timeDiff,
        hourAtSelectedTimeZone,
        todaysTime,
        matchingIndex,
        formatedTimesArray,
        weekDays,
        weekDayAtSelectedTimezone,
      }}
    >
      {children}
    </DatesContext.Provider>
  )
}
