import { RichTextItemResponse, TitlePropertyItemObjectResponse } from "../types/api";


export const getRichTextValue = (rich_text: RichTextItemResponse | RichTextItemResponse[], type?:"database" | "page") => {

    if(rich_text instanceof Array){
        let text =  rich_text?.at(0)?.plain_text
        if(type == "database"){
            let split = text?.split("mdb::")
            text = split?.at(1) ?? text
        }

        if(type == "page")
        {
            let split = text?.split("mpg::")
            text = split?.at(1) ?? text
        }


        return text;
    }

    let text = rich_text?.plain_text;
    
    if(type == "database"){
        let split = text?.split("mdb::")
        text = split?.at(1) ?? text
    }

    if(type == "page")
    {
        let split = text?.split("mpg::")
        text = split?.at(1) ?? text
    }


    return text;
}


