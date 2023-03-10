import {useState, useEffect} from 'react'
import HotNewsPoster from '../components/HotNewsPoster'
import LatestNews from '../components/LatestNews'

export default function HomePage() {
  const [hotNews, setHotNews] = useState([])
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?q=tesla&apiKey=dadd374343664362b5fc18ba22fb2755`,
    )
      .then(response => response.json())
      .then(result => {
        setHotNews(result.articles)
      })
  }, [])
  const restNews = hotNews.slice(1, 3)
  return (
    <div className="mt-[10vh]">
      <div className="w-full ">
        <div className="w-[51rem] mx-auto ">
          <div className="mb-10">
            <div className="flex flex-row justify-between">
              <HotNewsPoster isFirst={true} {...hotNews[0]} />
              <div className=" flex flex-col">
                {restNews.length ? (
                  restNews.map((news, i) => <HotNewsPoster key={i} {...news} />)
                ) : (
                  <h3>No more hot news</h3>
                )}
              </div>
            </div>
          </div>{' '}
          <LatestNews />
        </div>
      </div>
    </div>
  )
}
