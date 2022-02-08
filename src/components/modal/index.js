
import React, { useState } from 'react';
import WebView from 'react-native-webview';
import { BackModal, ModalFront } from './styles';


export default function ModalCustom(props) {
  return (<>
    {props.visible && <>   
     <BackModal onPress={()=>props.onClose()}/>
      <ModalFront>
        <WebView 
        source={{ uri: `https://www.youtube.com/embed/${props.idVideo}`}}
        containerStyle={{width:288, height:500}}/>
      </ModalFront>
      </> }
  </>
  );
}
