import { useRef, useEffect, useState, forwardRef } from "react";

const Slider = forwardRef((props, ref) => {
    console.log(props.defaultValue);

    const [value, setValue] = useState(3);
    const selectedVal = useRef();
    useEffect(() => {
        // ref.current.addEventListener("input", () => {
        //     setValue(ref.current.value);
        //     const percThrough = ((ref.current.value - props.min) / props.max) * (ref.current.clientWidth - 25) + "px"; // 12.5 bc circle thingy has width of 25px
        //     const thumbPos = ((ref.current.value - props.min) / props.max) * (ref.current.clientWidth - 50) + "px"; // 12.5 bc circle thingy has width of 25px
        //     ref.current.style.background = `linear-gradient(to right, var(--accent-color), var(--accent-color) ${percThrough}, var(--background-color) ${percThrough}, var(--background-color))`;
        //     selectedVal.current.style.left = thumbPos;
        // });
    }, [props.max, props.min, ref]);

    useEffect(function () {
        setTimeout(() => {
            setValue(props.defaultValue);
            updateLook(props.defaultValue);
        }, 100);
    }, []);

    function onSliderChange(event) {
        const newValue = event.target.value;
        console.log(event);
        console.log(event.target);
        setValue(newValue);
        const percThrough = ((newValue - props.min) / props.max) * ref.current.clientWidth + "px"; // 12.5 bc circle thingy has width of 25px
        const thumbPos = ((newValue - props.min) / props.max) * ref.current.clientWidth + "px"; // 12.5 bc circle thingy has width of 25px
        // event.target.style.boxShadow += " 5px 5px 5px black";
        event.target.style.background = `linear-gradient(to right, var(--accent-color), var(--accent-color) ${percThrough}, var(--background-color) ${percThrough}, var(--background-color))`;
        selectedVal.current.style.left = thumbPos;
    }

    function updateLook(newValue) {
        const percThrough = ((newValue - props.min) / props.max) * ref.current.clientWidth + "px"; // 12.5 bc circle thingy has width of 25px
        const thumbPos = ((newValue - props.min) / props.max) * ref.current.clientWidth + "px"; // 12.5 bc circle thingy has width of 25px
        // event.target.style.boxShadow += " 5px 5px 5px black";
        ref.current.style.background = `linear-gradient(to right, var(--accent-color), var(--accent-color) ${percThrough}, var(--background-color) ${percThrough}, var(--background-color))`;
        selectedVal.current.style.left = thumbPos;
    }

    return (
        <div className='slider'>
            <input
                onChange={(event) => onSliderChange(event)}
                type='range'
                ref={ref}
                min={props.min}
                max={props.max}
                step={props.step}
                defaultValue={props.defaultValue}
                value={value}
                style={props.style}></input>
            <p ref={selectedVal}>{value}</p>
        </div>
    );
});
export default Slider;
