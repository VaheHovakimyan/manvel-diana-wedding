import { FC } from 'react';
import './Intro.scss';

type IntroProps = {
  title: string;
  date: string;
};
const Intro: FC<IntroProps> = ({ title, date }) => {
  return (
    <div className="section save-date-section">
      <h2 className="save-date">
        Save <br />
        <span>the Date</span>
        <p>{date}</p>
      </h2>
      <h1 className="names">{title}</h1>
      <div className="hraver-part">
        <p className="armenian-text"></p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="double-down-arrow"
        >
          <path
            d="M7 7L12 12L17 7"
            stroke="#eee"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 13L12 18L17 13"
            stroke="#eee"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
export default Intro;
