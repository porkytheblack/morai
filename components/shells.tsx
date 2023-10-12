import { Dimensions, StatusBar } from "react-native";
import { XStack, YStack, styled } from "tamagui";


const dimensions = Dimensions.get('screen')
const StatusBarHeight = StatusBar.currentHeight;
// @ts-ignore
export const PaddedScreenShell = styled(YStack, {
    name: "PaddedScreenShell",
    width: dimensions.width,
    height: dimensions.height,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "$primary100",
    paddingTop: 20,
    overflowY: 'scroll',
    paddingBottom: 140
})