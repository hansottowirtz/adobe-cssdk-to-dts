/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Changes extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Change in the collection. */
			public anyItem(): Adobe.Incopy.Change;
			/** Displays the number of elements in the Change. */
			public count(): number;
			/** Returns every Change in the collection. */
			public everyItem(): any;
			/** Returns the first Change in the collection. */
			public firstItem(): Adobe.Incopy.Change;
			/**
			 * Returns the Change with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Change;
			/**
			 * Returns the Changes within the specified range.
			 * @param {any} fromParam - The Change, index, or name at the 
			 * beginning of the range. Can accept: Change, Long Integer or 
			 * String.
			 * @param {any} toParam - The Change, index, or name at the end 
			 * of the range. Can accept: Change, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Change in the collection. */
			public lastItem(): Adobe.Incopy.Change;
			/** Returns the middle Change in the collection. */
			public middleItem(): Adobe.Incopy.Change;
			/**
			 * Returns the Change whose index follows the specified Change 
			 * in the collection.
			 * @param {Change} objParam - The Change whose index comes 
			 * before the desired Change. 
			 */
			public nextItem(objParam: Change): Adobe.Incopy.Change;
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
			 * Returns the Change with the index previous to the specified 
			 * index.
			 * @param {Change} objParam - The index of the Change that 
			 * follows the desired Change.
			 */
			public previousItem(objParam: Change): Adobe.Incopy.Change;
		}
	}
}