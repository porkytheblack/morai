import { Stack, createSheet, styled } from "tamagui";



// @ts-ignore
const Handle = styled(Stack, {
    
    variants: {
        open: {
            true: {
                opacity: 0.35
            },
            false:{
                opacity: 0.5
            }
        }
    } as const
})


// @ts-ignore
const Overlay = styled(Stack, {
    backgroundColor: "#000",
    opacity: 0.6,
    animation: "medium",
    variants: {
        open: {
            true: {
                opacity: 1,
                pointerEvents: 'auto'
            },
            false: {
                opacity: 0,
                pointerEvents: 'none'
            }
        }
    } as const
})


const Frame = styled(Stack, {
    backgroundColor: '$background',
    rowGap: 20,
    padding: 20,
    paddingTop: 30,
    w: "100%",
    h:"100%",
    justifyContent: "flex-start",
    alignItems: "center",
    
})


export const Sheet = createSheet({
    Handle,
    Overlay,
    Frame
})