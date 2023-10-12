import { ReactNode, Children, useState, useEffect } from "react"
import { ScrollView } from "tamagui"
import { ChatBubble } from "../chat-bubble"
import { Keyboard } from "react-native"


interface ChatStackProps {
    children?: (ReactNode | string)[]
}

function ChatStack(props: ChatStackProps){
    const {children} = props
    const [keyboardActive, setKeyboardActive] = useState<boolean>(false)

    useEffect(()=>{
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', ()=>{
            setKeyboardActive(true)
        })

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', ()=>{
            setKeyboardActive(false)
        })

        return ()=>{
            keyboardDidShowListener.remove()
            keyboardDidHideListener.remove()
        }

    },[])


    return (
        <ScrollView
            w="100%"
            height={keyboardActive ? "80%" : "90%"}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                rowGap: 20,
                paddingBottom:  keyboardActive ? "20%" : "8%" 
            }}
        >
            {
                Children.map(children, (child, index)=>{
                    return (
                        <ChatBubble
                            sender={index % 2 == 1 ? "me" : index == 0 ? null : "kata"}
                        >
                            {child}
                        </ChatBubble>
                    )
                })
            }
        </ScrollView>
    )

}

export {
    ChatStack
}