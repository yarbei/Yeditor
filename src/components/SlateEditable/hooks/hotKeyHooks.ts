import React,{ useCallback } from "react";
// import {useSlateStatic} from "slate-react";

export const useOnKeyDown = () => {
	// const editor = useSlateStatic()
	return useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {

		console.log(`按下了【 ${event.key} 】键`);
	}, [])
}
