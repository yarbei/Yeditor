import { useCallback } from "react";

import type { RenderElementProps, RenderLeafProps } from "slate-react"
export const useRenderLeaf = () => {
	  return useCallback((props: RenderLeafProps) => {
		const { attributes, leaf } = props;
		let style: React.CSSProperties = {};
		if (leaf.bold) {
			style = { fontWeight: "bold" };
		}
		if (leaf.italic) {
			style = { fontStyle: "italic" };
		}
		if (leaf.underline) {
			style = { textDecoration: "underline" };
		}
		if (leaf.code) {
			style = { fontFamily: "monospace" };
		}
		if (leaf.strikethrough) {
			style = { textDecoration: "line-through" };
		}
		if (leaf.color) {
			style = { color: leaf.color };
		}
		if (leaf.background) {
			style = { backgroundColor: leaf.background };
		}
		if (leaf.fontSize) {
			style = { fontSize: `${leaf.fontSize}px` };
		}
		return (<span {...attributes} style={style}>{props.children}</span>)
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