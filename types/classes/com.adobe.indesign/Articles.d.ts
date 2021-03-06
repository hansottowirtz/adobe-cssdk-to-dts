/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Articles extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new Article
			 * @param {string} nameParam The article name (Optional)
			 * @param {boolean} articleExportStatusParam The article's 
			 * export status (Optional)
			 * @param {LocationOptions} atParam The location relative to 
			 * the reference object or within the containing object. 
			 * (Optional)
			 * @param {Article} referenceParam The reference object. Note: 
			 * Required when the to value specifies before or after. 
			 * (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Article (Optional)
			 * @returns {Adobe.Indesign.Article}
			 */
			public add(nameParam: string, articleExportStatusParam: boolean, atParam: LocationOptions, referenceParam: Article, withPropertiesParam: any): Adobe.Indesign.Article;
			/**
			 * Returns any Article in the collection.
			 * @returns {Adobe.Indesign.Article}
			 */
			public anyItem(): Adobe.Indesign.Article;
			/**
			 * Displays the number of elements in the Article.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Article in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Article in the collection.
			 * @returns {Adobe.Indesign.Article}
			 */
			public firstItem(): Adobe.Indesign.Article;
			/**
			 * Returns the Article with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Article}
			 */
			public item(indexParam: any): Adobe.Indesign.Article;
			/**
			 * Returns the Article with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Article}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Article;
			/**
			 * Returns the Article with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Article}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Article;
			/**
			 * Returns the Articles within the specified range.
			 * @param {any} fromParam The Article, index, or name at the 
			 * beginning of the range. Can accept: Article, Long Integer or 
			 * String.
			 * @param {any} toParam The Article, index, or name at the end 
			 * of the range. Can accept: Article, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Article in the collection.
			 * @returns {Adobe.Indesign.Article}
			 */
			public lastItem(): Adobe.Indesign.Article;
			/**
			 * Returns the middle Article in the collection.
			 * @returns {Adobe.Indesign.Article}
			 */
			public middleItem(): Adobe.Indesign.Article;
			/**
			 * Returns the Article whose index follows the specified 
			 * Article in the collection.
			 * @param {Article} objParam The Article whose index comes 
			 * before the desired Article. 
			 * @returns {Adobe.Indesign.Article}
			 */
			public nextItem(objParam: Article): Adobe.Indesign.Article;
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
			 * Returns the Article with the index previous to the specified 
			 * index.
			 * @param {Article} objParam The index of the Article that 
			 * follows the desired Article.
			 * @returns {Adobe.Indesign.Article}
			 */
			public previousItem(objParam: Article): Adobe.Indesign.Article;
		}
	}
}