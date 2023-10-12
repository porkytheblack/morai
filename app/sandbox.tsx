import {Stack} from "expo-router";
import {PaddedScreenShell} from "../components";
import { Calendar, CalendarUtils } from 'react-native-calendars'
import { Dimensions, StyleSheet, useColorScheme } from 'react-native'
import { getTokens, getThemes, YStack, useTheme } from 'tamagui'
import day from 'dayjs'
import { useMemo, useState } from "react";
import { MarkedDates } from "react-native-calendars/src/types";
import dayjs from "dayjs";
import {Agenda} from "../organisms";


const INITIAL_DATE = '2023-10-06';


export default function SandboxScreen(){
    const colorScheme = useColorScheme()
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
        <>
            <Stack.Screen
            />

            <PaddedScreenShell paddingHorizontal={0} >
                <YStack
                    w="100%"
                    h="50%"
                    alignItems="center"
                    justifyContent="flex-start"
                >
                    <Agenda
                    />
                </YStack>
            </PaddedScreenShell>
        </>
    )
}

const dimensions = Dimensions.get('screen')

const tokens = getTokens()

const styles = StyleSheet.create({
    calendar: {
        // backgroundColor: tokens.color.primary100Light.val.toString(),
        width: dimensions.width,

    }
})