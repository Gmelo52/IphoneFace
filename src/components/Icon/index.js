import React from 'react';
import { AppTitle, IconBtn, ImgIcon } from './styles.js'


export default function IconComp(props) {
  return (
    <>
      <IconBtn onPress={()=>{{props.onPress != undefined && props.onPress()}}}>
        <ImgIcon source={props.nameIcon} />
        <AppTitle>{props.title}</AppTitle>
      </IconBtn>
    </>
  );
}
