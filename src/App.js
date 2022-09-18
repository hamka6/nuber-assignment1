import logo from './logo.svg';
import './App.css';
import { Amplify, Auth } from 'aws-amplify';

import React , {useState} from 'react';

import S3Upload from './S3Upload.js';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

import S3FileUpload from 'react-s3';
import ReactS3 from 'react-s3';


window.Buffer = window.Buffer || require("buffer").Buffer;
 

 
const config = {
    bucketName: 'amplify-nuber-dev-134221-deployment',
    dirName: 'ids', /* optional */
    region: 'ap-southeast-2',
    accessKeyId: 'AKIAWJFK5OGYD2DT5F5K',
    secretAccessKey: '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',
}


Amplify.configure(awsExports);

 




function App({ signOut, user }) {

  const [inputFile, setInputFile] = useState(null);

  const [fileUploaded, setFileUploaded] = useState(false);

  const upload = (e) => {
    console.log(inputFile);
    ReactS3.uploadFile( inputFile, config)
    setFileUploaded(true);
  }

  const handleFileInput = (e) => {
    setInputFile(e.target.files[0]);
  }
  
  return (
    <>
    <div className="mainDiv">
      <h1>Welcome to Nuber!</h1>

      <div>
        <p>In order to complete your registration, you're required to upload identification.</p>

        <p></p>
      </div>

        <input
        type="file" 
        onChange={handleFileInput}></input>
      <br/>
      <br/>
      <button onClick={() => upload(inputFile)}>Upload File</button>
      {fileUploaded ? (
        <p style={{color: 'green'}}>File has been successfully uploaded!</p>
      ) : (
        <p></p>
      )}
      <div>
      <br/>

      <button onClick={signOut}>Sign out</button>
      </div>
      </div>
    </>
  );
}

export default withAuthenticator(App);