import {styled, Text} from "tamagui";



//@ts-ignore
export const Typography = styled(Text, {
    name: "Typography",
    fontFamily: '$noto',
    color: '$gray900',
    variants: {
        variant: {
            headline: {
                fontSize: '$3xl',
                fontWeight: '$light'
            },
            // @ts-ignore
            title: {
                fontSize: '$2xl',
                fontWeight: '$medium'
            },
            subTitle: {
                fontSize: '$xl',
                fontWeight: '$regular'
            },
            heading: {
                fontSize: '$lg',
                fontWeight: '$regular'
            },
            body1: {
                fontSize: '$md',
                fontWeight: '$regular'
            },
            body2: {
                fontSize: '$sm',
                fontWeight: '$regular'
            },
            caption: {
                fontSize: '$xs',
                fontWeight: '$regular'
            }
        }
    } as const
})