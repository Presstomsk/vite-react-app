import { FC, useState } from "react"

interface FunctionComponentProps {
    state: number;
    setState: React.Dispatch<React.SetStateAction<number>>;
}

export const FunctionComponent: FC<FunctionComponentProps> = ({state, setState}) => {    
    return <div>
        <button onClick={() => {
            setState((prevState) => prevState + 1)
        }}>+1</button>
        {state}
    </div>
}