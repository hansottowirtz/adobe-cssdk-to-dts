/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Event extends Adobe.Csawlib.CSHostObject {
			/**
			 * Dispatched after the Event becomes active. This event 
			 * bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_ACTIVATE: string;
			/**
			 * Dispatched when a Event is closing. Since the close has been 
			 * committed, it can no longer be canceled. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_CLOSE: string;
			/**
			 * Dispatched after the active context changes. This event 
			 * bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_CONTEXT_CHANGED: string;
			/**
			 * Dispatched after a Event is deleted. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_DELETE: string;
			/**
			 * Dispatched after a Event is embedded. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_EMBED: string;
			/**
			 * Dispatched after the Event is invoked. This event does not 
			 * bubble. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_INVOKE: string;
			/**
			 * Dispatched after one or more links in the Event have been 
			 * added, deleted, or modified. This event bubbles. This event 
			 * is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_LINKS_CHANGED: string;
			/**
			 * Dispatched after a Event is relocated from one object to 
			 * another. This event bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_MOVE: string;
			/**
			 * Dispatched after a Event is created. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_NEW: string;
			/**
			 * Dispatched after a Event is opened. This event bubbles. This 
			 * event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_OPEN: string;
			/**
			 * Dispatched after a Event is placed. This event bubbles. This 
			 * event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_PLACE: string;
			/**
			 * Dispatched when the Event is quitting. Since the quit has 
			 * been committed, it can not be canceled. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_QUIT: string;
			/**
			 * Dispatched after an attribute on the active selection 
			 * changes. This event bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_SELECTION_ATTRIBUTE_CHANGED: string;
			/**
			 * Dispatched after the active selection changes. This event 
			 * bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_SELECTION_CHANGED: string;
			/**
			 * Dispatched after a Event is unembedded. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_UNEMBED: string;
			/**
			 * Dispatched after a Event is updated. This event bubbles. 
			 * This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly AFTER_UPDATE: string;
			/**
			 * Dispatched before a Event is closed. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_CLOSE: string;
			/**
			 * Dispatched before the Event becomes inactive. This event 
			 * bubbles. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_DEACTIVATE: string;
			/**
			 * Dispatched before a Event is deleted. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_DELETE: string;
			/**
			 * Dispatched before the Event is displayed. This event does 
			 * not bubble. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_DISPLAY: string;
			/**
			 * Dispatched before a Event is embedded. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_EMBED: string;
			/**
			 * Dispatched before the Event is invoked. This event does not 
			 * bubble. This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_INVOKE: string;
			/**
			 * Dispatched before a Event is relocated from one object to 
			 * another. This event bubbles. This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_MOVE: string;
			/**
			 * Dispatched before a Event is placed. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_PLACE: string;
			/**
			 * Dispatched before the Event is quit. Allows the quit to be 
			 * canceled. This event bubbles. This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_QUIT: string;
			/**
			 * Dispatched before a Event is unembedded. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_UNEMBED: string;
			/**
			 * Dispatched before a Event is updated. This event bubbles. 
			 * This event is cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly BEFORE_UPDATE: string;
			/**
			 * If true, the event supports the bubbling phase of 
			 * propagation.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly bubbles: boolean;
			/**
			 * If true, the default behavior of the event on its target can 
			 * be canceled.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly cancelable: boolean;
			/**
			 * The current propagation target of the event.
			 * @type {any}
			 * @readonly
			 */
			public readonly currentTarget: any;
			/**
			 * If true, the default behavior of the event on its target has 
			 * been canceled.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly defaultPrevented: boolean;
			/**
			 * The current propagation phase of the event.
			 * @type {Adobe.Incopy.EventPhases}
			 * @readonly
			 */
			public readonly eventPhase: Adobe.Incopy.EventPhases;
			/**
			 * The name of the event.
			 * @type {string}
			 * @readonly
			 */
			public readonly eventType: string;
			/**
			 * The unique ID of the Event.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * The index of the Event within its containing object.
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
			 * Dispatched when the Event is invoked. This event does not 
			 * bubble. This event is not cancelable.
			 * @type {string}
			 * @readonly
			 */
			public static readonly ON_INVOKE: string;
			/**
			 * The parent of the Event (a Object, UIDBasedObject, 
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
			 * If true, propagation of the event beyond the current target 
			 * has been stopped.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly propagationStopped: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The target of the event.
			 * @type {any}
			 * @readonly
			 */
			public readonly target: any;
			/**
			 * The time the event was initialized.
			 * @type {Date}
			 * @readonly
			 */
			public readonly timeStamp: Date;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Cancels the default behavior of the event on its target.
			 * @returns {void}
			 */
			public preventDefault(): void;
			/**
			 * Stops propagation of the event beyond the current target.
			 * @returns {void}
			 */
			public stopPropagation(): void;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}