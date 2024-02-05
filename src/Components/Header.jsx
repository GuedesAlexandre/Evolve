import React, { useState } from 'react';
import '../App.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <nav className={`Navbar ${isMenuOpen ? 'open' : ''}`}>
          <div className="link">
            <div className="burger-icon" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            </div>
            <div className={`redirect ${isMenuOpen ? 'open' : ''}`}>
              About
            </div>
            <a href="#">
              <div className="logo">
              <svg width="196" height="77" viewBox="0 0 196 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.2112 76.3624H5V76.1474C5.48322 76.1474 5.89615 76.1177 6.2388 76.0584C6.58145 75.9991 6.92409 75.8879 7.26674 75.7099C7.60939 75.5394 7.89932 75.2799 8.14532 74.9463C8.38254 74.6126 8.50554 74.1826 8.50554 73.6636V48.3814H6.18608V47.6845H8.50554V30.7432C8.50554 30.1946 8.38254 29.7497 8.14532 29.4161C7.9081 29.0825 7.60939 28.8378 7.26674 28.6747C6.92409 28.519 6.58145 28.4004 6.2388 28.3262C5.89615 28.2521 5.48322 28.215 5 28.215V28H33.2112L29.3982 37.0823H29.038C29.0731 37.023 29.1083 36.9414 29.1434 36.8228C29.3103 36.3631 29.5036 35.6959 29.7057 34.821C29.9078 33.9461 29.9429 33.0564 29.8111 32.1297C29.6706 31.2029 29.1961 30.4022 28.3703 29.7201C27.5444 29.038 26.1738 28.6969 24.2497 28.6969H12.3537V47.6845H17.3441C19.3999 47.6845 21.0341 47.3583 22.2378 46.7059C23.4414 46.0534 24.3288 45.3491 24.9174 44.6002C25.4973 43.844 25.8575 43.2954 25.9981 42.9469H26.3056L21.2098 54.676H20.9023C20.9023 54.6167 20.9199 54.5426 20.955 54.461C21.1571 53.9717 21.3504 53.2525 21.5173 52.3109C21.6843 51.3693 21.5173 50.5019 20.999 49.7012C20.4806 48.9079 19.3297 48.463 17.5461 48.374H12.3449V75.658H24.2409C26.165 75.658 27.5356 75.3244 28.3615 74.6571C29.1873 73.9899 29.6618 73.1891 29.8023 72.2475C29.9429 71.3059 29.9078 70.4088 29.6969 69.5562C29.4948 68.7036 29.3016 68.0437 29.1346 67.5766C29.0995 67.458 29.0643 67.3765 29.0292 67.3171H29.3894L33.2025 76.355L33.2112 76.3624Z" fill="white"/>
<path d="M36.857 30.7432C36.6813 30.1946 36.4528 29.7497 36.1629 29.4161C35.873 29.0825 35.5479 28.8378 35.1877 28.6747C34.8274 28.519 34.476 28.4004 34.1334 28.3262C33.7907 28.2521 33.4129 28.215 33 28.215V28H43.8065V28.215C43.2882 28.215 42.8665 28.2447 42.5238 28.304C42.1812 28.3633 41.8561 28.4745 41.5486 28.6524C41.2411 28.8304 41.0039 29.0825 40.8545 29.4161C40.6964 29.7497 40.7052 30.1946 40.8809 30.7432L51.8983 68.0141L61.7296 30.7432C61.8702 30.1946 61.8614 29.7497 61.7032 29.4161C61.5451 29.0825 61.3079 28.8304 60.9828 28.6524C60.6577 28.4819 60.3239 28.3633 59.9812 28.304C59.6386 28.2447 59.2081 28.215 58.6985 28.215V28H66.4739V28.215C66.0259 28.215 65.6393 28.2447 65.3142 28.304C64.9891 28.3633 64.6465 28.4745 64.2863 28.6524C63.9261 28.8304 63.5922 29.0825 63.2847 29.4161C62.9772 29.7497 62.7488 30.1946 62.617 30.7432L50.5189 76.5329L36.857 30.7432Z" fill="white"/>
<path d="M75.5289 77C71.8436 77 68.6297 74.5682 65.8874 69.7045C63.2894 64.7222 62 58.9911 62 52.5037C62 46.0163 63.299 40.2407 65.8874 35.2584C68.6297 30.4244 71.8436 28 75.5289 28C79.2142 28 82.428 30.417 85.1703 35.2584C87.7299 40.2407 89 45.9867 89 52.5037C89 59.0207 87.7202 64.7222 85.1703 69.7045C82.428 74.5682 79.2142 77 75.5289 77ZM75.5289 28.6969C73.4601 28.6969 71.7473 29.8461 70.4002 32.1519C69.0531 34.4577 68.0331 37.4308 67.3596 41.0785C66.686 44.7263 66.3493 48.5371 66.3493 52.5037C66.3493 56.4703 66.686 60.2737 67.3596 63.9066C68.0331 67.5396 69.0531 70.5201 70.4002 72.8333C71.757 75.1539 73.4601 76.3105 75.5289 76.3105C77.5977 76.3105 79.2623 75.1539 80.6287 72.8333C82.0046 70.5201 83.0342 67.5396 83.727 63.9066C84.4198 60.2737 84.7662 56.4703 84.7662 52.5037C84.7662 48.5371 84.4198 44.7263 83.727 41.0785C83.0342 37.4308 81.995 34.4503 80.6287 32.1519C79.2527 29.8461 77.5592 28.6969 75.5289 28.6969Z" fill="white"/>
<path d="M119.504 76.5329L89 76.3624V76.1474C89.4832 76.1474 89.8961 76.1177 90.2388 76.0584C90.5814 75.9991 90.9241 75.8879 91.2667 75.7099C91.6094 75.5394 91.8993 75.2799 92.1453 74.9463C92.3825 74.6126 92.5055 74.1826 92.5055 73.6636V30.7432C92.5055 30.1946 92.3825 29.7497 92.1453 29.4161C91.9081 29.0825 91.6094 28.8378 91.2667 28.6747C90.9241 28.519 90.5814 28.4004 90.2388 28.3262C89.8961 28.2521 89.4832 28.215 89 28.215V28H99.8065V28.215C99.3233 28.215 98.9104 28.2447 98.5677 28.304C98.2251 28.3633 97.8825 28.4745 97.5398 28.6524C97.1972 28.823 96.916 29.0825 96.6876 29.4161C96.4679 29.7497 96.3537 30.1946 96.3537 30.7432L97 75.5H108C109.924 75.5 115.596 75.6655 116.5 75C117.5 74.5 117.359 73.4416 117.5 72.5C117.5 71.5 117.194 70.3787 116.754 69.5C116.254 68.5 116 68.5 115 68C114.965 67.8814 113.073 67.3839 113.038 67.332H116.754L119.496 76.5403L119.504 76.5329Z" fill="white"/>
<path d="M105.857 30.7432C105.681 30.1946 105.453 29.7497 105.163 29.4161C104.873 29.0825 104.548 28.8378 104.188 28.6747C103.827 28.519 103.476 28.4004 103.133 28.3262C102.791 28.2521 102.413 28.215 102 28.215V28H112.807V28.215C112.288 28.215 111.866 28.2447 111.524 28.304C111.181 28.3633 110.856 28.4745 110.549 28.6524C110.241 28.8304 110.004 29.0825 109.855 29.4161C109.696 29.7497 109.705 30.1946 109.881 30.7432L120.898 68.0141L130.73 30.7432C130.87 30.1946 130.861 29.7497 130.703 29.4161C130.545 29.0825 130.308 28.8304 129.983 28.6524C129.658 28.4819 129.324 28.3633 128.981 28.304C128.639 28.2447 128.208 28.215 127.699 28.215V28H135.474V28.215C135.026 28.215 134.639 28.2447 134.314 28.304C133.989 28.3633 133.646 28.4745 133.286 28.6524C132.926 28.8304 132.592 29.0825 132.285 29.4161C131.977 29.7497 131.749 30.1946 131.617 30.7432L119.519 76.5329L105.875 30.7432H105.857Z" fill="white"/>
<path d="M161 76.5922H132.789V76.3772C133.272 76.3772 133.685 76.3475 134.028 76.2882C134.37 76.2289 134.713 76.1177 135.055 75.9398C135.398 75.7618 135.688 75.5098 135.934 75.1761C136.171 74.8425 136.294 74.4125 136.294 73.8935V48.6113H133.975V47.9144H136.294V30.9731C136.294 30.4244 136.171 29.9796 135.934 29.6459C135.697 29.3123 135.398 29.0676 135.055 28.9045C134.713 28.7488 134.37 28.6302 134.028 28.5561C133.685 28.4819 133.272 28.4448 132.789 28.4448V28.2298H161L157.187 37.3121H156.827C156.862 37.2528 156.897 37.1713 156.932 37.0526C157.108 36.593 157.292 35.9257 157.494 35.0508C157.697 34.176 157.732 33.2863 157.6 32.3595C157.459 31.4327 156.985 30.632 156.159 29.9499C155.333 29.2678 153.963 28.9268 152.038 28.9268H140.142V47.9144H145.133C147.189 47.9144 148.823 47.5881 150.027 46.9357C151.23 46.2832 152.118 45.5789 152.706 44.8301C153.286 44.0738 153.646 43.5252 153.787 43.1767H154.094L148.999 54.9059H148.691C148.691 54.8466 148.709 54.7724 148.744 54.6909C148.946 54.2015 149.139 53.4824 149.306 52.5408C149.482 51.5992 149.306 50.7317 148.788 49.931C148.269 49.1377 147.127 48.6928 145.335 48.6039H140.134V75.8879H152.03C153.954 75.8879 155.324 75.5542 156.15 74.887C156.976 74.2197 157.451 73.419 157.591 72.4774C157.732 71.5358 157.697 70.6387 157.486 69.786C157.284 68.9334 157.09 68.2736 156.923 67.8065C156.888 67.6878 156.853 67.6063 156.818 67.547H157.178L160.991 76.5848L161 76.5922Z" fill="white"/>
<g clip-path="url(#clip0_12_4)">
<path d="M169.651 43.1215C174.284 21.4066 174.357 21.5303 153.05 15.289C174.309 21.7664 174.195 21.8341 178.598 0.0505123C173.965 21.7644 173.891 21.6408 195.198 27.8835C173.939 21.406 174.052 21.3383 169.65 43.122L169.651 43.1215Z" fill="white"/>
<path d="M169.651 43.1215C174.284 21.4066 174.357 21.5303 153.05 15.289C174.309 21.7664 174.195 21.8341 178.598 0.0505123C173.965 21.7644 173.891 21.6408 195.198 27.8835C173.939 21.406 174.052 21.3383 169.65 43.122L169.651 43.1215Z" stroke="white" stroke-width="0.0683878" stroke-miterlimit="10"/>
</g>
<defs>
<clipPath id="clip0_12_4">
<rect width="32.4842" height="29.8171" fill="white" transform="translate(178.608) rotate(59.1856)"/>
</clipPath>
</defs>
</svg>

              </div>
            </a>
            <a href="#">
              <div className={`redirect ${isMenuOpen ? 'open' : ''}`}>
                Project
              </div>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
