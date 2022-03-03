import React from "react"
import { NavLink } from "react-router-dom"

function NavItems(props) {
  const navIcons = [
    {
      name: "home",
      image: (
        <svg
          width='82'
          height='82'
          viewBox='0 0 82 82'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g filter='url(#filter0_di_315_563)'>
            <path
              d='M70.2223 32.972L43.2254 2.95019C42.0885 1.68327 39.9047 1.68327 38.7678 2.95019L11.7709 32.972C11.3823 33.4031 11.1272 33.9379 11.0367 34.5113C10.9461 35.0848 11.0241 35.6723 11.2609 36.2023C11.7409 37.2861 12.8147 37.9826 13.9996 37.9826H19.9989V58.9978C19.9989 59.7941 20.315 60.5577 20.8775 61.1207C21.4401 61.6837 22.203 62 22.9986 62H31.9976C32.7932 62 33.5561 61.6837 34.1187 61.1207C34.6812 60.5577 34.9973 59.7941 34.9973 58.9978V46.9891H46.9959V58.9978C46.9959 59.7941 47.312 60.5577 47.8745 61.1207C48.4371 61.6837 49.2 62 49.9956 62H58.9946C59.7901 62 60.5531 61.6837 61.1157 61.1207C61.6782 60.5577 61.9943 59.7941 61.9943 58.9978V37.9826H67.9936C68.5745 37.9851 69.1436 37.8183 69.6315 37.5027C70.1194 37.187 70.505 36.7361 70.7412 36.205C70.9775 35.6738 71.0542 35.0853 70.9621 34.5112C70.87 33.9372 70.6129 33.4023 70.2223 32.972V32.972Z'
              fill='url(#paint0_linear_315_563)'
            />
          </g>
          <defs>
            <filter
              id='filter0_di_315_563'
              x='0'
              y='0'
              width='82'
              height='82'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='9' />
              <feGaussianBlur stdDeviation='5.5' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_315_563'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_315_563'
                result='shape'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='-1' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite
                in2='hardAlpha'
                operator='arithmetic'
                k2='-1'
                k3='1'
              />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='shape'
                result='effect2_innerShadow_315_563'
              />
            </filter>
            <linearGradient
              id='paint0_linear_315_563'
              x1='29.75'
              y1='-14.875'
              x2='54.125'
              y2='86.375'
              gradientUnits='userSpaceOnUse'>
              <stop offset='0.135417' stop-color='#FFDADA' />
              <stop offset='1' stop-color='#F30000' />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "about",
      image: (
        <svg
          width='82'
          height='82'
          viewBox='0 0 82 82'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g filter='url(#filter0_di_315_551)'>
            <path
              d='M41 35.75C50.3164 35.75 57.875 28.1914 57.875 18.875C57.875 9.55859 50.3164 2 41 2C31.6836 2 24.125 9.55859 24.125 18.875C24.125 28.1914 31.6836 35.75 41 35.75ZM56 39.5H49.543C46.9414 40.6953 44.0469 41.375 41 41.375C37.9531 41.375 35.0703 40.6953 32.457 39.5H26C17.7148 39.5 11 46.2148 11 54.5V56.375C11 59.4805 13.5195 62 16.625 62H65.375C68.4805 62 71 59.4805 71 56.375V54.5C71 46.2148 64.2852 39.5 56 39.5Z'
              fill='url(#paint0_linear_315_551)'
            />
          </g>
          <defs>
            <filter
              id='filter0_di_315_551'
              x='0'
              y='0'
              width='82'
              height='82'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='9' />
              <feGaussianBlur stdDeviation='5.5' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_315_551'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_315_551'
                result='shape'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='-1' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite
                in2='hardAlpha'
                operator='arithmetic'
                k2='-1'
                k3='1'
              />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='shape'
                result='effect2_innerShadow_315_551'
              />
            </filter>
            <linearGradient
              id='paint0_linear_315_551'
              x1='29.75'
              y1='-14.875'
              x2='54.125'
              y2='86.375'
              gradientUnits='userSpaceOnUse'>
              <stop offset='0.135417' stop-color='#FFDADA' />
              <stop offset='1' stop-color='#F30000' />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Portfolio",
      image: (
        <svg
          width='82'
          height='78'
          viewBox='0 0 82 78'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g filter='url(#filter0_di_315_568)'>
            <path
              d='M65 13.7895H53V7.89474C53 4.62316 50.33 2 47 2H35C31.67 2 29 4.62316 29 7.89474V13.7895H17C13.67 13.7895 11.03 16.4126 11.03 19.6842L11 52.1053C11 55.3768 13.67 58 17 58H65C68.33 58 71 55.3768 71 52.1053V19.6842C71 16.4126 68.33 13.7895 65 13.7895ZM47 13.7895H35V7.89474H47V13.7895Z'
              fill='url(#paint0_linear_315_568)'
            />
          </g>
          <defs>
            <filter
              id='filter0_di_315_568'
              x='0'
              y='0'
              width='82'
              height='78'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='9' />
              <feGaussianBlur stdDeviation='5.5' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_315_568'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_315_568'
                result='shape'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='-1' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite
                in2='hardAlpha'
                operator='arithmetic'
                k2='-1'
                k3='1'
              />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.42 0'
              />
              <feBlend
                mode='normal'
                in2='shape'
                result='effect2_innerShadow_315_568'
              />
            </filter>
            <linearGradient
              id='paint0_linear_315_568'
              x1='29.75'
              y1='-13.75'
              x2='51.1343'
              y2='81.422'
              gradientUnits='userSpaceOnUse'>
              <stop offset='0.135417' stop-color='#FFDADA' />
              <stop offset='1' stop-color='#F30000' />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Contact",
      image: (
        <svg
          width='86'
          height='78'
          viewBox='0 0 86 78'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g filter='url(#filter0_di_315_603)'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M43 59C60.6731 59 75 47.3594 75 33C75 18.6406 60.6731 7 43 7C25.3269 7 11 18.6406 11 33C11 40.2529 14.6551 46.8122 20.5504 51.5281L20.8214 62.7243L30.3725 56.8973C34.2466 58.2505 38.5156 59 43 59Z'
              fill='url(#paint0_linear_315_603)'
            />
          </g>
          <g filter='url(#filter1_di_315_603)'>
            <circle cx='32' cy='31' r='3' fill='url(#paint1_linear_315_603)' />
          </g>
          <g filter='url(#filter2_di_315_603)'>
            <circle cx='43' cy='31' r='3' fill='url(#paint2_linear_315_603)' />
          </g>
          <g filter='url(#filter3_di_315_603)'>
            <circle cx='54' cy='31' r='3' fill='url(#paint3_linear_315_603)' />
          </g>
          <defs>
            <filter
              id='filter0_di_315_603'
              x='0'
              y='0'
              width='86'
              height='77.7244'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='5.5' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_315_603'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_315_603'
                result='shape'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='-1' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite
                in2='hardAlpha'
                operator='arithmetic'
                k2='-1'
                k3='1'
              />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='shape'
                result='effect2_innerShadow_315_603'
              />
            </filter>
            <filter
              id='filter1_di_315_603'
              x='23'
              y='24'
              width='18'
              height='18'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='2' />
              <feGaussianBlur stdDeviation='3' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_315_603'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_315_603'
                result='shape'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='-1' />
              <feGaussianBlur stdDeviation='1' />
              <feComposite
                in2='hardAlpha'
                operator='arithmetic'
                k2='-1'
                k3='1'
              />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='shape'
                result='effect2_innerShadow_315_603'
              />
            </filter>
            <filter
              id='filter2_di_315_603'
              x='34'
              y='24'
              width='18'
              height='18'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='2' />
              <feGaussianBlur stdDeviation='3' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_315_603'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_315_603'
                result='shape'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='-1' />
              <feGaussianBlur stdDeviation='1' />
              <feComposite
                in2='hardAlpha'
                operator='arithmetic'
                k2='-1'
                k3='1'
              />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='shape'
                result='effect2_innerShadow_315_603'
              />
            </filter>
            <filter
              id='filter3_di_315_603'
              x='45'
              y='24'
              width='18'
              height='18'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='2' />
              <feGaussianBlur stdDeviation='3' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_315_603'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_315_603'
                result='shape'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='-1' />
              <feGaussianBlur stdDeviation='1' />
              <feComposite
                in2='hardAlpha'
                operator='arithmetic'
                k2='-1'
                k3='1'
              />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='shape'
                result='effect2_innerShadow_315_603'
              />
            </filter>
            <linearGradient
              id='paint0_linear_315_603'
              x1='31'
              y1='-8.67245'
              x2='50.9754'
              y2='86.6251'
              gradientUnits='userSpaceOnUse'>
              <stop offset='0.135417' stop-color='#FFDADA' />
              <stop offset='1' stop-color='#F30000' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_315_603'
              x1='30.875'
              y1='26.3125'
              x2='33.3125'
              y2='36.4375'
              gradientUnits='userSpaceOnUse'>
              <stop offset='0.135417' stop-color='#FFDADA' />
              <stop offset='1' stop-color='#F30000' />
            </linearGradient>
            <linearGradient
              id='paint2_linear_315_603'
              x1='41.875'
              y1='26.3125'
              x2='44.3125'
              y2='36.4375'
              gradientUnits='userSpaceOnUse'>
              <stop offset='0.135417' stop-color='#FFDADA' />
              <stop offset='1' stop-color='#F30000' />
            </linearGradient>
            <linearGradient
              id='paint3_linear_315_603'
              x1='52.875'
              y1='26.3125'
              x2='55.3125'
              y2='36.4375'
              gradientUnits='userSpaceOnUse'>
              <stop offset='0.135417' stop-color='#FFDADA' />
              <stop offset='1' stop-color='#F30000' />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Blogs",
      image: (
        <svg
          width='82'
          height='82'
          viewBox='0 0 82 82'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g filter='url(#filter0_di_315_591)'>
            <path
              d='M70.8126 27.533C70.5704 26.4613 69.9018 25.471 69.1389 25.0552C68.8967 24.9201 67.3966 24.7615 65.7894 24.6929C63.0977 24.5729 62.802 24.5193 61.9448 24.022C60.5926 23.2311 60.2304 22.3737 60.2176 20.0695C60.2047 15.6475 58.3681 11.5363 54.74 7.83885C52.1556 5.20025 49.2625 3.41689 45.9666 2.41374C45.1758 2.17153 43.4078 2.09222 37.4889 2.02578C28.1925 1.9186 26.1309 2.10509 22.97 3.36544C17.1432 5.66967 12.9643 10.5739 11.4385 16.8414C11.1578 18.0203 11.0892 19.9087 11.0228 30.7611C10.9435 44.3592 11.0356 46.3548 11.88 49.047C13.9694 55.6917 19.9034 60.6088 25.8631 61.6805C27.8453 62.0428 52.2884 62.1221 54.7936 61.7877C59.146 61.1983 62.562 59.4428 65.7636 56.174C68.0802 53.8033 69.5268 51.244 70.4783 47.8552C71.134 45.4974 71.0804 28.7248 70.8126 27.533V27.533ZM27.6696 19.0127C28.7154 17.9539 29.009 17.9131 35.5452 17.9131C41.4256 17.9131 41.6249 17.926 42.4842 18.3697C43.7293 18.9999 44.2779 19.883 44.2779 21.3041C44.2779 22.5773 43.7679 23.4733 42.6299 24.1978C42.0149 24.5857 41.6527 24.6136 35.8923 24.6393C32.3435 24.6651 29.504 24.5857 29.0883 24.4786C26.8638 23.8484 26.0345 20.6611 27.6675 19.0127H27.6696ZM53.3599 45.7782L51.3648 46.0997L40.9841 46.2197C31.8635 46.3269 29.2919 46.1661 28.8097 45.9518C27.8582 45.536 26.9603 44.3849 26.8146 43.3539C26.6667 42.3765 27.1617 41.0368 27.9118 40.3531C28.8633 39.4957 29.2769 39.47 40.9434 39.455C52.9442 39.4421 52.8778 39.4421 54.0157 40.501C55.6358 42.0143 55.2886 44.6807 53.3599 45.7782V45.7782Z'
              fill='url(#paint0_linear_315_591)'
            />
          </g>
          <defs>
            <filter
              id='filter0_di_315_591'
              x='0'
              y='0'
              width='82'
              height='82'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'>
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='9' />
              <feGaussianBlur stdDeviation='5.5' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_315_591'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_315_591'
                result='shape'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='-1' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite
                in2='hardAlpha'
                operator='arithmetic'
                k2='-1'
                k3='1'
              />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'
              />
              <feBlend
                mode='normal'
                in2='shape'
                result='effect2_innerShadow_315_591'
              />
            </filter>
            <linearGradient
              id='paint0_linear_315_591'
              x1='29.75'
              y1='-14.875'
              x2='54.125'
              y2='86.375'
              gradientUnits='userSpaceOnUse'>
              <stop offset='0.135417' stop-color='#FFDADA' />
              <stop offset='1' stop-color='#F30000' />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ]

  return (
    <div className='navigation-items-container'>
      <nav>
        <ul className='nav-link-unorder'>
          {navIcons.map((items) => {
            return (
              <NavLink
                to={`/${items.name}`}
                className={({ isActive }) =>
                  isActive
                    ? "Nav-link-container Nav-link-container-active"
                    : "Nav-link-container"
                }>
                <div className='nav-link-name'>{items.name}</div>
                <div className='nav-link-icon'>{items.image}</div>
              </NavLink>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default NavItems
