import React from 'react';
import {connect} from "react-redux";

import MediaText from "../templateMedia/mediaText/mediaText";
import MediaDocument from "../templateMedia/mediaDocument/mediaDocument";
import MediaAudio from "../templateMedia/mediaAudio/mediaAudio";
import MediaVideo from "../templateMedia/mediaVideo/mediaVideo";
import MediaImg from "../templateMedia/mediaImg/mediaImg";
import MediaWordColl from "../templateMedia/mediaWordColl/mediaWordColl";
import MediaTF from "../templateMedia/mediaTF/mediaTF";
import MediaConnects from "../templateMedia/mediaConnects/mediaConnects";
import MediaSentence from "../templateMedia/mediaSentence/mediaSentence";
import MediaTest from "../templateMedia/mediaTest/mediaTest";
import MediaWrite from "../templateMedia/mediaWrite/mediaWrite";
import MediaTransfer from "../templateMedia/mediaTransfer/meidaTransfer";
import MediaNote from "../templateMedia/mediaNote/mediaNote";

const MediaModals = ({type, data, wsUpdate, sectionIndex, setActiveWord, setActiveEmptyItem, user}) => {
  switch (type) {
    case 'TEXT': return <MediaText textData={data} />

    case 'VIDEO': return <MediaVideo data={data}/>

    case 'PHOTO': return  <MediaImg imageData={data}/>

    case 'audio': return <MediaAudio audioData={data}/>

    case 'DOCUMENT': return <MediaDocument documentData={data} />

    case 'LIST_WORD_COLL': return  <MediaWordColl data={data} wsUpdate={wsUpdate} sectionIndex={sectionIndex} setActiveWord={setActiveWord} setActiveEmptyItem={setActiveEmptyItem}/>

    case 'TF': return  <MediaTF data={data} wsUpdate={wsUpdate} sectionIndex={sectionIndex}/>

    case 'WRITE_WORD': return  <MediaWrite data={data}/>

    case 'TRANSFER_WORDS':  return  <MediaTransfer data={data} wsUpdate={wsUpdate} setActiveWordRedux={setActiveWord} setActiveEmptyItem={setActiveEmptyItem}/>

    case 'SENTENCE': return  <MediaSentence data={data} wsUpdate={wsUpdate} setActiveWordRedux={setActiveWord} setActiveEmptyItem={setActiveEmptyItem}/>

    case 'CONNECT': return <MediaConnects data={data}/>

    case 'TEST': return <MediaTest data={data} wsUpdate={wsUpdate}/>

    case 'NOTE':
      if(user.type === 'teacher' || user.type === 'admin') {
        return <MediaNote data={data}/>
      }
      break

    default: return <MediaText textData={data} />
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MediaModals);