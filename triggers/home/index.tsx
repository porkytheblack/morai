import { useRouter } from "expo-router";
import { IconButton } from "../../components";
import { Home as HomeIcon } from "@tamagui/lucide-icons"



function Home(){
    const { push } = useRouter()
    const handlePress = () => {
        push("/(tabs)/tasks")
    }
    return (
        <IconButton onPress={handlePress} >
            <HomeIcon
                size={24}
            />
        </IconButton>
    )
}


export {
    Home
}