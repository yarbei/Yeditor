import React,{ useCallback } from "react";
// import {useSlateStatic} from "slate-react";

import type { RenderElementProps, RenderLeafProps } from "slate-react"
export const useRenderLeaf = () => {
	  return useCallback((props: RenderLeafProps) => {
		  return (<span
			  {...props.attributes}
			  style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
		  >
      {props.children}
    </span>)
	  }, [])
}
export const useRenderElement = () => {
	return useCallback((props: RenderElementProps) => {
		switch (props.element.type) {
			case "code":
				return (<pre {...props.attributes}><code>{props.children}</code></pre>)
			case "paragraph":
				return (<p {...props.attributes}>{props.children}</p>)
			default:
				return <p {...props.attributes}>{props.children}</p>
		}
	}, [])
}