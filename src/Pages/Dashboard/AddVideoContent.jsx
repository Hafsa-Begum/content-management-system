import React, { useRef, useState } from 'react';
import axios from 'axios';

const AddVideoContent = () => {
    const [videoSelected, setVideoSelected] = useState(false);
    const [textSelected, setTextSelected] = useState(false);
    const [stream, setStream] = useState(null);
    const [recordedChunks, setRecordedChunks] = useState([]);
    const [recordedUrl, setRecordedUrl] = useState(null);
    const [recordedBlob, setRecordedBlob] = useState(null);
    const [muted, setMuted] = useState(false);
    const [name, setName] = useState('');
    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);

    const handleVideoSelection = (event) => {
        setVideoSelected(event.target.checked);
    };

    const handleTextSelection = (event) => {
        setTextSelected(event.target.checked);
    };

    const handleStartRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
        });
        setStream(stream);
        videoRef.current.srcObject = stream;

        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.start();
        mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable);
    };

    const handleStopRecording = () => {
        mediaRecorderRef.current.stop();
        const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
        const recordedUrl = URL.createObjectURL(recordedBlob);
        setRecordedBlob(recordedBlob);
        setRecordedUrl(recordedUrl);
        setStream(null);
        setRecordedChunks([]);
        videoRef.current.srcObject = null;
        stream.getTracks().forEach((track) => track.stop());
    };

    const handleDataAvailable = (event) => {
        if (event.data.size > 0) {
            setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
        }
    };

    const toggleMuted = () => {
        setMuted(!muted);
    };
    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('video', recordedBlob, `${name}.webm`);

        try {
            const response = await axios.post('/api/videos', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    id="video"
                    checked={videoSelected}
                    onChange={handleVideoSelection}
                />
                <label htmlFor="video">Video</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="text"
                    checked={textSelected}
                    onChange={handleTextSelection}
                />
                <label htmlFor="text">Text</label>
            </div>
            {videoSelected && (
                <div>
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        src={recordedUrl}
                        muted={muted}
                    />
                    <div>
                        {!stream && (
                            <button onClick={handleStartRecording}>Start Recording</button>
                        )}
                        {stream && (
                            <button onClick={handleStopRecording}>Stop Recording</button>
                        )}
                        {recordedUrl && (
                            <button onClick={toggleMuted}>
                                {muted ? 'Unmute' : 'Mute'}
                            </button>
                        )}
                        {recordedBlob && (
                            <div>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                                <button onClick={handleUpload}>Upload Video</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {textSelected && <p>Text selected</p>}
        </div>
    );
};

export default AddVideoContent;

// import React, { useState } from 'react';
// import axios from 'axios';

// const AddVideoContent = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [recordedBlob, setRecordedBlob] = useState(null);
//   const [name, setName] = useState('');

//   const startRecording = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({
//       audio: true,
//       video: true,
//     });

//     const recordedChunks = [];
//     const mediaRecorder = new MediaRecorder(stream);

//     mediaRecorder.addEventListener('dataavailable', event => {
//       recordedChunks.push(event.data);
//     });

//     mediaRecorder.addEventListener('stop', () => {
//       const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
//       setRecordedBlob(recordedBlob);
//     });

//     mediaRecorder.start();
//     setIsRecording(true);
//   };

//   const stopRecording = () => {
//     mediaRecorder.stop();
//     setIsRecording(false);
//   };

//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('video', recordedBlob, `${name}.webm`);

//     try {
//       const response = await axios.post('/api/videos', formData);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       {!isRecording && (
//         <button onClick={startRecording}>Start Recording</button>
//       )}
//       {isRecording && (
//         <button onClick={stopRecording}>Stop Recording</button>
//       )}
//       {recordedBlob && (
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={e => setName(e.target.value)}
//           />
//           <button onClick={handleUpload}>Upload Video</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddVideoContent;
