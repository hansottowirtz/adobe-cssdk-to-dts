/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class EventListener extends Adobe.Csawlib.CSHostObject {
			/**
			 * The name of the event.
			 * @type {string}
			 * @readonly
			 */
			public readonly eventType: string;
			/**
			 * The handler to invoke when the event occurs. Can return: 
			 * File or JavaScript Function.
			 * @type {any}
			 * @readonly
			 */
			public readonly handler: any;
			/**
			 * The unique ID of the EventListener.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the EventListener within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * A property that can be set to any string.
			 * @type {string}
			 */
			public label: string;
			/**
			 * The name of the EventListener; this is an alias to the 
			 * EventListener's label property.
			 * @type {string}
			 */
			public name: string;
			/**
			 * The parent of the EventListener (a Object, UIDBasedObject, 
			 * CellStyleGroup, CellStyle, TableStyleGroup, ConditionSet, 
			 * HiddenText, Condition, AssignedStory, Assignment, 
			 * NumberingList, Dialog, Swatch, Color, Tint, Gradient, 
			 * MixedInkGroup, MixedInk, Behavior, SubmitFormBehavior, 
			 * PrintFormBehavior, ClearFormBehavior, GotoPageBehavior, 
			 * GotoAnchorBehavior, SoundBehavior, ViewZoomBehavior, 
			 * GotoStateBehavior, GotoPreviousStateBehavior, 
			 * GotoNextStateBehavior, OpenFileBehavior, AnimationBehavior, 
			 * ShowHideFieldsBehavior, MovieBehavior, GotoURLBehavior, 
			 * GotoPreviousViewBehavior, GotoNextViewBehavior, 
			 * GotoPreviousPageBehavior, GotoNextPageBehavior, 
			 * GotoLastPageBehavior, GotoFirstPageBehavior, 
			 * CrossReferenceFormat, HyperlinkURLDestination, 
			 * HyperlinkExternalPageDestination, HyperlinkTextDestination, 
			 * ParagraphDestination, HyperlinkTextSource, 
			 * CrossReferenceSource, HyperlinkPageItemSource, Hyperlink, 
			 * MenuAction, ScriptMenuAction, CharacterStyleGroup, 
			 * ParagraphStyleGroup, TextVariableInstance, Footnote, XMLTag, 
			 * Note, TableStyle, TextPath, Link, Section, MojikumiTable, 
			 * KinsokuTable, Guide, LanguageWithVendors, Language, 
			 * PageItem, HtmlItem, FormField, SignatureField, TextBox, 
			 * RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, 
			 * Button, MediaItem, Sound, Movie, EPSText, SplineItem, 
			 * Polygon, GraphicLine, Rectangle, Oval, Graphic, 
			 * ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, 
			 * MasterSpread, TrapPreset, Ink, DocumentPreset, Page, Spread, 
			 * Layer, CharacterStyle, ParagraphStyle, Story, XmlStory, 
			 * IDBasedObject, DialogRow, DialogColumn, Widget, BorderPanel, 
			 * MeasurementEditbox, MeasurementCombobox, RealCombobox, 
			 * AngleEditbox, PercentEditbox, RealEditbox, PercentCombobox, 
			 * AngleCombobox, EnablingGroup, IntegerCombobox, 
			 * IntegerEditbox, RadiobuttonControl, RadiobuttonGroup, 
			 * CheckboxControl, Dropdown, StaticText, TextEditbox, 
			 * BackgroundTask, State, XMLItem, DTD, XMLInstruction, 
			 * XMLComment, XMLElement, Table, Cell, IdleTask, StrokeStyle, 
			 * GraphicLayer, NonIDBasedObject, Panel, Window, 
			 * NavigationPoint, BuildingBlock, IndexingSortOption, 
			 * TextMacro, MenuElement, MenuSeparator, MenuItem, Submenu, 
			 * Menu, StyleExportTagMap, TextVariable, ValidationError, 
			 * XMLExportMap, XMLImportMap, XMLAttribute, Row, Column, 
			 * Change, RootObject, Document, Application, Preference, 
			 * ConditionalTextPreference, NumberingRestartPolicy, Bullet, 
			 * TrackChangesPreference, NotePreference, 
			 * GalleyPrintPreference, LayoutPrintPreference, 
			 * ClipboardPreference, GeneralPreference, XMLViewPreference, 
			 * LinkMetadata, MetadataPreference, ExcelImportPreference, 
			 * TaggedTextImportPreference, TaggedTextExportPreference, 
			 * WordRTFImportPreference, TextExportPreference, 
			 * TextImportPreference, GalleyPreference, 
			 * CaptionMetadataVariablePreference, 
			 * CustomTextVariablePreference, MatchParagraphStylePreference, 
			 * MatchCharacterStylePreference, FileNameVariablePreference, 
			 * DateVariablePreference, ChapterNumberVariablePreference, 
			 * PageNumberVariablePreference, FootnoteOption, 
			 * BaselineFrameGridOption, AnchoredObjectSetting, 
			 * AnchoredObjectDefault, ExportForWebPreference, 
			 * XMLPreference, XMLExportPreference, XMLImportPreference, 
			 * InCopyExportOption, LinkingPreference, 
			 * ChangeTransliteratePreference, ChangeGlyphPreference, 
			 * ChangeGrepPreference, ChangeTextPreference, 
			 * FindTransliteratePreference, FindGlyphPreference, 
			 * FindGrepPreference, FindTextPreference, 
			 * FindChangeTransliterateOption, FindChangeObjectOption, 
			 * FindChangeGlyphOption, FindChangeGrepOption, 
			 * FindChangeTextOption, ScriptArg, ScriptPreference, PlaceGun, 
			 * StrokeFillProxySetting, ImportedPageAttribute, 
			 * AutoCorrectPreference, SpellPreference, 
			 * DictionaryPreference, FontLockingPreference, 
			 * MojikumiUiPreference, ContourOption, TextWrapPreference, 
			 * TextEditingPreference, FrameFittingOption, PageItemDefault, 
			 * PDFLayoutExportPreference, PDFGalleyExportPreference, 
			 * IMEPreference, GraphicLayerOption, ClippingPathSettings, 
			 * ImageIOPreference, ImagePreference, ToolBox, ViewPreference, 
			 * PasteboardPreference, MarginPreference, GuidePreference, 
			 * GridPreference, DocumentPreference, TextDefault, 
			 * TextPreference, TextFramePreference, StoryPreference, 
			 * PathPoint, Path, GradientStop, AutoCorrectTable, 
			 * UserDictionary, HyphenationException, Font, 
			 * TransformationMatrix, NestedStyle, TabStop, Text, 
			 * InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, 
			 * Word, Character, NestedGrepStyle or NestedLineStyle).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * Gets the label value associated with the specified key.
			 * @param {string} keyParam The key.
			 * @returns {string}
			 */
			public extractLabel(keyParam: string): string;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Sets the label to the value associated with the specified 
			 * key.
			 * @param {string} keyParam The key.
			 * @param {string} valueParam The value.
			 * @returns {void}
			 */
			public insertLabel(keyParam: string, valueParam: string): void;
			/**
			 * Deletes the EventListener.
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}