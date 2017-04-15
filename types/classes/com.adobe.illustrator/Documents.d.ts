/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A collection of documents */
		class Documents extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/**
			 * a document
			 * @param {Adobe.Illustrator.DocumentColorSpace} 
			 * documentColorSpace - the color model used for the document ( 
			 * default: DocumentColorSpace.CMYK )
			 * @param {number} width - width of the artboard ( default: 
			 * 612.0 )
			 * @param {number} height - height of the artboard ( default: 
			 * 792.0 )
			 * @param {number} numArtboards - number of artboards for new 
			 * document.Range (1:100). ( default: 1 )
			 * @param {Adobe.Illustrator.DocumentArtboardLayout} 
			 * artboardLayout - layout of artboards for new document ( 
			 * default: DocumentArtboardLayout.GridByRow )
			 * @param {number} artboardSpacing - spacing between artboards 
			 * for new document ( default: 20.0 )
			 * @param {number} artboardRowsOrCols - Number of rows (for 
			 * rows layout) OR column(for column layouts)of artboards.Range 
			 * is 1 to (docNumArtboards - 1) or 1 for single row or column 
			 * layouts ( default: 1 )
			 */
			public add(documentColorSpace: Adobe.Illustrator.DocumentColorSpace, width: number, height: number, numArtboards: number, artboardLayout: Adobe.Illustrator.DocumentArtboardLayout, artboardSpacing: number, artboardRowsOrCols: number): Adobe.Illustrator.Document;
			/**
			 * create a document from the preset
			 * @param {string} startupPreset - the name of startup document 
			 * preset
			 * @param {Adobe.Illustrator.DocumentPreset} presetSettings - 
			 * the custom document preset settings
			 */
			public addDocument(startupPreset: string, presetSettings: Adobe.Illustrator.DocumentPreset): Adobe.Illustrator.Document;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 */
			public getByName(nameParam: string): Adobe.Illustrator.Document;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 */
			public index(idx: number): Adobe.Illustrator.Document;
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
		}
	}
}