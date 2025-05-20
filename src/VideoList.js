function VideoList(props){
    console.log("props",props);
    const renderList=()=>{
        var list=props.videos.map(video=>{
            return<li style={{cursor:"pointer"}}onClick={()=>{props.updateSelectedVideo(video)}} key={video.etag}><img src={video.snippet.thumbnails.medium.url}></img></li>
        })
        return list;
    }


    return(
        <div>
             <h1></h1>
             <ul style={{listStyleType:"none"}}>
                {renderList()}
             </ul>
        </div>
    )
}

export default VideoList;




/*

{
    "kind": "youtube#searchResult",
    "etag": "yXVfmtepKOjzndrUXaw7QIyMVvw",
    "id": {
        "kind": "youtube#video",
        "videoId": "cUSaH6G28Nk"
    },
    "snippet": {
        "publishedAt": "2024-08-27T03:31:13Z",
        "channelId": "UChYs-_zjKRYhdMddjx-NPLw",
        "title": "Harsh Truth of Java in 2024! Ft. Ultimate Java Developer @Telusko",
        "description": "Our Study Abroad Platform: https://www.flywithsingh.com/sign-up Checkout KodeKloud & Get upto 45% Off https://bit.ly/4dpsE7y ...",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/cUSaH6G28Nk/default.jpg",
                "width": 120,
                "height": 90
            },
            "medium": {
                "url": "https://i.ytimg.com/vi/cUSaH6G28Nk/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            "high": {
                "url": "https://i.ytimg.com/vi/cUSaH6G28Nk/hqdefault.jpg",
                "width": 480,
                "height": 360
            }
        },
        "channelTitle": "Singh in USA",
        "liveBroadcastContent": "none",
        "publishTime": "2024-08-27T03:31:13Z"
    }
}*/