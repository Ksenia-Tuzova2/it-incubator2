import React from 'react';
type AccordionProps={
	title: String
}
export function Accordion(props: any) {
	if(props.collapsed===true) return (
		<div className="App">
			{/* <AccordionBody/>
			<AccordionTitle title={props.title}/> */}
		</div>
	); else if (props.collapsed === false) return (
		<div className="App">
			<AccordionBody/>
			<AccordionTitle title={props.title}/>
		</div>
	);
}

export function AccordionTitle(props:any) {
	return (
		<div className="App">
{props.title}
		</div>
	);
}
export function AccordionBody() {
	return (
		<div className="App">
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
			</ul>
		</div>
	);
}