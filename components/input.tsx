import { styled, Input as _Input } from "tamagui";



// @ts-ignore
export const Input = styled(_Input, {
    name: "Input",
    backgroundColor: '$primary200',
    borderWidth: 0,
    color: '#000000',
    placeholderTextColor: "#000000",
    fontSize: '$sm',
    fontWeight: '$regular',
    variants: {
        rounded: {
            full: {
                borderRadius: 20,
                paddingHorizontal: 10,
                paddingVertical: 10
            },
            sm: {
                borderRadius: 5
            }
        }
    } as const
})