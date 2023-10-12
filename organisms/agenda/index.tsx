
import { AgendaSchedule, DateData, Agenda as _Agenda, CalendarUtils } from 'react-native-calendars'
import dayjs from 'dayjs'
import { Dimensions, StyleSheet } from 'react-native'
import { useTheme } from 'tamagui'

const dimensions = Dimensions.get('screen')


function loadItems( day: DateData ){
    const items: AgendaSchedule = {}
}

function Agenda(){
    const theme = useTheme()
    return (
        <_Agenda
            items={{
                "2023-10-12": [
                    {
                        name: "Cool Item",
                        height: 250,
                        day: CalendarUtils.getCalendarDateString(dayjs().toDate())
                    },
                    {
                        name: "Another Cool Item",
                        height: 250,
                        day: CalendarUtils.getCalendarDateString(dayjs().toDate())
                    }
                ],
                "2023-10-13": []
            } as AgendaSchedule}

            theme={{
                calendarBackground: theme.primary100.val.toString(),
                todayBackgroundColor: theme.primary200.val.toString(),
                todayButtonTextColor: theme.primary100.val.toString(),
                textDayFontFamily: 'NotoSans-Regular',
                textMonthFontFamily: 'NotoSans-SemiBold'
            }}

            style={styles.container}

            loadItemsForMonth={(date)=>{
                
            }}
        />
    )

}


export {
    Agenda
}


const styles = StyleSheet.create({
    container: {
        width: dimensions.width
    }
})