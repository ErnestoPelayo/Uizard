import { useEffect, useState } from "react";


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


  const getWebsite = async (url:string) => {
    setWebsite(url);
  }
  return (
    <>
      <p className=" text-7xl">Uizard Test </p>
      <div className=" container mx-4 ">

      </div>
    </>
  )
}

export default App
