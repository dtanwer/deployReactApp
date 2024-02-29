import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import video from "./assets/SampleGIFImage_350kbmb.gif";
import { decrement, increment, incrementByAmount } from "./features/counterSlice";

const Home = () => {
    const value = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const handleAdd = () => {
        const num= inputRef.current?.value ? parseInt(inputRef.current.value) : 0;
        dispatch(incrementByAmount(num));
        inputRef.current!.value = "";
    };
    return (
        <div>
            <h1>Home</h1>
            <img src={video} alt="video" />

            <h1>Counter Systeummm</h1>
            <div style={{display:"flex", gap:"20px",marginBottom:"20px"}}>
                <button onClick={()=>dispatch(increment())} style={{padding:"10px",fontSize:"30px"}}>+</button>
                <button onClick={()=>dispatch(decrement())}  style={{padding:"15px",fontSize:"30px"}}>-</button>
                <input type="number" ref={inputRef} style={{padding:"10px",fontSize:"30px"}} /> 
                <button onClick={handleAdd}  style={{padding:"15px",fontSize:"30px"}} >Add</button>
            </div>

            <h2>Value: {value}</h2>
        </div>
    );
};
export default Home;
