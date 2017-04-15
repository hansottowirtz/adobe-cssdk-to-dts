/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GotoAnchorBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any GotoAnchorBehavior in the collection. */
			public anyItem(): Adobe.Incopy.GotoAnchorBehavior;
			/** Displays the number of elements in the GotoAnchorBehavior. */
			public count(): number;
			/** Returns every GotoAnchorBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first GotoAnchorBehavior in the collection. */
			public firstItem(): Adobe.Incopy.GotoAnchorBehavior;
			/**
			 * Returns the GotoAnchorBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.GotoAnchorBehavior;
			/**
			 * Returns the GotoAnchorBehavior with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.GotoAnchorBehavior;
			/**
			 * Returns the GotoAnchorBehavior with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GotoAnchorBehavior;
			/**
			 * Returns the GotoAnchorBehaviors within the specified range.
			 * @param {any} fromParam - The GotoAnchorBehavior, index, or 
			 * name at the beginning of the range. Can accept: 
			 * GotoAnchorBehavior, Long Integer or String.
			 * @param {any} toParam - The GotoAnchorBehavior, index, or 
			 * name at the end of the range. Can accept: 
			 * GotoAnchorBehavior, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last GotoAnchorBehavior in the collection. */
			public lastItem(): Adobe.Incopy.GotoAnchorBehavior;
			/** Returns the middle GotoAnchorBehavior in the collection. */
			public middleItem(): Adobe.Incopy.GotoAnchorBehavior;
			/**
			 * Returns the GotoAnchorBehavior whose index follows the 
			 * specified GotoAnchorBehavior in the collection.
			 * @param {GotoAnchorBehavior} objParam - The 
			 * GotoAnchorBehavior whose index comes before the desired 
			 * GotoAnchorBehavior. 
			 */
			public nextItem(objParam: GotoAnchorBehavior): Adobe.Incopy.GotoAnchorBehavior;
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
			 * Returns the GotoAnchorBehavior with the index previous to 
			 * the specified index.
			 * @param {GotoAnchorBehavior} objParam - The index of the 
			 * GotoAnchorBehavior that follows the desired 
			 * GotoAnchorBehavior.
			 */
			public previousItem(objParam: GotoAnchorBehavior): Adobe.Incopy.GotoAnchorBehavior;
		}
	}
}