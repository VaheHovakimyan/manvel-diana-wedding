'use client';

import { FC, useEffect, useState } from 'react';
import { Howl } from 'howler';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import './Sound.scss';

interface SoundProps {
  sound: string;
}

const Sound: FC<SoundProps> = ({ sound }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [howl, setHowl] = useState<Howl | null>(null);

  useEffect(() => {
    const soundObj = new Howl({
      src: [sound],
      volume: 0,
      loop: true,
      html5: true,
    });
    setHowl(soundObj);
    soundObj.play();
    setIsPlaying(true);

    const handleScroll = () => {
      if (window.scrollY > 5 && soundObj.playing()) {
        soundObj.volume(1.0); // unmute
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      soundObj.unload();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sound]);

  const togglePlay = () => {
    if (!howl) return;
    if (isPlaying) {
      howl.pause();
      setIsPlaying(false);
    } else {
      howl.play();
      setIsPlaying(true);
    }
  };

  return (
    <button className="sound_div" onClick={togglePlay}>
      {isPlaying ? (
        <PauseCircleOutlineIcon style={{ color: 'white', fontSize: '40px' }} />
      ) : (
        <PlayCircleOutlineIcon style={{ color: 'white', fontSize: '40px' }} />
      )}
    </button>
  );
};

export default Sound;
