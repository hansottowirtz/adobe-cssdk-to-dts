/// <reference path="../../packages/com.adobe.premiere/references.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class CsxsCSReview extends Adobe.Csawlib.CSHostObject {
			/**
			 * @param {Sequence} sequence 
			 * @param {string} previewOutputPath 
			 * @param {string} thumbnailOutputPath 
			 * @param {number} thumbnailHeight 
			 * @param {number} thumbnailWidth 
			 * @param {string} thumbnailFormat 
			 * @returns {string}
			 */
			public encodeForCSReview(sequence: Sequence, previewOutputPath: string, thumbnailOutputPath: string, thumbnailHeight: number, thumbnailWidth: number, thumbnailFormat: string): string;
		}
	}
}