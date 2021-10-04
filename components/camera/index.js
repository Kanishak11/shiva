import React  from "react";
import Webcam from "react-webcam";
import { useState } from "react";
import Tesseract from 'tesseract.js';
 

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: { exact: "environment" }
  };
  
  export default function WebcamCapture () {
    const [images , setImages] = useState([])
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            Tesseract.recognize(
                imageSrc,
                'eng',
                { logger: m => console.log(m) }
              ).then(({ data: { text } }) => {
                (setImages(()=>{[...images,text]}))
                console.log(text);
              })
        },
        [webcamRef,images]
        );
        
        
    return (
      <>

        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
        { images.map((img) => {
          return <p key={img}> 1 . {img}</p>  
      })
    }
      </>



    );
  };