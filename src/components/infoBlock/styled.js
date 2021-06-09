import styled from "styled-components";

const Wrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.16), 0 0.5px 0.5px rgba(0, 0, 0, 0.1), 0 0.1px 0.1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  margin-bottom: ${props => props.margin + 'px'};
`

const Title = styled.div`
  padding: 16px;
  border-bottom: 1px solid #DDE1E6;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Icon = styled.div`
  background-image: ${props => `url(${props.bg})`};
  background-size: 18px;
  background-position: center;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  min-width: 24px;
  cursor: pointer;
`

const SingleText = styled.div`
  padding: 24px 16px;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: #697077;
  opacity: 0.72;
`

const DoubleText = styled.div`
  padding: 15px 16px;
  
  .top {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: #000000;
  }
  
  .bot {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #697077;
  }
`

export {
  Wrapper,
  Title,
  SingleText,
  DoubleText,
  Icon
}