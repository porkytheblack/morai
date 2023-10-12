import { Plus } from "@tamagui/lucide-icons";
import { IconButton } from "../../components";
import { useAppDispatch } from "../../store";
import { modifyTaskSheetState } from "../../store/slices/sheetController";


function AddTask () {
    const dispatch = useAppDispatch() 

    const handlePress = () => {
        dispatch(modifyTaskSheetState({
            isOpen: true
        }))
    }
    return (
        <IconButton
            onPress={handlePress}
            position='absolute'
            top={-100}
            right={20}
            elevate
            elevationAndroid={4}
            
        >
            <Plus/>
        </IconButton>
    )
}


export {
    AddTask
}