/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PrintFormBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new PrintFormBehavior.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new PrintFormBehavior (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.PrintFormBehavior;
			/** Returns any PrintFormBehavior in the collection. */
			public anyItem(): Adobe.Indesign.PrintFormBehavior;
			/** Displays the number of elements in the PrintFormBehavior. */
			public count(): number;
			/** Returns every PrintFormBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first PrintFormBehavior in the collection. */
			public firstItem(): Adobe.Indesign.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehavior with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehaviors within the specified range.
			 * @param {any} fromParam The PrintFormBehavior, index, or name 
			 * at the beginning of the range. Can accept: 
			 * PrintFormBehavior, Long Integer or String.
			 * @param {any} toParam The PrintFormBehavior, index, or name 
			 * at the end of the range. Can accept: PrintFormBehavior, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last PrintFormBehavior in the collection. */
			public lastItem(): Adobe.Indesign.PrintFormBehavior;
			/** Returns the middle PrintFormBehavior in the collection. */
			public middleItem(): Adobe.Indesign.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehavior whose index follows the 
			 * specified PrintFormBehavior in the collection.
			 * @param {PrintFormBehavior} objParam The PrintFormBehavior 
			 * whose index comes before the desired PrintFormBehavior. 
			 */
			public nextItem(objParam: PrintFormBehavior): Adobe.Indesign.PrintFormBehavior;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the PrintFormBehavior with the index previous to the 
			 * specified index.
			 * @param {PrintFormBehavior} objParam The index of the 
			 * PrintFormBehavior that follows the desired 
			 * PrintFormBehavior.
			 */
			public previousItem(objParam: PrintFormBehavior): Adobe.Indesign.PrintFormBehavior;
		}
	}
}