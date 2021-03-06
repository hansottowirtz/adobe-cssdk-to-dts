/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class UndoModes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Automatically undo the entire script as part of the previous 
			 * step.
			 * @type {Adobe.Incopy.UndoModes}
			 * @readonly
			 */
			public static readonly AUTO_UNDO: Adobe.Incopy.UndoModes;
			/**
			 * Alias for AUTO_UNDO. Automatically undo the entire script as 
			 * part of the previous step.
			 * @type {Adobe.Incopy.UndoModes}
			 * @readonly
			 */
			public static readonly autoUndo: Adobe.Incopy.UndoModes;
			/**
			 * Undo the entire script as a single step.
			 * @type {Adobe.Incopy.UndoModes}
			 * @readonly
			 */
			public static readonly ENTIRE_SCRIPT: Adobe.Incopy.UndoModes;
			/**
			 * Alias for ENTIRE_SCRIPT. Undo the entire script as a single 
			 * step.
			 * @type {Adobe.Incopy.UndoModes}
			 * @readonly
			 */
			public static readonly entireScript: Adobe.Incopy.UndoModes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Fast undo the entire script as a single step.
			 * @type {Adobe.Incopy.UndoModes}
			 * @readonly
			 */
			public static readonly FAST_ENTIRE_SCRIPT: Adobe.Incopy.UndoModes;
			/**
			 * Alias for FAST_ENTIRE_SCRIPT. Fast undo the entire script as 
			 * a single step.
			 * @type {Adobe.Incopy.UndoModes}
			 * @readonly
			 */
			public static readonly fastEntireScript: Adobe.Incopy.UndoModes;
			/**
			 * Undo each script request as a separate step.
			 * @type {Adobe.Incopy.UndoModes}
			 * @readonly
			 */
			public static readonly SCRIPT_REQUEST: Adobe.Incopy.UndoModes;
			/**
			 * Alias for SCRIPT_REQUEST. Undo each script request as a 
			 * separate step.
			 * @type {Adobe.Incopy.UndoModes}
			 * @readonly
			 */
			public static readonly scriptRequest: Adobe.Incopy.UndoModes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}