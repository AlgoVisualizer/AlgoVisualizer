import styled from 'styled-components';
import Theme from '../../models/Theme';

interface Props {
  theme: Theme;
}

const Container = styled.div<Props>`
  z-index: 999;
  position: relative;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.navbar.background};
  color: ${(props) => props.theme.navbar.foreground};
  transition-duration: 0.3s;
  transition-property: background-color;

  @media (max-width: 550px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    height: 90px;
  }
`;

export default Container;
