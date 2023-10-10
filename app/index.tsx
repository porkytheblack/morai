import {Stack} from "expo-router";
import { View} from "react-native";
import { Text } from 'tamagui'
import {Typography} from "../components";

export default  function IndexScreen (){
    return (
        <>
            <Stack.Screen/>
            <View
                style={{
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Typography
                    variant="headline"
                >
                    Hello
                </Typography>
            </View>
        </>
    )
}