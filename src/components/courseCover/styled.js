import styled from "styled-components";

const CoverBlock = styled.div`
  position: relative;
  width: ${props => props.small ? '48px' : props.extraSmall ? '40px' : props.medium ? '76px' : '204px'};
  height: ${props => props.small ? '48px' : props.extraSmall ? '40px' : props.medium ? '76px' : '204px'};
  background: ${props => props.bg};
  border-radius: ${props => props.small || props.extraSmall || props.medium ? '4px' : '8px'};
  padding: ${props => props.small ? '5px' : props.extraSmall ? '3.75px' : props.medium ? '7px' : '15px'};
  display: flex;
  align-items: flex-end;
  margin-bottom: ${props => props.small || props.extraSmall ? '0' : '16px'};
  overflow: hidden;
  margin-right: ${props => props.small || props.extraSmall || props.medium ? '16px' : '0'};

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: ${props => props.small || props.extraSmall ? '7px' : props.medium ? '10px' : '28px'};
    line-height: ${props => props.small || props.extraSmall ? '7px' : props.medium ? '10px' : '32px'};
    letter-spacing: -0.01em;
    color: #fff;
  }

  .firstLetter {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: ${props => props.small ? '600' : '800'};
    font-size: ${props => props.small ? '50px' : props.extraSmall ? '31px' : props.medium ? '70px' : '220px'};
    line-height: ${props => props.small ? '7px' : props.extraSmall ? '36px' : '100%'};
    background: transparent;
    position: absolute;
    bottom: ${props => props.small ? '15px' : props.extraSmall ? '0' : props.medium ? '-10px' : '-38px'};
    left: ${props => props.small ? '-5px' : props.extraSmall ? '4px' : props.medium ? '0' : '-7px'};
    letter-spacing: -0.01em;
    color: rgba(255, 255, 255, .1);
  }

  .unActive_label {
    position: absolute;
    top: 12px;
    right: 12px;
    background: #111111;
    border-radius: 6px;
    padding: 6px 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #fff;
    display: ${props => props.small || props.extraSmall || props.medium ? 'none' : 'block'};
  }
}
${props => !props.small && !props.extraSmall && `
  @media (max-width: 991px) {
    max-width: none;
    width: 100%;
  }

  @media (max-width: 575px) {
    min-height: 246px;
  }
`}
`

export {CoverBlock}