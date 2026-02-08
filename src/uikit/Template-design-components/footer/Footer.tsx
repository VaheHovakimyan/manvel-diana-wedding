import footer_icon from 'public/assets/footer/tel_icon.svg';
import footer_mail from 'public/assets/footer/mail_hraviratoms.svg';
import footer_facebook_icon from 'public/assets/footer/facebook_icon.svg';
import footer_instagram_icon from 'public/assets/footer/instagram_icon.svg';
import footer_tiktok_icon from 'public/assets/footer/tik-tok.svg';
import footer_telegram_icon from 'public/assets/footer/telegram_icon.svg';
import footer_youtube_icon from 'public/assets/footer/youtube_icon.svg';
import footer_logo from 'public/hraviratoms_logo.webp';
import CustomImage from '../../Image/Image';

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1e1e1e] text-white mx-auto py-6">
      <div className="flex items-center w-[150px]">
        <CustomImage
          src={footer_logo}
          width="150"
          height="150"
          className="rounded-full"
          alt="footer_logo"
        />
      </div>

      <p className="pt-6 text-[24px] leading-[30.26px] font-normal font-inter">
        hraviratoms.com
      </p>

      <div className="flex flex-col justify-center my-4 px-4 font-inter">
        <div className="flex gap-2 p-1 items-center">
          <CustomImage
            src={footer_icon}
            width="20"
            height="20"
            alt="tel_icon"
          />
          <a href="tel:+37455522285">
            <p>+374 55 52 22 85</p>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[10px] font-inter font-normal text-[24px] max-[500px]:text-[17px]">
        <CustomImage
          src={footer_mail}
          width="22"
          height="22"
          className="max-[500px]:w-[18px] max-[500px]:h-[18px]"
          alt="mail_icon"
        />
        <a
          href="mailto:hraviratoms.com@gmail.com?subject=Without%20Minimum%20Subject&body=As%20a%20letter"
          target="_blank"
          className="hover:underline"
        >
          <span>hraviratoms.com@gmail.com</span>
        </a>
      </div>

      <div className="w-[90%] h-[1px] bg-white my-3"></div>

      <div className="flex gap-5 px-10 items-center justify-center">
        <a
          href="https://www.facebook.com/share/1Bo7zzyW7E/?mibextid=wwXIfr"
          target="_blank"
        >
          <CustomImage
            src={footer_facebook_icon}
            width="30"
            height="30"
            alt="facebook_icon"
          />
        </a>
        <a
          href="https://www.instagram.com/hraviratoms_com?igsh=MTFwczgyaXpsMXVidw%3D%3D&utm_source=qr"
          target="_blank"
        >
          <CustomImage
            src={footer_instagram_icon}
            width="30"
            height="30"
            alt="instagram_icon"
          />
        </a>
        <a
          href="https://www.tiktok.com/../../../../../public/hraviratoms.com?_t=ZS-8vHtUd9OVq4&_r=1"
          target="_blank"
        >
          <CustomImage
            src={footer_tiktok_icon}
            width="30"
            height="30"
            alt="tiktok_icon"
          />
        </a>
        <a href="https://t.me/hraviratoms_com" target="_blank">
          <CustomImage
            src={footer_telegram_icon}
            width="30"
            height="30"
            alt="telegram_icon"
          />
        </a>
        <a
          href="https://www.youtube.com/../../../../../public/Hraviratomser"
          target="_blank"
        >
          <CustomImage
            src={footer_youtube_icon}
            width="30"
            height="30"
            alt="youtube_icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
