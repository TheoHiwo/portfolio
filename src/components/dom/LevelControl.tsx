import React from "react";
import { useRiveStore } from "../rive/riveStore";

type LevelControlProps = {
  className?: string;
};

const LevelControl: React.FC<
  LevelControlProps
> = ({ ...props }) => {
  const level = useRiveStore(
    (state) => state.level
  );
  const incrementLevel = useRiveStore(
    (state) => state.incrementLevel
  );
  console.log('🔳 , file: LevelControl.tsx:16 , incrementLevel:', incrementLevel);
  const decrementLevel = useRiveStore(
    (state) => state.decrementLevel
  );
  return (
    <div className=" flex space-x-4 items-center justify-center mt-4 "{ ...props } style={{cursor: 'pointer'}}>
      <button onClick={decrementLevel} >
        -
      </button>
      <h1>{level}</h1>
      <button onClick={incrementLevel} >
        +
      </button>
    </div>
  );
};
export default LevelControl;
