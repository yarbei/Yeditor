import React, { useState } from 'react'
import { createEditor,Descendant } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import {useOnKeyDown} from './hooks/hotKeyHooks'
import {useRenderElement, useRenderLeaf} from "./hooks/renderHooks";

const initialValue:Descendant[] = [
	{
		type: 'paragraph',
		children: [{ text: 'A line of text in a paragraph.' }],
	},
]
const SlateEditable: React.FC = ():JSX.Element => {
	const [editor] = useState(() => withReact(createEditor()))
	return  (
		<Slate editor={editor} value={initialValue} >
			<Editable
				renderLeaf = {useRenderLeaf()}
				renderElement={useRenderElement()}
				onKeyDown={useOnKeyDown(editor)}
			></Editable>
		</Slate>
	)
}
export default SlateEditable