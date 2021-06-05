import styled from 'styled-components';

import video_screen from '../../../assets/media/image/video2.png';
import icon_play from '../../../assets/media/icon/play.svg';
import icon_change from '../../../assets/media/icon/refresh.svg';

const VideoWrap = styled.div`

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-top: 7px;

  .video {

    &__container {

      display: flex;
      justify-content: center;
      align-items: center;
      //background: url(${video_screen}) center center/cover no-repeat;
      max-height: 522px;
      height: 100%;
      width: 100%;
      min-height: 400px;
      border-radius: 8px;
      
      & * {
        border-radius: 8px;
      }

    }

    &__play--section {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background-color: #fff;
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      .video__play {

      width: 24px;
      height: 24px;
      background: url(${icon_play}) center center/contain no-repeat;

    }
      
    }
    
    &__wrap {

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      &_1 {

        flex-flow: column nowrap;
        margin-right: auto;

      }

      &_2 {

        flex-flow: row nowrap;
        align-items: center;
        cursor: pointer;

      }

    }

    &__subtext {

      font-size: 14px;
      line-height: 20px;
      color: #697077;

    }

    &__icon {

      display: block;
      width: 20px;
      height: 16px;
      background: url(${icon_change}) center center/cover no-repeat;
      margin-right: 9px;

    }

    &__remove {

      color: #4F7FFF;

    }

  }

`;

export { VideoWrap };