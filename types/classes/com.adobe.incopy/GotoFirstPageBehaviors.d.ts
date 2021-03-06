/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GotoFirstPageBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any GotoFirstPageBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoFirstPageBehavior}
			 */
			public anyItem(): Adobe.Incopy.GotoFirstPageBehavior;
			/**
			 * Displays the number of elements in the 
			 * GotoFirstPageBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every GotoFirstPageBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first GotoFirstPageBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoFirstPageBehavior}
			 */
			public firstItem(): Adobe.Incopy.GotoFirstPageBehavior;
			/**
			 * Returns the GotoFirstPageBehavior with the specified index 
			 * or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.GotoFirstPageBehavior}
			 */
			public item(indexParam: any): Adobe.Incopy.GotoFirstPageBehavior;
			/**
			 * Returns the GotoFirstPageBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.GotoFirstPageBehavior}
			 */
			public itemByID(idParam: number): Adobe.Incopy.GotoFirstPageBehavior;
			/**
			 * Returns the GotoFirstPageBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.GotoFirstPageBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GotoFirstPageBehavior;
			/**
			 * Returns the GotoFirstPageBehaviors within the specified 
			 * range.
			 * @param {any} fromParam The GotoFirstPageBehavior, index, or 
			 * name at the beginning of the range. Can accept: 
			 * GotoFirstPageBehavior, Long Integer or String.
			 * @param {any} toParam The GotoFirstPageBehavior, index, or 
			 * name at the end of the range. Can accept: 
			 * GotoFirstPageBehavior, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GotoFirstPageBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoFirstPageBehavior}
			 */
			public lastItem(): Adobe.Incopy.GotoFirstPageBehavior;
			/**
			 * Returns the middle GotoFirstPageBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoFirstPageBehavior}
			 */
			public middleItem(): Adobe.Incopy.GotoFirstPageBehavior;
			/**
			 * Returns the GotoFirstPageBehavior whose index follows the 
			 * specified GotoFirstPageBehavior in the collection.
			 * @param {GotoFirstPageBehavior} objParam The 
			 * GotoFirstPageBehavior whose index comes before the desired 
			 * GotoFirstPageBehavior. 
			 * @returns {Adobe.Incopy.GotoFirstPageBehavior}
			 */
			public nextItem(objParam: GotoFirstPageBehavior): Adobe.Incopy.GotoFirstPageBehavior;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 * @returns {number}
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 * @returns {any}
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the GotoFirstPageBehavior with the index previous to 
			 * the specified index.
			 * @param {GotoFirstPageBehavior} objParam The index of the 
			 * GotoFirstPageBehavior that follows the desired 
			 * GotoFirstPageBehavior.
			 * @returns {Adobe.Incopy.GotoFirstPageBehavior}
			 */
			public previousItem(objParam: GotoFirstPageBehavior): Adobe.Incopy.GotoFirstPageBehavior;
		}
	}
}