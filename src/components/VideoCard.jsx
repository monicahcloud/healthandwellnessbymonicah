import { useState } from 'react'
import { videos } from '../data'

const VideoCard = () => {
  const [showAll, setShowAll] = useState(false)

  const getYoutubeThumbnail = (url) => {
    const videoId =
      new URL(url).searchParams.get('v') || url.split('/').pop().split('&')[0]
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  const displayedVideos = showAll ? videos : videos.slice(0, 4)

  return (
    <div className="flex flex-col items-center">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {displayedVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white shadow-md rounded-lg p-4 items-start hover:shadow-lg transition-shadow"
          >
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <img
                src={getYoutubeThumbnail(video.url)}
                alt={video.title}
                className="rounded-md w-full mb-4"
              />
            </a>
            <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
            {/* <p className="text-gray-700">{video.text}</p> */}
          </div>
        ))}
      </div>
      {videos.length > 4 && (
        <button
          onClick={toggleShowAll}
          className="mt-6 mb-6 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {showAll ? 'See Less' : 'See More'}
        </button>
      )}
    </div>
  )
}

export default VideoCard
