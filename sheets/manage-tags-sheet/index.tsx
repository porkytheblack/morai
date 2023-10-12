import { ScrollView, XStack, YStack } from "tamagui"
import { IconButton, Sheet, Typography } from "../../components"
import { MoreVertical, Plus, X } from "@tamagui/lucide-icons"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useAppSelector } from "../../store"
import { modifyTagsSheetState, modifyUpdateTagSheetState, selectTagsSheetState } from "../../store/slices/sheetController"
import { useDispatch } from "react-redux"




function ManageTagsSheet() {

    const state = useAppSelector(selectTagsSheetState)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(modifyTagsSheetState({
            isOpen: false
        }))
    }

    const handleSelect = () => {
        dispatch(modifyUpdateTagSheetState({
            isOpen: true
        }))
    }

    return (
        <Sheet
           open={state.isOpen}
           onOpenChange={(open: boolean)=>{
                dispatch(modifyTagsSheetState({
                    isOpen: open
                }))
           }} 
           onPositionChange={(new_position: number)=>{
                dispatch(modifyTagsSheetState({
                    position: new_position
                }))
           }}
           snapPoints={[50,100]}
           position={0}
           dismissOnSnapToBottom
           animation={"medium"} 
           zIndex={100000}
        >
            <Sheet.Handle/>
            <Sheet.Overlay/>
            <Sheet.Frame>

                <XStack w="100%" alignItems="center" justifyContent="space-between"  >
                    <Typography
                        variant="heading"
                    >
                        Manage Displayed Tags
                    </Typography>

                    <IconButton
                        onPress={handleClose}
                        iconButtonVariant="transparent-background"
                    >
                        <X/>
                    </IconButton>
                </XStack>

                <YStack
                    w="100%"
                    alignItems="center"
                    columnGap={10}
                >
                    <ScrollView
                        w="100%"
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            rowGap: 10
                        }}
                    >
                       <XStack
                            w="100%"
                            alignItems="center"
                            justifyContent="space-between"
                       >
                            <Typography variant="tag" >
                                Work
                            </Typography>
                            <IconButton onPress={handleSelect}  >
                                <MoreVertical/>
                            </IconButton>
                        </XStack> 

                        <XStack
                            w="100%"
                            alignItems="center"
                            justifyContent="space-between"
                       >
                            <Typography variant="tag" >
                                Work
                            </Typography>
                            <IconButton onPress={handleSelect} >
                                <MoreVertical/>
                            </IconButton>
                        </XStack> 


                        <XStack
                            w="100%"
                            alignItems="center"
                            justifyContent="space-between"
                       >
                            <Typography variant="tag" >
                                Work
                            </Typography>
                            <IconButton onPress={handleSelect}  > 
                                <MoreVertical/>
                            </IconButton>
                        </XStack> 

                        <XStack
                            w="100%"
                            alignItems="center"
                            justifyContent="space-between"
                       >
                            <Typography variant="tag" >
                                Work
                            </Typography>
                            <IconButton onPress={handleSelect}  >
                                <MoreVertical/>
                            </IconButton>
                        </XStack> 
                    </ScrollView>

                    <TouchableOpacity onPress={handleSelect}  style={{ width: "100%" }} >
                        <XStack w="100%" alignItems="center" justifyContent="flex-start" columnGap={10} >
                            <Plus/>
                            <Typography variant="caption" >
                                Create New Tag
                            </Typography>
                        </XStack>
                    </TouchableOpacity>


                </YStack>
            </Sheet.Frame>
        </Sheet>
    )
}


export {
    ManageTagsSheet
}