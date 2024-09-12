import VideoCard from "./VideoCard";
import ImageThum from '../../public/photo.png'

const Videos = [
    {
        title: "How to learn coding in 30 days",
        image: {ImageThum},
        thumbImage:{ImageThum},
        author:"ajay",
        views:"100k",
        timestamp:"3 days ago"
    },
     {
        title: "How to learn coding in 30 days",
        image: {ImageThum},
        thumbImage: {ImageThum},
        author:"Ram",
        views:"100k",
        timestamp:"3 days ago"
     }
]


const VideoGrid = () => {
    return <div className="grid grid-cols-4">
        {Videos.map(video => <div>
            <VideoCard 
                title={video.title}
                image={video.image}
                thumbImage={video.thumbImage}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}
            />
            </div>)}
    </div>
}

export default VideoGrid;