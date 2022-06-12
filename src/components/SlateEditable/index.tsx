import React, { useState } from 'react'
import { createEditor,Descendant } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import {useOnKeyDown} from './hooks/hotKeyHooks'
import {useRenderElement} from "./hooks/renderHooks";

const initialValue:Descendant[] = [
	{
		type: 'paragraph',
		children: [{ text: 'A line of text in a paragraph.' }],
	},
]
const SlateEditable: React.FC = ():JSX.Element => {
	const onKeyDown = useOnKeyDown();
	const renderElement = useRenderElement();
	// Create a Slate editor object that won't change across renders.
	const [editor] = useState(() => withReact(createEditor()))
	return  (
		<Slate editor={editor} value={initialValue} >
			<Editable
				renderElement={renderElement}
				onKeyDown={onKeyDown}
			></Editable>
		</Slate>
	)
}
export default SlateEditable