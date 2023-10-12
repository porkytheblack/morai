import { XStack, YStack } from "tamagui";
import { Button, Typography } from "../../components";
import { Calendar, ListTodo } from "@tamagui/lucide-icons";



function GreetingSection(){

    return (

        <YStack
            w="100%"
        >
            <Typography variant="headline" >
                Hi don,
            </Typography>
            <Typography variant="subTitle" >
                hope you had a good night's rest.
            </Typography>
            <Typography variant="body1" >
                where would you like to begin
            </Typography>
            <XStack w="100%" overflowY="scroll" alignItems="center" columnGap={10} padding={10} >
                <Button
                    buttonVariant="default"
                    icon={<Calendar
                        size={24}
                    />}
                >
                    <Typography variant="caption" >
                        Your Calendar
                    </Typography>
                </Button>

                <Button
                    buttonVariant="default"
                    icon={<ListTodo
                        size={24}
                    />}
                >
                    <Typography variant="caption" >
                        Your List
                    </Typography>
                </Button>
            </XStack>
        </YStack>

    )

}


export {
    GreetingSection
}