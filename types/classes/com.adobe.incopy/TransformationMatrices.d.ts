/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TransformationMatrices extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Create a new TransformationMatrix.
			 * @param {number} horizontalScaleFactorParam The horizontal 
			 * scale factor of the transformation matrix (Optional)
			 * @param {number} verticalScaleFactorParam The vertical scale 
			 * factor of the transformation matrix (Optional)
			 * @param {number} clockwiseShearAngleParam The shear angle of 
			 * the transformation matrix (Optional)
			 * @param {number} counterclockwiseRotationAngleParam The 
			 * rotation angle of the transformation matrix (Optional)
			 * @param {number} horizontalTranslationParam The horizontal 
			 * translation of the transformation matrix (Optional)
			 * @param {number} verticalTranslationParam The vertical 
			 * translation of the transformation matrix (Optional)
			 * @param {any[]} matrixValuesParam The values of the 
			 * transformation matrix (Optional)
			 * @param {any[]} matrixMappingParam The mapping the 
			 * transformation matrix performs on the unit triangle. Can 
			 * accept: Array of Array of 2 Arrays of 2 Reals. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new TransformationMatrix (Optional)
			 * @returns {Adobe.Incopy.TransformationMatrix}
			 */
			public add(horizontalScaleFactorParam: number, verticalScaleFactorParam: number, clockwiseShearAngleParam: number, counterclockwiseRotationAngleParam: number, horizontalTranslationParam: number, verticalTranslationParam: number, matrixValuesParam: any[], matrixMappingParam: any[], withPropertiesParam: any): Adobe.Incopy.TransformationMatrix;
			/**
			 * Returns any TransformationMatrix in the collection.
			 * @returns {Adobe.Incopy.TransformationMatrix}
			 */
			public anyItem(): Adobe.Incopy.TransformationMatrix;
			/**
			 * Displays the number of elements in the TransformationMatrix.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every TransformationMatrix in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first TransformationMatrix in the collection.
			 * @returns {Adobe.Incopy.TransformationMatrix}
			 */
			public firstItem(): Adobe.Incopy.TransformationMatrix;
			/**
			 * Returns the TransformationMatrix with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.TransformationMatrix}
			 */
			public item(indexParam: any): Adobe.Incopy.TransformationMatrix;
			/**
			 * Returns the TransformationMatrix with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.TransformationMatrix}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.TransformationMatrix;
			/**
			 * Returns the TransformationMatrices within the specified 
			 * range.
			 * @param {any} fromParam The TransformationMatrix, index, or 
			 * name at the beginning of the range. Can accept: 
			 * TransformationMatrix, Long Integer or String.
			 * @param {any} toParam The TransformationMatrix, index, or 
			 * name at the end of the range. Can accept: 
			 * TransformationMatrix, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last TransformationMatrix in the collection.
			 * @returns {Adobe.Incopy.TransformationMatrix}
			 */
			public lastItem(): Adobe.Incopy.TransformationMatrix;
			/**
			 * Returns the middle TransformationMatrix in the collection.
			 * @returns {Adobe.Incopy.TransformationMatrix}
			 */
			public middleItem(): Adobe.Incopy.TransformationMatrix;
			/**
			 * Returns the TransformationMatrix whose index follows the 
			 * specified TransformationMatrix in the collection.
			 * @param {TransformationMatrix} objParam The 
			 * TransformationMatrix whose index comes before the desired 
			 * TransformationMatrix. 
			 * @returns {Adobe.Incopy.TransformationMatrix}
			 */
			public nextItem(objParam: TransformationMatrix): Adobe.Incopy.TransformationMatrix;
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
			 * Returns the TransformationMatrix with the index previous to 
			 * the specified index.
			 * @param {TransformationMatrix} objParam The index of the 
			 * TransformationMatrix that follows the desired 
			 * TransformationMatrix.
			 * @returns {Adobe.Incopy.TransformationMatrix}
			 */
			public previousItem(objParam: TransformationMatrix): Adobe.Incopy.TransformationMatrix;
		}
	}
}