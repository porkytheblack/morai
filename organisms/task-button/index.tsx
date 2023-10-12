import { CircleDot } from "@tamagui/lucide-icons";
import { XStack } from "tamagui";
import { Typography } from "../../components";



function TaskButton(){

    return (
        <XStack w="100%" alignItems="center" justifyContent="flex-start" overflowX="hidden" columnGap={10} paddingHorizontal={10} paddingVertical={5} borderRadius={5} backgroundColor={"$primary300"} >
            <CircleDot
                size={16}
            />
            <Typography
                variant="body2"
            >
                Send Sprint meeting invites to the...
            </Typography>
        </XStack>
    )

}

export { TaskButton }