export default function LatestNewsBox({
  isMarked,
  title = 'How My Phone’s Most Annoying Feature Saved My Life',
  author,
  description = 'Modern technology has become a total phenomenon for civilization, the defining force of a new social order in which efficiency is no longer an option but a necessity imposed on all human activity.',
  urlToImage,
  publishedAt = '2022-10-15T15:41:59Z',
}) {
  const releasedDate = `${new Intl.DateTimeFormat('en-UK', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(publishedAt))}`

  const shortTitle = title.length > 30 ? `${title.slice(0, 30)}...` : title
  const shortDescription =
    description.length > 50
      ? `${
          description.includes('<ol>')
            ? description.slice(8, 50)
            : description.slice(0, 50)
        }...`
      : description
  return (
    <div className="mb-7 flex flex-row justify-between w-[33.5rem] h-[210px]">
      <div className={`w-[17rem] flex flex-col justify-around`}>
        <div className={`text-start font-black`}>{shortTitle}</div>

        <div className="text-xs text-start">{shortDescription}</div>

        <div className="flex flex-row justify-between my-2 items-center">
          <div className="flex flex-row justify-around w-36 text-[.5rem] items-center">
            <img
              src={urlToImage}
              alt="publisher"
              className="h-5 w-5 rounded-full"
            />
            <span>{author}</span>
            <span>{releasedDate}</span>
          </div>

          {isMarked ? (
            <img
              src={
                'https://img.icons8.com/ios-filled/500/ffffff/bookmark-ribbon.png'
              }
              alt=""
              className="h-5 w-5 rounded-full"
            />
          ) : (
            <img
              src={
                'https://img.icons8.com/ios/500/ffffff/bookmark-ribbon--v1.png'
              }
              alt=""
              className="h-3 w-3 rounded-full"
            />
          )}
        </div>
      </div>

      <div
        style={{backgroundImage: `url("${urlToImage}")`}}
        className={`w-[330px] bg-cover rounded-[.2rem] `}
      >
        <div
          className={`absolute w-20 h-4 text-white text-xs font-md bg-green-600 mt-[7.5rem] my-2 ml-[-10px] rounded-sm`}
        >
          Technology
        </div>
      </div>
    </div>
  )
}
