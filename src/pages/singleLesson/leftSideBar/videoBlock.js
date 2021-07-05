import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import Peer from "simple-peer";

import { Video } from "./leftSideBarStyled";

import avatar from "../../../assets/media/icon/person.svg";
import micro from "../../../assets/media/image/voice.svg";
import cam from "../../../assets/media/image/cam.svg";

const video_ws_url = process.env.REACT_APP_VIDEO_WS_URL;

const VideoBlock = ({ user, classRoom }) => {
  const [stream, setStream] = useState();
  const userVideo = useRef();
  const socketRef = useRef();
  const connectionRef = useRef();
  const [message, setMessage] = useState(null);

  const [streamIsReady, setStreamIsReady] = useState(false);
  const [streamIsStarted, setStreamIsStarted] = useState(false);

  const [isVideoMuted, setVideoMute] = useState(false);
  const [isAudioMuted, setAudioMute] = useState(false);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        setStreamIsReady(true);
      });

    return () => {
      socketRef.current.close();
      connectionRef.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (!stream) return;

    if (streamIsReady) {
      let endPoint = `${video_ws_url}${classRoom}/`;
      socketRef.current = new WebSocket(endPoint);

      socketRef.current.onopen = (event) => {
        const peer_caller = new Peer({
          initiator: true,
          trickle: false,
          stream: stream,
        });

        peer_caller.on("signal", (data) => {
          console.log("1. peer_caller send offer:", data);

          socketRef.current.send(
            JSON.stringify({
              action: "offer",
              from: user.id,
              message: data,
            })
          );
        });

        peer_caller.on("stream", (stream) => {
          console.log("3. peer_caller start stream");
          setStreamIsStarted(true);
          userVideo.current.srcObject = stream;
        });

        peer_caller.on("close", () => {
          setStreamIsStarted(false);
        });

        connectionRef.current = peer_caller;
      };

      socketRef.current.onmessage = (event) => {
        const parsed_message = JSON.parse(event.data);
        const from = parsed_message["from"];

        if (user.id == from) {
          return;
        }
        setMessage(parsed_message);
      };
    }

    return () => {
      if (stream)
        stream.getTracks().forEach(function (track) {
          track.stop();
        });
    };
  }, [streamIsReady]);

  useEffect(() => {
    if (!message) return;

    const action = message["action"];

    if (action == "answer") {
      connectionRef.current.signal(message["message"]);
      console.log("2. peer_caller recived answer:", message["message"]);
    }
    if (action == "offer") {
      const peer_answerer = new Peer({
        initiator: false,
        trickle: false,
        stream: stream,
      });

      peer_answerer.on("signal", (data) => {
        console.log("3. peer_answerer send answer:", data);
        socketRef.current.send(
          JSON.stringify({
            action: "answer",
            from: user.id,
            message: data,
          })
        );
      });

      peer_answerer.on("stream", (stream) => {
        console.log("2. peer_answerer start stream");
        setStreamIsStarted(true);
        userVideo.current.srcObject = stream;
      });

      peer_answerer.on("close", () => {
        setStreamIsStarted(false);
      });

      peer_answerer.signal(message["message"]);
      console.log("1. peer_answerer received offer:", message["message"]);

      connectionRef.current = peer_answerer;
    }
  }, [message]);

  const muteVideo = () => {
    stream.getVideoTracks().forEach((track) => (track.enabled = isVideoMuted));
    setVideoMute(!isVideoMuted);
  };

  const muteAudio = () => {
    stream.getAudioTracks().forEach((track) => (track.enabled = isAudioMuted));
    setAudioMute(!isAudioMuted);
  };

  return (
    <Video>
      <div>
        <img
          src={avatar}
          alt="image"
          style={{ display: streamIsStarted ? "none" : "inline-block" }}
        />
        <video
          playsInline
          // muted
          ref={userVideo}
          autoPlay
          style={{
            width: "100%",
            display: !streamIsStarted ? "none" : "inline-block",
          }}
        />
      </div>

      <div className="video-btn">
        <div
          className="micro"
          onClick={muteAudio}
          style={{ opacity: isAudioMuted ? 0.5 : 1 }}
        >
          <img src={micro} onClick={muteAudio} alt="icon" />
        </div>
        <div
          className="cam"
          onClick={muteVideo}
          style={{ opacity: isVideoMuted ? 0.5 : 1 }}
        >
          <img src={cam} onClick={muteVideo} alt="icon" />
        </div>
      </div>
    </Video>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(VideoBlock);
