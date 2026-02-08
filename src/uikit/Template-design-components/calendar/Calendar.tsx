'use client';
import {
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import './Calendar.scss';
import { Heart } from '../../../../public/assets/svg/Heart';

type CalendarProps = {
  year: number;
  month: number;
  activeDay: number;
  activeState?: string;
  calendarColor?: string;
  calendarSymbolColor: string;
  calendarBackgroundColor?: string;
};

const monthsHy: string[] = [
  'Հունվար',
  'Փետրվար',
  'Մարտ',
  'Ապրիլ',
  'Մայիս',
  'Հունիս',
  'Հուլիս',
  'Օգոստոս',
  'Սեպտեմբեր',
  'Հոկտեմբեր',
  'Նոյեմբեր',
  'Դեկտեմբեր',
];

const Calendar: FC<CalendarProps> = ({
  year = new Date().getFullYear(),
  month,
  activeDay,
  activeState = 'circle',
  calendarColor = '#111111',
  calendarBackgroundColor = 'rgba(0,0,0,0)',
  calendarSymbolColor,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // const calendarRef = useRef<HTMLDivElement>(null);
  const monthIndex = month - 1;
  const firstDayOfMonth = new Date(year, monthIndex, 1);
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const startDay = (firstDayOfMonth.getDay() + 6) % 7;
  const weeks: (number | null)[][] = [];
  let day = 1;
  const [activeElement, setActiveElement] = useState<ReactNode>(null);

  for (let i = 0; i < 6; i++) {
    const week: (number | null)[] = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < startDay) || day > daysInMonth) {
        week.push(null);
      } else {
        week.push(day++);
      }
    }
    weeks.push(week);
  }

  useEffect(() => {
    let elem;
    switch (activeState) {
      case 'circle':
        elem = <div className="selected-circle"></div>;
        setActiveElement(elem);
        break;
      case 'heart':
        elem = (
          <div className="active_heart circle with-heart">
            <Heart color="#111" />
          </div>
        );
        setActiveElement(elem);
        break;
      default:
        break;
    }
  }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //         observer.disconnect();
  //       }
  //     },
  //     {
  //       threshold: 0.2,
  //     }
  //   );

  //   if (calendarRef.current) {
  //     observer.observe(calendarRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);

  return (
    <>
      <div
        // ref={calendarRef}
        className={`calendar-container`}
      >
        <div className="month-header">
          <span className="month">{monthsHy[monthIndex]}</span>
        </div>

        <table
          className="calendar"
          style={{ background: calendarBackgroundColor, color: calendarColor }}
        >
          <thead style={{ color: calendarColor }}>
            <tr>
              <th>ԵՐ</th>
              <th>ԵՔ</th>
              <th>ՉՔ</th>
              <th>ՀՆ</th>
              <th>ՈՒ</th>
              <th>ՇԲ</th>
              <th>ԿԻ</th>
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, rowIndex) => (
              <tr key={rowIndex}>
                {week.map((day, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={
                      activeState === 'circle' && day === activeDay
                        ? 'text-[#ffffff]'
                        : ''
                    }
                  >
                    {day || ''}
                    {day === activeDay && activeElement}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Calendar;
