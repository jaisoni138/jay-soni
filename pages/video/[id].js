import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { supabase } from "../../config/supabaseClient";
import { Chip } from "primereact/chip";
import { Tooltip } from "primereact/tooltip";
import { useRouter } from "next/router";
import { OrderList } from "primereact/orderlist";
import { Toast } from "primereact/toast";

const Video = () => {
  const [videoListData, setVideoListData] = useState([]);
  const [selectedVideoSrc, setSelectedVideoSrc] = useState("");
  const [collectionId, setcollectionId] = useState(null);
  const [playNextVideoListData, setPlayNextVideoListData] = useState([]);

  const router = useRouter();
  const toast = useRef(null);

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

  function playSelectedVideo(video) {
    setSelectedVideoSrc("https://www.youtube.com/embed/" + video.videoId);
  }

  function addToPlayNextQueue(newItem) {
    // Check if an item with the same ID already exists
    const existingItem = playNextVideoListData.find((item) => item.videoId === newItem.videoId);

    // If no existing item was found, create a new array with the new item
    if (!existingItem) {
      setPlayNextVideoListData((prevItems) => [...prevItems, newItem]);
    } else {
      // open toast
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "This video is already added in queue!",
      });
    }
  }

  function removeFromPlayNextQueue(idToRemove) {
    setPlayNextVideoListData((prevItems) => prevItems.filter((item) => item.videoId !== idToRemove.videoId));
  }

  const itemTemplate = (item) => {
    return (
      <div className="flex flex-wrap p-0 align-items-center gap-3">
        <img className="shadow-2 flex-shrink-0 border-round" width={64} src={`https://img.youtube.com/vi/${item.videoId}/default.jpg`} alt={item.title} />
        <div className="flex-1 flex flex-column gap-2 xl:mr-8">
          <span className="font-bold">{item.title}</span>
          <div className="flex align-items-center gap-2">
            <span>{item.description}</span>
          </div>
        </div>
        <i
          className="pi pi-minus text-sm"
          onClick={() => {
            removeFromPlayNextQueue(item);
          }}
        ></i>
      </div>
    );
  };

  return (
    <>
      <Toast ref={toast} appendTo={null} />

      <div className="flex flex-column gap-3 flex-wrap">
        <div className="lg:ml-4 flex flex-column flex-wrap" style={{ height: "330px", position: "sticky", top: "100px" }}>
          {selectedVideoSrc ? (
            <>
              <iframe
                className="flex align-items-center justify-content-center mb-4 mt-1 shadow-4"
                // width=" 590"
                // height="300"
                src={selectedVideoSrc}
                frameborder="0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
                style={{ height: "300px", width: "40%" }}
                onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));'
              ></iframe>
              <div className="grid text-xl font-medium flex mb-4 mt-1 bg-black-alpha-90 shadow-5" style={{ height: "300px", width: "60%", overflow: "scroll" }}>
                <OrderList
                  className="w-full"
                  dataKey="id"
                  value={playNextVideoListData}
                  onChange={(e) => setPlayNextVideoListData(e.value)}
                  itemTemplate={itemTemplate}
                ></OrderList>

                {/* <span className="text-white">Play Next</span>
                {Array.from(videoListData).map((videoList) => (
                  <div className="col-12 p-0">
                    <div
                      className="card cursor-pointer"
                      onClick={() => {
                        playSelectedVideo(videoList);
                      }}
                    >
                      <div className="flex justify-content-between">
                        <div>
                          <span
                            className="block font-small text-lg surface-overlay overflow-hidden text-overflow-ellipsis white-space-nowrap tooltip-show-full-title"
                            data-pr-tooltip={videoList.title}
                            data-pr-position="right"
                          >
                            {videoList.title}
                          </span>

                          <Tooltip target=".tooltip-show-full-title" mouseTrack mouseTrackLeft={10} />

                          <div className="font-medium">
                            <Chip className="text-sm" label={videoList.description} />
                          </div>
                        </div>
                        <i
                          className="pi pi-youtube text-5xl text-red-500 tooltip-show-full-title"
                          data-pr-tooltip="Play"
                          data-pr-position="right"
                          data-pr-at="right+5 top"
                          data-pr-my="left center-2"
                        />
                      </div>
                    </div>
                  </div>
                ))} */}
              </div>
            </>
          ) : (
            <div className="text-xl font-medium flex align-items-center justify-content-center mb-4 mt-1 border-round bg-black-alpha-90 text-white shadow-5" style={{ height: "300px", width: "100%" }}>
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
                  <i
                    className="pi pi-plus text-xl text-red-500 tooltip-show-full-title"
                    data-pr-tooltip="+ Play next"
                    data-pr-position="right"
                    data-pr-at="right+5 top"
                    data-pr-my="left center-2"
                    onClick={() => {
                      addToPlayNextQueue(videoList);
                    }}
                  />
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
