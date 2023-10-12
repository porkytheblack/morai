import {  XStack, YStack } from "tamagui"
import { useAppDispatch, useAppSelector } from "../../store"
import { modifyConversationSheetState, selectConversationSheetState } from "../../store/slices/sheetController"
import { KeyboardAvoidingView } from "react-native"
import { IconButton, PaddedScreenShell, Sheet } from "../../components"
import { AskButton } from "../../triggers"
import { Home } from "../../triggers/home"
import { ChatStack } from "../../organisms/chat-stack"
import { GreetingSection, MessageBox } from "../../organisms"
import { StyleSheet } from "react-native"
import { X } from "@tamagui/lucide-icons"



function ConversationSheet() {
    const conversationSheetState = useAppSelector(selectConversationSheetState)
    const dispatch = useAppDispatch()

    const handleClose = () => {
        dispatch(modifyConversationSheetState({
            isOpen: false
        }))
    }

    return (
        <Sheet
            open={conversationSheetState.isOpen}
            onOpenChange={(open: boolean)=>{
                dispatch(modifyConversationSheetState({
                    isOpen: open
                }))
            }}
            snapPoints={[100]}
            position={0}
            dismissOnSnapToBottom
            animation="medium"
            zIndex={100000}
        >
            <Sheet.Overlay/>
            <Sheet.Handle/>
            <Sheet.Frame >
            
                        <XStack
                            w="100%"
                            alignItems="center"
                            justifyContent="flex-end"
                        >
                            <IconButton onPress={handleClose} >
                                <X
                                    size={24}
                                />
                            </IconButton>
                        </XStack>
                        <YStack
                            w="100%"
                            h="93%"
                            alignItems="flex-start"
                            justifyContent="space-between"
                        >
                            <ChatStack>
                                {
                                    [...Array(20).fill("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis alias modi magni excepturi dolore? Libero, ipsum optio sed, esse repellendus deleniti autem beatae tempora")]?.map((text,i)=>{
                                        return text
                                    })
                                }
                            </ChatStack>
                            <MessageBox/>
                        </YStack>

                
            </Sheet.Frame>
        </Sheet>
    )
}


export {
    ConversationSheet
}


const style = StyleSheet.create({
    content_container: {
        alignItems: "center",
        justifyContent: 'flex-start',
        width: "100%",
        height: "100%"
    },
    scroll_container: {
        width: "100%",
        height: "100%"
    }
})