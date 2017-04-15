/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AnimationBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new AnimationBehavior.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new AnimationBehavior (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.AnimationBehavior;
			/** Returns any AnimationBehavior in the collection. */
			public anyItem(): Adobe.Indesign.AnimationBehavior;
			/** Displays the number of elements in the AnimationBehavior. */
			public count(): number;
			/** Returns every AnimationBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first AnimationBehavior in the collection. */
			public firstItem(): Adobe.Indesign.AnimationBehavior;
			/**
			 * Returns the AnimationBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.AnimationBehavior;
			/**
			 * Returns the AnimationBehavior with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.AnimationBehavior;
			/**
			 * Returns the AnimationBehavior with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.AnimationBehavior;
			/**
			 * Returns the AnimationBehaviors within the specified range.
			 * @param {any} fromParam - The AnimationBehavior, index, or 
			 * name at the beginning of the range. Can accept: 
			 * AnimationBehavior, Long Integer or String.
			 * @param {any} toParam - The AnimationBehavior, index, or name 
			 * at the end of the range. Can accept: AnimationBehavior, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last AnimationBehavior in the collection. */
			public lastItem(): Adobe.Indesign.AnimationBehavior;
			/** Returns the middle AnimationBehavior in the collection. */
			public middleItem(): Adobe.Indesign.AnimationBehavior;
			/**
			 * Returns the AnimationBehavior whose index follows the 
			 * specified AnimationBehavior in the collection.
			 * @param {AnimationBehavior} objParam - The AnimationBehavior 
			 * whose index comes before the desired AnimationBehavior. 
			 */
			public nextItem(objParam: AnimationBehavior): Adobe.Indesign.AnimationBehavior;
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
			 * Returns the AnimationBehavior with the index previous to the 
			 * specified index.
			 * @param {AnimationBehavior} objParam - The index of the 
			 * AnimationBehavior that follows the desired 
			 * AnimationBehavior.
			 */
			public previousItem(objParam: AnimationBehavior): Adobe.Indesign.AnimationBehavior;
		}
	}
}