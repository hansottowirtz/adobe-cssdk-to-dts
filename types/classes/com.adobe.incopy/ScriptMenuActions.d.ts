/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ScriptMenuActions extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new action.
			 * @param {string} titleParam - The name of the 
			 * ScriptMenuAction for display in the user interface. The 
			 * title includes any ampersand characters (&), which are used 
			 * to tell the Windows OS to underline the following character 
			 * in the name for use with the Alt key to navigate to a menu 
			 * item. Double ampersands are used to display an actual 
			 * ampersand character in the name. The Mac OS ignores and 
			 * removes the extra ampersand characters. (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new ScriptMenuAction (Optional)
			 */
			public add(titleParam: string, withPropertiesParam: any): Adobe.Incopy.ScriptMenuAction;
			/** Returns any ScriptMenuAction in the collection. */
			public anyItem(): Adobe.Incopy.ScriptMenuAction;
			/** Displays the number of elements in the ScriptMenuAction. */
			public count(): number;
			/** Returns every ScriptMenuAction in the collection. */
			public everyItem(): any;
			/** Returns the first ScriptMenuAction in the collection. */
			public firstItem(): Adobe.Incopy.ScriptMenuAction;
			/**
			 * Returns the ScriptMenuAction with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.ScriptMenuAction;
			/**
			 * Returns the ScriptMenuAction with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.ScriptMenuAction;
			/**
			 * Returns the ScriptMenuAction with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.ScriptMenuAction;
			/**
			 * Returns the ScriptMenuActions within the specified range.
			 * @param {any} fromParam - The ScriptMenuAction, index, or 
			 * name at the beginning of the range. Can accept: 
			 * ScriptMenuAction, Long Integer or String.
			 * @param {any} toParam - The ScriptMenuAction, index, or name 
			 * at the end of the range. Can accept: ScriptMenuAction, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last ScriptMenuAction in the collection. */
			public lastItem(): Adobe.Incopy.ScriptMenuAction;
			/** Returns the middle ScriptMenuAction in the collection. */
			public middleItem(): Adobe.Incopy.ScriptMenuAction;
			/**
			 * Returns the ScriptMenuAction whose index follows the 
			 * specified ScriptMenuAction in the collection.
			 * @param {ScriptMenuAction} objParam - The ScriptMenuAction 
			 * whose index comes before the desired ScriptMenuAction. 
			 */
			public nextItem(objParam: ScriptMenuAction): Adobe.Incopy.ScriptMenuAction;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the ScriptMenuAction with the index previous to the 
			 * specified index.
			 * @param {ScriptMenuAction} objParam - The index of the 
			 * ScriptMenuAction that follows the desired ScriptMenuAction.
			 */
			public previousItem(objParam: ScriptMenuAction): Adobe.Incopy.ScriptMenuAction;
		}
	}
}