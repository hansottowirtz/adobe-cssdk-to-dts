/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GraphicLayers extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any GraphicLayer in the collection.
			 * @returns {Adobe.Indesign.GraphicLayer}
			 */
			public anyItem(): Adobe.Indesign.GraphicLayer;
			/**
			 * Displays the number of elements in the GraphicLayer.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every GraphicLayer in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first GraphicLayer in the collection.
			 * @returns {Adobe.Indesign.GraphicLayer}
			 */
			public firstItem(): Adobe.Indesign.GraphicLayer;
			/**
			 * Returns the GraphicLayer with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.GraphicLayer}
			 */
			public item(indexParam: any): Adobe.Indesign.GraphicLayer;
			/**
			 * Returns the GraphicLayer with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.GraphicLayer}
			 */
			public itemByID(idParam: number): Adobe.Indesign.GraphicLayer;
			/**
			 * Returns the GraphicLayer with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.GraphicLayer}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.GraphicLayer;
			/**
			 * Returns the GraphicLayers within the specified range.
			 * @param {any} fromParam The GraphicLayer, index, or name at 
			 * the beginning of the range. Can accept: GraphicLayer, Long 
			 * Integer or String.
			 * @param {any} toParam The GraphicLayer, index, or name at the 
			 * end of the range. Can accept: GraphicLayer, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GraphicLayer in the collection.
			 * @returns {Adobe.Indesign.GraphicLayer}
			 */
			public lastItem(): Adobe.Indesign.GraphicLayer;
			/**
			 * Returns the middle GraphicLayer in the collection.
			 * @returns {Adobe.Indesign.GraphicLayer}
			 */
			public middleItem(): Adobe.Indesign.GraphicLayer;
			/**
			 * Returns the GraphicLayer whose index follows the specified 
			 * GraphicLayer in the collection.
			 * @param {GraphicLayer} objParam The GraphicLayer whose index 
			 * comes before the desired GraphicLayer. 
			 * @returns {Adobe.Indesign.GraphicLayer}
			 */
			public nextItem(objParam: GraphicLayer): Adobe.Indesign.GraphicLayer;
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
			 * Returns the GraphicLayer with the index previous to the 
			 * specified index.
			 * @param {GraphicLayer} objParam The index of the GraphicLayer 
			 * that follows the desired GraphicLayer.
			 * @returns {Adobe.Indesign.GraphicLayer}
			 */
			public previousItem(objParam: GraphicLayer): Adobe.Indesign.GraphicLayer;
		}
	}
}