import { Adapt, Select, Switch, XStack, YStack } from "tamagui"
import { Button, IconButton, Sheet, Typography } from "../../components"
import { useAppDispatch, useAppSelector } from "../../store"
import { modifySettingsSheetState, selectSettingsSheetState } from "../../store/slices/sheetController"
import { Check, ChevronDown, X } from "@tamagui/lucide-icons"


function SettingsSheet(){

    const state = useAppSelector(selectSettingsSheetState)
    const dispatch = useAppDispatch()

    const handleClose = () => {
        dispatch(modifySettingsSheetState({
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
            dispatch(modifySettingsSheetState({
                isOpen: open
            }))
           }}
        >
            <Sheet.Handle/>
            <Sheet.Overlay/>
            <Sheet.Frame justifyContent="space-between" >
                <YStack
                    w="100%"
                    rowGap={20}
                >
                    <XStack
                        w="100%"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Typography
                            variant="heading"
                        >
                            Settings
                        </Typography>
                        <IconButton
                            iconButtonVariant="transparent-background"
                            onPress={handleClose}
                        >
                            <X
                                size={16}
                            />
                        </IconButton>
                    </XStack>
                    <YStack
                        w="100%"
                    >
                        <XStack
                            w="100%"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                        <Typography
                            variant="body2"
                        >
                                Notifications
                            </Typography> 
                            <Switch
                                backgroundColor={"$primary200"}
                            >
                                <Switch.Thumb
                                    backgroundColor={"$primary300"}
                                />
                            </Switch>
                        </XStack>
                        <Typography
                            variant="caption"
                        >
                            Receive notifications for activity on your account. And updates from your ai assistant.
                        </Typography>
                    </YStack>
                    
                    <YStack
                        w="100%"
                        rowGap={10}
                    >
                        <Typography variant="body2" w="100%" textAlign="left" >
                            Appearance
                        </Typography>
                        <Typography variant="caption" w="100%" textAlign="left" >
                            Customize how morai looks on your device
                        </Typography>
                        <Select
                            native
                        >
                            <Adapt
                                platform="touch"
                            >
                                <Sheet
                                    modal 
                                    dismissOnSnapToBottom 
                                    
                                >
                                    <Sheet.Frame
                                        backgroundColor={"$gray100"}
                                    >
                                        <Sheet.ScrollView
                                            w="100%"
                                            backgroundColor={"$gray100"}
                                        >
                                            <Adapt.Contents/>
                                        </Sheet.ScrollView>
                                    </Sheet.Frame>
                                    <Sheet.Overlay 

                                    />
                                </Sheet>
                            </Adapt>
                            <Select.Trigger backgroundColor={"$gray100"} width={220} pressStyle={{
                                backgroundColor: "$gray200"
                            }} iconAfter={ChevronDown} >
                                <Select.Value placeholder="Choose a theme" />
                            </Select.Trigger>
                            <Select.Content zIndex={20000000} >
                                <Select.Viewport
                                    minWidth={200}
                                    minHeight={200}
                                    backgroundColor={"$gray100"}
                                >
                                    <Select.Item backgroundColor={"$gray100"} pressStyle={{
                                        backgroundColor: "$gray200"
                                    }} index={0} value={"dark"} >
                                        <Select.ItemText>
                                            Dark Theme
                                        </Select.ItemText>
                                        <Select.ItemIndicator>
                                            <Check
                                                size={16}
                                            />
                                        </Select.ItemIndicator>
                                    </Select.Item>
                                    <Select.Item backgroundColor={"$gray100"} pressStyle={{
                                        backgroundColor: "$gray200"
                                        }} index={1} value={"light"} >
                                        <Select.ItemText>
                                            Light Theme
                                        </Select.ItemText>
                                        <Select.ItemIndicator>
                                            <Check
                                                size={16}
                                            />
                                        </Select.ItemIndicator>
                                    </Select.Item>
                                    <Select.Item backgroundColor={"$gray100"} pressStyle={{
                                        backgroundColor: "$gray200"
                                        }} index={3} value={"system"} >
                                        <Select.ItemText>
                                            System Default
                                        </Select.ItemText>
                                        <Select.ItemIndicator>
                                            <Check
                                                size={16}
                                            />
                                        </Select.ItemIndicator>
                                    </Select.Item>
                                </Select.Viewport>
                            </Select.Content>
                        </Select>
                    </YStack>
                </YStack>
                <Button
                    borderRadius={5}
                    w="100%"
                >
                    <Typography variant="caption" >
                        Logout
                    </Typography>
                </Button>
            </Sheet.Frame>
        </Sheet>
    )

}


export {
    SettingsSheet
}