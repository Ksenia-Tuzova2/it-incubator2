import React from 'react';
type RatingProps={
value: number
}
export function Rating(props: RatingProps) {

	if (props.value === 1) return (
	<div className="App">
			<Star selected={true} />
			<Star selected={false} />
			<Star selected={false} />
			<Star selected={false} />
			<Star selected={false} />
		</div>
	);
	else if (props.value === 2) return (
	< div className = "App" >
	<Star selected={true} />
			<Star selected={true} />
			<Star selected={false} />
			<Star selected={false} />
			<Star selected={false} /> 
		</ div>
	); else if (props.value === 3) return (
		< div className="App" >
			<Star selected={true} />
			<Star selected={true} />
			<Star selected={true} />
			<Star selected={false} />
			<Star selected={false} />
		</ div>
	); else if (props.value === 4) return (
		< div className="App" >
			<Star selected={true} />
			<Star selected={true} />
			<Star selected={true} />
			<Star selected={true} />
			<Star selected={false} />
		</ div>
	); else if (props.value === 5) return (
		< div className="App" >
			<Star selected={true} />
			<Star selected={true} />
			<Star selected={true} />
			<Star selected={true} />
			<Star selected={true} />
		</ div>
	)
}
type StarProps={
	selected: Boolean
}

function Star(props: any) {
	// debugger
	// console.log('rendering')
	if (props.selected === true) return <span><b>-star-</b></span>
	else if (props.selected === false) return <span>-star-</span>

}




