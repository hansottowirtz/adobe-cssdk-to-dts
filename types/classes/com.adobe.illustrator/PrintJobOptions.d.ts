/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintJobOptions extends IllustratorHostObject {
			/**
			 * Artboard Range to be printed if PrintAllArtboards is false ( 
			 * default: 1- )
			 */
			public artboardRange: string;
			/** the bitmap resolution ( minimum 0.0; default: 0.0 ) */
			public bitmapResolution: number;
			/** whether to collate print pages ( default: false ) */
			public collate: boolean;
			/** the number of copies to print ( minimum 1; default: 1 ) */
			public copies: number;
			/**
			 * the layers/objects to be printed ( default: 
			 * PrintArtworkDesignation.VISIBLEPRINTABLELAYERS )
			 */
			public designation: PrintArtworkDesignation;
			/** the file to be printed to */
			public file: File;
			/** the print job name */
			public name: string;
			/** whether to print all artboards ( default: true ) */
			public printAllArtboards: boolean;
			/**
			 * the printing bounds ( default: PrintingBounds.ARTBOARDBOUNDS 
			 * )
			 */
			public printArea: PrintingBounds;
			/** whether to print as bitmap ( default: false ) */
			public printAsBitmap: boolean;
			/** print pages in reverse order ( default: false ) */
			public reversePages: boolean;
		}
	}
}