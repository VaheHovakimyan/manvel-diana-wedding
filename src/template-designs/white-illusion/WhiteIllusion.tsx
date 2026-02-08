'use client';

import CallTo from '../../uikit/Template-design-components/call-to/CallTo';
import { TemplateDesign } from '../../../public/types';
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
import CountDown from '@uikit/Template-design-components/count-down/CountDown';

interface IWhiteIllusion {
  template?: TemplateDesign;
}

const amData = {
  introBgImage: '',
  maleName: 'Մանվել',
  femaleName: 'Դիանա',
  introTitle: '',
  introDescription: '',
  introShort: '',
  hasPhoneButton: true,
  phoneNumber: '99690966',
  hasMusic: true,
  sound: '',
  welcome: {
    name1: 'Մանվել',
    name2: 'Դիանա',
    start: 'Սիրելի հյուրեր',
    mid: 'Մենք ուրախ կլինենք, եթե դուք կիսեք մեզ հետ մեր կյանքի ամենահուզիչ և կարևոր պահերից մեկը',
    end: 'Մեր նշանադրության արարողության օրը',
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
    text: 'With love in every detail, we invite you to join us in celebrating one of the most meaningful moments of our lives.',
  },
  eventProgram: [
    {
      eventName: 'Lianna Garden Hall',
      eventTime: '17:30',
      eventPlace: 'ring',
      map: 'https://yandex.com/maps/-/CPE~iL63',
      mapName: 'Lianna Garden Hall',
    },
  ],
  textComponent: {
    text1:
      'With love in every detail, we invite you to join us in celebrating one of the most meaningful moments of our lives.',
    text2: ``,
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
            month={2}
            activeDay={16}
            year={2026}
            calendarSymbolColor="black"
          />
        </div>

        <TextComponent
          fontSize="20px"
          text={`Սիրով հրավիրում ենք Ձեզ մեր նշանադրության արարողությանը`}
          imageUrl="/assets/manvel-diana/photo_3.webp"
        />

        <Timeline
          timeline={data.timeline}
          eventProgram={data.eventProgram}
          backgroundImage={fallbackImage}
        />

        <FinalMessage message={data.footer.text} />
        {/* <InviteForm /> */}
        <div className='bg-[rgba(10,10,10,0.8)] py-4'>
        <CountDown />

        </div>

        <TextComponent
          fontSize="23px"
          text={`Your presence
                will make this day
                even more special to us.

                With love, Manvel & Diana`}
          imageUrl="/assets/manvel-diana/photo_2.webp"
          type={'special'}
          padding={'p-4'}
        />
        <Footer />

        {data.hasMusic && <Sound sound={'/audio/wedding-audio.mp3'} />}
        {data.hasPhoneButton && <CallTo phoneNumber={data.phoneNumber} />}
      </div>
    </div>
  );
};

export default WhiteIllusion;
