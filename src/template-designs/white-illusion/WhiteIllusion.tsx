'use client';

import CallTo from '../../uikit/Template-design-components/call-to/CallTo';
import { ILocation, Template, TemplateDesign } from '../../../public/types';
import React, { FC, useState } from 'react';
import './WhiteIllusion.scss';

import fallbackImage from 'public/assets/WhiteIllusion/under_background.jpg';

import Calendar from '@uikit/Template-design-components/calendar/Calendar';
import Timeline from '@uikit/Template-design-components/timeline/Timeline';
import InviteForm from '@uikit/Template-design-components/form/InviteForm';
import FinalMessage from '@uikit/Template-design-components/final-message/FinalMessage';
import Footer from '@uikit/Template-design-components/footer/Footer';
import WelcomeComp from '@uikit/Template-design-components/welcome/Welcome';
import Sound from '@uikit/Template-design-components/sound/Sound';
import TextComponent from '@uikit/Template-design-components/text-component/TextComponent';

interface IWhiteIllusion {
  template?: TemplateDesign;
}

const amData = {
  introBgImage: '',
  maleName: 'Վարդգես',
  femaleName: 'Տաթև',
  introTitle: '',
  introDescription: '',
  introShort: '',
  hasPhoneButton: true,
  phoneNumber: '99690966',
  hasMusic: true,
  sound: '',
  welcome: {
    name1: 'Վարդան',
    name2: 'Անի',
    start: 'Սիրելի հյուրեր',
    mid: 'Մենք ուրախ կլինենք, եթե դուք կիսեք մեզ հետ մեր կյանքի ամենահուզիչ և կարևոր պահերից մեկը',
    end: 'Մեր հարսանիքի օրը',
  },
  calendar: {
    month: 'Փետրվար',
    weekDays: ['Կիր', 'Երկ', 'Երք', 'Չրք', 'Հնգ', 'Ուր', 'Շբթ'],
  },
  timeline: {
    title1: 'Օրվա',
    title2: 'ծրագիր',
  },
  footer: {
    text: 'Սիրով հրավիրում ենք Ձեզ մեր հարսանիքին',
  },
  eventProgram: [
    {
      eventName: 'Փեսայի տուն',
      eventTime: '11:00',
      eventPlace: 'ring',
      map: 'https://yandex.com/navi/-/CLeaZLij',
      mapName: 'փեսայի տուն',
    },
    {
      eventName: 'Հարսի տուն',
      eventTime: '12:00',
      eventPlace: 'ring',
      map: 'https://yandex.com/navi/-/CLea6A7t',
      mapName: 'հարսի տուն',
    },
    {
      eventName: 'Սուրբ Հովհաննես Մկրտիչ եկեղեցի',
      eventTime: '15:00',
      eventPlace: 'church',
      map: 'https://yandex.com/navi/-/CLea6J6u',
      mapName: 'եկեղեցի',
    },
    {
      eventName: 'Մորենա ռեստորան (մեծ սրահ)',
      eventTime: '17:00',
      eventPlace: 'restaurant',
      map: 'https://yandex.com/navi/-/CLea6U59',
      mapName: 'ռեստորան',
    },
  ],
  textComponent: {
    text1:
      'Մեր կյանքում կարևոր իրադարձություն է սպասվում՝ մենք ընտանիք ենք կազմում և ցանկանում ենք Ձեզ հետ կիսել մեր կյանքի լուսավոր օրը',
    text2:
      'Ձեր ներկայությունը շատ կարևոր է մեզ համար, անհամբեր սպասում ենք ձեզ մեր հարսանիքին',
  },
};

interface WelcomeData {
  name1: string;
  name2: string;
  start: string;
  mid: string;
  end: string;
}

interface CalendarData {
  month: string;
  weekDays: string[];
}

interface TimelineData {
  title1: string;
  title2: string;
}

interface FooterData {
  text: string;
}

type EventPlace = string;

interface EventProgramItem {
  eventName: string;
  eventTime: string;
  eventPlace: EventPlace;
  map: string;
}

interface LocationItem {
  image: string;
  name: string;
  address: string;
  reverse: boolean;
}

export interface AmData {
  introBgImage: string;
  maleName: string;
  femaleName: string;
  introTitle: string;
  introDescription: string;
  introShort: string;
  hasPhoneButton: boolean;
  phoneNumber: string;
  hasMusic: boolean;
  sound: string;
  welcome: WelcomeData;
  calendar: CalendarData;
  timeline: TimelineData;
  footer: FooterData;
  eventProgram: EventProgramItem[];
  locations?: LocationItem[];
}

const WhiteIllusion: FC<IWhiteIllusion> = () => {
  const [data, setData] = useState(amData);

  return (
    <div className="app-wrapper">
      <div className="app-overlay" />

      <div className="app-content">
        <WelcomeComp template={data} />

        <div className="details-section">
          <h2 className="guests-title">{data.introTitle}</h2>
          <p className="guests-text">{data.introDescription}</p>
          <h3 className="married-title"> {data.introShort}</h3>
          <Calendar
            month={10}
            activeDay={15}
            year={2025}
            calendarSymbolColor="black"
          />
        </div>

        <TextComponent
          fontSize="20px"
          text={data.textComponent.text1}
          imageUrl="/assets/vardges-tatev/photo_3.webp"
        />

        <Timeline
          timeline={data.timeline}
          eventProgram={data.eventProgram}
          backgroundImage={fallbackImage}
        />

        <FinalMessage message={data.footer.text} />
        <InviteForm />
        <TextComponent
          fontSize="23px"
          text={data.textComponent.text2}
          imageUrl="/assets/vardges-tatev/photo_2.webp"
        />
        <Footer />

        {data.hasMusic && <Sound sound={'/audio/wedding-audio.mp3'} />}
        {data.hasPhoneButton && <CallTo phoneNumber={data.phoneNumber} />}
      </div>
    </div>
  );
};

export default WhiteIllusion;
