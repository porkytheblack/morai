import { Sheet } from "../../components"




function DateTaskSheet(){
    return (
        <Sheet
           open={true}
           snapPoints={[50,100]}
           position={0}
           dismissOnSnapToBottom
           animation={"medium"} 
           zIndex={100000}
        ></Sheet>
    )
}