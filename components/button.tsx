import {styled, Button as _Button} from "tamagui";

// @ts-ignore
export const Button = styled(_Button, {
    name: "Button",
    backgroundColor: '$primary200',
    variants: {
        // @ts-ignore
        buttonVariant: {
            default: {
                backgroundColor: '$primary300',
                borderRadius: 6,
                paddingHorizontal: 10,
                paddingVertical: 5,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                fontSize: '$md',
                fontWeight: '$regular'
            },
            icon: {
                width: 40,
                height: 40,
                borderRadius: 20,
                overflow: 'hidden',
                alignItems:'center',
                justifyContent: 'center',
                padding: 8
            },
            tag: {
                paddingHorizontal: 5,
                paddingVertical: 2,
                borderRadius: 10,
                fontSize: '$xxs',
                fontWeight: '$medium'
            },
            'tag-active': {
                // paddingHorizontal: 5,
                // paddingVertical: 2,
                padding: 0,
                margin: 0,
                borderRadius: 10,
                backgroundColor: '$primary',
                fontSize: '$xxs',
                fontWeight: '$black',
                
            },
            
        } 
    } as const

})



export const IconButton = styled(Button, {
   name: "IconButton",
   borderRadius: 200,
   backgroundColor: '$primary200',
   alignItems:'center',
   justifyContent: 'center',
   height: "auto",
   padding: 8,
   pressStyle:{
    backgroundColor: '$primary300'
   },
   variants: {
    iconButtonVariant: {
        "transparent-background": {
            backgroundColor: '$primary100',
            pressStyle:{
                backgroundColor: '$primary200'
            },
        }
    }
   } as const
})