import React from 'react';
import { Menu, ImgBack, ViewCont, ViewMenu, ViewRow } from './styles'
import { StatusBar } from 'expo-status-bar';
import IconComp from '../../components/Icon';
import iconBooks from '../../assets/books.png';
import iconStore from '../../assets/app-store.png';
import iconTv from '../../assets/apple-tv.png';
import iconCalc from '../../assets/calculator.png';
import iconCalendario from '../../assets/calendar.png';
import iconCamera from '../../assets/camera.png';
import iconClock from '../../assets/clock.png';
import iconFiles from '../../assets/files.png';
import iconFind from '../../assets/find-my.png';
import iconHealth from '../../assets/health.png';
import iconMail from '../../assets/mail.png';
import iconSafari from '../../assets/safari.png';
import iconInfoGest from '../../assets/infogest.png';
import iconMulti from '../../assets/multi-up.png';
import iconPre from '../../assets/preOdonto.png';
import iconLibras from '../../assets/libras.png';
import iconMsg from '../../assets/ios-message.png';
import iconMusic from '../../assets/apple-music.png';
import iconSettings from '../../assets/settings.png';
import iconPhone from '../../assets/apple-phone.png';
import iconConVacinas from '../../assets/conVacinas.png';
import iconMedi from '../../assets/medicamentos.png';
import iconBio from '../../assets/bio.png';
import iconCovid from '../../assets/covid.png';
import iconHabbitus from '../../assets/habbitus.png';
import iconUro from '../../assets/uro.png';

export default function Home() {
  return (
    <>
      <StatusBar style="light" />
      <ImgBack source={require('../../assets/wallpaper.png')}>
        <ViewCont>
          <ViewRow>
            <IconComp nameIcon={iconBooks} title={"Books"} />
            <IconComp nameIcon={iconStore} title={"App Store"} />
            <IconComp nameIcon={iconTv} title={"TV"} />
            <IconComp nameIcon={iconCalc} title={"Calculadora"} />
          </ViewRow>
          <ViewRow>
            <IconComp nameIcon={iconCalendario} title={"Calendário"} />
            <IconComp nameIcon={iconCamera} title={"Câmera"} />
            <IconComp nameIcon={iconClock} title={"Relógio"} />
            <IconComp nameIcon={iconFiles} title={"Arquivos"} />
          </ViewRow>
          <ViewRow>
            <IconComp nameIcon={iconHealth} title={"Saúde"} />
            <IconComp nameIcon={iconSafari} title={"Safari"} />
            <IconComp nameIcon={iconInfoGest} title={"InfoGest"} />
            <IconComp nameIcon={iconUro} title={"Uro"} />
          </ViewRow>
          <ViewRow>
            <IconComp nameIcon={iconHabbitus} title={"Habbitus"} />
            <IconComp nameIcon={iconMulti} title={"MultiUp"} />
            <IconComp nameIcon={iconPre} title={"Odonto"} />
            <IconComp nameIcon={iconLibras} title={"Libras"} />
          </ViewRow>
          <ViewRow>
            <IconComp nameIcon={iconConVacinas} title={"Vacinas"} />
            <IconComp nameIcon={iconMedi} title={"Medamigo"} />
            <IconComp nameIcon={iconBio} title={"Bioquimica"} />
            <IconComp nameIcon={iconCovid} title={"Covid"} />
          </ViewRow>
        </ViewCont>
        <ViewMenu>
          <Menu>
            <ViewRow>
              <IconComp nameIcon={iconPhone} title={"Odonto"} />
              <IconComp nameIcon={iconMsg} title={"InfoGest"} />
              <IconComp nameIcon={iconMusic} title={"MultiUp"} />
              <IconComp nameIcon={iconSettings} title={"Libras"} />
            </ViewRow>
          </Menu>
        </ViewMenu>
      </ImgBack>
    </>
  );
}
