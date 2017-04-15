/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Paragraphs extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Paragraph in the collection. */
			public anyItem(): Adobe.Indesign.Paragraph;
			/** Displays the number of elements in the Paragraph. */
			public count(): number;
			/** Returns every Paragraph in the collection. */
			public everyItem(): any;
			/** Returns the first Paragraph in the collection. */
			public firstItem(): Adobe.Indesign.Paragraph;
			/**
			 * Returns the Paragraph with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Paragraph;
			/**
			 * Returns the Paragraphs within the specified range.
			 * @param {any} fromParam - The Paragraph, index, or name at 
			 * the beginning of the range. Can accept: Paragraph, Long 
			 * Integer or String.
			 * @param {any} toParam - The Paragraph, index, or name at the 
			 * end of the range. Can accept: Paragraph, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Paragraph in the collection. */
			public lastItem(): Adobe.Indesign.Paragraph;
			/** Returns the middle Paragraph in the collection. */
			public middleItem(): Adobe.Indesign.Paragraph;
			/**
			 * Returns the Paragraph whose index follows the specified 
			 * Paragraph in the collection.
			 * @param {Paragraph} objParam - The Paragraph whose index 
			 * comes before the desired Paragraph. 
			 */
			public nextItem(objParam: Paragraph): Adobe.Indesign.Paragraph;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the Paragraph with the index previous to the 
			 * specified index.
			 * @param {Paragraph} objParam - The index of the Paragraph 
			 * that follows the desired Paragraph.
			 */
			public previousItem(objParam: Paragraph): Adobe.Indesign.Paragraph;
		}
	}
}