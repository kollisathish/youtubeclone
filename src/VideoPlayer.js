function VideoPlayer(props){
    console.log("props",props);
    if(props.selectedVideo){
        var VideoId=props.selectedVideo.id.videoId;
        var url=`https://www.youtube.com/embed/${VideoId}`;
        return(
            <div style={{marginLeft:"40px"}}>
               <iframe width="900" height="515" src={url}></iframe> 
               <h3>{props.selectedVideo.snippet.title}</h3>
            </div>
        )

    }
    else{

        <div>
            <h1>Loading..............</h1>
        </div>
    }
}
export default VideoPlayer;