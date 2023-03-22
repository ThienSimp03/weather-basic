import React, { useState, useEffect } from "react";
import axios from "axios";
const YoutubeSearch = () => {
  const [dataInput, setDataInput] = useState("");
  const [listVideo, setListVideo] = useState([]);
  // useEffect(() => {}, []);
  const handleSearchYTB = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCVB84cFjqtqB-r3mHpf7-dgzzclz4oSMs",
        type: "video",
        q: dataInput,
      },
    });
    if (res && res.data.items.length > 0) {
      const ArrVideoYTb = [];
      res.data.items.map((item) => {
        let ObjVideoYTB = {};
        ObjVideoYTB.id = item.id.videoId;
        ObjVideoYTB.name = item.snippet.thumbnails.title;
        ObjVideoYTB.created = item.snippet.publishedAt;
        ObjVideoYTB.author = item.snippet.channelTitle;
        ObjVideoYTB.description = item.snippet.description;
        ArrVideoYTb.push(ObjVideoYTB);
      });
      console.log("---> check ArrVideoYTb:", ArrVideoYTb);
      setListVideo(ArrVideoYTb);
    }
  };
  return (
    <div>
      <div className="mt-5 text-center">
        <input
          className="px-2 border-2 border-solid border-[#243c5a] rounded-xl"
          value={dataInput}
          onChange={(e) => setDataInput(e.target.value)}
          type="text"
        />
        <button
          className="px-5 border-2 border-solid border-[#243c5a] rounded-lg hover:bg-[#ccc]"
          onClick={handleSearchYTB}
        >
          Search
        </button>
      </div>
      {listVideo &&
        listVideo.length > 0 &&
        listVideo.map((item, index) => (
          <div
            className="flex gap-5 mt-5 xl:max-w-[1200px] mx-auto"
            key={index}
          >
            <div>
              <iframe
                width="400"
                height="225"
                src={`https://www.youtube.com/embed/${item.id}`}
                title="The Way I Still Love You - Reynard Silva (Lyrics + Vietsub) ♫"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col gap-5">
              <h2>{item.name}</h2>
              <p>{item.created}</p>
              <p>{item.author}</p>
              <p className="overflow-hidden text-ellipsis ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default YoutubeSearch;
