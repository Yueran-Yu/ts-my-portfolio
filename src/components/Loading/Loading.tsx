import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


export const CircleStyle = {
	height: "10vw",
	width: "10vw",
	position: "absolute",
	margin: "auto",
	left: "0",
	right: "0",
	top: "0",
	bottom: "0",
	textAlign: "center"
} as React.CSSProperties;

export const Loading = () => <CircularProgress style={CircleStyle}/>



