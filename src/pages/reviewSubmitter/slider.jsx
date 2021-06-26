import { useRef, useEffect, useState, forwardRef } from "react"

const Slider = forwardRef((props, ref)=>{
	const [value, setValue] = useState(props.defaultValue)
	const selectedVal = useRef()
	useEffect(() => {
		ref.current.addEventListener('input', ()=>{
			setValue(ref.current.value)
			const percThrough = (ref.current.value - props.min)/props.max * (ref.current.clientWidth - 25) + 'px'; // 12.5 bc circle thingy has width of 25px
			const thumbPos = (ref.current.value - props.min)/props.max * (ref.current.clientWidth - 50) + 'px'; // 12.5 bc circle thingy has width of 25px
			ref.current.style.background = `linear-gradient(to right, var(--accent-color), var(--accent-color) ${percThrough}, var(--accent-background) ${percThrough}, var(--accent-background))`
			selectedVal.current.style.left = thumbPos;
		})
	}, [props.max, props.min, ref])
	return (
		<div className='slider'>
			<input type='range' ref={ref} min={props.min} max={props.max} step={props.step} defaultValue={props.defaultValue}></input>
			<p ref={selectedVal}>{value}</p>
		</div>
	)
});
export default Slider;