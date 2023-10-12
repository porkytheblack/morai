import { Tabs } from "expo-router";
import { PaddedScreenShell, Typography } from "../../components";
import { Calendar as AppCalendar, TaskButton, TaskSectionList } from '../../organisms'
import { ScrollView, XStack, YStack } from "tamagui";
import { AskButton } from "../../triggers";




export default function Calendar(){
    return (
        <>
            <Tabs.Screen
                options={{
                    
                }}
            />  
            <PaddedScreenShell>
                <AppCalendar/>
                <YStack
                    w="100%"
                    alignItems="center"
                    justifyContent="flex-start"
                    rowGap={10}
                >
                    <XStack w="100%" alignItems="center" justifyContent="flex-end" >
                        <AskButton/>
                    </XStack>
                    <ScrollView
                        w="100%"
                        h="50%"
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            rowGap: 10
                        }}
                    >   
                        <TaskButton/>
                        <TaskButton/>
                        <TaskButton/>
                        <TaskButton/>
                        <TaskButton/>
                        <TaskButton/>
                        <TaskButton/>
                        <TaskButton/>
                        <XStack
                            height={200}
                        />
                    </ScrollView>
                </YStack>
            </PaddedScreenShell>
        </>
    )
}