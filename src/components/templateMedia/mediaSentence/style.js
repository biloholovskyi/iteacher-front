import styled from "styled-components";

const EmptyBlock = styled.div`
  display: ${props => props.sentence ? 'block' : 'flex'};
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`

const EmptyItem = styled.div`
  width: 107px;
  height: 36px;
  background: #FFFFFF;
  border: 1px solid #DDE1E6;
  border-radius: 100px;
  margin-right: 14px;
  &:last-child {margin-right: 0;}
`

export {EmptyBlock, EmptyItem}