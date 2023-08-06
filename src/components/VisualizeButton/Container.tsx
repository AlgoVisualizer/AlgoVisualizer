import styled from 'styled-components';

interface Props {
  isVisualizing: boolean;
}

const Container = styled.div<Props>`
  z-index: 1;
  position: fixed;
  left: calc(100% - 150px - 20px);
  top: calc(100% - 35px - 20px);
  display: flex;
  justify-content: center;
  font-size: 24px;
  align-items: center;
  width: 150px;
  height: 30px;
  border-radius: 6px;
  margin-right: 30px;
  margin-bottom: 30px;
  background-color: ${(props) =>
    props.isVisualizing ? 'red' : props.theme.navbar.background};
  color: white;
  transition-duration: 0.3s;
  user-select: none;
  cursor: pointer;

   
`;

export default Container;
