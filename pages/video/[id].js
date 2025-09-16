import React, { useEffect, useMemo, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { supabase } from "../../config/supabaseClient";
import { Chip } from "primereact/chip";
import { Tooltip } from "primereact/tooltip";
import { useRouter } from "next/router";

const Video = () => {
  const [videoListData, setVideoListData] = useState([]);
  const [selectedVideoSrc, setSelectedVideoSrc] = useState("");
  const [collectionId, setcollectionId] = useState(null);
  const router = useRouter();

  async function fetchVideos() {
    // fetch video data
    try {
      if (collectionId) {
        const { data, error } = await supabase.from("playlist").select("*").eq("collection_id", collectionId).order("created_dttm", { ascending: false });
        if (error) {
          console.error("Error fetching data:", error);
        } else {
          setVideoListData(data);
        }
      }
    } catch (e) {
      // todo: add new error toast...
      //   toast.error(
      //     "System is unavailable.  Unable to fetch Client Data.  Please try again later or contact tech support!",
      //     {
      //       position: "bottom-right",
      //       autoClose: false,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //       theme: "colored",
      //     }
      //   );
    }
  }

  useMemo(() => {
    if (router.query.id !== undefined) {
      setcollectionId(router.query.id);
    }
  }, [router.query]);

  useEffect(() => {
    fetchVideos();
  }, [collectionId]);

  async function playSelectedVideo(video) {
    console.log(video.videoId);
    setSelectedVideoSrc("https://www.youtube.com/embed/" + video.videoId);
  }

  return (
    <>
      <div className="flex flex-column gap-3 align-items-center flex-wrap">
        <div style={{ height: "330px", position: "sticky", top: "100px" }}>
          {selectedVideoSrc ? (
            <>
              <iframe
                className="flex align-items-center justify-content-center mb-4 mt-1 border-round shadow-4"
                width=" 590"
                height="300"
                src={selectedVideoSrc}
                frameborder="0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
              ></iframe>
            </>
          ) : (
            <div
              className="text-xl font-medium flex align-items-center justify-content-center mb-4 mt-1 border-round bg-black-alpha-90 text-white shadow-5"
              style={{ width: "590px", height: "300px" }}
            >
              Please select a video to play...!
            </div>
          )}
        </div>
        <div className="grid lg:ml-3" style={{ height: "400px", overflow: "scroll" }}>
          {Array.from(videoListData).map((videoList) => (
            <div className="col-12 lg:col-6 xl:col-4">
              <div
                className="card mb-0 cursor-pointer custom-shadow-4-on-hover custom-shadow-1"
                onClick={() => {
                  playSelectedVideo(videoList);
                }}
              >
                <div className="flex justify-content-between">
                  <div>
                    <span
                      className="block font-medium text-lg mb-3 mr-3 surface-overlay overflow-hidden text-overflow-ellipsis white-space-nowrap tooltip-show-full-title"
                      data-pr-tooltip={videoList.title}
                      data-pr-position="right"
                      style={{ width: "200px" }}
                    >
                      {videoList.title}
                    </span>

                    <Tooltip target=".tooltip-show-full-title" mouseTrack mouseTrackLeft={10} />

                    <div className="font-medium">
                      <Chip className="text-sm" label={videoList.description} />
                    </div>
                  </div>
                  <i className="pi pi-youtube text-5xl text-red-500 tooltip-show-full-title" data-pr-tooltip="Play" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" />
                </div>
                {/* <span className="text-green-500 font-medium">24 new </span>
            <span className="text-500">since last visit</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Video;
