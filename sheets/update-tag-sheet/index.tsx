import { Label, RadioGroup, SizeTokens, XStack, YStack } from "tamagui"
import { IconButton, Input, Sheet, TagFrame, Typography } from "../../components"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Check, Trash, X } from "@tamagui/lucide-icons"
import { useAppDispatch, useAppSelector } from "../../store"
import { modifyUpdateTagSheetState, selectUpdateTagSheetState } from "../../store/slices/sheetController"

export function RadioGroupItemWithLabel(props: {
    size: SizeTokens
    value: string
    label: string
  }) {
    const id = `radiogroup-${props.value}`
    return (
      <XStack width={300} alignItems="center" space="$4">
        <RadioGroup.Item backgroundColor={"$primary200"} value={props.value} id={id} size={props.size}>
            <RadioGroup.Indicator/>
        </RadioGroup.Item>
  
        <Label size={props.size} htmlFor={id}>
          {props.label}
        </Label>
      </XStack>
    )
  }

function UpdateTagSheet(){
    const state = useAppSelector(selectUpdateTagSheetState)
    const dispatch = useAppDispatch()

    const handleClose = () => {
        dispatch(modifyUpdateTagSheetState({
            isOpen: false
        }))
    }


    return (
        <Sheet
           open={state.isOpen}
           snapPoints={[100]}
           position={0}
           dismissOnSnapToBottom
           animation={"medium"} 
           zIndex={100000}
           onOpenChange={(open: boolean)=>{
             dispatch(modifyUpdateTagSheetState({
                isOpen: open
             }))
           }}
        >
            <Sheet.Handle/>
            <Sheet.Overlay/>
            <Sheet.Frame>
                <XStack
                    w="100%"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <TouchableOpacity
                    >
                        <TagFrame
                            bg="$primary300"
                            rounded="full"
                        >
                            <Typography variant="tag" >
                                Save
                            </Typography>
                        </TagFrame>
                    </TouchableOpacity>
                    

                    <IconButton onPress={handleClose} iconButtonVariant="transparent-background" >
                        <X
                        
                            size={16}
                        />
                    </IconButton>
                    
                </XStack>
                <YStack
                    w="100%"
                    rowGap={20}
                >
                    <Input
                        placeholder="Your custom category"
                    />
                    <TouchableOpacity onPress={handleClose} >
                        <XStack w="100%" columnGap={5} alignItems="center" justifyContent="flex-start" >
                            <Trash/>
                            <Typography variant="caption" >
                                Delete
                            </Typography>
                        </XStack>
                    </TouchableOpacity>
                    <YStack
                        w="100%"
                    >
                        <RadioGroup w="100%" space={"$2"} >
                            <RadioGroupItemWithLabel
                                value="2" 
                                label="Second value" 
                                size="$3"
                            />
                            <RadioGroupItemWithLabel
                                value="4" 
                                label="Third value" 
                                size="$3"
                            />
                        </RadioGroup>
                    </YStack>
                </YStack>
            </Sheet.Frame>
        </Sheet>
    )
}


export {
    UpdateTagSheet
}