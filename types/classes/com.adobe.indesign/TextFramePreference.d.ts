/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class TextFramePreference extends Adobe.Indesign.Preference {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The distance between the baseline of the text and the top 
			 * inset of the text frame or cell.
			 */
			public firstBaselineOffset: Adobe.Indesign.FirstBaseline;
			/**
			 * If true, ignores text wrap settings for drawn or placed 
			 * objects in the text frame.
			 */
			public ignoreWrap: boolean;
			/**
			 * The amount to offset text from the edges of the text frame, 
			 * specified either as a single value applied uniformly to all 
			 * sides of the text frame or as an array of 4 values in the 
			 * format [top inset, left inset, bottom inset, right inset]. 
			 * Can return: Unit (0 - 8640 points) or Array of 4 Units (0 - 
			 * 8640 points).
			 */
			public insetSpacing: any;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The minimum distance between the baseline of the text and 
			 * the top inset of the text frame or cell.
			 */
			public minimumFirstBaselineOffset: any;
			/**
			 * The parent of the TextFramePreference (a Application, 
			 * Document, TextFrame or ObjectStyle).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The number of columns in the text frame. Note: Depending on 
			 * the value of use fixed column width, the number of columns 
			 * can change automatically when the text frame size changes.
			 */
			public textColumnCount: number;
			/** The column width of the columns in the text frame. */
			public textColumnFixedWidth: any;
			/** The space between columns in the text frame. */
			public textColumnGutter: any;
			/**
			 * If true, maintains column width when the text frame is 
			 * resized. If false, causes columns to resize when the text 
			 * frame is resized. Note: When true, resizing the frame can 
			 * change the number of columns in the frame.
			 */
			public useFixedColumnWidth: boolean;
			/** Vertically justify balanced across all columns. */
			public verticalBalanceColumns: boolean;
			/** The vertical alignment of the text content. */
			public verticalJustification: Adobe.Indesign.VerticalJustification;
			/**
			 * The maximum amount of vertical space between two paragraphs. 
			 * Note: Valid only when vertical justification is justified; 
			 * the specified amount is applied in addition to the space 
			 * before or space after values defined for the paragraph.
			 */
			public verticalThreshold: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTextFramePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerTextFramePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}