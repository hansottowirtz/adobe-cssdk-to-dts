/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PPDFile extends IllustratorHostObject {
			/** the PPD model name */
			public name: string;
			/** the PPD file information */
			public PPDInfo: PPDFileInfo;
		}
	}
}