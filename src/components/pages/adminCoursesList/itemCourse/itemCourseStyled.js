import styled from "styled-components";

const ItemCourseWrap = styled.div`

  align-self: flex-start;
  padding: 0 0 2.4% 3.1%;

  a {

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    color: inherit;

  }

`;

const ItemCourseBackground = styled.div`

  width: 204px;
  height: 204px;
  border-radius: 8px;
  position: relative;
  margin-bottom: 16px;
  background: ${(props) => props.image};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

`;

const TextBG = styled.span`

  position: absolute;
  bottom: -30px;
  left: -12px;
  font-weight: 800;
  font-size: 220px;
  line-height: 100%;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.1);
  user-select: none;

`;

const Span = styled.span`

  font-weight: 400;
  letter-spacing: -0.01em;
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  max-width: 200px;

`;

const SpanName = styled(Span)`

  display: inline-block;
  width: 172px;
  position: absolute;
  bottom: 16px;
  left: 16px;
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  color: #FFFFFF;

`;

const SpanTitle = styled(Span)`

  font-size: 18px;
  line-height: 24px;
  margin-bottom: 2px;

`;

const SpanSubtitle = styled(Span)`

  color: #697077;
  margin-bottom: 2px;

`;

const SpanDescr = styled(Span)`

  color: #697077;
  margin-bottom: 8px;

`;

const SpanPrice = styled(Span)`

  font-size: 20px;
  line-height: 26px;
  font-weight: 600;

`;

export { 
  
  ItemCourseWrap, 
  ItemCourseBackground, 
  TextBG, 
  SpanName, 
  SpanTitle, 
  SpanSubtitle, 
  SpanDescr, 
  SpanPrice 

}