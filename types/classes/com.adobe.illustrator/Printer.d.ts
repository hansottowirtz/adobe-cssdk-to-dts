/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Printer extends IllustratorHostObject {
			/** the printer name */
			public name: string;
			/** the printer information */
			public printerInfo: PrinterInfo;
		}
	}
}