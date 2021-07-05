import React from 'react'

import ContentBlock from "./contentBlock/contentBlock";

import * as Style from './styled'

const Pricing = () => {
	return (
		<Style.Wrapper>
      <div className="decor decor--1"/>
      <div className="decor decor--2"/>
      <div className="decor decor--3"/>
      <div className="decor decor--4"/>

      <div className="yellow"/>
      <div className="purple"/>
      <div className="mint"/>
      <div className="orange"/>

      <ContentBlock/>
		</Style.Wrapper>
	)
}

export default Pricing