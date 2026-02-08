'use client';

import { FC } from 'react';
import { StaticImageData } from 'next/image';
import CustomImage from '../../Image/Image';
import location_image from 'public/assets/WhiteIllusion/location_background.png';
import church_image from 'public/assets/WhiteIllusion/icons/church.png';
import bye_image from 'public/assets/WhiteIllusion/icons/bye.png';
import champagne from 'public/assets/WhiteIllusion/champagne.png';
import wedding_ring from 'public/assets/WhiteIllusion/wedding-rings.png';
import dinner from 'public/assets/WhiteIllusion/dinner.png';
import './Timeline.scss';
import Link from 'next/link';
import { ArrowRight } from '@assets/svg/ArrowRight';

const locations = {
  ring: wedding_ring,
  bride: wedding_ring,
  church: church_image,
  champagne: champagne,
  restaurant: dinner,
  end: bye_image,
};

interface ITimeline {
  eventName: string;
  eventTime: string;
  eventPlace: string;
  map: string;
  mapName: string;
}

interface TimelineItem extends ITimeline {
  icon: string | StaticImageData;
}

interface TimelineProps {
  timeline: { title1: string; title2: string };
  eventProgram?: ITimeline[];
  backgroundImage?: StaticImageData;
}

const Timeline: FC<TimelineProps> = ({
  timeline,
  eventProgram = [],
  backgroundImage = location_image,
}) => {
  const timelineList: TimelineItem[] = eventProgram.map((item) => ({
    ...item,
    icon: locations[item.eventPlace as keyof typeof locations] ?? wedding_ring,
  }));

  return (
    <div className="timeline-section">
      <CustomImage
        src={location_image}
        alt="Table Decor"
        className="table-image"
      />
      <div className="timeline-content">
        <h2 className="timeline-title timeline-first-title">
          {timeline.title1}
        </h2>
        <h2 className="timeline-title text-black">{timeline.title2}</h2>

        <div className="timeline-container">
          {timelineList.map((item, index) => (
            <div className="timeline-item" key={index}>
              <CustomImage
                src={item.icon}
                alt="Ceremony"
                className="timeline-icon"
              />
              <div className="timeline-time">{item.eventTime}</div>
              <div className="timeline-label">{item.eventName}</div>
              <Link
                href={item.map}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 pl-4 pr-2 py-1 mt-2 text-[#333] text-[11.5px] rounded-xl border-[#777777] border-[1px] shadow-md transition-colors"
              >
                <span>Դեպի {item.mapName}</span>
                <ArrowRight />

                {/* <ArrowRight className="w-5 h-5" /> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
