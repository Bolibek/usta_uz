import {useState, useEffect} from 'react'
import LatestNewsBox from './LatestNewsBox'

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([])
  const [lastIndex, setLastIndex] = useState(7)
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=dadd374343664362b5fc18ba22fb2755`,
    )
      .then(response => response.json())
      .then(result => {
        setLatestNews(result.articles.slice(0, lastIndex))
      })
  }, [lastIndex])

  const loadMore = addQuantity => {
    setLastIndex(prevIndex => prevIndex + addQuantity)
  }
  return (
    <div>
      <div className="text-start flex flex-row items-center">
        <div className="px-[.05rem] bg-[#ff184e] h-4 mr-0.5 -skew-x-[25deg]"></div>
        <span className="ml-1 mr-2 font-black"> Latest News</span>
        <div className="px-[.05rem] bg-[#ff184e] h-4 mr-0.5 -skew-x-[25deg]"></div>
      </div>

      {latestNews.length ? (
        latestNews.map((news, i) => (
          <LatestNewsBox key={i} isMarked={false} {...news} />
        ))
      ) : (
        <h1>News Not Available</h1>
      )}
      <button
        onClick={() => loadMore(8)}
        className="w-24 text-xs mb-5 py-1 font-black bg-slate-200 hover:bg-[#ff184e] hover:text-white rounded-md mr-[18rem]"
      >
        Show More
      </button>
    </div>
  )
}
export default LatestNews
