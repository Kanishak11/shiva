import React  from "react";
import Webcam from "react-webcam";
import { useState } from "react";
import Tesseract from 'tesseract.js';
 

const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: { exact: "environment" }
  };
  
  export default function WebcamCapture () {
    const [images , setImages] = useState([{}])
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            Tesseract.recognize(
                imageSrc.toString('base64'),
                'eng',
                { logger: m => console.log(m) }
              ).then(({ data: { text } }) => {
                setImages([...images,{img_src : imageSrc , text}])
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
          screenshotFormat="image/jpg"
          width={1280}
          videoConstraints={videoConstraints}
        />
        <button type="button" onClick={capture}>Capture photo</button>
        { images.map(({img_src ,text}) => {
          return <><img key={img_src} src={img_src} /> <p>{text}</p> </>
      })
    }
      </>



    );
  };