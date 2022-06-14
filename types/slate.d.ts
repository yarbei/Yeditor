// This example is for an Editor with `ReactEditor` and `HistoryEditor`
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import { HistoryEditor } from 'slate-history'

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor

export type ParagraphElement = {
	type: 'paragraph'
	children: CustomText[]
}

export type HeadingElement = {
	type: 'heading'
	level: number
	children: CustomText[]
}

export type CodeElement = {
	type: 'code'
	children: CustomText[]
}
export type defaultElement = {
	type:'default' | 'paragraph' | 'heading' | 'code'| 'blockquote'|'text'
}

export type CustomElement = defaultElement | ParagraphElement | HeadingElement | CodeElement

export type FormattedText = {
	text: string;
	bold?: boolean ;// 加粗
	strike?: boolean ;// 删除线
	color?:string;// 字体颜色
	background?:string;// 背景颜色
	italic?: boolean ;// 斜体
	underline?: boolean ;// 下划线
	fontSize?: number ;// 字体大小
	lineHeight?: string ;// 行高
	letterSpacing?: string ;// 字间距
	code?: boolean ;// 是否是代码
	strikethrough?: boolean ;// 是否是删除线
}

export type CustomText = FormattedText

declare module 'slate' {
	interface CustomTypes {
		Editor: CustomEditor
		Element: CustomElement
		Text: CustomText
	}
}