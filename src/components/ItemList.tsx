import { useEffect, useState } from "react";
import {ArticleData} from '../types'
type PropsItemList = {
    id:number,
    website :(url: string) => void
}

const ItemList = ({id,website}:PropsItemList) => {

    const [data, setData] = useState<ArticleData>();

    useEffect(() => {
        fetchData(id);
    }, []);

    const fetchData = async (id: number): Promise<void> => {
        try {
            const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`)
            }
            const data: ArticleData = await response.json()
            setData(data)
        } catch (error) {
            console.error(error)
        }
    };


  return (
    <div className="bg-white p-2">
        {data?.title}
        {data ? (
                data.url ? (
                    <button onClick={() => website(data.url)}>
                        {data.url}
                    </button>
                ) : (
                    <p>No URL available</p>
                )
            ) : (
                <p>Loading...</p>
            )}
    </div>
  )
}

export default ItemList