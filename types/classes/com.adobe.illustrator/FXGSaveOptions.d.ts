/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Options which may be supplied when saving a document as an 
		 * FXG file
		 */
		class FXGSaveOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * If SaveMultipleArtboards is true,this will be considered for 
			 * multi-asset extraction which specifies artboard range.Empty 
			 * string will extracts all the artboards.Default is empty 
			 * string ( default:  )
			 */
			public artboardRange: string;
			/**
			 * choose to clip content to the active artboard ( default: 
			 * true )
			 */
			public clipContent: boolean;
			/**
			 * choose to downsample the linked images(72ppi) ( default: 
			 * false )
			 */
			public downsampleLinkedImages: boolean;
			/**
			 * the policy used by FXG to preserve filters ( default: 
			 * FiltersPreservePolicy.KEEPFILTERSEDITABLE )
			 */
			public filtersPolicy: Adobe.Illustrator.FiltersPreservePolicy;
			/**
			 * the policy used by FXG to preserve gradients ( default: 
			 * GradientsPreservePolicy.KEEPGRADIENTSEDITABLE )
			 */
			public gradientsPolicy: Adobe.Illustrator.GradientsPreservePolicy;
			/** choose to include metadata (XMP) ( default: false ) */
			public includeMetadata: boolean;
			/** choose to include unused symbols ( default: false ) */
			public includeUnusedSymbols: boolean;
			/**
			 * choose to preserve the editing capabilities of FXG ( 
			 * default: true )
			 */
			public preserveEditingCapabilities: boolean;
			/**
			 * All the artboards or range of the artboards will be saved ( 
			 * default: false )
			 */
			public saveMultipleArtboards: boolean;
			/**
			 * the policy used by FXG to preserve text ( default: 
			 * TextPreservePolicy.KEEPTEXTEDITABLE )
			 */
			public textPolicy: Adobe.Illustrator.TextPreservePolicy;
			/**
			 * the version of the FXG file format to create ( default: 
			 * FXGVersion.VERSION1PT0 )
			 */
			public version: Adobe.Illustrator.FXGVersion;
		}
	}
}