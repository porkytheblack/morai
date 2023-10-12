import React, { ReactNode } from 'react'
import { XStack, YStack } from 'tamagui'
import { TagFrame, Typography } from '../../components'

interface Props {
    sender: "me" | string | null,
    children: string | ReactNode
}

function ChatBubble (props: Props) {
  const { sender, children } = props
  return (
    <YStack
        w="100%"
        rowGap={5}
    >

        {sender && <XStack
            w="100%"
            alignItems='center'
            justifyContent={ sender == "me" ? "flex-end": "flex-start" }
        >
                <TagFrame
                    rounded='sm'
                    sender={sender === "me" ? "chat-me" : "chat-them"}
                >
                    <Typography variant='tag' >
                        {
                            sender == "me" ? "YOU" : sender.toLocaleUpperCase()
                        }
                    </Typography>
                </TagFrame>

        </XStack>}

        {
            typeof children == "string" 
            ? 
            (
                <Typography
                    padding={5}
                    paddingHorizontal={20}
                    bg="$primary200"
                    variant='body2' 
                    borderRadius={20}
                > 
                    {children} 
                </Typography> 
            )
            :
            children
        }
        
        

    </YStack>
  )
}

export {
    ChatBubble
} 