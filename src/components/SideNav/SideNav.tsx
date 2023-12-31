import React, { ReactElement, useState } from 'react';
import StyledSideNav from './SideNavStyle';
import Slider from './Slider';
import ItemText from './ItemText';
import ToggleButton from './ToggleButton';
import Arrow from './Arrow';
import Dropdown from '../common/Dropdown/Dropdown';
import Row from '../common/Row';
import OptionButton from './Options/OptionButton';
import { AddIcon, UndirectedIcon, DirectedIcon } from './Options/OptionIcons';
import ClearButton from './ClearButton';
import Algorithms from '../../models/Algorithms';
import AlgorithmsDescription from './AlgorithmsDescription/AlgorithmsDescription';
import ScrollContainer from './ScrollContainer';
import Authors from './Authors/Authors';
import AlgorithmSettings from './AlgorithmSettings/AlgorithmSettings';
import AlgorithmOptions from '../../models/AlgorithmOptions';
import { Button } from '@mui/material';

interface Props {
  adjacencyList: Array<Array<number>>;
  addNewNode: () => void;
  setZoomPercentage: Function;
  zoomPercentage: number;
  onUndirectedEdgeClick: VoidFunction;
  onDirectedEdgeClick: VoidFunction;
  visualizationSpeed: number;
  setVisualizationSpeed: Function;
  clearCanvas: Function;
  selectedAlgorithm: Algorithms;
  setSelectedAlgorithm: Function;
  algorithmOptions: AlgorithmOptions;
  setAlgorithmOptions: Function;
}

const availableAlgorithms: Array<Algorithms> = [
  Algorithms.dfs,
  Algorithms.dls,
  Algorithms.iddfs,
  Algorithms.bfs,
  Algorithms.dijkstra,
];

const SideNav: React.FC<Props> = (props: Props): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  //TODO: Implement set selected algorithm logic
  const setSelectedAlgorithm = (val: number) => {
    const newSelectedAlgorithm = availableAlgorithms[val];
    props.setSelectedAlgorithm(newSelectedAlgorithm);
  };

  return (
    <StyledSideNav isVisible={isVisible}>
      <ScrollContainer>
        {/* <ToggleButton isVisible={false} onClick={() => toggleVisibility()}>
          <Arrow isVisible={isVisible}></Arrow>
        </ToggleButton> */}
        <ItemText>Algorithm</ItemText>
        <Row justifyContent="center">
          <Dropdown
            selectedTile={availableAlgorithms.indexOf(props.selectedAlgorithm)}
            setSelectedTile={setSelectedAlgorithm}
            content={availableAlgorithms}
          ></Dropdown>
        </Row>

        <AlgorithmSettings
          algorithmOptions={props.algorithmOptions}
          setAlgorithmOptions={props.setAlgorithmOptions}
          selectedAlgorithm={props.selectedAlgorithm}
          adjacencyList={props.adjacencyList}
        ></AlgorithmSettings>

        <Row justifyContent="center">
          <AlgorithmsDescription
            selectedAlgorithm={props.selectedAlgorithm}
          ></AlgorithmsDescription>
        </Row>
        <ItemText>Options</ItemText>
        <Row justifyContent="space-evenly" margin="10px 0px">
          {/* add new node */}
          <OptionButton tooltipContent="Add node" onClick={props.addNewNode}>
            <AddIcon></AddIcon>
          </OptionButton>
          <OptionButton
            tooltipContent="Add undirected edge"
            onClick={() => {
              props.onUndirectedEdgeClick();
            }}
          >
            <UndirectedIcon></UndirectedIcon>
          </OptionButton>

          <OptionButton
            tooltipContent="Add directed edge"
            onClick={() => {
              props.onDirectedEdgeClick();
            }}
          >
            <DirectedIcon></DirectedIcon>
          </OptionButton>
        </Row>
        <ClearButton
          onClick={() => {
            props.clearCanvas();
          }}
          style={{ margin: "2rem auto" }}
        >
          Clear Canvas
        </ClearButton>
        <ItemText>Zoom</ItemText>
        <Slider>
          <input
            type="range"
            className="slider"
            min={0.5}
            max={1.5}
            step={0.1}
            value={props.zoomPercentage}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setZoomPercentage(e.target.value)
            }
          />
        </Slider>
        <ItemText>Speed</ItemText>
        <Slider style={{ bottom: "1rem" }}>
          <input
            type="range"
            className="slider"
            min={500}
            max={3000}
            step={50}
            value={3500 - props.visualizationSpeed}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const val: number = +e.target.value;
              const speed: number = +e.target.max + +e.target.min - val;
              props.setVisualizationSpeed(speed);
            }}
          />
        </Slider>

      </ScrollContainer>
    </StyledSideNav>
  );
};

export default SideNav;
