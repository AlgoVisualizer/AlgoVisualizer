import React, { ReactElement } from 'react';
import Container from './Container';
import Row from '../common/Row';
import GithubLogo from './GithubLogo';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import GraphAVLogo from './GraphAVLogo';
import HelpIcon from './HelpIcon';
import { Button } from '@mui/material';

interface NavbarProps {
  changeTheme: Function;
  onHelpClick: () => void;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps): ReactElement => {
  const openUrl = (url: string) => {
    window.open(url, '_blank')?.focus();
  };

  return (
    <Container >
      <div style={{ width: "90%", display: "flex", justifyContent: "center" }}>
        <div style={{ fontSize: "30px", fontFamily: 'monospace', width: "90%", textAlign: "center" }}>
          Algo Visualizer
        </div>
        <div>
          <HelpIcon onClick={() => props.onHelpClick()}></HelpIcon>
        </div>
      </div>
      <div style={{}}>
        <Button onClick={() => openUrl("/sorting")}>Sorting</Button>
      </div>
    </Container>
  );
};

export default Navbar;
