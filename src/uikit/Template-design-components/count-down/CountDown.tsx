'use client';

import { FC, JSX } from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';
import './CountDown.scss';

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
}: CountdownRenderProps): JSX.Element => {
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="time_countdown">
      <div className="time_countdown_item">
        <span className="time_value">{pad(days)}</span>
        <span className="time_name">օր</span>
      </div>
      <div className="time_countdown_item">
        <span className="time_value">{pad(hours)}</span>
        <span className="time_name">ժամ</span>
      </div>
      <div className="time_countdown_item">
        <span className="time_value">{pad(minutes)}</span>
        <span className="time_name">րոպե</span>
      </div>
      <div className="time_countdown_item">
        <span className="time_value">{pad(seconds)}</span>
        <span className="time_name">վայրկյան</span>
      </div>
    </div>
  );
};

interface ICountDownProps {
  title?: string;
  month: number;
  day: number;
  year?: number;
}

const CountDown: FC<ICountDownProps> = ({
  title,
  month,
  day,
  year = new Date().getFullYear(),
}) => {
  const countdownDate = new Date(year, month - 1, day, 0, 0, 0);

  return (
    <div className="countdown_main">
      <div className="countdown_main_opacity">
        {title && <span className="countdown_title">{title}</span>}
        <Countdown date={countdownDate.getTime()} renderer={renderer} />
      </div>
    </div>
  );
};

export default CountDown;
