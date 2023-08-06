import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { arrGenerator } from "../features/SortingSlice";
import QuickSortPivot from "./BodyParts/QuickSortPivot";
import "./Body.css";
import ArrayVisualizer from "./BodyType/ArrayVisualizer";
function Body() {
  const dispatch = useDispatch();
  const { size, arr, speed, algo } = useSelector((state) => {
    return state.sortingVisualizer;
  });
  useEffect(() => {
    dispatch(arrGenerator());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <div className="body-main-container">
        <div className="body-controller-container">
          {algo === 4 && <QuickSortPivot />}
        </div>
        <div className="bars-container">
          <ArrayVisualizer arr={arr} size={size} speed={speed} />
        </div>
      </div>
    </>
  );
}
export default Body;
