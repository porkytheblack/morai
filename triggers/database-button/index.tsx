import { Text } from "tamagui";
import { Button } from "../../components";
import { ChevronRight } from "@tamagui/lucide-icons";
import { DatabaseObjectResponse, PageObjectResponse } from "../../types/api";
import { useAppDispatch } from "../../store";
import { selectCurrentPage, setCurrentDatabase, setCurrentPage } from "../../store/slices/notion";
import { useRouter } from "expo-router";
import { getRichTextValue } from "../../libs/utils";

export function DatabaseButton(props:DatabaseObjectResponse){
    const { title } = props

    let name: string = title?.at(0)?.plain_text ?? ""

    const dispatch = useAppDispatch()
    const { push } = useRouter()

    const handlePress = async () => {
        dispatch(setCurrentDatabase(props))
        push("/home")
    }
  
    return (
        <Button 
            onPress={handlePress}
            w="100%"
            alignItems="center"
            justifyContent="space-between"
            iconAfter={<ChevronRight/>}
        >
            <Text>
                {getRichTextValue(title, "database")}
            </Text>
        </Button>
    )
}

