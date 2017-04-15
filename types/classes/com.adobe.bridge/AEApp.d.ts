/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class AEApp extends Adobe.Csawlib.CSHostObject {
			/**
			 * This is not a Method Description.
			 * @param {string} suiteID - 
			 * @param {string} eventID - 
			 */
			public sendAE(suiteID: string, eventID: string): void;
			/**
			 * This is not a Method Description.
			 * @param {string} suiteID - 
			 * @param {string} eventID - 
			 */
			public sendAENoReply(suiteID: string, eventID: string): void;
		}
	}
}