import React,{ useCallback } from "react";
import { Editor,Text,Transforms } from 'slate'

export const useOnKeyDown = (editor:Editor) => {
	return useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
		console.log(`按下了【 ${event.key} 】键`);
		const ctrlKey = event.ctrlKey || event.metaKey
		if(event.key==='`'&& ctrlKey){
			console.log('按下了ctrl+`键');
			event.preventDefault();
			const [match] = Editor.nodes(editor, {
				match: (n:any) => n.type === 'code',
			})
			Transforms.setNodes(
				editor,
				{ type: match ? 'paragraph' : 'code' },
				{ match: n => Editor.isBlock(editor, n) }
			)
		}else if(event.key==='b'&& ctrlKey){
			console.log('按下了ctrl+b键');
			event.preventDefault()
			Transforms.setNodes(
				editor,
				{ bold: true ,italic:false,underline:false,code:false, },
				// Apply it to text nodes, and split the text node up if the
				// selection is overlapping only part of it.
				{ match: n => Text.isText(n), split: true }
			)
		}

	}, [])
}
