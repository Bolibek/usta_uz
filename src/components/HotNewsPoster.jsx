export default function HotNewsPoster({
  isMarked,
  title = 'How My Phone’s Most Annoying Feature Saved My Life',
  isFirst,
  author,
  description = 'Modern technology has become a total phenomenon for civilization, the defining force of a new social order in which efficiency is no longer an option but a necessity imposed on all human activity.',
  urlToImage,
  publishedAt = '2022-10-15T15:41:59Z',
}) {
  const releasedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(publishedAt))

  const shortTitle = title.length > 50 ? `${title.slice(0, 50)}...` : title
  const shortDescription =
    description.length > 100
      ? `${
          description.includes('<ol>')
            ? description.slice(8, 100)
            : description.slice(0, 100)
        }...`
      : description
  return (
    <div
      className={`${
        isFirst ? 'w-[33.5rem] h-[20.55rem]' : 'w-[17rem] h-[230px]'
      }  my-2 relative text-white bg-cover`}
      style={{backgroundImage: `url("${urlToImage}")`}}
    >
      {' '}
      <div className="absolute w-[33.5rem]">
        <div
          className={`${
            isFirst ? 'h-[8.55rem]' : 'h-[85px] w-[17rem]'
          } bg-gradient-to-b from-[#00000000] via-[#00000000] to-[#0000003b]`}
        ></div>
        <div
          className={`${
            isFirst ? 'h-[12rem] p-5' : 'w-[17rem] h-[155px]  p-2'
          }  flex flex-col justify-end bg-gradient-to-b from-[#0000003b] via-[#000000eb] to-[#000000]`}
        >
          <div
            className={`${
              isFirst ? 'w-24 mb-5' : 'w-12 text-[.5rem] mb-3'
            } bg-green-600 rounded-sm`}
          >
            Technology
          </div>
          <div
            className={`${
              isFirst ? 'text-[1.7rem]' : 'text-[1rem]'
            }  text-start font-black`}
          >
            {shortTitle}
          </div>
          {isFirst ? (
            <div className="text-xs text-start">{shortDescription}</div>
          ) : null}

          <div className="flex flex-row justify-between my-2 items-center">
            <div className="flex flex-row justify-between w-36 text-[.5rem] items-center">
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
      </div>
    </div>
  )
}
