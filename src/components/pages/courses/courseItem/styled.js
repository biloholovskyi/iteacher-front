import styled from "styled-components";
import {NavLink} from "react-router-dom";

const CoursesItem = styled(NavLink)`
  flex: 20%;
  max-width: 204px;
  height: 100%;
  margin-right: 24px;
  margin-bottom: 24px;
  text-decoration: none;

  a {
    display: block;
    text-decoration: none;
  }

  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #111111;
    
    &--margin {
      margin-bottom: 52px;
    }
    
    &--student-margin {
      margin-bottom: 47px;
    }
  }

  .desc {
    color: #697077;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    margin-bottom: 8px;
  }

  .ava {
    width: 24px;
    height: 24px;
    object-position: center;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 1099px) {
    flex: 25%;
    margin-right: 15px;
  }
  @media (max-width: 991px) {
    flex: 31%;
    margin-right: 15px;
    max-width: none;
  }

  @media (max-width: 767px) {
    flex: 47%;
    margin-right: 10px;
  }
  @media (max-width: 575px) {
    flex: 100%;
    margin-right: 0;
  }
`

export {CoursesItem}