import { XStack } from "tamagui"
import { IconButton, Input, TextArea } from "../../components"
import { ArrowUp } from '@tamagui/lucide-icons'
import { KeyboardAvoidingView } from "react-native"
import { useState } from "react"



function MessageBox(){
    const [text, setText] = useState("")
    const [lines, setLines] = useState(1)

    const handleTextChange = (value: string) => {
        setText(text)

        const number_of_lines = Math.ceil(text.length / 30)

        if(text.length % 30 == 0 && text.length !== 0){
            setLines(number_of_lines)
        }

    }


    return (
            <XStack
                w="100%"
                alignItems="center"
                justifyContent="space-between"
                paddingTop={10}
            >
                <TextArea
                    numberOfLines={lines}
                    placeholder="Message..."
                    rounded="full"
                    w="80%"
                    onChangeText={handleTextChange}
                />

                <IconButton>
                    <ArrowUp
                    
                    />
                </IconButton>

            </XStack>
    )

}


export {
    MessageBox
}