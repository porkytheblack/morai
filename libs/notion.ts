import { DatabaseObjectResponse, PageObjectResponse, SearchResponse } from "../types/api"


class Notion {

    private headers: Headers

    constructor(){
        this.headers = new Headers()
        this.headers.set("Authorization", `Bearer ${"secret_Uhtk5qxBBYTsQstSnIS83gsMfWQHaM2kPsrPhuOMmXN"}`)
        this.headers.set("Content-Type", "application/json")
    }

    
    async searchPages(query: string){
        const url = new URL("http://localhost:8089/search")
        url.searchParams.append("type", "page")
        url.searchParams.append("query",   `mpg::${query??""}`)

        try {
            const response = await fetch(url, {
                headers: this.headers
            })

            const data = (await response.json()) as SearchResponse
            const results = data.results as Array<PageObjectResponse>


            return results
        }
        catch (e)
        {
            if(e instanceof Error){
                console.log(e.message)
            }
            return null
        }

        

    }
    async searchDatabases(query: string){
        const url = new URL("http://localhost:8089/search")
        url.searchParams.append("type", "database")
        url.searchParams.append("query",   `mpg::${query??""}`)

        try {
            const response = await fetch(url, {
                headers: this.headers
            })

            const data = (await response.json()) as SearchResponse
            const results = data.results as Array<DatabaseObjectResponse>


            return results
        }
        catch (e)
        {
            if(e instanceof Error){
                console.log(e.message)
            }
            return null
        }

        

    }


}

export default Notion