import { TextArea as _TextArea, styled } from 'tamagui' 



// @ts-ignore
export const TextArea = styled(_TextArea, {
    name: "TextArea",
    backgroundColor: '$primary200',
    borderWidth: 0,
    color: '$color',
    placeholderTextColor: "#000000",
    fontSize: '$sm',
    fontWeight: '$regular',
    padding: 0,
    multiline: true,
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