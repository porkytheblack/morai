import { XStack, createStyledContext, styled } from "tamagui";


const TagContext = createStyledContext({

})

// @ts-ignore
export const TagFrame = styled(XStack, {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
    variants: {
        sender: {
            "chat-them": {
                backgroundColor: '$blue300'
            },
            "chat-me": {
                backgroundColor: "$blue100"
            }
        },
        rounded: {
            "sm": {
                borderRadius: 5
            },
            "full":{
                borderRadius: 100,
                paddingHorizontal: 10
            }
        }
    }
})