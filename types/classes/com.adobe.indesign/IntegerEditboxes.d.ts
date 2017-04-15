/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class IntegerEditboxes extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new IntegerEditbox.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new IntegerEditbox (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.IntegerEditbox;
			/** Returns any IntegerEditbox in the collection. */
			public anyItem(): Adobe.Indesign.IntegerEditbox;
			/** Displays the number of elements in the IntegerEditbox. */
			public count(): number;
			/** Returns every IntegerEditbox in the collection. */
			public everyItem(): any;
			/** Returns the first IntegerEditbox in the collection. */
			public firstItem(): Adobe.Indesign.IntegerEditbox;
			/**
			 * Returns the IntegerEditbox with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.IntegerEditbox;
			/**
			 * Returns the IntegerEditbox with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.IntegerEditbox;
			/**
			 * Returns the IntegerEditboxes within the specified range.
			 * @param {any} fromParam - The IntegerEditbox, index, or name 
			 * at the beginning of the range. Can accept: IntegerEditbox, 
			 * Long Integer or String.
			 * @param {any} toParam - The IntegerEditbox, index, or name at 
			 * the end of the range. Can accept: IntegerEditbox, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last IntegerEditbox in the collection. */
			public lastItem(): Adobe.Indesign.IntegerEditbox;
			/** Returns the middle IntegerEditbox in the collection. */
			public middleItem(): Adobe.Indesign.IntegerEditbox;
			/**
			 * Returns the IntegerEditbox whose index follows the specified 
			 * IntegerEditbox in the collection.
			 * @param {IntegerEditbox} objParam - The IntegerEditbox whose 
			 * index comes before the desired IntegerEditbox. 
			 */
			public nextItem(objParam: IntegerEditbox): Adobe.Indesign.IntegerEditbox;
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
			 * Returns the IntegerEditbox with the index previous to the 
			 * specified index.
			 * @param {IntegerEditbox} objParam - The index of the 
			 * IntegerEditbox that follows the desired IntegerEditbox.
			 */
			public previousItem(objParam: IntegerEditbox): Adobe.Indesign.IntegerEditbox;
		}
	}
}