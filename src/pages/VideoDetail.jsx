import React from "react";

export default function VideoDetail() {
  const { videoId } = useParams();
  return <div>VideoDetail {videoId}</div>;
}
