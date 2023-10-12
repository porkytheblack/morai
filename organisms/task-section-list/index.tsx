import { Button, XStack, YStack } from "tamagui"
import { Typography } from "../../components"
import { TaskButton } from "../task-button"
import { ChevronDown, ChevronsDown } from "@tamagui/lucide-icons"




function TaskSectionList(){
    return (
        <YStack
            w="100%"
            rowGap={10}
        >
            <Typography w="full" textAlign="left" variant="heading" > 
                Your Morning
            </Typography>
            <YStack
                w="full"
                rowGap={10}
            >
                <TaskButton/>
                <TaskButton/>
                <TaskButton/>
                <TaskButton/>
            </YStack>
            <XStack
                alignItems="center"
                justifyContent="flex-end"
                w="100%"
            > 
                <Button 
                    iconAfter={<ChevronsDown size={16} />}
                    size={16}
                    backgroundColor={"$gray100"}
                    pressStyle={{
                        backgroundColor: "$gray300"
                    }}
                >
                    <Typography variant="tag" >
                        More
                    </Typography>

                </Button>
            </XStack>
        </YStack>
    )
}


export {
    TaskSectionList
}