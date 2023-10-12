import { Button } from "tamagui";
import { Settings as SettingsIcon } from "@tamagui/lucide-icons"
import { IconButton } from "../../components";
import { useAppDispatch } from "../../store";
import { modifySettingsSheetState } from "../../store/slices/sheetController";




function SettingsButton() {

    const dispatch = useAppDispatch()

    const handlePress = () => {
        dispatch(
            modifySettingsSheetState({
                isOpen: true
            })
        )
    }

    return (
        <IconButton
            onPress={handlePress}
        >
            <SettingsIcon
                size={24}
            />
        </IconButton>
    )

}

export {
    SettingsButton
}