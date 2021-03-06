/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GraphicLines extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new GraphicLine
			 * @param {Layer} layerParam The layer on which to create the 
			 * GraphicLine. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the GraphicLine relative to the reference object or 
			 * within the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new GraphicLine (Optional)
			 * @returns {Adobe.Indesign.GraphicLine}
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.GraphicLine;
			/**
			 * Returns any GraphicLine in the collection.
			 * @returns {Adobe.Indesign.GraphicLine}
			 */
			public anyItem(): Adobe.Indesign.GraphicLine;
			/**
			 * Displays the number of elements in the GraphicLine.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every GraphicLine in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first GraphicLine in the collection.
			 * @returns {Adobe.Indesign.GraphicLine}
			 */
			public firstItem(): Adobe.Indesign.GraphicLine;
			/**
			 * Returns the GraphicLine with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.GraphicLine}
			 */
			public item(indexParam: any): Adobe.Indesign.GraphicLine;
			/**
			 * Returns the GraphicLine with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.GraphicLine}
			 */
			public itemByID(idParam: number): Adobe.Indesign.GraphicLine;
			/**
			 * Returns the GraphicLine with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.GraphicLine}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.GraphicLine;
			/**
			 * Returns the GraphicLines within the specified range.
			 * @param {any} fromParam The GraphicLine, index, or name at 
			 * the beginning of the range. Can accept: GraphicLine, Long 
			 * Integer or String.
			 * @param {any} toParam The GraphicLine, index, or name at the 
			 * end of the range. Can accept: GraphicLine, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GraphicLine in the collection.
			 * @returns {Adobe.Indesign.GraphicLine}
			 */
			public lastItem(): Adobe.Indesign.GraphicLine;
			/**
			 * Returns the middle GraphicLine in the collection.
			 * @returns {Adobe.Indesign.GraphicLine}
			 */
			public middleItem(): Adobe.Indesign.GraphicLine;
			/**
			 * Returns the GraphicLine whose index follows the specified 
			 * GraphicLine in the collection.
			 * @param {GraphicLine} objParam The GraphicLine whose index 
			 * comes before the desired GraphicLine. 
			 * @returns {Adobe.Indesign.GraphicLine}
			 */
			public nextItem(objParam: GraphicLine): Adobe.Indesign.GraphicLine;
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
			 * Returns the GraphicLine with the index previous to the 
			 * specified index.
			 * @param {GraphicLine} objParam The index of the GraphicLine 
			 * that follows the desired GraphicLine.
			 * @returns {Adobe.Indesign.GraphicLine}
			 */
			public previousItem(objParam: GraphicLine): Adobe.Indesign.GraphicLine;
		}
	}
}