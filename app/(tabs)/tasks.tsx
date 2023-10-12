import { Tabs } from "expo-router";
import { IconButton, PaddedScreenShell, TagFrame, Typography } from "../../components";
import { ScrollView, XStack, YStack } from "tamagui";
import { AskButton, SettingsButton } from "../../triggers";
import { MoreVertical } from "@tamagui/lucide-icons";
import { TaskSectionList } from "../../organisms";
import { useAppDispatch } from "../../store";
import { modifyTagsSheetState } from "../../store/slices/sheetController";



export default function Tasks(){
    const dispatch = useAppDispatch()

    const handleOpenTasks = () => {
        dispatch(
            modifyTagsSheetState({
                isOpen: true
            })
        )
    }

    return (
        <>
            <Tabs.Screen
            />
            <PaddedScreenShell
                paddingTop={50}
                rowGap={20}
                paddingBottom={104}
            >

                <XStack
                    w="100%"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <AskButton
                    />
                    <SettingsButton/>
                </XStack>

                <YStack
                    w="100%"
                >
                    <Typography variant="caption" >
                        Categories
                    </Typography>
                    <XStack w="100%" alignItems="center" justifyContent="space-between" columnGap={5} >

                        <ScrollView
                            horizontal 
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                columnGap: 5
                            }}
                        >
                            <TagFrame rounded="full"
                                backgroundColor={"$primary"}
                            >
                                <Typography variant="tag" >
                                    All
                                </Typography>
                            </TagFrame>

                            <TagFrame rounded="full"
                                backgroundColor={"$primary300"}
                            >
                                <Typography variant="tag" >
                                    Work
                                </Typography>
                            </TagFrame>

                            <TagFrame rounded="full"
                                backgroundColor={"$primary300"}
                            >
                                <Typography variant="tag" >
                                    Personal
                                </Typography>
                            </TagFrame>

                            <TagFrame rounded="full"
                                backgroundColor={"$primary300"}
                            >
                                <Typography variant="tag" >
                                    Meetings
                                </Typography>
                            </TagFrame>

                            <TagFrame rounded="full"
                                backgroundColor={"$primary300"}
                            >
                                <Typography variant="tag" >
                                    Side Projects
                                </Typography>
                            </TagFrame>
                        </ScrollView>
                        <IconButton onPress={handleOpenTasks} iconButtonVariant={"transparent-background"} >
                            <MoreVertical
                                size={16}
                            />
                        </IconButton>
                    </XStack>
                </YStack>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    w="100%"
                    h="100%"
                >
                    <TaskSectionList/>
                    <TaskSectionList/>
                    <TaskSectionList/>
                    <XStack
                        height={100}
                    />
                </ScrollView>

            </PaddedScreenShell>
        </>
    )
}