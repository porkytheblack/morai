import { Avatar, Button, Sheet } from "tamagui"
import { Typography } from "../../components"
import { useState } from "react"
import { useAppDispatch } from "../../store"
import { modifyConversationSheetState } from "../../store/slices/sheetController"


const avatar_image = "https://images.pexels.com/photos/17805576/pexels-photo-17805576/free-photo-of-a-beleza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"


interface Props {
    state?: 'active' | 'default'
}

function AskButton({
    state = 'default'
}: Props){
    const dispatch = useAppDispatch()

    const handleButtonPress = () => {
        dispatch(
            modifyConversationSheetState({
                isOpen: true
            })
        )
    }

    return (
        <>
            <Button
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                padding={state === "default" ? 10 : 0}
                borderRadius={state === "default" ? 5 : 20}
                backgroundColor={state === "default" ? "$primary200": undefined}
                onPress={handleButtonPress}
                pressStyle={{
                    backgroundColor: "$primary400"
                }}
                >
                <Avatar
                    circular
                    size={state === "default" ? "$1.5" : "$3.5"}
                    
                    >
                    <Avatar.Image src={avatar_image} />
                    <Avatar.Fallback bc={"$blue100"}  />
                </Avatar>

                {state == "default" && <Typography
                    variant="tag"
                    >
                    Ask Kata
                </Typography>}
            </Button>
            
        </>
    )

}


export {
    AskButton
}