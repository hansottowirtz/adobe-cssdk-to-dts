/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class SymbolItem extends Adobe.Illustrator.PageItem {
			/** The symbol that was used to create this symbol item. */
			public symbol: Adobe.Illustrator.Symbol;
		}
	}
}