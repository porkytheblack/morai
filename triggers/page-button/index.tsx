import { Text } from "tamagui";
import { Button } from "../../components";
import { ChevronRight } from "@tamagui/lucide-icons";
import { PageObjectResponse } from "../../types/api";
import { useAppDispatch } from "../../store";
import { searchDatabases, selectCurrentPage, setCurrentPage } from "../../store/slices/notion";
import { useRouter } from "expo-router";


interface Props {
    id: string
    name: string
    properties: PageObjectResponse
}

export function PageButton(props: PageObjectResponse){
    const dispatch = useAppDispatch()
    const {id, properties } = props
    const { push } = useRouter()

    let title:string = "";

    if(properties["title"].type == "title"){
        title = properties["title"].title.at(0)?.plain_text ?? ""
    }

    const handlePress = async () => {
        dispatch(setCurrentPage(props))
        await dispatch(searchDatabases(`${title}::mdb`))
        push(`/pages/${id}`)
        // TODO: open page on press
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
                {title}
            </Text>
        </Button>
    )
}

