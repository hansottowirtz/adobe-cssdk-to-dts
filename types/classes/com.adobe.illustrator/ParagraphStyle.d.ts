/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A named style that remembers paragraph attributes. */
		class ParagraphStyle extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The character properties for the text range. */
			public readonly characterAttributes: Adobe.Illustrator.CharacterAttributes;
			/** The paragraph style's name. */
			public name: string;
			/** The paragraph properties for the text range. */
			public readonly paragraphAttributes: Adobe.Illustrator.ParagraphAttributes;
			/**
			 * Apply the paragraph style to text object(s)
			 * @param {any} textItem - The text object(s) to apply the 
			 * style to.
			 * @param {boolean} clearingOverrides - Whether to clear any 
			 * text attributes before apply the style. ( default: false )
			 */
			public applyTo(textItem: any, clearingOverrides: boolean): void;
			/** delete the object */
			public remove(): void;
		}
	}
}