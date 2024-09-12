import Image from "next/image";



const VideoCard = (props: any) => {
    return <div>
        <Image src={props.image} alt={""}/>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <Image className="rounded-full" src={props.thumbImage} alt={""}/>
            </div>
            <div className="col-span-11 pl-2">
                <div>
                    {props.title}
                </div>
                <div className="col-span-11 pl-5 text-gray-600 text-base">
                    {props.author}
                </div>

                <div className="col-span-11 pl-5 text-gray-600 text-base">
                    {props.views} | {props.timestamp}
                </div>
            </div>
            
        </div>
    </div>
}

export default VideoCard;