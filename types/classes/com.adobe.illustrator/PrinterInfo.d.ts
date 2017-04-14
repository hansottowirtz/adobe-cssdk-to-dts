/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrinterInfo extends IllustratorHostObject {
			/** does the printer support binary printing? */
			public binaryPrintingSupport: boolean;
			/** the printer color capability */
			public colorSupport: PrinterColorMode;
			/** does the printer support custom paper size? */
			public customPaperSupport: boolean;
			/** does the printer support custom paper transverse? */
			public customPaperTransverseSupport: boolean;
			/** the printer default resolution */
			public deviceResolution: number;
			/** does the printer support InRIP color separation? */
			public inRIPSeparationSupport: boolean;
			/** the printer maximum device resolution */
			public maxDeviceResolution: number;
			/** custom paper's maximum height */
			public maxPaperHeight: number;
			/** custom paper's maximum height offset */
			public maxPaperHeightOffset: number;
			/** custom paper's maximum width */
			public maxPaperWidth: number;
			/** custom paper's maximum width offset */
			public maxPaperWidthOffset: number;
			/** custom paper's minimum height */
			public minPaperHeight: number;
			/** custom paper's minimum height offset */
			public minPaperHeightOffset: number;
			/** custom paper's minimum width */
			public minPaperWidth: number;
			/** custom paper's minimum width offset */
			public minPaperWidthOffset: number;
			/** the list of supported paper sizes */
			public paperSizes: any;
			/** the PostScript level */
			public postScriptLevel: PrinterPostScriptLevelEnum;
			/** the printer type */
			public printerType: PrinterTypeEnum;
		}
	}
}