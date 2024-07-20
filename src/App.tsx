import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";


function App() {
  const [data, setData] = useState<number[]>([]);
  const [website, setWebsite] = useState<string>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$key"&limitToFirst=10`);
    const data = await response.json();
    setData(data)
    console.log(data)
  }


  const getWebsite = (url:string) => {
    setWebsite(url);
  }
  return (
    <>
      <p className=" text-7xl">Uizard Test </p>
      <div className=" container mx-auto ">
        <div className="bg-yellow-300 mt-10 rounded-t-md rounded-tr-md">
          <p className="p-4 text-center font-black ">Uizard Test</p>  
        </div>
        <div className=" flex">
            <div className=" w-1/3 bg-gray-200 p-3" >
              {
                data.map((item)=>{
                  return <ItemList id={item} website={getWebsite}/>
                })
              }
            </div>
            <div className=" w-2/3 bg-gray-200 p-3">
              <div className=" w-full flex items-center justify-center h-full">
                  <iframe src={website} className="w-full h-full p-2"></iframe>
                </div>
            </div>
        
        </div>
      </div>
    </>
  )
}

export default App
