const baseURI = 'http://localhost:8080'
export const search = async <T>(uri: string, query: any = {}): Promise<T[]> => {

    const params: URLSearchParams = new URLSearchParams(query)
    const response = await fetch(baseURI + uri + params, {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    })
    const data: T[] = (await response.json() as any) as T[];
    return data
}