import { ScrollView, Switch, XStack, YStack } from "tamagui"
import { Sheet, Button, Typography, IconButton, Input, TextArea, TagFrame } from "../../components"
import { Calendar, Clock, Clock1, MoreVertical, Plus, Timer, X } from "@tamagui/lucide-icons"
import { AskButton } from "../../triggers"
import { useAppDispatch, useAppSelector } from "../../store"
import { modifyTagsSheetState, modifyTaskSheetState, selectTaskSheetState } from "../../store/slices/sheetController"
import { TouchableOpacity } from "react-native-gesture-handler"




function TaskSheet() {

    const state = useAppSelector(selectTaskSheetState) 
    const dispatch = useAppDispatch()

    const handleClose = () => {
        dispatch(
            modifyTaskSheetState({
                isOpen: false
            })
        )
    }

    const openTagsBottomSheet = ()  => {
        dispatch(
            modifyTagsSheetState({
                isOpen: true
            })
        )
    }

    return (
        <Sheet
           open={state.isOpen}
           onOpenChange={(open: boolean)=>{
            dispatch(
                modifyTaskSheetState({
                    isOpen: open
                })
            )
           }} 
           onPositionChange={(new_position: number)=>{
            dispatch(
                modifyTaskSheetState({
                    position: new_position
                })
            )
           }}
           snapPoints={[80,100]}
           position={0}
           dismissOnSnapToBottom
           animation={"medium"} 
           zIndex={100000}
        >
            <Sheet.Overlay/>
            <Sheet.Handle/>
            <Sheet.Frame

                borderTopLeftRadius={20}
                borderTopRightRadius={20}
            
            >
                <XStack
                    w="100%"
                    alignItems="center"
                    justifyContent="space-between"
                >   
                    <TouchableOpacity
                        onPress={handleClose}
                    >
                        <TagFrame
                            bg="$primary300"
                            rounded="full"
                        >
                            <Typography variant="tag" >
                                Save
                            </Typography>
                        </TagFrame>
                    </TouchableOpacity>
                    

                    <IconButton onPress={handleClose} iconButtonVariant="transparent-background" >
                        <X
                        
                            size={16}
                        />
                    </IconButton>
                </XStack>

                <YStack
                    w="100%"
                    rowGap={10}
                >
                    <Input
                        placeholder="Milking cows !! 🐄..."
                    />
                    <YStack
                        w="100%"
                        rowGap={5}
                    >
                        <Typography variant="caption" >
                            Description
                        </Typography>
                        <TextArea 
                            paddingHorizontal={10}
                            placeholder="Describe this task in detail.... or not 😁"
                        />
                    </YStack>
                </YStack>

                <YStack
                    w="100%"
                    rowGap={10}
                >
                    <YStack w="100%" rowGap={5} >
                        <Typography variant="caption" >
                            Tags
                        </Typography>
                        <XStack
                            w="100%"
                        >
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
                            <IconButton onPress={openTagsBottomSheet} iconButtonVariant={"transparent-background"} >
                                <Plus size={16} />
                            </IconButton>
                        </XStack>
                    </YStack>

                    <YStack 
                        w="100%"
                        rowGap={10}
                    >
                        <XStack
                            w="100%"
                            alignItems="center"
                            justifyContent="space-between"
                            padding={5}
                        >
                            <XStack 
                                alignItems="center"
                                columnGap={10}
                            >
                                <Calendar/>
                                <Typography variant="caption" >
                                    Due Date
                                </Typography>
                            </XStack>

                            <Input
                                value={"10/23/2023"}
                            />
                        </XStack>

                        <XStack
                            w="100%"
                            alignItems="center"
                            justifyContent="space-between"
                            padding={5}
                        >
                            <XStack 
                                alignItems="center"
                                columnGap={10}
                            >
                                <Clock1/>
                                <Typography variant="caption" >
                                    Time & Reminder
                                </Typography>
                            </XStack>
                            <Switch
                                backgroundColor={"$primary300"}
                            >
                                <Switch.Thumb
                                    backgroundColor={"$primary400"}
                                />
                            </Switch>
                        </XStack>
                    </YStack>
                </YStack>

                <XStack
                    justifyContent="flex-end"
                    alignItems="center"
                    w="100%"
                >
                    <AskButton/>
                </XStack>
            </Sheet.Frame>
        </Sheet>
    )
}


export {
    TaskSheet
}