import dayjs from "dayjs"
import { useMemo, useState } from "react"
import { Dimensions, StyleSheet } from "react-native"
import { CalendarUtils, Calendar as _Calendar } from "react-native-calendars"
import { MarkedDates } from "react-native-calendars/src/types"
import { useTheme } from "tamagui"



const dimensions = Dimensions.get("screen")

function Calendar() {

    const theme = useTheme()
    const [currentDate, setCurrentDate] = useState<string>(CalendarUtils.getCalendarDateString(dayjs().toDate()))

    const marked = useMemo(()=>{
        if(currentDate)
        return {
            [currentDate]: {
                selected: {
                    selected: true,
                    selectedColor: theme.orange.val.toString(),

                }
            } as MarkedDates
        }
    }, [currentDate])

    return (
        <_Calendar
            style={
                styles.calendar
            }
            theme={{
                calendarBackground: theme.primary100.val.toString(),
                todayBackgroundColor: theme.primary200.val.toString(),
                todayButtonTextColor: theme.primary100.val.toString(),
                textDayFontFamily: 'NotoSans-Regular',
                textMonthFontFamily: 'NotoSans-SemiBold'
            }}
            onDayPress={(date)=>{
                setCurrentDate(date.dateString)
            }}
            onMonthChange={(date)=>{
                setCurrentDate(date.dateString)
            }}
            markedDates={marked}
        /> 
    )
}


export {
    Calendar
}


const styles = StyleSheet.create({
    calendar: {
        width: dimensions.width,
    }
})