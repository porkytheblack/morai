import { Tabs } from 'expo-router'
import { Sheet, XStack } from 'tamagui'
import { AlignLeft, Calendar, Plus } from "@tamagui/lucide-icons"
import { IconButton } from '../../components'
import { useAppDispatch, useAppSelector } from '../../store'
import { modifyConversationSheetState, selectConversationSheetState } from '../../store/slices/sheetController'
import { ConversationSheet, ManageTagsSheet, TaskSheet, UpdateTagSheet } from '../../sheets'
import { AddTask } from '../../triggers'



export default function TabsScreen(){

    return (
        <>
            <Tabs
                tabBar={(props)=>{
                    
                    return (
                        <XStack position={"relative"} paddingHorizontal={20} paddingVertical={5}  backgroundColor={"$primary200"} alignItems='center' justifyContent="space-between" >
                            <IconButton
                                onPress={()=>{
                                    props.navigation.navigate("tasks")
                                }}
                            >
                                <AlignLeft/>
                            </IconButton>
                            <IconButton
                                onPress={()=>{
                                    props.navigation.navigate("calendar")
                                }}
                            >
                                <Calendar/>
                            </IconButton>
                            <AddTask/>
                        </XStack>
                    )
                }}
                initialRouteName='tasks'
                screenOptions={{
                    headerShown: false,
                    
                }}
            />
            <TaskSheet/>
            <ManageTagsSheet/>
            <UpdateTagSheet/>
        </>
    )

}