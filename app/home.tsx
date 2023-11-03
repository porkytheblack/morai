import {Stack, useRouter} from "expo-router";
import { KeyboardAvoidingView, Platform, StyleSheet, View} from "react-native";
import { Typography, Button, PaddedScreenShell} from "../components";
import { ScrollView, XStack, YStack, useTheme } from "tamagui";
import { AskButton } from "../triggers/ask";
import { SettingsButton } from "../triggers";
import { Home } from "../triggers/home";
import { GreetingSection, MessageBox } from "../organisms";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ChatStack } from "../organisms/chat-stack";
import { ConversationSheet } from "../sheets";

export default  function IndexScreen (){
    const theme = useTheme()
    const { push } = useRouter()
    return (
        <>
            <StatusBar backgroundColor={theme?.primary100?.val} />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <SafeAreaView>
                <KeyboardAvoidingView
                        style={style.content_container}
                        behavior={"position"}
                    >
                    <PaddedScreenShell
                        rowGap={10}
                    >
                        <XStack
                            w="100%"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <AskButton state="active" />
                            <Home
                                
                            />
                        </XStack>
                            <YStack
                                w="100%"
                                alignItems="flex-start"
                                justifyContent="space-between"
                            >
                                <ChatStack>
                                    <GreetingSection/>
                                    {
                                        [...Array(20).fill("hello")]?.map((text,i)=>{
                                            return text
                                        })
                                    }
                                </ChatStack>
                                <MessageBox/>
                            </YStack>

                    </PaddedScreenShell>
                   
                </KeyboardAvoidingView>
                
            </SafeAreaView>
        </>
    )
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