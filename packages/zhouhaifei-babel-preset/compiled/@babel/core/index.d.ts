declare type Accessor = ClassAccessorProperty;

declare const ACCESSOR_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

/**
 * Add comment of certain type to a node.
 */
declare function addComment<T extends Node_3>(node: T, type: CommentTypeShorthand, content: string, line?: boolean): T;

/**
 * Add comments of certain type to a node.
 */
declare function addComments<T extends Node_3>(node: T, type: CommentTypeShorthand, comments: Array<Comment_2>): T;

declare const ALIAS_KEYS: Partial<Record<NodeTypesWithoutComment, string[]>>;

declare interface Aliases {
    Standardized: Standardized;
    Expression: Expression;
    Binary: Binary;
    Scopable: Scopable;
    BlockParent: BlockParent;
    Block: Block;
    Statement: Statement;
    Terminatorless: Terminatorless;
    CompletionStatement: CompletionStatement;
    Conditional: Conditional;
    Loop: Loop;
    While: While;
    ExpressionWrapper: ExpressionWrapper;
    For: For;
    ForXStatement: ForXStatement;
    Function: Function_2;
    FunctionParent: FunctionParent;
    Pureish: Pureish;
    Declaration: Declaration;
    PatternLike: PatternLike;
    LVal: LVal;
    TSEntityName: TSEntityName;
    Literal: Literal;
    Immutable: Immutable;
    UserWhitespacable: UserWhitespacable;
    Method: Method;
    ObjectMember: ObjectMember;
    Property: Property;
    UnaryLike: UnaryLike;
    Pattern: Pattern;
    Class: Class;
    ImportOrExportDeclaration: ImportOrExportDeclaration;
    ExportDeclaration: ExportDeclaration;
    ModuleSpecifier: ModuleSpecifier;
    Accessor: Accessor;
    Private: Private;
    Flow: Flow;
    FlowType: FlowType;
    FlowBaseAnnotation: FlowBaseAnnotation;
    FlowDeclaration: FlowDeclaration;
    FlowPredicate: FlowPredicate;
    EnumBody: EnumBody;
    EnumMember: EnumMember;
    JSX: JSX_2;
    Miscellaneous: Miscellaneous;
    TypeScript: TypeScript;
    TSTypeElement: TSTypeElement;
    TSType: TSType;
    TSBaseType: TSBaseType;
    ModuleDeclaration: ModuleDeclaration;
}

declare interface AnyTypeAnnotation extends BaseNode {
    type: "AnyTypeAnnotation";
}

declare function anyTypeAnnotation(): AnyTypeAnnotation;

/**
 * Append a node to a member expression.
 */
declare function appendToMemberExpression(member: MemberExpression, append: MemberExpression["property"], computed?: boolean): MemberExpression;

declare interface ArgumentPlaceholder extends BaseNode {
    type: "ArgumentPlaceholder";
}

declare function argumentPlaceholder(): ArgumentPlaceholder;

declare interface ArrayExpression extends BaseNode {
    type: "ArrayExpression";
    elements: Array<null | Expression | SpreadElement>;
}

declare function arrayExpression(elements?: Array<null | Expression | SpreadElement>): ArrayExpression;

declare interface ArrayPattern extends BaseNode {
    type: "ArrayPattern";
    elements: Array<null | PatternLike | LVal>;
    decorators?: Array<Decorator> | null;
    optional?: boolean | null;
    typeAnnotation?: TypeAnnotation | TSTypeAnnotation | Noop | null;
}

declare function arrayPattern(elements: Array<null | PatternLike | LVal>): ArrayPattern;

declare interface ArrayTypeAnnotation extends BaseNode {
    type: "ArrayTypeAnnotation";
    elementType: FlowType;
}

declare function arrayTypeAnnotation(elementType: FlowType): ArrayTypeAnnotation;

declare interface ArrowFunctionExpression extends BaseNode {
    type: "ArrowFunctionExpression";
    params: Array<Identifier | Pattern | RestElement>;
    body: BlockStatement | Expression;
    async: boolean;
    expression: boolean;
    generator?: boolean;
    predicate?: DeclaredPredicate | InferredPredicate | null;
    returnType?: TypeAnnotation | TSTypeAnnotation | Noop | null;
    typeParameters?: TypeParameterDeclaration | TSTypeParameterDeclaration | Noop | null;
}

declare function arrowFunctionExpression(params: Array<Identifier | Pattern | RestElement>, body: BlockStatement | Expression, async?: boolean): ArrowFunctionExpression;

declare function assertAccessor(node: object | null | undefined, opts?: object | null): asserts node is Accessor;

declare function assertAnyTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is AnyTypeAnnotation;

declare function assertArgumentPlaceholder(node: object | null | undefined, opts?: object | null): asserts node is ArgumentPlaceholder;

declare function assertArrayExpression(node: object | null | undefined, opts?: object | null): asserts node is ArrayExpression;

declare function assertArrayPattern(node: object | null | undefined, opts?: object | null): asserts node is ArrayPattern;

declare function assertArrayTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is ArrayTypeAnnotation;

declare function assertArrowFunctionExpression(node: object | null | undefined, opts?: object | null): asserts node is ArrowFunctionExpression;

declare function assertAssignmentExpression(node: object | null | undefined, opts?: object | null): asserts node is AssignmentExpression;

declare function assertAssignmentPattern(node: object | null | undefined, opts?: object | null): asserts node is AssignmentPattern;

declare function assertAwaitExpression(node: object | null | undefined, opts?: object | null): asserts node is AwaitExpression;

declare function assertBigIntLiteral(node: object | null | undefined, opts?: object | null): asserts node is BigIntLiteral;

declare function assertBinary(node: object | null | undefined, opts?: object | null): asserts node is Binary;

declare function assertBinaryExpression(node: object | null | undefined, opts?: object | null): asserts node is BinaryExpression;

declare function assertBindExpression(node: object | null | undefined, opts?: object | null): asserts node is BindExpression;

declare function assertBlock(node: object | null | undefined, opts?: object | null): asserts node is Block;

declare function assertBlockParent(node: object | null | undefined, opts?: object | null): asserts node is BlockParent;

declare function assertBlockStatement(node: object | null | undefined, opts?: object | null): asserts node is BlockStatement;

declare function assertBooleanLiteral(node: object | null | undefined, opts?: object | null): asserts node is BooleanLiteral;

declare function assertBooleanLiteralTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is BooleanLiteralTypeAnnotation;

declare function assertBooleanTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is BooleanTypeAnnotation;

declare function assertBreakStatement(node: object | null | undefined, opts?: object | null): asserts node is BreakStatement;

declare function assertCallExpression(node: object | null | undefined, opts?: object | null): asserts node is CallExpression;

declare function assertCatchClause(node: object | null | undefined, opts?: object | null): asserts node is CatchClause;

declare function assertClass(node: object | null | undefined, opts?: object | null): asserts node is Class;

declare function assertClassAccessorProperty(node: object | null | undefined, opts?: object | null): asserts node is ClassAccessorProperty;

declare function assertClassBody(node: object | null | undefined, opts?: object | null): asserts node is ClassBody;

declare function assertClassDeclaration(node: object | null | undefined, opts?: object | null): asserts node is ClassDeclaration;

declare function assertClassExpression(node: object | null | undefined, opts?: object | null): asserts node is ClassExpression;

declare function assertClassImplements(node: object | null | undefined, opts?: object | null): asserts node is ClassImplements;

declare function assertClassMethod(node: object | null | undefined, opts?: object | null): asserts node is ClassMethod;

declare function assertClassPrivateMethod(node: object | null | undefined, opts?: object | null): asserts node is ClassPrivateMethod;

declare function assertClassPrivateProperty(node: object | null | undefined, opts?: object | null): asserts node is ClassPrivateProperty;

declare function assertClassProperty(node: object | null | undefined, opts?: object | null): asserts node is ClassProperty;

declare function assertCompletionStatement(node: object | null | undefined, opts?: object | null): asserts node is CompletionStatement;

declare function assertConditional(node: object | null | undefined, opts?: object | null): asserts node is Conditional;

declare function assertConditionalExpression(node: object | null | undefined, opts?: object | null): asserts node is ConditionalExpression;

declare function assertContinueStatement(node: object | null | undefined, opts?: object | null): asserts node is ContinueStatement;

declare function assertDebuggerStatement(node: object | null | undefined, opts?: object | null): asserts node is DebuggerStatement;

declare function assertDecimalLiteral(node: object | null | undefined, opts?: object | null): asserts node is DecimalLiteral;

declare function assertDeclaration(node: object | null | undefined, opts?: object | null): asserts node is Declaration;

declare function assertDeclareClass(node: object | null | undefined, opts?: object | null): asserts node is DeclareClass;

declare function assertDeclaredPredicate(node: object | null | undefined, opts?: object | null): asserts node is DeclaredPredicate;

declare function assertDeclareExportAllDeclaration(node: object | null | undefined, opts?: object | null): asserts node is DeclareExportAllDeclaration;

declare function assertDeclareExportDeclaration(node: object | null | undefined, opts?: object | null): asserts node is DeclareExportDeclaration;

declare function assertDeclareFunction(node: object | null | undefined, opts?: object | null): asserts node is DeclareFunction;

declare function assertDeclareInterface(node: object | null | undefined, opts?: object | null): asserts node is DeclareInterface;

declare function assertDeclareModule(node: object | null | undefined, opts?: object | null): asserts node is DeclareModule;

declare function assertDeclareModuleExports(node: object | null | undefined, opts?: object | null): asserts node is DeclareModuleExports;

declare function assertDeclareOpaqueType(node: object | null | undefined, opts?: object | null): asserts node is DeclareOpaqueType;

declare function assertDeclareTypeAlias(node: object | null | undefined, opts?: object | null): asserts node is DeclareTypeAlias;

declare function assertDeclareVariable(node: object | null | undefined, opts?: object | null): asserts node is DeclareVariable;

declare function assertDecorator(node: object | null | undefined, opts?: object | null): asserts node is Decorator;

declare function assertDirective(node: object | null | undefined, opts?: object | null): asserts node is Directive;

declare function assertDirectiveLiteral(node: object | null | undefined, opts?: object | null): asserts node is DirectiveLiteral;

declare function assertDoExpression(node: object | null | undefined, opts?: object | null): asserts node is DoExpression;

declare function assertDoWhileStatement(node: object | null | undefined, opts?: object | null): asserts node is DoWhileStatement;

declare function assertEmptyStatement(node: object | null | undefined, opts?: object | null): asserts node is EmptyStatement;

declare function assertEmptyTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is EmptyTypeAnnotation;

declare function assertEnumBody(node: object | null | undefined, opts?: object | null): asserts node is EnumBody;

declare function assertEnumBooleanBody(node: object | null | undefined, opts?: object | null): asserts node is EnumBooleanBody;

declare function assertEnumBooleanMember(node: object | null | undefined, opts?: object | null): asserts node is EnumBooleanMember;

declare function assertEnumDeclaration(node: object | null | undefined, opts?: object | null): asserts node is EnumDeclaration;

declare function assertEnumDefaultedMember(node: object | null | undefined, opts?: object | null): asserts node is EnumDefaultedMember;

declare function assertEnumMember(node: object | null | undefined, opts?: object | null): asserts node is EnumMember;

declare function assertEnumNumberBody(node: object | null | undefined, opts?: object | null): asserts node is EnumNumberBody;

declare function assertEnumNumberMember(node: object | null | undefined, opts?: object | null): asserts node is EnumNumberMember;

declare function assertEnumStringBody(node: object | null | undefined, opts?: object | null): asserts node is EnumStringBody;

declare function assertEnumStringMember(node: object | null | undefined, opts?: object | null): asserts node is EnumStringMember;

declare function assertEnumSymbolBody(node: object | null | undefined, opts?: object | null): asserts node is EnumSymbolBody;

declare function assertExistsTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is ExistsTypeAnnotation;

declare function assertExportAllDeclaration(node: object | null | undefined, opts?: object | null): asserts node is ExportAllDeclaration;

declare function assertExportDeclaration(node: object | null | undefined, opts?: object | null): asserts node is ExportDeclaration;

declare function assertExportDefaultDeclaration(node: object | null | undefined, opts?: object | null): asserts node is ExportDefaultDeclaration;

declare function assertExportDefaultSpecifier(node: object | null | undefined, opts?: object | null): asserts node is ExportDefaultSpecifier;

declare function assertExportNamedDeclaration(node: object | null | undefined, opts?: object | null): asserts node is ExportNamedDeclaration;

declare function assertExportNamespaceSpecifier(node: object | null | undefined, opts?: object | null): asserts node is ExportNamespaceSpecifier;

declare function assertExportSpecifier(node: object | null | undefined, opts?: object | null): asserts node is ExportSpecifier;

declare function assertExpression(node: object | null | undefined, opts?: object | null): asserts node is Expression;

declare function assertExpressionStatement(node: object | null | undefined, opts?: object | null): asserts node is ExpressionStatement;

declare function assertExpressionWrapper(node: object | null | undefined, opts?: object | null): asserts node is ExpressionWrapper;

declare function assertFile(node: object | null | undefined, opts?: object | null): asserts node is File_2;

declare function assertFlow(node: object | null | undefined, opts?: object | null): asserts node is Flow;

declare function assertFlowBaseAnnotation(node: object | null | undefined, opts?: object | null): asserts node is FlowBaseAnnotation;

declare function assertFlowDeclaration(node: object | null | undefined, opts?: object | null): asserts node is FlowDeclaration;

declare function assertFlowPredicate(node: object | null | undefined, opts?: object | null): asserts node is FlowPredicate;

declare function assertFlowType(node: object | null | undefined, opts?: object | null): asserts node is FlowType;

declare function assertFor(node: object | null | undefined, opts?: object | null): asserts node is For;

declare function assertForInStatement(node: object | null | undefined, opts?: object | null): asserts node is ForInStatement;

declare function assertForOfStatement(node: object | null | undefined, opts?: object | null): asserts node is ForOfStatement;

declare function assertForStatement(node: object | null | undefined, opts?: object | null): asserts node is ForStatement;

declare function assertForXStatement(node: object | null | undefined, opts?: object | null): asserts node is ForXStatement;

declare function assertFunction(node: object | null | undefined, opts?: object | null): asserts node is Function_2;

declare function assertFunctionDeclaration(node: object | null | undefined, opts?: object | null): asserts node is FunctionDeclaration;

declare function assertFunctionExpression(node: object | null | undefined, opts?: object | null): asserts node is FunctionExpression;

declare function assertFunctionParent(node: object | null | undefined, opts?: object | null): asserts node is FunctionParent;

declare function assertFunctionTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is FunctionTypeAnnotation;

declare function assertFunctionTypeParam(node: object | null | undefined, opts?: object | null): asserts node is FunctionTypeParam;

declare function assertGenericTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is GenericTypeAnnotation;

declare function assertIdentifier(node: object | null | undefined, opts?: object | null): asserts node is Identifier;

declare function assertIfStatement(node: object | null | undefined, opts?: object | null): asserts node is IfStatement;

declare function assertImmutable(node: object | null | undefined, opts?: object | null): asserts node is Immutable;

declare function assertImport(node: object | null | undefined, opts?: object | null): asserts node is Import;

declare function assertImportAttribute(node: object | null | undefined, opts?: object | null): asserts node is ImportAttribute;

declare function assertImportDeclaration(node: object | null | undefined, opts?: object | null): asserts node is ImportDeclaration;

declare function assertImportDefaultSpecifier(node: object | null | undefined, opts?: object | null): asserts node is ImportDefaultSpecifier;

declare function assertImportExpression(node: object | null | undefined, opts?: object | null): asserts node is ImportExpression;

declare function assertImportNamespaceSpecifier(node: object | null | undefined, opts?: object | null): asserts node is ImportNamespaceSpecifier;

declare function assertImportOrExportDeclaration(node: object | null | undefined, opts?: object | null): asserts node is ImportOrExportDeclaration;

declare function assertImportSpecifier(node: object | null | undefined, opts?: object | null): asserts node is ImportSpecifier;

declare function assertIndexedAccessType(node: object | null | undefined, opts?: object | null): asserts node is IndexedAccessType;

declare function assertInferredPredicate(node: object | null | undefined, opts?: object | null): asserts node is InferredPredicate;

declare function assertInterfaceDeclaration(node: object | null | undefined, opts?: object | null): asserts node is InterfaceDeclaration;

declare function assertInterfaceExtends(node: object | null | undefined, opts?: object | null): asserts node is InterfaceExtends;

declare function assertInterfaceTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is InterfaceTypeAnnotation;

declare function assertInterpreterDirective(node: object | null | undefined, opts?: object | null): asserts node is InterpreterDirective;

declare function assertIntersectionTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is IntersectionTypeAnnotation;

declare function assertJSX(node: object | null | undefined, opts?: object | null): asserts node is JSX_2;

declare function assertJSXAttribute(node: object | null | undefined, opts?: object | null): asserts node is JSXAttribute;

declare function assertJSXClosingElement(node: object | null | undefined, opts?: object | null): asserts node is JSXClosingElement;

declare function assertJSXClosingFragment(node: object | null | undefined, opts?: object | null): asserts node is JSXClosingFragment;

declare function assertJSXElement(node: object | null | undefined, opts?: object | null): asserts node is JSXElement;

declare function assertJSXEmptyExpression(node: object | null | undefined, opts?: object | null): asserts node is JSXEmptyExpression;

declare function assertJSXExpressionContainer(node: object | null | undefined, opts?: object | null): asserts node is JSXExpressionContainer;

declare function assertJSXFragment(node: object | null | undefined, opts?: object | null): asserts node is JSXFragment;

declare function assertJSXIdentifier(node: object | null | undefined, opts?: object | null): asserts node is JSXIdentifier;

declare function assertJSXMemberExpression(node: object | null | undefined, opts?: object | null): asserts node is JSXMemberExpression;

declare function assertJSXNamespacedName(node: object | null | undefined, opts?: object | null): asserts node is JSXNamespacedName;

declare function assertJSXOpeningElement(node: object | null | undefined, opts?: object | null): asserts node is JSXOpeningElement;

declare function assertJSXOpeningFragment(node: object | null | undefined, opts?: object | null): asserts node is JSXOpeningFragment;

declare function assertJSXSpreadAttribute(node: object | null | undefined, opts?: object | null): asserts node is JSXSpreadAttribute;

declare function assertJSXSpreadChild(node: object | null | undefined, opts?: object | null): asserts node is JSXSpreadChild;

declare function assertJSXText(node: object | null | undefined, opts?: object | null): asserts node is JSXText;

declare function assertLabeledStatement(node: object | null | undefined, opts?: object | null): asserts node is LabeledStatement;

declare function assertLiteral(node: object | null | undefined, opts?: object | null): asserts node is Literal;

declare function assertLogicalExpression(node: object | null | undefined, opts?: object | null): asserts node is LogicalExpression;

declare function assertLoop(node: object | null | undefined, opts?: object | null): asserts node is Loop;

declare function assertLVal(node: object | null | undefined, opts?: object | null): asserts node is LVal;

declare function assertMemberExpression(node: object | null | undefined, opts?: object | null): asserts node is MemberExpression;

declare function assertMetaProperty(node: object | null | undefined, opts?: object | null): asserts node is MetaProperty;

declare function assertMethod(node: object | null | undefined, opts?: object | null): asserts node is Method;

declare function assertMiscellaneous(node: object | null | undefined, opts?: object | null): asserts node is Miscellaneous;

declare function assertMixedTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is MixedTypeAnnotation;

declare function assertModuleDeclaration(node: any, opts: any): void;

declare function assertModuleExpression(node: object | null | undefined, opts?: object | null): asserts node is ModuleExpression;

declare function assertModuleSpecifier(node: object | null | undefined, opts?: object | null): asserts node is ModuleSpecifier;

declare function assertNewExpression(node: object | null | undefined, opts?: object | null): asserts node is NewExpression;

declare function assertNode(node?: any): asserts node is Node_3;

declare function assertNoop(node: object | null | undefined, opts?: object | null): asserts node is Noop;

declare function assertNullableTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is NullableTypeAnnotation;

declare function assertNullLiteral(node: object | null | undefined, opts?: object | null): asserts node is NullLiteral;

declare function assertNullLiteralTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is NullLiteralTypeAnnotation;

declare function assertNumberLiteral(node: any, opts: any): void;

declare function assertNumberLiteralTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is NumberLiteralTypeAnnotation;

declare function assertNumberTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is NumberTypeAnnotation;

declare function assertNumericLiteral(node: object | null | undefined, opts?: object | null): asserts node is NumericLiteral;

declare function assertObjectExpression(node: object | null | undefined, opts?: object | null): asserts node is ObjectExpression;

declare function assertObjectMember(node: object | null | undefined, opts?: object | null): asserts node is ObjectMember;

declare function assertObjectMethod(node: object | null | undefined, opts?: object | null): asserts node is ObjectMethod;

declare function assertObjectPattern(node: object | null | undefined, opts?: object | null): asserts node is ObjectPattern;

declare function assertObjectProperty(node: object | null | undefined, opts?: object | null): asserts node is ObjectProperty;

declare function assertObjectTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is ObjectTypeAnnotation;

declare function assertObjectTypeCallProperty(node: object | null | undefined, opts?: object | null): asserts node is ObjectTypeCallProperty;

declare function assertObjectTypeIndexer(node: object | null | undefined, opts?: object | null): asserts node is ObjectTypeIndexer;

declare function assertObjectTypeInternalSlot(node: object | null | undefined, opts?: object | null): asserts node is ObjectTypeInternalSlot;

declare function assertObjectTypeProperty(node: object | null | undefined, opts?: object | null): asserts node is ObjectTypeProperty;

declare function assertObjectTypeSpreadProperty(node: object | null | undefined, opts?: object | null): asserts node is ObjectTypeSpreadProperty;

declare function assertOpaqueType(node: object | null | undefined, opts?: object | null): asserts node is OpaqueType;

declare function assertOptionalCallExpression(node: object | null | undefined, opts?: object | null): asserts node is OptionalCallExpression;

declare function assertOptionalIndexedAccessType(node: object | null | undefined, opts?: object | null): asserts node is OptionalIndexedAccessType;

declare function assertOptionalMemberExpression(node: object | null | undefined, opts?: object | null): asserts node is OptionalMemberExpression;

declare function assertParenthesizedExpression(node: object | null | undefined, opts?: object | null): asserts node is ParenthesizedExpression;

declare function assertPattern(node: object | null | undefined, opts?: object | null): asserts node is Pattern;

declare function assertPatternLike(node: object | null | undefined, opts?: object | null): asserts node is PatternLike;

declare function assertPipelineBareFunction(node: object | null | undefined, opts?: object | null): asserts node is PipelineBareFunction;

declare function assertPipelinePrimaryTopicReference(node: object | null | undefined, opts?: object | null): asserts node is PipelinePrimaryTopicReference;

declare function assertPipelineTopicExpression(node: object | null | undefined, opts?: object | null): asserts node is PipelineTopicExpression;

declare function assertPlaceholder(node: object | null | undefined, opts?: object | null): asserts node is Placeholder;

declare function assertPrivate(node: object | null | undefined, opts?: object | null): asserts node is Private;

declare function assertPrivateName(node: object | null | undefined, opts?: object | null): asserts node is PrivateName;

declare function assertProgram(node: object | null | undefined, opts?: object | null): asserts node is Program;

declare function assertProperty(node: object | null | undefined, opts?: object | null): asserts node is Property;

declare function assertPureish(node: object | null | undefined, opts?: object | null): asserts node is Pureish;

declare function assertQualifiedTypeIdentifier(node: object | null | undefined, opts?: object | null): asserts node is QualifiedTypeIdentifier;

declare function assertRecordExpression(node: object | null | undefined, opts?: object | null): asserts node is RecordExpression;

declare function assertRegexLiteral(node: any, opts: any): void;

declare function assertRegExpLiteral(node: object | null | undefined, opts?: object | null): asserts node is RegExpLiteral;

declare function assertRestElement(node: object | null | undefined, opts?: object | null): asserts node is RestElement;

declare function assertRestProperty(node: any, opts: any): void;

declare function assertReturnStatement(node: object | null | undefined, opts?: object | null): asserts node is ReturnStatement;

declare function assertScopable(node: object | null | undefined, opts?: object | null): asserts node is Scopable;

declare function assertSequenceExpression(node: object | null | undefined, opts?: object | null): asserts node is SequenceExpression;

declare function assertSpreadElement(node: object | null | undefined, opts?: object | null): asserts node is SpreadElement;

declare function assertSpreadProperty(node: any, opts: any): void;

declare function assertStandardized(node: object | null | undefined, opts?: object | null): asserts node is Standardized;

declare function assertStatement(node: object | null | undefined, opts?: object | null): asserts node is Statement;

declare function assertStaticBlock(node: object | null | undefined, opts?: object | null): asserts node is StaticBlock;

declare function assertStringLiteral(node: object | null | undefined, opts?: object | null): asserts node is StringLiteral;

declare function assertStringLiteralTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is StringLiteralTypeAnnotation;

declare function assertStringTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is StringTypeAnnotation;

declare function assertSuper(node: object | null | undefined, opts?: object | null): asserts node is Super;

declare function assertSwitchCase(node: object | null | undefined, opts?: object | null): asserts node is SwitchCase;

declare function assertSwitchStatement(node: object | null | undefined, opts?: object | null): asserts node is SwitchStatement;

declare function assertSymbolTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is SymbolTypeAnnotation;

declare function assertTaggedTemplateExpression(node: object | null | undefined, opts?: object | null): asserts node is TaggedTemplateExpression;

declare function assertTemplateElement(node: object | null | undefined, opts?: object | null): asserts node is TemplateElement;

declare function assertTemplateLiteral(node: object | null | undefined, opts?: object | null): asserts node is TemplateLiteral;

declare function assertTerminatorless(node: object | null | undefined, opts?: object | null): asserts node is Terminatorless;

declare function assertThisExpression(node: object | null | undefined, opts?: object | null): asserts node is ThisExpression;

declare function assertThisTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is ThisTypeAnnotation;

declare function assertThrowStatement(node: object | null | undefined, opts?: object | null): asserts node is ThrowStatement;

declare function assertTopicReference(node: object | null | undefined, opts?: object | null): asserts node is TopicReference;

declare function assertTryStatement(node: object | null | undefined, opts?: object | null): asserts node is TryStatement;

declare function assertTSAnyKeyword(node: object | null | undefined, opts?: object | null): asserts node is TSAnyKeyword;

declare function assertTSArrayType(node: object | null | undefined, opts?: object | null): asserts node is TSArrayType;

declare function assertTSAsExpression(node: object | null | undefined, opts?: object | null): asserts node is TSAsExpression;

declare function assertTSBaseType(node: object | null | undefined, opts?: object | null): asserts node is TSBaseType;

declare function assertTSBigIntKeyword(node: object | null | undefined, opts?: object | null): asserts node is TSBigIntKeyword;

declare function assertTSBooleanKeyword(node: object | null | undefined, opts?: object | null): asserts node is TSBooleanKeyword;

declare function assertTSCallSignatureDeclaration(node: object | null | undefined, opts?: object | null): asserts node is TSCallSignatureDeclaration;

declare function assertTSConditionalType(node: object | null | undefined, opts?: object | null): asserts node is TSConditionalType;

declare function assertTSConstructorType(node: object | null | undefined, opts?: object | null): asserts node is TSConstructorType;

declare function assertTSConstructSignatureDeclaration(node: object | null | undefined, opts?: object | null): asserts node is TSConstructSignatureDeclaration;

declare function assertTSDeclareFunction(node: object | null | undefined, opts?: object | null): asserts node is TSDeclareFunction;

declare function assertTSDeclareMethod(node: object | null | undefined, opts?: object | null): asserts node is TSDeclareMethod;

declare function assertTSEntityName(node: object | null | undefined, opts?: object | null): asserts node is TSEntityName;

declare function assertTSEnumDeclaration(node: object | null | undefined, opts?: object | null): asserts node is TSEnumDeclaration;

declare function assertTSEnumMember(node: object | null | undefined, opts?: object | null): asserts node is TSEnumMember;

declare function assertTSExportAssignment(node: object | null | undefined, opts?: object | null): asserts node is TSExportAssignment;

declare function assertTSExpressionWithTypeArguments(node: object | null | undefined, opts?: object | null): asserts node is TSExpressionWithTypeArguments;

declare function assertTSExternalModuleReference(node: object | null | undefined, opts?: object | null): asserts node is TSExternalModuleReference;

declare function assertTSFunctionType(node: object | null | undefined, opts?: object | null): asserts node is TSFunctionType;

declare function assertTSImportEqualsDeclaration(node: object | null | undefined, opts?: object | null): asserts node is TSImportEqualsDeclaration;

declare function assertTSImportType(node: object | null | undefined, opts?: object | null): asserts node is TSImportType;

declare function assertTSIndexedAccessType(node: object | null | undefined, opts?: object | null): asserts node is TSIndexedAccessType;

declare function assertTSIndexSignature(node: object | null | undefined, opts?: object | null): asserts node is TSIndexSignature;

declare function assertTSInferType(node: object | null | undefined, opts?: object | null): asserts node is TSInferType;

declare function assertTSInstantiationExpression(node: object | null | undefined, opts?: object | null): asserts node is TSInstantiationExpression;

declare function assertTSInterfaceBody(node: object | null | undefined, opts?: object | null): asserts node is TSInterfaceBody;

declare function assertTSInterfaceDeclaration(node: object | null | undefined, opts?: object | null): asserts node is TSInterfaceDeclaration;

declare function assertTSIntersectionType(node: object | null | undefined, opts?: object | null): asserts node is TSIntersectionType;

declare function assertTSIntrinsicKeyword(node: object | null | undefined, opts?: object | null): asserts node is TSIntrinsicKeyword;

declare function assertTSLiteralType(node: object | null | undefined, opts?: object | null): asserts node is TSLiteralType;

declare function assertTSMappedType(node: object | null | undefined, opts?: object | null): asserts node is TSMappedType;

declare function assertTSMethodSignature(node: object | null | undefined, opts?: object | null): asserts node is TSMethodSignature;

declare function assertTSModuleBlock(node: object | null | undefined, opts?: object | null): asserts node is TSModuleBlock;

declare function assertTSModuleDeclaration(node: object | null | undefined, opts?: object | null): asserts node is TSModuleDeclaration;

declare function assertTSNamedTupleMember(node: object | null | undefined, opts?: object | null): asserts node is TSNamedTupleMember;

declare function assertTSNamespaceExportDeclaration(node: object | null | undefined, opts?: object | null): asserts node is TSNamespaceExportDeclaration;

declare function assertTSNeverKeyword(node: object | null | undefined, opts?: object | null): asserts node is TSNeverKeyword;

declare function assertTSNonNullExpression(node: object | null | undefined, opts?: object | null): asserts node is TSNonNullExpression;

declare function assertTSNullKeyword(node: object | null | undefined, opts?: object | null): asserts node is TSNullKeyword;

declare function assertTSNumberKeyword(node: object | null | undefined, opts?: object | null): asserts node is TSNumberKeyword;

declare function assertTSObjectKeyword(node: object | null | undefined, opts?: object | null): asserts node is TSObjectKeyword;

declare function assertTSOptionalType(node: object | null | undefined, opts?: object | null): asserts node is TSOptionalType;

declare function assertTSParameterProperty(node: object | null | undefined, opts?: object | null): asserts node is TSParameterProperty;

declare function assertTSParenthesizedType(node: object | null | undefined, opts?: object | null): asserts node is TSParenthesizedType;

declare function assertTSPropertySignature(node: object | null | undefined, opts?: object | null): asserts node is TSPropertySignature;

declare function assertTSQualifiedName(node: object | null | undefined, opts?: object | null): asserts node is TSQualifiedName;

declare function assertTSRestType(node: object | null | undefined, opts?: object | null): asserts node is TSRestType;

declare function assertTSSatisfiesExpression(node: object | null | undefined, opts?: object | null): asserts node is TSSatisfiesExpression;

declare function assertTSStringKeyword(node: object | null | undefined, opts?: object | null): asserts node is TSStringKeyword;

declare function assertTSSymbolKeyword(node: object | null | undefined, opts?: object | null): asserts node is TSSymbolKeyword;

declare function assertTSThisType(node: object | null | undefined, opts?: object | null): asserts node is TSThisType;

declare function assertTSTupleType(node: object | null | undefined, opts?: object | null): asserts node is TSTupleType;

declare function assertTSType(node: object | null | undefined, opts?: object | null): asserts node is TSType;

declare function assertTSTypeAliasDeclaration(node: object | null | undefined, opts?: object | null): asserts node is TSTypeAliasDeclaration;

declare function assertTSTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is TSTypeAnnotation;

declare function assertTSTypeAssertion(node: object | null | undefined, opts?: object | null): asserts node is TSTypeAssertion;

declare function assertTSTypeElement(node: object | null | undefined, opts?: object | null): asserts node is TSTypeElement;

declare function assertTSTypeLiteral(node: object | null | undefined, opts?: object | null): asserts node is TSTypeLiteral;

declare function assertTSTypeOperator(node: object | null | undefined, opts?: object | null): asserts node is TSTypeOperator;

declare function assertTSTypeParameter(node: object | null | undefined, opts?: object | null): asserts node is TSTypeParameter;

declare function assertTSTypeParameterDeclaration(node: object | null | undefined, opts?: object | null): asserts node is TSTypeParameterDeclaration;

declare function assertTSTypeParameterInstantiation(node: object | null | undefined, opts?: object | null): asserts node is TSTypeParameterInstantiation;

declare function assertTSTypePredicate(node: object | null | undefined, opts?: object | null): asserts node is TSTypePredicate;

declare function assertTSTypeQuery(node: object | null | undefined, opts?: object | null): asserts node is TSTypeQuery;

declare function assertTSTypeReference(node: object | null | undefined, opts?: object | null): asserts node is TSTypeReference;

declare function assertTSUndefinedKeyword(node: object | null | undefined, opts?: object | null): asserts node is TSUndefinedKeyword;

declare function assertTSUnionType(node: object | null | undefined, opts?: object | null): asserts node is TSUnionType;

declare function assertTSUnknownKeyword(node: object | null | undefined, opts?: object | null): asserts node is TSUnknownKeyword;

declare function assertTSVoidKeyword(node: object | null | undefined, opts?: object | null): asserts node is TSVoidKeyword;

declare function assertTupleExpression(node: object | null | undefined, opts?: object | null): asserts node is TupleExpression;

declare function assertTupleTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is TupleTypeAnnotation;

declare function assertTypeAlias(node: object | null | undefined, opts?: object | null): asserts node is TypeAlias;

declare function assertTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is TypeAnnotation;

declare function assertTypeCastExpression(node: object | null | undefined, opts?: object | null): asserts node is TypeCastExpression;

declare function assertTypeofTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is TypeofTypeAnnotation;

declare function assertTypeParameter(node: object | null | undefined, opts?: object | null): asserts node is TypeParameter;

declare function assertTypeParameterDeclaration(node: object | null | undefined, opts?: object | null): asserts node is TypeParameterDeclaration;

declare function assertTypeParameterInstantiation(node: object | null | undefined, opts?: object | null): asserts node is TypeParameterInstantiation;

declare function assertTypeScript(node: object | null | undefined, opts?: object | null): asserts node is TypeScript;

declare function assertUnaryExpression(node: object | null | undefined, opts?: object | null): asserts node is UnaryExpression;

declare function assertUnaryLike(node: object | null | undefined, opts?: object | null): asserts node is UnaryLike;

declare function assertUnionTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is UnionTypeAnnotation;

declare function assertUpdateExpression(node: object | null | undefined, opts?: object | null): asserts node is UpdateExpression;

declare function assertUserWhitespacable(node: object | null | undefined, opts?: object | null): asserts node is UserWhitespacable;

declare function assertV8IntrinsicIdentifier(node: object | null | undefined, opts?: object | null): asserts node is V8IntrinsicIdentifier;

declare function assertVariableDeclaration(node: object | null | undefined, opts?: object | null): asserts node is VariableDeclaration;

declare function assertVariableDeclarator(node: object | null | undefined, opts?: object | null): asserts node is VariableDeclarator;

declare function assertVariance(node: object | null | undefined, opts?: object | null): asserts node is Variance;

declare function assertVoidTypeAnnotation(node: object | null | undefined, opts?: object | null): asserts node is VoidTypeAnnotation;

declare function assertWhile(node: object | null | undefined, opts?: object | null): asserts node is While;

declare function assertWhileStatement(node: object | null | undefined, opts?: object | null): asserts node is WhileStatement;

declare function assertWithStatement(node: object | null | undefined, opts?: object | null): asserts node is WithStatement;

declare function assertYieldExpression(node: object | null | undefined, opts?: object | null): asserts node is YieldExpression;

declare const ASSIGNMENT_OPERATORS: string[];

declare interface AssignmentExpression extends BaseNode {
    type: "AssignmentExpression";
    operator: string;
    left: LVal | OptionalMemberExpression;
    right: Expression;
}

declare function assignmentExpression(operator: string, left: LVal | OptionalMemberExpression, right: Expression): AssignmentExpression;

declare interface AssignmentPattern extends BaseNode {
    type: "AssignmentPattern";
    left: Identifier | ObjectPattern | ArrayPattern | MemberExpression | TSAsExpression | TSSatisfiesExpression | TSTypeAssertion | TSNonNullExpression;
    right: Expression;
    decorators?: Array<Decorator> | null;
    optional?: boolean | null;
    typeAnnotation?: TypeAnnotation | TSTypeAnnotation | Noop | null;
}

declare function assignmentPattern(left: Identifier | ObjectPattern | ArrayPattern | MemberExpression | TSAsExpression | TSSatisfiesExpression | TSTypeAssertion | TSNonNullExpression, right: Expression): AssignmentPattern;

declare interface AwaitExpression extends BaseNode {
    type: "AwaitExpression";
    argument: Expression;
}

declare function awaitExpression(argument: Expression): AwaitExpression;

export declare interface BabelFile {
    ast: types.File;
    opts: TransformOptions;
    hub: Hub;
    metadata: object;
    path: NodePath<types.Program>;
    scope: Scope;
    inputMap: object | null;
    code: string;
}

export declare interface BabelFileMetadata {
    usedHelpers: string[];
    marked: Array<{
        type: string;
        message: string;
        loc: object;
    }>;
    modules: BabelFileModulesMetadata;
}

export declare interface BabelFileModulesMetadata {
    imports: object[];
    exports: {
        exported: object[];
        specifiers: object[];
    };
}

export declare interface BabelFileResult {
    ast?: types.File | null | undefined;
    code?: string | null | undefined;
    ignored?: boolean | undefined;
    map?:
    | {
        version: number;
        sources: string[];
        names: string[];
        sourceRoot?: string | undefined;
        sourcesContent?: string[] | undefined;
        mappings: string;
        file: string;
    }
    | null
    | undefined;
    metadata?: BabelFileMetadata | undefined;
}

declare interface BaseComment {
    value: string;
    start?: number;
    end?: number;
    loc?: SourceLocation;
    ignore?: boolean;
    type: "CommentBlock" | "CommentLine";
}

declare interface BaseNode {
    type: Node_3["type"];
    leadingComments?: Comment_2[] | null;
    innerComments?: Comment_2[] | null;
    trailingComments?: Comment_2[] | null;
    start?: number | null;
    end?: number | null;
    loc?: SourceLocation | null;
    range?: [number, number];
    extra?: Record<string, unknown>;
}

declare interface BigIntLiteral extends BaseNode {
    type: "BigIntLiteral";
    value: string;
}

declare function bigIntLiteral(value: string): BigIntLiteral;

declare type Binary = BinaryExpression | LogicalExpression;

declare const BINARY_OPERATORS: string[];

declare const BINARY_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface BinaryExpression extends BaseNode {
    type: "BinaryExpression";
    operator: "+" | "-" | "/" | "%" | "*" | "**" | "&" | "|" | ">>" | ">>>" | "<<" | "^" | "==" | "===" | "!=" | "!==" | "in" | "instanceof" | ">" | "<" | ">=" | "<=" | "|>";
    left: Expression | PrivateName;
    right: Expression;
}

declare function binaryExpression(operator: "+" | "-" | "/" | "%" | "*" | "**" | "&" | "|" | ">>" | ">>>" | "<<" | "^" | "==" | "===" | "!=" | "!==" | "in" | "instanceof" | ">" | "<" | ">=" | "<=" | "|>", left: Expression | PrivateName, right: Expression): BinaryExpression;

declare interface BindExpression extends BaseNode {
    type: "BindExpression";
    object: Expression;
    callee: Expression;
}

declare function bindExpression(object: Expression, callee: Expression): BindExpression;

/**
 * This class is responsible for a binding inside of a scope.
 *
 * It tracks the following:
 *
 *  * Node path.
 *  * Amount of times referenced by other nodes.
 *  * Paths to nodes that reassign or modify this binding.
 *  * The kind of binding. (Is it a parameter, declaration etc)
 */
declare class Binding {
    constructor(opts: { identifier: types.Identifier; scope: Scope; path: NodePath; kind: BindingKind });
    identifier: types.Identifier;
    scope: Scope;
    path: NodePath;
    kind: BindingKind;
    referenced: boolean;
    references: number;
    referencePaths: NodePath[];
    constant: boolean;
    constantViolations: NodePath[];
    hasDeoptedValue: boolean;
    hasValue: boolean;
    value: any;

    deopValue(): void;
    setValue(value: any): void;
    clearValue(): void;

    /** Register a constant violation with the provided `path`. */
    reassign(path: NodePath): void;
    /** Increment the amount of references to this binding. */
    reference(path: NodePath): void;
    /** Decrement the amount of references to this binding. */
    dereference(): void;
}

declare type BindingKind = "var" | "let" | "const" | "module" | "hoisted" | "param" | "local" | "unknown";

declare type Block = BlockStatement | Program | TSModuleBlock;

declare const BLOCK_SCOPED_SYMBOL: unique symbol;

declare const BLOCK_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare type BlockParent = BlockStatement | CatchClause | DoWhileStatement | ForInStatement | ForStatement | FunctionDeclaration | FunctionExpression | Program | ObjectMethod | SwitchStatement | WhileStatement | ArrowFunctionExpression | ForOfStatement | ClassMethod | ClassPrivateMethod | StaticBlock | TSModuleBlock;

declare const BLOCKPARENT_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface BlockStatement extends BaseNode {
    type: "BlockStatement";
    body: Array<Statement>;
    directives: Array<Directive>;
}

declare function blockStatement(body: Array<Statement>, directives?: Array<Directive>): BlockStatement;

declare const BOOLEAN_BINARY_OPERATORS: string[];

declare const BOOLEAN_NUMBER_BINARY_OPERATORS: string[];

declare const BOOLEAN_UNARY_OPERATORS: string[];

declare interface BooleanLiteral extends BaseNode {
    type: "BooleanLiteral";
    value: boolean;
}

declare function booleanLiteral(value: boolean): BooleanLiteral;

declare interface BooleanLiteralTypeAnnotation extends BaseNode {
    type: "BooleanLiteralTypeAnnotation";
    value: boolean;
}

declare function booleanLiteralTypeAnnotation(value: boolean): BooleanLiteralTypeAnnotation;

declare interface BooleanTypeAnnotation extends BaseNode {
    type: "BooleanTypeAnnotation";
}

declare function booleanTypeAnnotation(): BooleanTypeAnnotation;

declare interface BreakStatement extends BaseNode {
    type: "BreakStatement";
    label?: Identifier | null;
}

declare function breakStatement(label?: Identifier | null): BreakStatement;

declare function buildChildren(node: JSXElement | JSXFragment): ReturnedChild[];

declare const BUILDER_KEYS: Record<string, string[]>;

/**
 * Build a function that when called will return whether or not the
 * input `node` `MemberExpression` matches the input `match`.
 *
 * For example, given the match `React.createClass` it would match the
 * parsed nodes of `React.createClass` and `React["createClass"]`.
 */
declare function buildMatchMemberExpression(match: string, allowPartial?: boolean): (member: Node_3) => boolean;

declare function buildUndefinedNode(): UnaryExpression;

declare namespace cache {
    let path: WeakMap<types.Node, Map<types.Node, NodePath>>;
    let scope: WeakMap<types.Node, Scope>;
    function clear(): void;
    function clearPath(): void;
    function clearScope(): void;
}

declare interface CallExpression extends BaseNode {
    type: "CallExpression";
    callee: Expression | Super | V8IntrinsicIdentifier;
    arguments: Array<Expression | SpreadElement | JSXNamespacedName | ArgumentPlaceholder>;
    optional?: true | false | null;
    typeArguments?: TypeParameterInstantiation | null;
    typeParameters?: TSTypeParameterInstantiation | null;
}

declare function callExpression(callee: Expression | Super | V8IntrinsicIdentifier, _arguments: Array<Expression | SpreadElement | JSXNamespacedName | ArgumentPlaceholder>): CallExpression;

declare interface CatchClause extends BaseNode {
    type: "CatchClause";
    param?: Identifier | ArrayPattern | ObjectPattern | null;
    body: BlockStatement;
}

declare function catchClause(param: Identifier | ArrayPattern | ObjectPattern | null | undefined, body: BlockStatement): CatchClause;

declare type Class = ClassExpression | ClassDeclaration;

declare const CLASS_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface ClassAccessorProperty extends BaseNode {
    type: "ClassAccessorProperty";
    key: Identifier | StringLiteral | NumericLiteral | BigIntLiteral | Expression | PrivateName;
    value?: Expression | null;
    typeAnnotation?: TypeAnnotation | TSTypeAnnotation | Noop | null;
    decorators?: Array<Decorator> | null;
    computed: boolean;
    static: boolean;
    abstract?: boolean | null;
    accessibility?: "public" | "private" | "protected" | null;
    declare?: boolean | null;
    definite?: boolean | null;
    optional?: boolean | null;
    override?: boolean;
    readonly?: boolean | null;
    variance?: Variance | null;
}

declare function classAccessorProperty(key: Identifier | StringLiteral | NumericLiteral | BigIntLiteral | Expression | PrivateName, value?: Expression | null, typeAnnotation?: TypeAnnotation | TSTypeAnnotation | Noop | null, decorators?: Array<Decorator> | null, computed?: boolean, _static?: boolean): ClassAccessorProperty;

declare interface ClassBody extends BaseNode {
    type: "ClassBody";
    body: Array<ClassMethod | ClassPrivateMethod | ClassProperty | ClassPrivateProperty | ClassAccessorProperty | TSDeclareMethod | TSIndexSignature | StaticBlock>;
}

declare function classBody(body: Array<ClassMethod | ClassPrivateMethod | ClassProperty | ClassPrivateProperty | ClassAccessorProperty | TSDeclareMethod | TSIndexSignature | StaticBlock>): ClassBody;

declare interface ClassDeclaration extends BaseNode {
    type: "ClassDeclaration";
    id?: Identifier | null;
    superClass?: Expression | null;
    body: ClassBody;
    decorators?: Array<Decorator> | null;
    abstract?: boolean | null;
    declare?: boolean | null;
    implements?: Array<TSExpressionWithTypeArguments | ClassImplements> | null;
    mixins?: InterfaceExtends | null;
    superTypeParameters?: TypeParameterInstantiation | TSTypeParameterInstantiation | null;
    typeParameters?: TypeParameterDeclaration | TSTypeParameterDeclaration | Noop | null;
}

declare function classDeclaration(id: Identifier | null | undefined, superClass: Expression | null | undefined, body: ClassBody, decorators?: Array<Decorator> | null): ClassDeclaration;

declare interface ClassExpression extends BaseNode {
    type: "ClassExpression";
    id?: Identifier | null;
    superClass?: Expression | null;
    body: ClassBody;
    decorators?: Array<Decorator> | null;
    implements?: Array<TSExpressionWithTypeArguments | ClassImplements> | null;
    mixins?: InterfaceExtends | null;
    superTypeParameters?: TypeParameterInstantiation | TSTypeParameterInstantiation | null;
    typeParameters?: TypeParameterDeclaration | TSTypeParameterDeclaration | Noop | null;
}

declare function classExpression(id: Identifier | null | undefined, superClass: Expression | null | undefined, body: ClassBody, decorators?: Array<Decorator> | null): ClassExpression;

declare interface ClassImplements extends BaseNode {
    type: "ClassImplements";
    id: Identifier;
    typeParameters?: TypeParameterInstantiation | null;
}

declare function classImplements(id: Identifier, typeParameters?: TypeParameterInstantiation | null): ClassImplements;

declare interface ClassMethod extends BaseNode {
    type: "ClassMethod";
    kind: "get" | "set" | "method" | "constructor";
    key: Identifier | StringLiteral | NumericLiteral | BigIntLiteral | Expression;
    params: Array<Identifier | Pattern | RestElement | TSParameterProperty>;
    body: BlockStatement;
    computed: boolean;
    static: boolean;
    generator: boolean;
    async: boolean;
    abstract?: boolean | null;
    access?: "public" | "private" | "protected" | null;
    accessibility?: "public" | "private" | "protected" | null;
    decorators?: Array<Decorator> | null;
    optional?: boolean | null;
    override?: boolean;
    returnType?: TypeAnnotation | TSTypeAnnotation | Noop | null;
    typeParameters?: TypeParameterDeclaration | TSTypeParameterDeclaration | Noop | null;
}

declare function classMethod(kind: "get" | "set" | "method" | "constructor" | undefined, key: Identifier | StringLiteral | NumericLiteral | BigIntLiteral | Expression, params: Array<Identifier | Pattern | RestElement | TSParameterProperty>, body: BlockStatement, computed?: boolean, _static?: boolean, generator?: boolean, async?: boolean): ClassMethod;

declare interface ClassPrivateMethod extends BaseNode {
    type: "ClassPrivateMethod";
    kind: "get" | "set" | "method";
    key: PrivateName;
    params: Array<Identifier | Pattern | RestElement | TSParameterProperty>;
    body: BlockStatement;
    static: boolean;
    abstract?: boolean | null;
    access?: "public" | "private" | "protected" | null;
    accessibility?: "public" | "private" | "protected" | null;
    async?: boolean;
    computed?: boolean;
    decorators?: Array<Decorator> | null;
    generator?: boolean;
    optional?: boolean | null;
    override?: boolean;
    returnType?: TypeAnnotation | TSTypeAnnotation | Noop | null;
    typeParameters?: TypeParameterDeclaration | TSTypeParameterDeclaration | Noop | null;
}

declare function classPrivateMethod(kind: "get" | "set" | "method" | undefined, key: PrivateName, params: Array<Identifier | Pattern | RestElement | TSParameterProperty>, body: BlockStatement, _static?: boolean): ClassPrivateMethod;

declare interface ClassPrivateProperty extends BaseNode {
    type: "ClassPrivateProperty";
    key: PrivateName;
    value?: Expression | null;
    decorators?: Array<Decorator> | null;
    static: boolean;
    definite?: boolean | null;
    readonly?: boolean | null;
    typeAnnotation?: TypeAnnotation | TSTypeAnnotation | Noop | null;
    variance?: Variance | null;
}

declare function classPrivateProperty(key: PrivateName, value?: Expression | null, decorators?: Array<Decorator> | null, _static?: boolean): ClassPrivateProperty;

declare interface ClassProperty extends BaseNode {
    type: "ClassProperty";
    key: Identifier | StringLiteral | NumericLiteral | BigIntLiteral | Expression;
    value?: Expression | null;
    typeAnnotation?: TypeAnnotation | TSTypeAnnotation | Noop | null;
    decorators?: Array<Decorator> | null;
    computed: boolean;
    static: boolean;
    abstract?: boolean | null;
    accessibility?: "public" | "private" | "protected" | null;
    declare?: boolean | null;
    definite?: boolean | null;
    optional?: boolean | null;
    override?: boolean;
    readonly?: boolean | null;
    variance?: Variance | null;
}

declare function classProperty(key: Identifier | StringLiteral | NumericLiteral | BigIntLiteral | Expression, value?: Expression | null, typeAnnotation?: TypeAnnotation | TSTypeAnnotation | Noop | null, decorators?: Array<Decorator> | null, computed?: boolean, _static?: boolean): ClassProperty;

/**
 * Create a shallow clone of a `node`, including only
 * properties belonging to the node.
 * @deprecated Use t.cloneNode instead.
 */
declare function clone<T extends Node_3>(node: T): T;

/**
 * Create a deep clone of a `node` and all of it's child nodes
 * including only properties belonging to the node.
 * @deprecated Use t.cloneNode instead.
 */
declare function cloneDeep<T extends Node_3>(node: T): T;

/**
 * Create a deep clone of a `node` and all of it's child nodes
 * including only properties belonging to the node.
 * excluding `_private` and location properties.
 */
declare function cloneDeepWithoutLoc<T extends Node_3>(node: T): T;

/**
 * Create a clone of a `node` including only properties belonging to the node.
 * If the second parameter is `false`, cloneNode performs a shallow clone.
 * If the third parameter is true, the cloned nodes exclude location properties.
 */
declare function cloneNode<T extends Node_3>(node: T, deep?: boolean, withoutLoc?: boolean): T;

/**
 * Create a shallow clone of a `node` excluding `_private` and location properties.
 */
declare function cloneWithoutLoc<T extends Node_3>(node: T): T;

declare type Comment_2 = CommentBlock | CommentLine;

declare const COMMENT_KEYS: readonly ["leadingComments", "trailingComments", "innerComments"];

declare interface CommentBlock extends BaseComment {
    type: "CommentBlock";
}

declare interface CommentLine extends BaseComment {
    type: "CommentLine";
}

declare type CommentTypeShorthand = "leading" | "inner" | "trailing";

declare const COMPARISON_BINARY_OPERATORS: string[];

declare type CompletionStatement = BreakStatement | ContinueStatement | ReturnStatement | ThrowStatement;

declare const COMPLETIONSTATEMENT_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare type Conditional = ConditionalExpression | IfStatement;

declare const CONDITIONAL_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface ConditionalExpression extends BaseNode {
    type: "ConditionalExpression";
    test: Expression;
    consequent: Expression;
    alternate: Expression;
}

declare function conditionalExpression(test: Expression, consequent: Expression, alternate: Expression): ConditionalExpression;

/**
 * @see https://babeljs.io/docs/en/next/config-files#config-function-api
 */
export declare interface ConfigAPI {
    /**
     * The version string for the Babel version that is loading the config file.
     *
     * @see https://babeljs.io/docs/en/next/config-files#apiversion
     */
    version: string;
    /**
     * @see https://babeljs.io/docs/en/next/config-files#apicache
     */
    cache: SimpleCacheConfigurator;
    /**
     * @see https://babeljs.io/docs/en/next/config-files#apienv
     */
    env: EnvFunction;
    // undocumented; currently hardcoded to return 'false'
    // async(): boolean
    /**
     * This API is used as a way to access the `caller` data that has been passed to Babel.
     * Since many instances of Babel may be running in the same process with different `caller` values,
     * this API is designed to automatically configure `api.cache`, the same way `api.env()` does.
     *
     * The `caller` value is available as the first parameter of the callback function.
     * It is best used with something like this to toggle configuration behavior
     * based on a specific environment:
     *
     * @example
     * function isBabelRegister(caller?: { name: string }) {
     *   return !!(caller && caller.name === "@babel/register")
     * }
     * api.caller(isBabelRegister)
     *
     * @see https://babeljs.io/docs/en/next/config-files#apicallercb
     */
    caller<T extends SimpleCacheKey>(callerCallback: (caller: TransformOptions["caller"]) => T): T;
    /**
     * While `api.version` can be useful in general, it's sometimes nice to just declare your version.
     * This API exposes a simple way to do that with:
     *
     * @example
     * api.assertVersion(7) // major version only
     * api.assertVersion("^7.2")
     *
     * @see https://babeljs.io/docs/en/next/config-files#apiassertversionrange
     */
    assertVersion(versionRange: number | string): boolean;
    // NOTE: this is an undocumented reexport from "@babel/parser" but it's missing from its types
    // tokTypes: typeof tokTypes
}

export declare type ConfigFunction = (api: ConfigAPI) => TransformOptions;

export declare interface ConfigItem {
    /**
     * The name that the user gave the plugin instance, e.g. `plugins: [ ['env', {}, 'my-env'] ]`
     */
    name?: string | undefined;

    /**
     * The resolved value of the plugin.
     */
    value: object | ((...args: any[]) => any);

    /**
     * The options object passed to the plugin.
     */
    options?: object | false | undefined;

    /**
     * The path that the options are relative to.
     */
    dirname: string;

    /**
     * Information about the plugin's file, if Babel knows it.
     *  *
     */
    file?:
    | {
        /**
         * The file that the user requested, e.g. `"@babel/env"`
         */
        request: string;

        /**
         * The full path of the resolved file, e.g. `"/tmp/node_modules/@babel/preset-env/lib/index.js"`
         */
        resolved: string;
    }
    | null
    | undefined;
}

declare interface ContinueStatement extends BaseNode {
    type: "ContinueStatement";
    label?: Identifier | null;
}

declare function continueStatement(label?: Identifier | null): ContinueStatement;

/**
 * Allows build tooling to create and cache config items up front. If this function is called multiple times for a
 * given plugin, Babel will call the plugin's function itself multiple times. If you have a clear set of expected
 * plugins and presets to inject, pre-constructing the config items would be recommended.
 */
export declare function createConfigItem(
value: PluginTarget | [PluginTarget, PluginOptions] | [PluginTarget, PluginOptions, string | undefined],
options?: CreateConfigItemOptions,
): ConfigItem;

export declare interface CreateConfigItemOptions {
    dirname?: string | undefined;
    type?: "preset" | "plugin" | undefined;
}

/**
 * Takes an array of `types` and flattens them, removing duplicates and
 * returns a `UnionTypeAnnotation` node containing them.
 */
declare function createFlowUnionType<T extends FlowType>(types: [T] | Array<T>): T | UnionTypeAnnotation;

/**
 * Takes an array of `types` and flattens them, removing duplicates and
 * returns a `UnionTypeAnnotation` node containing them.
 */
declare function createTSUnionType(typeAnnotations: Array<TSTypeAnnotation | TSType>): TSType;

declare interface DebuggerStatement extends BaseNode {
    type: "DebuggerStatement";
}

declare function debuggerStatement(): DebuggerStatement;

declare interface DecimalLiteral extends BaseNode {
    type: "DecimalLiteral";
    value: string;
}

declare function decimalLiteral(value: string): DecimalLiteral;

declare type Declaration = FunctionDeclaration | VariableDeclaration | ClassDeclaration | ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ImportDeclaration | DeclareClass | DeclareFunction | DeclareInterface | DeclareModule | DeclareModuleExports | DeclareTypeAlias | DeclareOpaqueType | DeclareVariable | DeclareExportDeclaration | DeclareExportAllDeclaration | InterfaceDeclaration | OpaqueType | TypeAlias | EnumDeclaration | TSDeclareFunction | TSInterfaceDeclaration | TSTypeAliasDeclaration | TSEnumDeclaration | TSModuleDeclaration;

declare const DECLARATION_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface DeclareClass extends BaseNode {
    type: "DeclareClass";
    id: Identifier;
    typeParameters?: TypeParameterDeclaration | null;
    extends?: Array<InterfaceExtends> | null;
    body: ObjectTypeAnnotation;
    implements?: Array<ClassImplements> | null;
    mixins?: Array<InterfaceExtends> | null;
}

declare function declareClass(id: Identifier, typeParameters: TypeParameterDeclaration | null | undefined, _extends: Array<InterfaceExtends> | null | undefined, body: ObjectTypeAnnotation): DeclareClass;

declare interface DeclaredPredicate extends BaseNode {
    type: "DeclaredPredicate";
    value: Flow;
}

declare function declaredPredicate(value: Flow): DeclaredPredicate;

declare interface DeclareExportAllDeclaration extends BaseNode {
    type: "DeclareExportAllDeclaration";
    source: StringLiteral;
    exportKind?: "type" | "value" | null;
}

declare function declareExportAllDeclaration(source: StringLiteral): DeclareExportAllDeclaration;

declare interface DeclareExportDeclaration extends BaseNode {
    type: "DeclareExportDeclaration";
    declaration?: Flow | null;
    specifiers?: Array<ExportSpecifier | ExportNamespaceSpecifier> | null;
    source?: StringLiteral | null;
    default?: boolean | null;
}

declare function declareExportDeclaration(declaration?: Flow | null, specifiers?: Array<ExportSpecifier | ExportNamespaceSpecifier> | null, source?: StringLiteral | null): DeclareExportDeclaration;

declare interface DeclareFunction extends BaseNode {
    type: "DeclareFunction";
    id: Identifier;
    predicate?: DeclaredPredicate | null;
}

declare function declareFunction(id: Identifier): DeclareFunction;

declare interface DeclareInterface extends BaseNode {
    type: "DeclareInterface";
    id: Identifier;
    typeParameters?: TypeParameterDeclaration | null;
    extends?: Array<InterfaceExtends> | null;
    body: ObjectTypeAnnotation;
}

declare function declareInterface(id: Identifier, typeParameters: TypeParameterDeclaration | null | undefined, _extends: Array<InterfaceExtends> | null | undefined, body: ObjectTypeAnnotation): DeclareInterface;

declare interface DeclareModule extends BaseNode {
    type: "DeclareModule";
    id: Identifier | StringLiteral;
    body: BlockStatement;
    kind?: "CommonJS" | "ES" | null;
}

declare function declareModule(id: Identifier | StringLiteral, body: BlockStatement, kind?: "CommonJS" | "ES" | null): DeclareModule;

declare interface DeclareModuleExports extends BaseNode {
    type: "DeclareModuleExports";
    typeAnnotation: TypeAnnotation;
}

declare function declareModuleExports(typeAnnotation: TypeAnnotation): DeclareModuleExports;

declare interface DeclareOpaqueType extends BaseNode {
    type: "DeclareOpaqueType";
    id: Identifier;
    typeParameters?: TypeParameterDeclaration | null;
    supertype?: FlowType | null;
    impltype?: FlowType | null;
}

declare function declareOpaqueType(id: Identifier, typeParameters?: TypeParameterDeclaration | null, supertype?: FlowType | null): DeclareOpaqueType;

declare interface DeclareTypeAlias extends BaseNode {
    type: "DeclareTypeAlias";
    id: Identifier;
    typeParameters?: TypeParameterDeclaration | null;
    right: FlowType;
}

declare function declareTypeAlias(id: Identifier, typeParameters: TypeParameterDeclaration | null | undefined, right: FlowType): DeclareTypeAlias;

declare interface DeclareVariable extends BaseNode {
    type: "DeclareVariable";
    id: Identifier;
}

declare function declareVariable(id: Identifier): DeclareVariable;

declare interface Decorator extends BaseNode {
    type: "Decorator";
    expression: Expression;
}

declare function decorator(expression: Expression): Decorator;

declare interface DecoratorsPluginOptions {
    decoratorsBeforeExport?: boolean;
    allowCallParenthesized?: boolean;
}

declare const _default$1: {
    (value: undefined): Identifier;
    (value: boolean): BooleanLiteral;
    (value: null): NullLiteral;
    (value: string): StringLiteral;
    (value: number): NumericLiteral | BinaryExpression | UnaryExpression;
    (value: RegExp): RegExpLiteral;
    (value: ReadonlyArray<unknown>): ArrayExpression;
    (value: object): ObjectExpression;
    (value: unknown): Expression;
};

declare const _default$2: {
    (node: AssignmentExpression, ignore?: boolean): ExpressionStatement;
    <T extends Statement>(node: T, ignore: false): T;
    <T_1 extends Statement>(node: T_1, ignore?: boolean): false | T_1;
    (node: Class, ignore: false): ClassDeclaration;
    (node: Class, ignore?: boolean): ClassDeclaration | false;
    (node: Function_2, ignore: false): FunctionDeclaration;
    (node: Function_2, ignore?: boolean): FunctionDeclaration | false;
    (node: Node_3, ignore: false): Statement;
    (node: Node_3, ignore?: boolean): Statement | false;
};

declare const _default$3: {
    (node: Function_2): FunctionExpression;
    (node: Class): ClassExpression;
    (node: ExpressionStatement | Expression | Class | Function_2): Expression;
};

declare const _default$4: {
    (type: "string"): StringTypeAnnotation;
    (type: "number"): NumberTypeAnnotation;
    (type: "undefined"): VoidTypeAnnotation;
    (type: "boolean"): BooleanTypeAnnotation;
    (type: "function"): GenericTypeAnnotation;
    (type: "object"): GenericTypeAnnotation;
    (type: "symbol"): GenericTypeAnnotation;
    (type: "bigint"): AnyTypeAnnotation;
};

declare const _default: {
    (node: Node_3, duplicates: true): Record<string, Array<Identifier>>;
    (node: Node_3, duplicates?: false): Record<string, Identifier>;
    (node: Node_3, duplicates?: boolean): Record<string, Identifier> | Record<string, Array<Identifier>>;
};

export declare const DEFAULT_EXTENSIONS: [".js", ".jsx", ".es6", ".es", ".mjs"];

declare type DefaultTemplateBuilder = typeof smart & {
    smart: typeof smart;
    statement: typeof statement;
    statements: typeof statements;
    expression: typeof expression;
    program: typeof program_2;
    ast: typeof smart.ast;
};

declare const DEPRECATED_ALIASES: {
    ModuleDeclaration: string;
};

declare const DEPRECATED_KEYS: Record<string, NodeTypesWithoutComment>;

declare type DeprecatedAliases = NumberLiteral$1 | RegexLiteral$1 | RestProperty$1 | SpreadProperty$1;

declare function deprecationWarning(oldName: string, newName: string, prefix?: string): void;

declare interface Directive extends BaseNode {
    type: "Directive";
    value: DirectiveLiteral;
}

declare function directive(value: DirectiveLiteral): Directive;

declare interface DirectiveLiteral extends BaseNode {
    type: "DirectiveLiteral";
    value: string;
}

declare function directiveLiteral(value: string): DirectiveLiteral;

declare interface DoExpression extends BaseNode {
    type: "DoExpression";
    body: BlockStatement;
    async: boolean;
}

declare function doExpression(body: BlockStatement, async?: boolean): DoExpression;

declare interface DoWhileStatement extends BaseNode {
    type: "DoWhileStatement";
    test: Expression;
    body: Statement;
}

declare function doWhileStatement(test: Expression, body: Statement): DoWhileStatement;

declare interface EmptyStatement extends BaseNode {
    type: "EmptyStatement";
}

declare function emptyStatement(): EmptyStatement;

declare interface EmptyTypeAnnotation extends BaseNode {
    type: "EmptyTypeAnnotation";
}

declare function emptyTypeAnnotation(): EmptyTypeAnnotation;

/**
 * Ensure the `key` (defaults to "body") of a `node` is a block.
 * Casting it to a block if it is not.
 *
 * Returns the BlockStatement
 */
declare function ensureBlock(node: Node_3, key?: string): BlockStatement;

declare type EnumBody = EnumBooleanBody | EnumNumberBody | EnumStringBody | EnumSymbolBody;

declare const ENUMBODY_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface EnumBooleanBody extends BaseNode {
    type: "EnumBooleanBody";
    members: Array<EnumBooleanMember>;
    explicitType: boolean;
    hasUnknownMembers: boolean;
}

declare function enumBooleanBody(members: Array<EnumBooleanMember>): EnumBooleanBody;

declare interface EnumBooleanMember extends BaseNode {
    type: "EnumBooleanMember";
    id: Identifier;
    init: BooleanLiteral;
}

declare function enumBooleanMember(id: Identifier): EnumBooleanMember;

declare interface EnumDeclaration extends BaseNode {
    type: "EnumDeclaration";
    id: Identifier;
    body: EnumBooleanBody | EnumNumberBody | EnumStringBody | EnumSymbolBody;
}

declare function enumDeclaration(id: Identifier, body: EnumBooleanBody | EnumNumberBody | EnumStringBody | EnumSymbolBody): EnumDeclaration;

declare interface EnumDefaultedMember extends BaseNode {
    type: "EnumDefaultedMember";
    id: Identifier;
}

declare function enumDefaultedMember(id: Identifier): EnumDefaultedMember;

declare type EnumMember = EnumBooleanMember | EnumNumberMember | EnumStringMember | EnumDefaultedMember;

declare const ENUMMEMBER_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface EnumNumberBody extends BaseNode {
    type: "EnumNumberBody";
    members: Array<EnumNumberMember>;
    explicitType: boolean;
    hasUnknownMembers: boolean;
}

declare function enumNumberBody(members: Array<EnumNumberMember>): EnumNumberBody;

declare interface EnumNumberMember extends BaseNode {
    type: "EnumNumberMember";
    id: Identifier;
    init: NumericLiteral;
}

declare function enumNumberMember(id: Identifier, init: NumericLiteral): EnumNumberMember;

declare interface EnumStringBody extends BaseNode {
    type: "EnumStringBody";
    members: Array<EnumStringMember | EnumDefaultedMember>;
    explicitType: boolean;
    hasUnknownMembers: boolean;
}

declare function enumStringBody(members: Array<EnumStringMember | EnumDefaultedMember>): EnumStringBody;

declare interface EnumStringMember extends BaseNode {
    type: "EnumStringMember";
    id: Identifier;
    init: StringLiteral;
}

declare function enumStringMember(id: Identifier, init: StringLiteral): EnumStringMember;

declare interface EnumSymbolBody extends BaseNode {
    type: "EnumSymbolBody";
    members: Array<EnumDefaultedMember>;
    hasUnknownMembers: boolean;
}

declare function enumSymbolBody(members: Array<EnumDefaultedMember>): EnumSymbolBody;

/**
 * Since `NODE_ENV` is a fairly common way to toggle behavior, Babel also includes an API function
 * meant specifically for that. This API is used as a quick way to check the `"envName"` that Babel
 * was loaded with, which takes `NODE_ENV` into account if no other overriding environment is set.
 *
 * @see https://babeljs.io/docs/en/next/config-files#apienv
 */
export declare interface EnvFunction {
    /**
     * @returns the current `envName` string
     */
    (): string;
    /**
     * @returns `true` if the `envName` is `===` any of the given strings
     */
    (envName: string | ReadonlyArray<string>): boolean;
    // the official documentation is misleading for this one...
    // this just passes the callback to `cache.using` but with an additional argument.
    // it returns its result instead of necessarily returning a boolean.
    <T extends SimpleCacheKey>(envCallback: (envName: NonNullable<TransformOptions["envName"]>) => T): T;
}

declare const EQUALITY_BINARY_OPERATORS: string[];

declare interface ExistsTypeAnnotation extends BaseNode {
    type: "ExistsTypeAnnotation";
}

declare function existsTypeAnnotation(): ExistsTypeAnnotation;

declare interface ExportAllDeclaration extends BaseNode {
    type: "ExportAllDeclaration";
    source: StringLiteral;
    assertions?: Array<ImportAttribute> | null;
    attributes?: Array<ImportAttribute> | null;
    exportKind?: "type" | "value" | null;
}

declare function exportAllDeclaration(source: StringLiteral): ExportAllDeclaration;

declare type ExportDeclaration = ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration;

declare const EXPORTDECLARATION_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface ExportDefaultDeclaration extends BaseNode {
    type: "ExportDefaultDeclaration";
    declaration: TSDeclareFunction | FunctionDeclaration | ClassDeclaration | Expression;
    exportKind?: "value" | null;
}

declare function exportDefaultDeclaration(declaration: TSDeclareFunction | FunctionDeclaration | ClassDeclaration | Expression): ExportDefaultDeclaration;

declare interface ExportDefaultSpecifier extends BaseNode {
    type: "ExportDefaultSpecifier";
    exported: Identifier;
}

declare function exportDefaultSpecifier(exported: Identifier): ExportDefaultSpecifier;

declare interface ExportNamedDeclaration extends BaseNode {
    type: "ExportNamedDeclaration";
    declaration?: Declaration | null;
    specifiers: Array<ExportSpecifier | ExportDefaultSpecifier | ExportNamespaceSpecifier>;
    source?: StringLiteral | null;
    assertions?: Array<ImportAttribute> | null;
    attributes?: Array<ImportAttribute> | null;
    exportKind?: "type" | "value" | null;
}

declare function exportNamedDeclaration(declaration?: Declaration | null, specifiers?: Array<ExportSpecifier | ExportDefaultSpecifier | ExportNamespaceSpecifier>, source?: StringLiteral | null): ExportNamedDeclaration;

declare interface ExportNamespaceSpecifier extends BaseNode {
    type: "ExportNamespaceSpecifier";
    exported: Identifier;
}

declare function exportNamespaceSpecifier(exported: Identifier): ExportNamespaceSpecifier;

declare interface ExportSpecifier extends BaseNode {
    type: "ExportSpecifier";
    local: Identifier;
    exported: Identifier | StringLiteral;
    exportKind?: "type" | "value" | null;
}

declare function exportSpecifier(local: Identifier, exported: Identifier | StringLiteral): ExportSpecifier;

declare type Expression = ArrayExpression | AssignmentExpression | BinaryExpression | CallExpression | ConditionalExpression | FunctionExpression | Identifier | StringLiteral | NumericLiteral | NullLiteral | BooleanLiteral | RegExpLiteral | LogicalExpression | MemberExpression | NewExpression | ObjectExpression | SequenceExpression | ParenthesizedExpression | ThisExpression | UnaryExpression | UpdateExpression | ArrowFunctionExpression | ClassExpression | ImportExpression | MetaProperty | Super | TaggedTemplateExpression | TemplateLiteral | YieldExpression | AwaitExpression | Import | BigIntLiteral | OptionalMemberExpression | OptionalCallExpression | TypeCastExpression | JSXElement | JSXFragment | BindExpression | DoExpression | RecordExpression | TupleExpression | DecimalLiteral | ModuleExpression | TopicReference | PipelineTopicExpression | PipelineBareFunction | PipelinePrimaryTopicReference | TSInstantiationExpression | TSAsExpression | TSSatisfiesExpression | TSTypeAssertion | TSNonNullExpression;

declare const expression: TemplateBuilder<Expression>;

declare const EXPRESSION_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface ExpressionStatement extends BaseNode {
    type: "ExpressionStatement";
    expression: Expression;
}

declare function expressionStatement(expression: Expression): ExpressionStatement;

declare type ExpressionWrapper = ExpressionStatement | ParenthesizedExpression | TypeCastExpression;

declare const EXPRESSIONWRAPPER_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare type FieldDefinitions = {
    [x: string]: FieldOptions;
};

declare type FieldOptions = {
    default?: string | number | boolean | [];
    optional?: boolean;
    deprecated?: boolean;
    validate?: Validator;
};

declare function file(program: Program, comments?: Array<CommentBlock | CommentLine> | null, tokens?: Array<any> | null): File_2;

declare interface File_2 extends BaseNode {
    type: "File";
    program: Program;
    comments?: Array<CommentBlock | CommentLine> | null;
    tokens?: Array<any> | null;
}

export declare type FileParseCallback = (err: Error | null, result: ParseResult | null) => any;

export declare type FileResultCallback = (err: Error | null, result: BabelFileResult | null) => any;

declare const FLATTENABLE_KEYS: string[];

declare const FLIPPED_ALIAS_KEYS: Record<string, NodeTypesWithoutComment[]>;

declare type Flow = AnyTypeAnnotation | ArrayTypeAnnotation | BooleanTypeAnnotation | BooleanLiteralTypeAnnotation | NullLiteralTypeAnnotation | ClassImplements | DeclareClass | DeclareFunction | DeclareInterface | DeclareModule | DeclareModuleExports | DeclareTypeAlias | DeclareOpaqueType | DeclareVariable | DeclareExportDeclaration | DeclareExportAllDeclaration | DeclaredPredicate | ExistsTypeAnnotation | FunctionTypeAnnotation | FunctionTypeParam | GenericTypeAnnotation | InferredPredicate | InterfaceExtends | InterfaceDeclaration | InterfaceTypeAnnotation | IntersectionTypeAnnotation | MixedTypeAnnotation | EmptyTypeAnnotation | NullableTypeAnnotation | NumberLiteralTypeAnnotation | NumberTypeAnnotation | ObjectTypeAnnotation | ObjectTypeInternalSlot | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | QualifiedTypeIdentifier | StringLiteralTypeAnnotation | StringTypeAnnotation | SymbolTypeAnnotation | ThisTypeAnnotation | TupleTypeAnnotation | TypeofTypeAnnotation | TypeAlias | TypeAnnotation | TypeCastExpression | TypeParameter | TypeParameterDeclaration | TypeParameterInstantiation | UnionTypeAnnotation | Variance | VoidTypeAnnotation | EnumDeclaration | EnumBooleanBody | EnumNumberBody | EnumStringBody | EnumSymbolBody | EnumBooleanMember | EnumNumberMember | EnumStringMember | EnumDefaultedMember | IndexedAccessType | OptionalIndexedAccessType;

declare const FLOW_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare type FlowBaseAnnotation = AnyTypeAnnotation | BooleanTypeAnnotation | NullLiteralTypeAnnotation | MixedTypeAnnotation | EmptyTypeAnnotation | NumberTypeAnnotation | StringTypeAnnotation | SymbolTypeAnnotation | ThisTypeAnnotation | VoidTypeAnnotation;

declare const FLOWBASEANNOTATION_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare type FlowDeclaration = DeclareClass | DeclareFunction | DeclareInterface | DeclareModule | DeclareModuleExports | DeclareTypeAlias | DeclareOpaqueType | DeclareVariable | DeclareExportDeclaration | DeclareExportAllDeclaration | InterfaceDeclaration | OpaqueType | TypeAlias;

declare const FLOWDECLARATION_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface FlowPluginOptions {
    all?: boolean;
    enums?: boolean;
}

declare type FlowPredicate = DeclaredPredicate | InferredPredicate;

declare const FLOWPREDICATE_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare type FlowType = AnyTypeAnnotation | ArrayTypeAnnotation | BooleanTypeAnnotation | BooleanLiteralTypeAnnotation | NullLiteralTypeAnnotation | ExistsTypeAnnotation | FunctionTypeAnnotation | GenericTypeAnnotation | InterfaceTypeAnnotation | IntersectionTypeAnnotation | MixedTypeAnnotation | EmptyTypeAnnotation | NullableTypeAnnotation | NumberLiteralTypeAnnotation | NumberTypeAnnotation | ObjectTypeAnnotation | StringLiteralTypeAnnotation | StringTypeAnnotation | SymbolTypeAnnotation | ThisTypeAnnotation | TupleTypeAnnotation | TypeofTypeAnnotation | UnionTypeAnnotation | VoidTypeAnnotation | IndexedAccessType | OptionalIndexedAccessType;

declare const FLOWTYPE_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare type For = ForInStatement | ForStatement | ForOfStatement;

declare const FOR_INIT_KEYS: string[];

declare const FOR_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface ForInStatement extends BaseNode {
    type: "ForInStatement";
    left: VariableDeclaration | LVal;
    right: Expression;
    body: Statement;
}

declare function forInStatement(left: VariableDeclaration | LVal, right: Expression, body: Statement): ForInStatement;

declare interface ForOfStatement extends BaseNode {
    type: "ForOfStatement";
    left: VariableDeclaration | LVal;
    right: Expression;
    body: Statement;
    await: boolean;
}

declare function forOfStatement(left: VariableDeclaration | LVal, right: Expression, body: Statement, _await?: boolean): ForOfStatement;

declare interface ForStatement extends BaseNode {
    type: "ForStatement";
    init?: VariableDeclaration | Expression | null;
    test?: Expression | null;
    update?: Expression | null;
    body: Statement;
}

declare function forStatement(init: VariableDeclaration | Expression | null | undefined, test: Expression | null | undefined, update: Expression | null | undefined, body: Statement): ForStatement;

declare type ForXStatement = ForInStatement | ForOfStatement;

declare const FORXSTATEMENT_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare type Function_2 = FunctionDeclaration | FunctionExpression | ObjectMethod | ArrowFunctionExpression | ClassMethod | ClassPrivateMethod;

declare const FUNCTION_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface FunctionDeclaration extends BaseNode {
    type: "FunctionDeclaration";
    id?: Identifier | null;
    params: Array<Identifier | Pattern | RestElement>;
    body: BlockStatement;
    generator: boolean;
    async: boolean;
    declare?: boolean | null;
    predicate?: DeclaredPredicate | InferredPredicate | null;
    returnType?: TypeAnnotation | TSTypeAnnotation | Noop | null;
    typeParameters?: TypeParameterDeclaration | TSTypeParameterDeclaration | Noop | null;
}

declare function functionDeclaration(id: Identifier | null | undefined, params: Array<Identifier | Pattern | RestElement>, body: BlockStatement, generator?: boolean, async?: boolean): FunctionDeclaration;

declare interface FunctionExpression extends BaseNode {
    type: "FunctionExpression";
    id?: Identifier | null;
    params: Array<Identifier | Pattern | RestElement>;
    body: BlockStatement;
    generator: boolean;
    async: boolean;
    predicate?: DeclaredPredicate | InferredPredicate | null;
    returnType?: TypeAnnotation | TSTypeAnnotation | Noop | null;
    typeParameters?: TypeParameterDeclaration | TSTypeParameterDeclaration | Noop | null;
}

declare function functionExpression(id: Identifier | null | undefined, params: Array<Identifier | Pattern | RestElement>, body: BlockStatement, generator?: boolean, async?: boolean): FunctionExpression;

declare type FunctionParent = FunctionDeclaration | FunctionExpression | ObjectMethod | ArrowFunctionExpression | ClassMethod | ClassPrivateMethod | StaticBlock | TSModuleBlock;

declare const FUNCTIONPARENT_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface FunctionTypeAnnotation extends BaseNode {
    type: "FunctionTypeAnnotation";
    typeParameters?: TypeParameterDeclaration | null;
    params: Array<FunctionTypeParam>;
    rest?: FunctionTypeParam | null;
    returnType: FlowType;
    this?: FunctionTypeParam | null;
}

declare function functionTypeAnnotation(typeParameters: TypeParameterDeclaration | null | undefined, params: Array<FunctionTypeParam>, rest: FunctionTypeParam | null | undefined, returnType: FlowType): FunctionTypeAnnotation;

declare interface FunctionTypeParam extends BaseNode {
    type: "FunctionTypeParam";
    name?: Identifier | null;
    typeAnnotation: FlowType;
    optional?: boolean | null;
}

declare function functionTypeParam(name: Identifier | null | undefined, typeAnnotation: FlowType): FunctionTypeParam;

export declare interface GeneratorOptions {
    /**
     * Optional string to add as a block comment at the start of the output file.
     */
    auxiliaryCommentBefore?: string | undefined;

    /**
     * Optional string to add as a block comment at the end of the output file.
     */
    auxiliaryCommentAfter?: string | undefined;

    /**
     * Function that takes a comment (as a string) and returns true if the comment should be included in the output.
     * By default, comments are included if `opts.comments` is `true` or if `opts.minifed` is `false` and the comment
     * contains `@preserve` or `@license`.
     */
    shouldPrintComment?(comment: string): boolean;

    /**
     * Attempt to use the same line numbers in the output code as in the source code (helps preserve stack traces).
     * Defaults to `false`.
     */
    retainLines?: boolean | undefined;

    /**
     * Retain parens around function expressions (could be used to change engine parsing behavior)
     * Defaults to `false`.
     */
    retainFunctionParens?: boolean | undefined;

    /**
     * Should comments be included in output? Defaults to `true`.
     */
    comments?: boolean | undefined;

    /**
     * Set to true to avoid adding whitespace for formatting. Defaults to the value of `opts.minified`.
     */
    compact?: boolean | "auto" | undefined;

    /**
     * Should the output be minified. Defaults to `false`.
     */
    minified?: boolean | undefined;

    /**
     * Set to true to reduce whitespace (but not as much as opts.compact). Defaults to `false`.
     */
    concise?: boolean | undefined;

    /**
     * Used in warning messages
     */
    filename?: string | undefined;

    /**
     * Enable generating source maps. Defaults to `false`.
     */
    sourceMaps?: boolean | undefined;

    /**
     * A root for all relative URLs in the source map.
     */
    sourceRoot?: string | undefined;

    /**
     * The filename for the source code (i.e. the code in the `code` argument).
     * This will only be used if `code` is a string.
     */
    sourceFileName?: string | undefined;

    /**
     * Set to true to run jsesc with "json": true to print "\u00A9" vs. "©";
     */
    jsonCompatibleStrings?: boolean | undefined;

    /**
     * Set to true to enable support for experimental decorators syntax before module exports.
     * Defaults to `false`.
     */
    decoratorsBeforeExport?: boolean | undefined;

    /**
     * Options for outputting jsesc representation.
     */
    jsescOption?: {
        /**
         * The default value for the quotes option is 'single'. This means that any occurrences of ' in the input
         * string are escaped as \', so that the output can be used in a string literal wrapped in single quotes.
         */
        quotes?: "single" | "double" | "backtick" | undefined;

        /**
         * The default value for the numbers option is 'decimal'. This means that any numeric values are represented
         * using decimal integer literals. Other valid options are binary, octal, and hexadecimal, which result in
         * binary integer literals, octal integer literals, and hexadecimal integer literals, respectively.
         */
        numbers?: "binary" | "octal" | "decimal" | "hexadecimal" | undefined;

        /**
         * The wrap option takes a boolean value (true or false), and defaults to false (disabled). When enabled, the
         * output is a valid JavaScript string literal wrapped in quotes. The type of quotes can be specified through
         * the quotes setting.
         */
        wrap?: boolean | undefined;

        /**
         * The es6 option takes a boolean value (true or false), and defaults to false (disabled). When enabled, any
         * astral Unicode symbols in the input are escaped using ECMAScript 6 Unicode code point escape sequences
         * instead of using separate escape sequences for each surrogate half. If backwards compatibility with ES5
         * environments is a concern, don’t enable this setting. If the json setting is enabled, the value for the es6
         * setting is ignored (as if it was false).
         */
        es6?: boolean | undefined;

        /**
         * The escapeEverything option takes a boolean value (true or false), and defaults to false (disabled). When
         * enabled, all the symbols in the output are escaped — even printable ASCII symbols.
         */
        escapeEverything?: boolean | undefined;

        /**
         * The minimal option takes a boolean value (true or false), and defaults to false (disabled). When enabled,
         * only a limited set of symbols in the output are escaped: \0, \b, \t, \n, \f, \r, \\, \u2028, \u2029.
         */
        minimal?: boolean | undefined;

        /**
         * The isScriptContext option takes a boolean value (true or false), and defaults to false (disabled). When
         * enabled, occurrences of </script and </style in the output are escaped as <\/script and <\/style, and <!--
         * is escaped as \x3C!-- (or \u003C!-- when the json option is enabled). This setting is useful when jsesc’s
         * output ends up as part of a <script> or <style> element in an HTML document.
         */
        isScriptContext?: boolean | undefined;

        /**
         * The compact option takes a boolean value (true or false), and defaults to true (enabled). When enabled,
         * the output for arrays and objects is as compact as possible; it’s not formatted nicely.
         */
        compact?: boolean | undefined;

        /**
         * The indent option takes a string value, and defaults to '\t'. When the compact setting is enabled (true),
         * the value of the indent option is used to format the output for arrays and objects.
         */
        indent?: string | undefined;

        /**
         * The indentLevel option takes a numeric value, and defaults to 0. It represents the current indentation level,
         * i.e. the number of times the value of the indent option is repeated.
         */
        indentLevel?: number | undefined;

        /**
         * The json option takes a boolean value (true or false), and defaults to false (disabled). When enabled, the
         * output is valid JSON. Hexadecimal character escape sequences and the \v or \0 escape sequences are not used.
         * Setting json: true implies quotes: 'double', wrap: true, es6: false, although these values can still be
         * overridden if needed — but in such cases, the output won’t be valid JSON anymore.
         */
        json?: boolean | undefined;

        /**
         * The lowercaseHex option takes a boolean value (true or false), and defaults to false (disabled). When enabled,
         * any alphabetical hexadecimal digits in escape sequences as well as any hexadecimal integer literals (see the
         * numbers option) in the output are in lowercase.
         */
        lowercaseHex?: boolean | undefined;
    } | undefined;
}

declare interface GenericTypeAnnotation extends BaseNode {
    type: "GenericTypeAnnotation";
    id: Identifier | QualifiedTypeIdentifier;
    typeParameters?: TypeParameterInstantiation | null;
}

declare function genericTypeAnnotation(id: Identifier | QualifiedTypeIdentifier, typeParameters?: TypeParameterInstantiation | null): GenericTypeAnnotation;

declare function getBindingIdentifiers(node: Node_3, duplicates: true, outerOnly?: boolean): Record<string, Array<Identifier>>;

declare function getBindingIdentifiers(node: Node_3, duplicates?: false, outerOnly?: boolean): Record<string, Identifier>;

declare function getBindingIdentifiers(node: Node_3, duplicates?: boolean, outerOnly?: boolean): Record<string, Identifier> | Record<string, Array<Identifier>>;

declare namespace getBindingIdentifiers {
    var keys: {
        DeclareClass: string[];
        DeclareFunction: string[];
        DeclareModule: string[];
        DeclareVariable: string[];
        DeclareInterface: string[];
        DeclareTypeAlias: string[];
        DeclareOpaqueType: string[];
        InterfaceDeclaration: string[];
        TypeAlias: string[];
        OpaqueType: string[];
        CatchClause: string[];
        LabeledStatement: string[];
        UnaryExpression: string[];
        AssignmentExpression: string[];
        ImportSpecifier: string[];
        ImportNamespaceSpecifier: string[];
        ImportDefaultSpecifier: string[];
        ImportDeclaration: string[];
        ExportSpecifier: string[];
        ExportNamespaceSpecifier: string[];
        ExportDefaultSpecifier: string[];
        FunctionDeclaration: string[];
        FunctionExpression: string[];
        ArrowFunctionExpression: string[];
        ObjectMethod: string[];
        ClassMethod: string[];
        ClassPrivateMethod: string[];
        ForInStatement: string[];
        ForOfStatement: string[];
        ClassDeclaration: string[];
        ClassExpression: string[];
        RestElement: string[];
        UpdateExpression: string[];
        ObjectProperty: string[];
        AssignmentPattern: string[];
        ArrayPattern: string[];
        ObjectPattern: string[];
        VariableDeclaration: string[];
        VariableDeclarator: string[];
    };
}

declare function getType(val: any): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "null" | "array";

declare class Hub implements HubInterface {
    constructor();
    getCode(): string | undefined;
    getScope(): Scope | undefined;
    addHelper(name: string): any;
    buildError(node: Node_3, msg: string, Error?: ErrorConstructor): Error;
}

declare interface HubInterface {
    getCode(): string | undefined;
    getScope(): Scope | undefined;
    addHelper(name: string): any;
    buildError(node: Node_3, msg: string, Error: ErrorConstructor): Error;
}

declare interface Identifier extends BaseNode {
    type: "Identifier";
    name: string;
    decorators?: Array<Decorator> | null;
    optional?: boolean | null;
    typeAnnotation?: TypeAnnotation | TSTypeAnnotation | Noop | null;
}

declare function identifier(name: string): Identifier;

declare interface IfStatement extends BaseNode {
    type: "IfStatement";
    test: Expression;
    consequent: Statement;
    alternate?: Statement | null;
}

declare function ifStatement(test: Expression, consequent: Statement, alternate?: Statement | null): IfStatement;

declare type Immutable = StringLiteral | NumericLiteral | NullLiteral | BooleanLiteral | BigIntLiteral | JSXAttribute | JSXClosingElement | JSXElement | JSXExpressionContainer | JSXSpreadChild | JSXOpeningElement | JSXText | JSXFragment | JSXOpeningFragment | JSXClosingFragment | DecimalLiteral;

declare const IMMUTABLE_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface Import extends BaseNode {
    type: "Import";
}

declare function _import(): Import;

declare interface ImportAttribute extends BaseNode {
    type: "ImportAttribute";
    key: Identifier | StringLiteral;
    value: StringLiteral;
}

declare function importAttribute(key: Identifier | StringLiteral, value: StringLiteral): ImportAttribute;

declare interface ImportDeclaration extends BaseNode {
    type: "ImportDeclaration";
    specifiers: Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>;
    source: StringLiteral;
    assertions?: Array<ImportAttribute> | null;
    attributes?: Array<ImportAttribute> | null;
    importKind?: "type" | "typeof" | "value" | null;
    module?: boolean | null;
    phase?: "source" | "defer" | null;
}

declare function importDeclaration(specifiers: Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>, source: StringLiteral): ImportDeclaration;

declare interface ImportDefaultSpecifier extends BaseNode {
    type: "ImportDefaultSpecifier";
    local: Identifier;
}

declare function importDefaultSpecifier(local: Identifier): ImportDefaultSpecifier;

declare interface ImportExpression extends BaseNode {
    type: "ImportExpression";
    source: Expression;
    options?: Expression | null;
    phase?: "source" | "defer" | null;
}

declare function importExpression(source: Expression, options?: Expression | null): ImportExpression;

declare interface ImportNamespaceSpecifier extends BaseNode {
    type: "ImportNamespaceSpecifier";
    local: Identifier;
}

declare function importNamespaceSpecifier(local: Identifier): ImportNamespaceSpecifier;

declare type ImportOrExportDeclaration = ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ImportDeclaration;

declare const IMPORTOREXPORTDECLARATION_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface ImportSpecifier extends BaseNode {
    type: "ImportSpecifier";
    local: Identifier;
    imported: Identifier | StringLiteral;
    importKind?: "type" | "typeof" | "value" | null;
}

declare function importSpecifier(local: Identifier, imported: Identifier | StringLiteral): ImportSpecifier;

declare interface IndexedAccessType extends BaseNode {
    type: "IndexedAccessType";
    objectType: FlowType;
    indexType: FlowType;
}

declare function indexedAccessType(objectType: FlowType, indexType: FlowType): IndexedAccessType;

declare interface InferredPredicate extends BaseNode {
    type: "InferredPredicate";
}

declare function inferredPredicate(): InferredPredicate;

declare const INHERIT_KEYS: {
    readonly optional: readonly ["typeAnnotation", "typeParameters", "returnType"];
    readonly force: readonly ["start", "loc", "end"];
};

declare function inheritInnerComments(child: Node_3, parent: Node_3): void;

declare function inheritLeadingComments(child: Node_3, parent: Node_3): void;

/**
 * Inherit all contextual properties from `parent` node to `child` node.
 */
declare function inherits<T extends Node_3 | null | undefined>(child: T, parent: Node_3 | null | undefined): T;

/**
 * Inherit all unique comments from `parent` node to `child` node.
 */
declare function inheritsComments<T extends Node_3>(child: T, parent: Node_3): T;

declare function inheritTrailingComments(child: Node_3, parent: Node_3): void;

/**
 * Source map standard format as to revision 3
 * @see {@link https://sourcemaps.info/spec.html}
 * @see {@link https://github.com/mozilla/source-map/blob/HEAD/source-map.d.ts}
 */
declare interface InputSourceMap {
    version: number;
    sources: string[];
    names: string[];
    sourceRoot?: string | undefined;
    sourcesContent?: string[] | undefined;
    mappings: string;
    file: string;
}

declare interface InterfaceDeclaration extends BaseNode {
    type: "InterfaceDeclaration";
    id: Identifier;
    typeParameters?: TypeParameterDeclaration | null;
    extends?: Array<InterfaceExtends> | null;
    body: ObjectTypeAnnotation;
}

declare function interfaceDeclaration(id: Identifier, typeParameters: TypeParameterDeclaration | null | undefined, _extends: Array<InterfaceExtends> | null | undefined, body: ObjectTypeAnnotation): InterfaceDeclaration;

declare interface InterfaceExtends extends BaseNode {
    type: "InterfaceExtends";
    id: Identifier | QualifiedTypeIdentifier;
    typeParameters?: TypeParameterInstantiation | null;
}

declare function interfaceExtends(id: Identifier | QualifiedTypeIdentifier, typeParameters?: TypeParameterInstantiation | null): InterfaceExtends;

declare interface InterfaceTypeAnnotation extends BaseNode {
    type: "InterfaceTypeAnnotation";
    extends?: Array<InterfaceExtends> | null;
    body: ObjectTypeAnnotation;
}

declare function interfaceTypeAnnotation(_extends: Array<InterfaceExtends> | null | undefined, body: ObjectTypeAnnotation): InterfaceTypeAnnotation;

declare interface InterpreterDirective extends BaseNode {
    type: "InterpreterDirective";
    value: string;
}

declare function interpreterDirective(value: string): InterpreterDirective;

declare interface IntersectionTypeAnnotation extends BaseNode {
    type: "IntersectionTypeAnnotation";
    types: Array<FlowType>;
}

declare function intersectionTypeAnnotation(types: Array<FlowType>): IntersectionTypeAnnotation;

declare function is<T extends Node_3["type"]>(type: T, node: Node_3 | null | undefined, opts?: undefined): node is Extract<Node_3, {
    type: T;
}>;

declare function is<T extends Node_3["type"], P extends Extract<Node_3, {
    type: T;
}>>(type: T, n: Node_3 | null | undefined, required: Partial<P>): n is P;

declare function is<P extends Node_3>(type: string, node: Node_3 | null | undefined, opts: Partial<P>): node is P;

declare function is(type: string, node: Node_3 | null | undefined, opts?: Partial<Node_3>): node is Node_3;

declare function isAccessor(node: Node_3 | null | undefined, opts?: Opts<Accessor> | null): node is Accessor;

declare function isAnyTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<AnyTypeAnnotation> | null): node is AnyTypeAnnotation;

declare function isArgumentPlaceholder(node: Node_3 | null | undefined, opts?: Opts<ArgumentPlaceholder> | null): node is ArgumentPlaceholder;

declare function isArrayExpression(node: Node_3 | null | undefined, opts?: Opts<ArrayExpression> | null): node is ArrayExpression;

declare function isArrayPattern(node: Node_3 | null | undefined, opts?: Opts<ArrayPattern> | null): node is ArrayPattern;

declare function isArrayTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<ArrayTypeAnnotation> | null): node is ArrayTypeAnnotation;

declare function isArrowFunctionExpression(node: Node_3 | null | undefined, opts?: Opts<ArrowFunctionExpression> | null): node is ArrowFunctionExpression;

declare function isAssignmentExpression(node: Node_3 | null | undefined, opts?: Opts<AssignmentExpression> | null): node is AssignmentExpression;

declare function isAssignmentPattern(node: Node_3 | null | undefined, opts?: Opts<AssignmentPattern> | null): node is AssignmentPattern;

declare function isAwaitExpression(node: Node_3 | null | undefined, opts?: Opts<AwaitExpression> | null): node is AwaitExpression;

declare function isBigIntLiteral(node: Node_3 | null | undefined, opts?: Opts<BigIntLiteral> | null): node is BigIntLiteral;

declare function isBinary(node: Node_3 | null | undefined, opts?: Opts<Binary> | null): node is Binary;

declare function isBinaryExpression(node: Node_3 | null | undefined, opts?: Opts<BinaryExpression> | null): node is BinaryExpression;

declare function isBindExpression(node: Node_3 | null | undefined, opts?: Opts<BindExpression> | null): node is BindExpression;

/**
 * Check if the input `node` is a binding identifier.
 */
declare function isBinding(node: Node_3, parent: Node_3, grandparent?: Node_3): boolean;

declare function isBlock(node: Node_3 | null | undefined, opts?: Opts<Block> | null): node is Block;

declare function isBlockParent(node: Node_3 | null | undefined, opts?: Opts<BlockParent> | null): node is BlockParent;

/**
 * Check if the input `node` is block scoped.
 */
declare function isBlockScoped(node: Node_3): boolean;

declare function isBlockStatement(node: Node_3 | null | undefined, opts?: Opts<BlockStatement> | null): node is BlockStatement;

declare function isBooleanLiteral(node: Node_3 | null | undefined, opts?: Opts<BooleanLiteral> | null): node is BooleanLiteral;

declare function isBooleanLiteralTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<BooleanLiteralTypeAnnotation> | null): node is BooleanLiteralTypeAnnotation;

declare function isBooleanTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<BooleanTypeAnnotation> | null): node is BooleanTypeAnnotation;

declare function isBreakStatement(node: Node_3 | null | undefined, opts?: Opts<BreakStatement> | null): node is BreakStatement;

declare function isCallExpression(node: Node_3 | null | undefined, opts?: Opts<CallExpression> | null): node is CallExpression;

declare function isCatchClause(node: Node_3 | null | undefined, opts?: Opts<CatchClause> | null): node is CatchClause;

declare function isClass(node: Node_3 | null | undefined, opts?: Opts<Class> | null): node is Class;

declare function isClassAccessorProperty(node: Node_3 | null | undefined, opts?: Opts<ClassAccessorProperty> | null): node is ClassAccessorProperty;

declare function isClassBody(node: Node_3 | null | undefined, opts?: Opts<ClassBody> | null): node is ClassBody;

declare function isClassDeclaration(node: Node_3 | null | undefined, opts?: Opts<ClassDeclaration> | null): node is ClassDeclaration;

declare function isClassExpression(node: Node_3 | null | undefined, opts?: Opts<ClassExpression> | null): node is ClassExpression;

declare function isClassImplements(node: Node_3 | null | undefined, opts?: Opts<ClassImplements> | null): node is ClassImplements;

declare function isClassMethod(node: Node_3 | null | undefined, opts?: Opts<ClassMethod> | null): node is ClassMethod;

declare function isClassPrivateMethod(node: Node_3 | null | undefined, opts?: Opts<ClassPrivateMethod> | null): node is ClassPrivateMethod;

declare function isClassPrivateProperty(node: Node_3 | null | undefined, opts?: Opts<ClassPrivateProperty> | null): node is ClassPrivateProperty;

declare function isClassProperty(node: Node_3 | null | undefined, opts?: Opts<ClassProperty> | null): node is ClassProperty;

declare function isCompatTag(tagName?: string): boolean;

declare function isCompletionStatement(node: Node_3 | null | undefined, opts?: Opts<CompletionStatement> | null): node is CompletionStatement;

declare function isConditional(node: Node_3 | null | undefined, opts?: Opts<Conditional> | null): node is Conditional;

declare function isConditionalExpression(node: Node_3 | null | undefined, opts?: Opts<ConditionalExpression> | null): node is ConditionalExpression;

declare function isContinueStatement(node: Node_3 | null | undefined, opts?: Opts<ContinueStatement> | null): node is ContinueStatement;

declare function isDebuggerStatement(node: Node_3 | null | undefined, opts?: Opts<DebuggerStatement> | null): node is DebuggerStatement;

declare function isDecimalLiteral(node: Node_3 | null | undefined, opts?: Opts<DecimalLiteral> | null): node is DecimalLiteral;

declare function isDeclaration(node: Node_3 | null | undefined, opts?: Opts<Declaration> | null): node is Declaration;

declare function isDeclareClass(node: Node_3 | null | undefined, opts?: Opts<DeclareClass> | null): node is DeclareClass;

declare function isDeclaredPredicate(node: Node_3 | null | undefined, opts?: Opts<DeclaredPredicate> | null): node is DeclaredPredicate;

declare function isDeclareExportAllDeclaration(node: Node_3 | null | undefined, opts?: Opts<DeclareExportAllDeclaration> | null): node is DeclareExportAllDeclaration;

declare function isDeclareExportDeclaration(node: Node_3 | null | undefined, opts?: Opts<DeclareExportDeclaration> | null): node is DeclareExportDeclaration;

declare function isDeclareFunction(node: Node_3 | null | undefined, opts?: Opts<DeclareFunction> | null): node is DeclareFunction;

declare function isDeclareInterface(node: Node_3 | null | undefined, opts?: Opts<DeclareInterface> | null): node is DeclareInterface;

declare function isDeclareModule(node: Node_3 | null | undefined, opts?: Opts<DeclareModule> | null): node is DeclareModule;

declare function isDeclareModuleExports(node: Node_3 | null | undefined, opts?: Opts<DeclareModuleExports> | null): node is DeclareModuleExports;

declare function isDeclareOpaqueType(node: Node_3 | null | undefined, opts?: Opts<DeclareOpaqueType> | null): node is DeclareOpaqueType;

declare function isDeclareTypeAlias(node: Node_3 | null | undefined, opts?: Opts<DeclareTypeAlias> | null): node is DeclareTypeAlias;

declare function isDeclareVariable(node: Node_3 | null | undefined, opts?: Opts<DeclareVariable> | null): node is DeclareVariable;

declare function isDecorator(node: Node_3 | null | undefined, opts?: Opts<Decorator> | null): node is Decorator;

declare function isDirective(node: Node_3 | null | undefined, opts?: Opts<Directive> | null): node is Directive;

declare function isDirectiveLiteral(node: Node_3 | null | undefined, opts?: Opts<DirectiveLiteral> | null): node is DirectiveLiteral;

declare function isDoExpression(node: Node_3 | null | undefined, opts?: Opts<DoExpression> | null): node is DoExpression;

declare function isDoWhileStatement(node: Node_3 | null | undefined, opts?: Opts<DoWhileStatement> | null): node is DoWhileStatement;

declare function isEmptyStatement(node: Node_3 | null | undefined, opts?: Opts<EmptyStatement> | null): node is EmptyStatement;

declare function isEmptyTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<EmptyTypeAnnotation> | null): node is EmptyTypeAnnotation;

declare function isEnumBody(node: Node_3 | null | undefined, opts?: Opts<EnumBody> | null): node is EnumBody;

declare function isEnumBooleanBody(node: Node_3 | null | undefined, opts?: Opts<EnumBooleanBody> | null): node is EnumBooleanBody;

declare function isEnumBooleanMember(node: Node_3 | null | undefined, opts?: Opts<EnumBooleanMember> | null): node is EnumBooleanMember;

declare function isEnumDeclaration(node: Node_3 | null | undefined, opts?: Opts<EnumDeclaration> | null): node is EnumDeclaration;

declare function isEnumDefaultedMember(node: Node_3 | null | undefined, opts?: Opts<EnumDefaultedMember> | null): node is EnumDefaultedMember;

declare function isEnumMember(node: Node_3 | null | undefined, opts?: Opts<EnumMember> | null): node is EnumMember;

declare function isEnumNumberBody(node: Node_3 | null | undefined, opts?: Opts<EnumNumberBody> | null): node is EnumNumberBody;

declare function isEnumNumberMember(node: Node_3 | null | undefined, opts?: Opts<EnumNumberMember> | null): node is EnumNumberMember;

declare function isEnumStringBody(node: Node_3 | null | undefined, opts?: Opts<EnumStringBody> | null): node is EnumStringBody;

declare function isEnumStringMember(node: Node_3 | null | undefined, opts?: Opts<EnumStringMember> | null): node is EnumStringMember;

declare function isEnumSymbolBody(node: Node_3 | null | undefined, opts?: Opts<EnumSymbolBody> | null): node is EnumSymbolBody;

declare function isExistsTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<ExistsTypeAnnotation> | null): node is ExistsTypeAnnotation;

declare function isExportAllDeclaration(node: Node_3 | null | undefined, opts?: Opts<ExportAllDeclaration> | null): node is ExportAllDeclaration;

declare function isExportDeclaration(node: Node_3 | null | undefined, opts?: Opts<ExportDeclaration> | null): node is ExportDeclaration;

declare function isExportDefaultDeclaration(node: Node_3 | null | undefined, opts?: Opts<ExportDefaultDeclaration> | null): node is ExportDefaultDeclaration;

declare function isExportDefaultSpecifier(node: Node_3 | null | undefined, opts?: Opts<ExportDefaultSpecifier> | null): node is ExportDefaultSpecifier;

declare function isExportNamedDeclaration(node: Node_3 | null | undefined, opts?: Opts<ExportNamedDeclaration> | null): node is ExportNamedDeclaration;

declare function isExportNamespaceSpecifier(node: Node_3 | null | undefined, opts?: Opts<ExportNamespaceSpecifier> | null): node is ExportNamespaceSpecifier;

declare function isExportSpecifier(node: Node_3 | null | undefined, opts?: Opts<ExportSpecifier> | null): node is ExportSpecifier;

declare function isExpression(node: Node_3 | null | undefined, opts?: Opts<Expression> | null): node is Expression;

declare function isExpressionStatement(node: Node_3 | null | undefined, opts?: Opts<ExpressionStatement> | null): node is ExpressionStatement;

declare function isExpressionWrapper(node: Node_3 | null | undefined, opts?: Opts<ExpressionWrapper> | null): node is ExpressionWrapper;

declare function isFile(node: Node_3 | null | undefined, opts?: Opts<File_2> | null): node is File_2;

declare function isFlow(node: Node_3 | null | undefined, opts?: Opts<Flow> | null): node is Flow;

declare function isFlowBaseAnnotation(node: Node_3 | null | undefined, opts?: Opts<FlowBaseAnnotation> | null): node is FlowBaseAnnotation;

declare function isFlowDeclaration(node: Node_3 | null | undefined, opts?: Opts<FlowDeclaration> | null): node is FlowDeclaration;

declare function isFlowPredicate(node: Node_3 | null | undefined, opts?: Opts<FlowPredicate> | null): node is FlowPredicate;

declare function isFlowType(node: Node_3 | null | undefined, opts?: Opts<FlowType> | null): node is FlowType;

declare function isFor(node: Node_3 | null | undefined, opts?: Opts<For> | null): node is For;

declare function isForInStatement(node: Node_3 | null | undefined, opts?: Opts<ForInStatement> | null): node is ForInStatement;

declare function isForOfStatement(node: Node_3 | null | undefined, opts?: Opts<ForOfStatement> | null): node is ForOfStatement;

declare function isForStatement(node: Node_3 | null | undefined, opts?: Opts<ForStatement> | null): node is ForStatement;

declare function isForXStatement(node: Node_3 | null | undefined, opts?: Opts<ForXStatement> | null): node is ForXStatement;

declare function isFunction(node: Node_3 | null | undefined, opts?: Opts<Function_2> | null): node is Function_2;

declare function isFunctionDeclaration(node: Node_3 | null | undefined, opts?: Opts<FunctionDeclaration> | null): node is FunctionDeclaration;

declare function isFunctionExpression(node: Node_3 | null | undefined, opts?: Opts<FunctionExpression> | null): node is FunctionExpression;

declare function isFunctionParent(node: Node_3 | null | undefined, opts?: Opts<FunctionParent> | null): node is FunctionParent;

declare function isFunctionTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<FunctionTypeAnnotation> | null): node is FunctionTypeAnnotation;

declare function isFunctionTypeParam(node: Node_3 | null | undefined, opts?: Opts<FunctionTypeParam> | null): node is FunctionTypeParam;

declare function isGenericTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<GenericTypeAnnotation> | null): node is GenericTypeAnnotation;

declare function isIdentifier(node: Node_3 | null | undefined, opts?: Opts<Identifier> | null): node is Identifier;

declare function isIfStatement(node: Node_3 | null | undefined, opts?: Opts<IfStatement> | null): node is IfStatement;

/**
 * Check if the input `node` is definitely immutable.
 */
declare function isImmutable(node: Node_3): boolean;

declare function isImport(node: Node_3 | null | undefined, opts?: Opts<Import> | null): node is Import;

declare function isImportAttribute(node: Node_3 | null | undefined, opts?: Opts<ImportAttribute> | null): node is ImportAttribute;

declare function isImportDeclaration(node: Node_3 | null | undefined, opts?: Opts<ImportDeclaration> | null): node is ImportDeclaration;

declare function isImportDefaultSpecifier(node: Node_3 | null | undefined, opts?: Opts<ImportDefaultSpecifier> | null): node is ImportDefaultSpecifier;

declare function isImportExpression(node: Node_3 | null | undefined, opts?: Opts<ImportExpression> | null): node is ImportExpression;

declare function isImportNamespaceSpecifier(node: Node_3 | null | undefined, opts?: Opts<ImportNamespaceSpecifier> | null): node is ImportNamespaceSpecifier;

declare function isImportOrExportDeclaration(node: Node_3 | null | undefined, opts?: Opts<ImportOrExportDeclaration> | null): node is ImportOrExportDeclaration;

declare function isImportSpecifier(node: Node_3 | null | undefined, opts?: Opts<ImportSpecifier> | null): node is ImportSpecifier;

declare function isIndexedAccessType(node: Node_3 | null | undefined, opts?: Opts<IndexedAccessType> | null): node is IndexedAccessType;

declare function isInferredPredicate(node: Node_3 | null | undefined, opts?: Opts<InferredPredicate> | null): node is InferredPredicate;

declare function isInterfaceDeclaration(node: Node_3 | null | undefined, opts?: Opts<InterfaceDeclaration> | null): node is InterfaceDeclaration;

declare function isInterfaceExtends(node: Node_3 | null | undefined, opts?: Opts<InterfaceExtends> | null): node is InterfaceExtends;

declare function isInterfaceTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<InterfaceTypeAnnotation> | null): node is InterfaceTypeAnnotation;

declare function isInterpreterDirective(node: Node_3 | null | undefined, opts?: Opts<InterpreterDirective> | null): node is InterpreterDirective;

declare function isIntersectionTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<IntersectionTypeAnnotation> | null): node is IntersectionTypeAnnotation;

declare function isJSX(node: Node_3 | null | undefined, opts?: Opts<JSX_2> | null): node is JSX_2;

declare function isJSXAttribute(node: Node_3 | null | undefined, opts?: Opts<JSXAttribute> | null): node is JSXAttribute;

declare function isJSXClosingElement(node: Node_3 | null | undefined, opts?: Opts<JSXClosingElement> | null): node is JSXClosingElement;

declare function isJSXClosingFragment(node: Node_3 | null | undefined, opts?: Opts<JSXClosingFragment> | null): node is JSXClosingFragment;

declare function isJSXElement(node: Node_3 | null | undefined, opts?: Opts<JSXElement> | null): node is JSXElement;

declare function isJSXEmptyExpression(node: Node_3 | null | undefined, opts?: Opts<JSXEmptyExpression> | null): node is JSXEmptyExpression;

declare function isJSXExpressionContainer(node: Node_3 | null | undefined, opts?: Opts<JSXExpressionContainer> | null): node is JSXExpressionContainer;

declare function isJSXFragment(node: Node_3 | null | undefined, opts?: Opts<JSXFragment> | null): node is JSXFragment;

declare function isJSXIdentifier(node: Node_3 | null | undefined, opts?: Opts<JSXIdentifier> | null): node is JSXIdentifier;

declare function isJSXMemberExpression(node: Node_3 | null | undefined, opts?: Opts<JSXMemberExpression> | null): node is JSXMemberExpression;

declare function isJSXNamespacedName(node: Node_3 | null | undefined, opts?: Opts<JSXNamespacedName> | null): node is JSXNamespacedName;

declare function isJSXOpeningElement(node: Node_3 | null | undefined, opts?: Opts<JSXOpeningElement> | null): node is JSXOpeningElement;

declare function isJSXOpeningFragment(node: Node_3 | null | undefined, opts?: Opts<JSXOpeningFragment> | null): node is JSXOpeningFragment;

declare function isJSXSpreadAttribute(node: Node_3 | null | undefined, opts?: Opts<JSXSpreadAttribute> | null): node is JSXSpreadAttribute;

declare function isJSXSpreadChild(node: Node_3 | null | undefined, opts?: Opts<JSXSpreadChild> | null): node is JSXSpreadChild;

declare function isJSXText(node: Node_3 | null | undefined, opts?: Opts<JSXText> | null): node is JSXText;

declare function isLabeledStatement(node: Node_3 | null | undefined, opts?: Opts<LabeledStatement> | null): node is LabeledStatement;

/**
 * Check if the input `node` is a `let` variable declaration.
 */
declare function isLet(node: Node_3): boolean;

declare function isLiteral(node: Node_3 | null | undefined, opts?: Opts<Literal> | null): node is Literal;

declare function isLogicalExpression(node: Node_3 | null | undefined, opts?: Opts<LogicalExpression> | null): node is LogicalExpression;

declare function isLoop(node: Node_3 | null | undefined, opts?: Opts<Loop> | null): node is Loop;

declare function isLVal(node: Node_3 | null | undefined, opts?: Opts<LVal> | null): node is LVal;

declare function isMemberExpression(node: Node_3 | null | undefined, opts?: Opts<MemberExpression> | null): node is MemberExpression;

declare function isMetaProperty(node: Node_3 | null | undefined, opts?: Opts<MetaProperty> | null): node is MetaProperty;

declare function isMethod(node: Node_3 | null | undefined, opts?: Opts<Method> | null): node is Method;

declare function isMiscellaneous(node: Node_3 | null | undefined, opts?: Opts<Miscellaneous> | null): node is Miscellaneous;

declare function isMixedTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<MixedTypeAnnotation> | null): node is MixedTypeAnnotation;

/**
 * @deprecated Use `isImportOrExportDeclaration`
 */
declare function isModuleDeclaration(node: Node_3 | null | undefined, opts?: Opts<ModuleDeclaration> | null): node is ImportOrExportDeclaration;

declare function isModuleExpression(node: Node_3 | null | undefined, opts?: Opts<ModuleExpression> | null): node is ModuleExpression;

declare function isModuleSpecifier(node: Node_3 | null | undefined, opts?: Opts<ModuleSpecifier> | null): node is ModuleSpecifier;

declare function isNewExpression(node: Node_3 | null | undefined, opts?: Opts<NewExpression> | null): node is NewExpression;

declare function isNode(node: any): node is Node_3;

/**
 * Check if two nodes are equivalent
 */
declare function isNodesEquivalent<T extends Partial<Node_3>>(a: T, b: any): b is T;

declare function isNoop(node: Node_3 | null | undefined, opts?: Opts<Noop> | null): node is Noop;

declare function isNullableTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<NullableTypeAnnotation> | null): node is NullableTypeAnnotation;

declare function isNullLiteral(node: Node_3 | null | undefined, opts?: Opts<NullLiteral> | null): node is NullLiteral;

declare function isNullLiteralTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<NullLiteralTypeAnnotation> | null): node is NullLiteralTypeAnnotation;

/**
 * @deprecated Use `isNumericLiteral`
 */
declare function isNumberLiteral(node: Node_3 | null | undefined, opts?: Opts<NumberLiteral$1> | null): boolean;

declare function isNumberLiteralTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<NumberLiteralTypeAnnotation> | null): node is NumberLiteralTypeAnnotation;

declare function isNumberTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<NumberTypeAnnotation> | null): node is NumberTypeAnnotation;

declare function isNumericLiteral(node: Node_3 | null | undefined, opts?: Opts<NumericLiteral> | null): node is NumericLiteral;

declare function isObjectExpression(node: Node_3 | null | undefined, opts?: Opts<ObjectExpression> | null): node is ObjectExpression;

declare function isObjectMember(node: Node_3 | null | undefined, opts?: Opts<ObjectMember> | null): node is ObjectMember;

declare function isObjectMethod(node: Node_3 | null | undefined, opts?: Opts<ObjectMethod> | null): node is ObjectMethod;

declare function isObjectPattern(node: Node_3 | null | undefined, opts?: Opts<ObjectPattern> | null): node is ObjectPattern;

declare function isObjectProperty(node: Node_3 | null | undefined, opts?: Opts<ObjectProperty> | null): node is ObjectProperty;

declare function isObjectTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<ObjectTypeAnnotation> | null): node is ObjectTypeAnnotation;

declare function isObjectTypeCallProperty(node: Node_3 | null | undefined, opts?: Opts<ObjectTypeCallProperty> | null): node is ObjectTypeCallProperty;

declare function isObjectTypeIndexer(node: Node_3 | null | undefined, opts?: Opts<ObjectTypeIndexer> | null): node is ObjectTypeIndexer;

declare function isObjectTypeInternalSlot(node: Node_3 | null | undefined, opts?: Opts<ObjectTypeInternalSlot> | null): node is ObjectTypeInternalSlot;

declare function isObjectTypeProperty(node: Node_3 | null | undefined, opts?: Opts<ObjectTypeProperty> | null): node is ObjectTypeProperty;

declare function isObjectTypeSpreadProperty(node: Node_3 | null | undefined, opts?: Opts<ObjectTypeSpreadProperty> | null): node is ObjectTypeSpreadProperty;

declare function isOpaqueType(node: Node_3 | null | undefined, opts?: Opts<OpaqueType> | null): node is OpaqueType;

declare function isOptionalCallExpression(node: Node_3 | null | undefined, opts?: Opts<OptionalCallExpression> | null): node is OptionalCallExpression;

declare function isOptionalIndexedAccessType(node: Node_3 | null | undefined, opts?: Opts<OptionalIndexedAccessType> | null): node is OptionalIndexedAccessType;

declare function isOptionalMemberExpression(node: Node_3 | null | undefined, opts?: Opts<OptionalMemberExpression> | null): node is OptionalMemberExpression;

declare function isParenthesizedExpression(node: Node_3 | null | undefined, opts?: Opts<ParenthesizedExpression> | null): node is ParenthesizedExpression;

declare function isPattern(node: Node_3 | null | undefined, opts?: Opts<Pattern> | null): node is Pattern;

declare function isPatternLike(node: Node_3 | null | undefined, opts?: Opts<PatternLike> | null): node is PatternLike;

declare function isPipelineBareFunction(node: Node_3 | null | undefined, opts?: Opts<PipelineBareFunction> | null): node is PipelineBareFunction;

declare function isPipelinePrimaryTopicReference(node: Node_3 | null | undefined, opts?: Opts<PipelinePrimaryTopicReference> | null): node is PipelinePrimaryTopicReference;

declare function isPipelineTopicExpression(node: Node_3 | null | undefined, opts?: Opts<PipelineTopicExpression> | null): node is PipelineTopicExpression;

declare function isPlaceholder(node: Node_3 | null | undefined, opts?: Opts<Placeholder> | null): node is Placeholder;

/**
 * Test if a `placeholderType` is a `targetType` or if `targetType` is an alias of `placeholderType`.
 */
declare function isPlaceholderType(placeholderType: string, targetType: string): boolean;

declare function isPrivate(node: Node_3 | null | undefined, opts?: Opts<Private> | null): node is Private;

declare function isPrivateName(node: Node_3 | null | undefined, opts?: Opts<PrivateName> | null): node is PrivateName;

declare function isProgram(node: Node_3 | null | undefined, opts?: Opts<Program> | null): node is Program;

declare function isProperty(node: Node_3 | null | undefined, opts?: Opts<Property> | null): node is Property;

declare function isPureish(node: Node_3 | null | undefined, opts?: Opts<Pureish> | null): node is Pureish;

declare function isQualifiedTypeIdentifier(node: Node_3 | null | undefined, opts?: Opts<QualifiedTypeIdentifier> | null): node is QualifiedTypeIdentifier;

declare function isRecordExpression(node: Node_3 | null | undefined, opts?: Opts<RecordExpression> | null): node is RecordExpression;

/**
 * Check if the input `node` is a reference to a bound variable.
 */
declare function isReferenced(node: Node_3, parent: Node_3, grandparent?: Node_3): boolean;

/**
 * @deprecated Use `isRegExpLiteral`
 */
declare function isRegexLiteral(node: Node_3 | null | undefined, opts?: Opts<RegexLiteral$1> | null): boolean;

declare function isRegExpLiteral(node: Node_3 | null | undefined, opts?: Opts<RegExpLiteral> | null): node is RegExpLiteral;

declare function isRestElement(node: Node_3 | null | undefined, opts?: Opts<RestElement> | null): node is RestElement;

/**
 * @deprecated Use `isRestElement`
 */
declare function isRestProperty(node: Node_3 | null | undefined, opts?: Opts<RestProperty$1> | null): boolean;

declare function isReturnStatement(node: Node_3 | null | undefined, opts?: Opts<ReturnStatement> | null): node is ReturnStatement;

declare function isScopable(node: Node_3 | null | undefined, opts?: Opts<Scopable> | null): node is Scopable;

/**
 * Check if the input `node` is a scope.
 */
declare function isScope(node: Node_3, parent: Node_3): boolean;

declare function isSequenceExpression(node: Node_3 | null | undefined, opts?: Opts<SequenceExpression> | null): node is SequenceExpression;

/**
 * Check if the input `specifier` is a `default` import or export.
 */
declare function isSpecifierDefault(specifier: ModuleSpecifier): boolean;

declare function isSpreadElement(node: Node_3 | null | undefined, opts?: Opts<SpreadElement> | null): node is SpreadElement;

/**
 * @deprecated Use `isSpreadElement`
 */
declare function isSpreadProperty(node: Node_3 | null | undefined, opts?: Opts<SpreadProperty$1> | null): boolean;

declare function isStandardized(node: Node_3 | null | undefined, opts?: Opts<Standardized> | null): node is Standardized;

declare function isStatement(node: Node_3 | null | undefined, opts?: Opts<Statement> | null): node is Statement;

declare function isStaticBlock(node: Node_3 | null | undefined, opts?: Opts<StaticBlock> | null): node is StaticBlock;

declare function isStringLiteral(node: Node_3 | null | undefined, opts?: Opts<StringLiteral> | null): node is StringLiteral;

declare function isStringLiteralTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<StringLiteralTypeAnnotation> | null): node is StringLiteralTypeAnnotation;

declare function isStringTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<StringTypeAnnotation> | null): node is StringTypeAnnotation;

declare function isSuper(node: Node_3 | null | undefined, opts?: Opts<Super> | null): node is Super;

declare function isSwitchCase(node: Node_3 | null | undefined, opts?: Opts<SwitchCase> | null): node is SwitchCase;

declare function isSwitchStatement(node: Node_3 | null | undefined, opts?: Opts<SwitchStatement> | null): node is SwitchStatement;

declare function isSymbolTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<SymbolTypeAnnotation> | null): node is SymbolTypeAnnotation;

declare function isTaggedTemplateExpression(node: Node_3 | null | undefined, opts?: Opts<TaggedTemplateExpression> | null): node is TaggedTemplateExpression;

declare function isTemplateElement(node: Node_3 | null | undefined, opts?: Opts<TemplateElement> | null): node is TemplateElement;

declare function isTemplateLiteral(node: Node_3 | null | undefined, opts?: Opts<TemplateLiteral> | null): node is TemplateLiteral;

declare function isTerminatorless(node: Node_3 | null | undefined, opts?: Opts<Terminatorless> | null): node is Terminatorless;

declare function isThisExpression(node: Node_3 | null | undefined, opts?: Opts<ThisExpression> | null): node is ThisExpression;

declare function isThisTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<ThisTypeAnnotation> | null): node is ThisTypeAnnotation;

declare function isThrowStatement(node: Node_3 | null | undefined, opts?: Opts<ThrowStatement> | null): node is ThrowStatement;

declare function isTopicReference(node: Node_3 | null | undefined, opts?: Opts<TopicReference> | null): node is TopicReference;

declare function isTryStatement(node: Node_3 | null | undefined, opts?: Opts<TryStatement> | null): node is TryStatement;

declare function isTSAnyKeyword(node: Node_3 | null | undefined, opts?: Opts<TSAnyKeyword> | null): node is TSAnyKeyword;

declare function isTSArrayType(node: Node_3 | null | undefined, opts?: Opts<TSArrayType> | null): node is TSArrayType;

declare function isTSAsExpression(node: Node_3 | null | undefined, opts?: Opts<TSAsExpression> | null): node is TSAsExpression;

declare function isTSBaseType(node: Node_3 | null | undefined, opts?: Opts<TSBaseType> | null): node is TSBaseType;

declare function isTSBigIntKeyword(node: Node_3 | null | undefined, opts?: Opts<TSBigIntKeyword> | null): node is TSBigIntKeyword;

declare function isTSBooleanKeyword(node: Node_3 | null | undefined, opts?: Opts<TSBooleanKeyword> | null): node is TSBooleanKeyword;

declare function isTSCallSignatureDeclaration(node: Node_3 | null | undefined, opts?: Opts<TSCallSignatureDeclaration> | null): node is TSCallSignatureDeclaration;

declare function isTSConditionalType(node: Node_3 | null | undefined, opts?: Opts<TSConditionalType> | null): node is TSConditionalType;

declare function isTSConstructorType(node: Node_3 | null | undefined, opts?: Opts<TSConstructorType> | null): node is TSConstructorType;

declare function isTSConstructSignatureDeclaration(node: Node_3 | null | undefined, opts?: Opts<TSConstructSignatureDeclaration> | null): node is TSConstructSignatureDeclaration;

declare function isTSDeclareFunction(node: Node_3 | null | undefined, opts?: Opts<TSDeclareFunction> | null): node is TSDeclareFunction;

declare function isTSDeclareMethod(node: Node_3 | null | undefined, opts?: Opts<TSDeclareMethod> | null): node is TSDeclareMethod;

declare function isTSEntityName(node: Node_3 | null | undefined, opts?: Opts<TSEntityName> | null): node is TSEntityName;

declare function isTSEnumDeclaration(node: Node_3 | null | undefined, opts?: Opts<TSEnumDeclaration> | null): node is TSEnumDeclaration;

declare function isTSEnumMember(node: Node_3 | null | undefined, opts?: Opts<TSEnumMember> | null): node is TSEnumMember;

declare function isTSExportAssignment(node: Node_3 | null | undefined, opts?: Opts<TSExportAssignment> | null): node is TSExportAssignment;

declare function isTSExpressionWithTypeArguments(node: Node_3 | null | undefined, opts?: Opts<TSExpressionWithTypeArguments> | null): node is TSExpressionWithTypeArguments;

declare function isTSExternalModuleReference(node: Node_3 | null | undefined, opts?: Opts<TSExternalModuleReference> | null): node is TSExternalModuleReference;

declare function isTSFunctionType(node: Node_3 | null | undefined, opts?: Opts<TSFunctionType> | null): node is TSFunctionType;

declare function isTSImportEqualsDeclaration(node: Node_3 | null | undefined, opts?: Opts<TSImportEqualsDeclaration> | null): node is TSImportEqualsDeclaration;

declare function isTSImportType(node: Node_3 | null | undefined, opts?: Opts<TSImportType> | null): node is TSImportType;

declare function isTSIndexedAccessType(node: Node_3 | null | undefined, opts?: Opts<TSIndexedAccessType> | null): node is TSIndexedAccessType;

declare function isTSIndexSignature(node: Node_3 | null | undefined, opts?: Opts<TSIndexSignature> | null): node is TSIndexSignature;

declare function isTSInferType(node: Node_3 | null | undefined, opts?: Opts<TSInferType> | null): node is TSInferType;

declare function isTSInstantiationExpression(node: Node_3 | null | undefined, opts?: Opts<TSInstantiationExpression> | null): node is TSInstantiationExpression;

declare function isTSInterfaceBody(node: Node_3 | null | undefined, opts?: Opts<TSInterfaceBody> | null): node is TSInterfaceBody;

declare function isTSInterfaceDeclaration(node: Node_3 | null | undefined, opts?: Opts<TSInterfaceDeclaration> | null): node is TSInterfaceDeclaration;

declare function isTSIntersectionType(node: Node_3 | null | undefined, opts?: Opts<TSIntersectionType> | null): node is TSIntersectionType;

declare function isTSIntrinsicKeyword(node: Node_3 | null | undefined, opts?: Opts<TSIntrinsicKeyword> | null): node is TSIntrinsicKeyword;

declare function isTSLiteralType(node: Node_3 | null | undefined, opts?: Opts<TSLiteralType> | null): node is TSLiteralType;

declare function isTSMappedType(node: Node_3 | null | undefined, opts?: Opts<TSMappedType> | null): node is TSMappedType;

declare function isTSMethodSignature(node: Node_3 | null | undefined, opts?: Opts<TSMethodSignature> | null): node is TSMethodSignature;

declare function isTSModuleBlock(node: Node_3 | null | undefined, opts?: Opts<TSModuleBlock> | null): node is TSModuleBlock;

declare function isTSModuleDeclaration(node: Node_3 | null | undefined, opts?: Opts<TSModuleDeclaration> | null): node is TSModuleDeclaration;

declare function isTSNamedTupleMember(node: Node_3 | null | undefined, opts?: Opts<TSNamedTupleMember> | null): node is TSNamedTupleMember;

declare function isTSNamespaceExportDeclaration(node: Node_3 | null | undefined, opts?: Opts<TSNamespaceExportDeclaration> | null): node is TSNamespaceExportDeclaration;

declare function isTSNeverKeyword(node: Node_3 | null | undefined, opts?: Opts<TSNeverKeyword> | null): node is TSNeverKeyword;

declare function isTSNonNullExpression(node: Node_3 | null | undefined, opts?: Opts<TSNonNullExpression> | null): node is TSNonNullExpression;

declare function isTSNullKeyword(node: Node_3 | null | undefined, opts?: Opts<TSNullKeyword> | null): node is TSNullKeyword;

declare function isTSNumberKeyword(node: Node_3 | null | undefined, opts?: Opts<TSNumberKeyword> | null): node is TSNumberKeyword;

declare function isTSObjectKeyword(node: Node_3 | null | undefined, opts?: Opts<TSObjectKeyword> | null): node is TSObjectKeyword;

declare function isTSOptionalType(node: Node_3 | null | undefined, opts?: Opts<TSOptionalType> | null): node is TSOptionalType;

declare function isTSParameterProperty(node: Node_3 | null | undefined, opts?: Opts<TSParameterProperty> | null): node is TSParameterProperty;

declare function isTSParenthesizedType(node: Node_3 | null | undefined, opts?: Opts<TSParenthesizedType> | null): node is TSParenthesizedType;

declare function isTSPropertySignature(node: Node_3 | null | undefined, opts?: Opts<TSPropertySignature> | null): node is TSPropertySignature;

declare function isTSQualifiedName(node: Node_3 | null | undefined, opts?: Opts<TSQualifiedName> | null): node is TSQualifiedName;

declare function isTSRestType(node: Node_3 | null | undefined, opts?: Opts<TSRestType> | null): node is TSRestType;

declare function isTSSatisfiesExpression(node: Node_3 | null | undefined, opts?: Opts<TSSatisfiesExpression> | null): node is TSSatisfiesExpression;

declare function isTSStringKeyword(node: Node_3 | null | undefined, opts?: Opts<TSStringKeyword> | null): node is TSStringKeyword;

declare function isTSSymbolKeyword(node: Node_3 | null | undefined, opts?: Opts<TSSymbolKeyword> | null): node is TSSymbolKeyword;

declare function isTSThisType(node: Node_3 | null | undefined, opts?: Opts<TSThisType> | null): node is TSThisType;

declare function isTSTupleType(node: Node_3 | null | undefined, opts?: Opts<TSTupleType> | null): node is TSTupleType;

declare function isTSType(node: Node_3 | null | undefined, opts?: Opts<TSType> | null): node is TSType;

declare function isTSTypeAliasDeclaration(node: Node_3 | null | undefined, opts?: Opts<TSTypeAliasDeclaration> | null): node is TSTypeAliasDeclaration;

declare function isTSTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<TSTypeAnnotation> | null): node is TSTypeAnnotation;

declare function isTSTypeAssertion(node: Node_3 | null | undefined, opts?: Opts<TSTypeAssertion> | null): node is TSTypeAssertion;

declare function isTSTypeElement(node: Node_3 | null | undefined, opts?: Opts<TSTypeElement> | null): node is TSTypeElement;

declare function isTSTypeLiteral(node: Node_3 | null | undefined, opts?: Opts<TSTypeLiteral> | null): node is TSTypeLiteral;

declare function isTSTypeOperator(node: Node_3 | null | undefined, opts?: Opts<TSTypeOperator> | null): node is TSTypeOperator;

declare function isTSTypeParameter(node: Node_3 | null | undefined, opts?: Opts<TSTypeParameter> | null): node is TSTypeParameter;

declare function isTSTypeParameterDeclaration(node: Node_3 | null | undefined, opts?: Opts<TSTypeParameterDeclaration> | null): node is TSTypeParameterDeclaration;

declare function isTSTypeParameterInstantiation(node: Node_3 | null | undefined, opts?: Opts<TSTypeParameterInstantiation> | null): node is TSTypeParameterInstantiation;

declare function isTSTypePredicate(node: Node_3 | null | undefined, opts?: Opts<TSTypePredicate> | null): node is TSTypePredicate;

declare function isTSTypeQuery(node: Node_3 | null | undefined, opts?: Opts<TSTypeQuery> | null): node is TSTypeQuery;

declare function isTSTypeReference(node: Node_3 | null | undefined, opts?: Opts<TSTypeReference> | null): node is TSTypeReference;

declare function isTSUndefinedKeyword(node: Node_3 | null | undefined, opts?: Opts<TSUndefinedKeyword> | null): node is TSUndefinedKeyword;

declare function isTSUnionType(node: Node_3 | null | undefined, opts?: Opts<TSUnionType> | null): node is TSUnionType;

declare function isTSUnknownKeyword(node: Node_3 | null | undefined, opts?: Opts<TSUnknownKeyword> | null): node is TSUnknownKeyword;

declare function isTSVoidKeyword(node: Node_3 | null | undefined, opts?: Opts<TSVoidKeyword> | null): node is TSVoidKeyword;

declare function isTupleExpression(node: Node_3 | null | undefined, opts?: Opts<TupleExpression> | null): node is TupleExpression;

declare function isTupleTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<TupleTypeAnnotation> | null): node is TupleTypeAnnotation;

declare function isType<T extends Node_3["type"]>(nodeType: string, targetType: T): nodeType is T;

declare function isType(nodeType: string | null | undefined, targetType: string): boolean;

declare function isTypeAlias(node: Node_3 | null | undefined, opts?: Opts<TypeAlias> | null): node is TypeAlias;

declare function isTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<TypeAnnotation> | null): node is TypeAnnotation;

declare function isTypeCastExpression(node: Node_3 | null | undefined, opts?: Opts<TypeCastExpression> | null): node is TypeCastExpression;

declare function isTypeofTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<TypeofTypeAnnotation> | null): node is TypeofTypeAnnotation;

declare function isTypeParameter(node: Node_3 | null | undefined, opts?: Opts<TypeParameter> | null): node is TypeParameter;

declare function isTypeParameterDeclaration(node: Node_3 | null | undefined, opts?: Opts<TypeParameterDeclaration> | null): node is TypeParameterDeclaration;

declare function isTypeParameterInstantiation(node: Node_3 | null | undefined, opts?: Opts<TypeParameterInstantiation> | null): node is TypeParameterInstantiation;

declare function isTypeScript(node: Node_3 | null | undefined, opts?: Opts<TypeScript> | null): node is TypeScript;

declare function isUnaryExpression(node: Node_3 | null | undefined, opts?: Opts<UnaryExpression> | null): node is UnaryExpression;

declare function isUnaryLike(node: Node_3 | null | undefined, opts?: Opts<UnaryLike> | null): node is UnaryLike;

declare function isUnionTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<UnionTypeAnnotation> | null): node is UnionTypeAnnotation;

declare function isUpdateExpression(node: Node_3 | null | undefined, opts?: Opts<UpdateExpression> | null): node is UpdateExpression;

declare function isUserWhitespacable(node: Node_3 | null | undefined, opts?: Opts<UserWhitespacable> | null): node is UserWhitespacable;

declare function isV8IntrinsicIdentifier(node: Node_3 | null | undefined, opts?: Opts<V8IntrinsicIdentifier> | null): node is V8IntrinsicIdentifier;

/**
 * Check if the input `name` is a valid identifier name according to the ES3 specification.
 *
 * Additional ES3 reserved words are
 */
declare function isValidES3Identifier(name: string): boolean;

/**
 * Check if the input `name` is a valid identifier name
 * and isn't a reserved word.
 */
declare function isValidIdentifier(name: string, reserved?: boolean): boolean;

/**
 * Check if the input `node` is a variable declaration.
 */
declare function isVar(node: Node_3): boolean;

declare function isVariableDeclaration(node: Node_3 | null | undefined, opts?: Opts<VariableDeclaration> | null): node is VariableDeclaration;

declare function isVariableDeclarator(node: Node_3 | null | undefined, opts?: Opts<VariableDeclarator> | null): node is VariableDeclarator;

declare function isVariance(node: Node_3 | null | undefined, opts?: Opts<Variance> | null): node is Variance;

declare function isVoidTypeAnnotation(node: Node_3 | null | undefined, opts?: Opts<VoidTypeAnnotation> | null): node is VoidTypeAnnotation;

declare function isWhile(node: Node_3 | null | undefined, opts?: Opts<While> | null): node is While;

declare function isWhileStatement(node: Node_3 | null | undefined, opts?: Opts<WhileStatement> | null): node is WhileStatement;

declare function isWithStatement(node: Node_3 | null | undefined, opts?: Opts<WithStatement> | null): node is WithStatement;

declare function isYieldExpression(node: Node_3 | null | undefined, opts?: Opts<YieldExpression> | null): node is YieldExpression;

declare type JSX_2 = JSXAttribute | JSXClosingElement | JSXElement | JSXEmptyExpression | JSXExpressionContainer | JSXSpreadChild | JSXIdentifier | JSXMemberExpression | JSXNamespacedName | JSXOpeningElement | JSXSpreadAttribute | JSXText | JSXFragment | JSXOpeningFragment | JSXClosingFragment;

declare const JSX_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface JSXAttribute extends BaseNode {
    type: "JSXAttribute";
    name: JSXIdentifier | JSXNamespacedName;
    value?: JSXElement | JSXFragment | StringLiteral | JSXExpressionContainer | null;
}

declare function jsxAttribute(name: JSXIdentifier | JSXNamespacedName, value?: JSXElement | JSXFragment | StringLiteral | JSXExpressionContainer | null): JSXAttribute;

declare interface JSXClosingElement extends BaseNode {
    type: "JSXClosingElement";
    name: JSXIdentifier | JSXMemberExpression | JSXNamespacedName;
}

declare function jsxClosingElement(name: JSXIdentifier | JSXMemberExpression | JSXNamespacedName): JSXClosingElement;

declare interface JSXClosingFragment extends BaseNode {
    type: "JSXClosingFragment";
}

declare function jsxClosingFragment(): JSXClosingFragment;

declare interface JSXElement extends BaseNode {
    type: "JSXElement";
    openingElement: JSXOpeningElement;
    closingElement?: JSXClosingElement | null;
    children: Array<JSXText | JSXExpressionContainer | JSXSpreadChild | JSXElement | JSXFragment>;
    selfClosing?: boolean | null;
}

declare function jsxElement(openingElement: JSXOpeningElement, closingElement: JSXClosingElement | null | undefined, children: Array<JSXText | JSXExpressionContainer | JSXSpreadChild | JSXElement | JSXFragment>, selfClosing?: boolean | null): JSXElement;

declare interface JSXEmptyExpression extends BaseNode {
    type: "JSXEmptyExpression";
}

declare function jsxEmptyExpression(): JSXEmptyExpression;

declare interface JSXExpressionContainer extends BaseNode {
    type: "JSXExpressionContainer";
    expression: Expression | JSXEmptyExpression;
}

declare function jsxExpressionContainer(expression: Expression | JSXEmptyExpression): JSXExpressionContainer;

declare interface JSXFragment extends BaseNode {
    type: "JSXFragment";
    openingFragment: JSXOpeningFragment;
    closingFragment: JSXClosingFragment;
    children: Array<JSXText | JSXExpressionContainer | JSXSpreadChild | JSXElement | JSXFragment>;
}

declare function jsxFragment(openingFragment: JSXOpeningFragment, closingFragment: JSXClosingFragment, children: Array<JSXText | JSXExpressionContainer | JSXSpreadChild | JSXElement | JSXFragment>): JSXFragment;

declare interface JSXIdentifier extends BaseNode {
    type: "JSXIdentifier";
    name: string;
}

declare function jsxIdentifier(name: string): JSXIdentifier;

declare interface JSXMemberExpression extends BaseNode {
    type: "JSXMemberExpression";
    object: JSXMemberExpression | JSXIdentifier;
    property: JSXIdentifier;
}

declare function jsxMemberExpression(object: JSXMemberExpression | JSXIdentifier, property: JSXIdentifier): JSXMemberExpression;

declare interface JSXNamespacedName extends BaseNode {
    type: "JSXNamespacedName";
    namespace: JSXIdentifier;
    name: JSXIdentifier;
}

declare function jsxNamespacedName(namespace: JSXIdentifier, name: JSXIdentifier): JSXNamespacedName;

declare interface JSXOpeningElement extends BaseNode {
    type: "JSXOpeningElement";
    name: JSXIdentifier | JSXMemberExpression | JSXNamespacedName;
    attributes: Array<JSXAttribute | JSXSpreadAttribute>;
    selfClosing: boolean;
    typeParameters?: TypeParameterInstantiation | TSTypeParameterInstantiation | null;
}

declare function jsxOpeningElement(name: JSXIdentifier | JSXMemberExpression | JSXNamespacedName, attributes: Array<JSXAttribute | JSXSpreadAttribute>, selfClosing?: boolean): JSXOpeningElement;

declare interface JSXOpeningFragment extends BaseNode {
    type: "JSXOpeningFragment";
}

declare function jsxOpeningFragment(): JSXOpeningFragment;

declare interface JSXSpreadAttribute extends BaseNode {
    type: "JSXSpreadAttribute";
    argument: Expression;
}

declare function jsxSpreadAttribute(argument: Expression): JSXSpreadAttribute;

declare interface JSXSpreadChild extends BaseNode {
    type: "JSXSpreadChild";
    expression: Expression;
}

declare function jsxSpreadChild(expression: Expression): JSXSpreadChild;

declare interface JSXText extends BaseNode {
    type: "JSXText";
    value: string;
}

declare function jsxText(value: string): JSXText;

declare interface LabeledStatement extends BaseNode {
    type: "LabeledStatement";
    label: Identifier;
    body: Statement;
}

declare function labeledStatement(label: Identifier, body: Statement): LabeledStatement;

declare type Literal = StringLiteral | NumericLiteral | NullLiteral | BooleanLiteral | RegExpLiteral | TemplateLiteral | BigIntLiteral | DecimalLiteral;

declare const LITERAL_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

/**
 * Resolve Babel's options fully, resulting in an options object where:
 *
 * * opts.plugins is a full list of Plugin instances.
 * * opts.presets is empty and all presets are flattened into opts.
 * * It can be safely passed back to Babel. Fields like babelrc have been set to false so that later calls to Babel
 * will not make a second attempt to load config files.
 *
 * Plugin instances aren't meant to be manipulated directly, but often callers will serialize this opts to JSON to
 * use it as a cache key representing the options Babel has received. Caching on this isn't 100% guaranteed to
 * invalidate properly, but it is the best we have at the moment.
 */
export declare function loadOptions(options?: TransformOptions): object | null;

/**
 * To allow systems to easily manipulate and validate a user's config, this function resolves the plugins and
 * presets and proceeds no further. The expectation is that callers will take the config's .options, manipulate it
 * as then see fit and pass it back to Babel again.
 *
 * * `babelrc: string | void` - The path of the `.babelrc` file, if there was one.
 * * `babelignore: string | void` - The path of the `.babelignore` file, if there was one.
 * * `options: ValidatedOptions` - The partially resolved options, which can be manipulated and passed back
 * to Babel again.
 *  * `plugins: Array<ConfigItem>` - See below.
 *  * `presets: Array<ConfigItem>` - See below.
 *  * It can be safely passed back to Babel. Fields like `babelrc` have been set to false so that later calls to
 * Babel will not make a second attempt to load config files.
 *
 * `ConfigItem` instances expose properties to introspect the values, but each item should be treated as
 * immutable. If changes are desired, the item should be removed from the list and replaced with either a normal
 * Babel config value, or with a replacement item created by `babel.createConfigItem`. See that function for
 * information about `ConfigItem` fields.
 */
export declare function loadPartialConfig(options?: TransformOptions): Readonly<PartialConfig> | null;

export declare function loadPartialConfigAsync(options?: TransformOptions): Promise<Readonly<PartialConfig> | null>;

declare const LOGICAL_OPERATORS: string[];

declare interface LogicalExpression extends BaseNode {
    type: "LogicalExpression";
    operator: "||" | "&&" | "??";
    left: Expression;
    right: Expression;
}

declare function logicalExpression(operator: "||" | "&&" | "??", left: Expression, right: Expression): LogicalExpression;

declare type Loop = DoWhileStatement | ForInStatement | ForStatement | WhileStatement | ForOfStatement;

declare const LOOP_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare type LVal = Identifier | MemberExpression | RestElement | AssignmentPattern | ArrayPattern | ObjectPattern | TSParameterProperty | TSAsExpression | TSSatisfiesExpression | TSTypeAssertion | TSNonNullExpression;

declare const LVAL_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

/**
 * Determines whether or not the input node `member` matches the
 * input `match`.
 *
 * For example, given the match `React.createClass` it would match the
 * parsed nodes of `React.createClass` and `React["createClass"]`.
 */
declare function matchesPattern(member: Node_3 | null | undefined, match: string | string[], allowPartial?: boolean): boolean;

export declare type MatchPattern = string | RegExp | ((filename: string | undefined, context: MatchPatternContext) => boolean);

export declare interface MatchPatternContext {
    envName: string;
    dirname: string;
    caller: TransformCaller | undefined;
}

declare interface MemberExpression extends BaseNode {
    type: "MemberExpression";
    object: Expression | Super;
    property: Expression | Identifier | PrivateName;
    computed: boolean;
    optional?: true | false | null;
}

declare function memberExpression(object: Expression | Super, property: Expression | Identifier | PrivateName, computed?: boolean, optional?: true | false | null): MemberExpression;

declare interface MetaProperty extends BaseNode {
    type: "MetaProperty";
    meta: Identifier;
    property: Identifier;
}

declare function metaProperty(meta: Identifier, property: Identifier): MetaProperty;

declare type Method = ObjectMethod | ClassMethod | ClassPrivateMethod;

declare const METHOD_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare type Miscellaneous = Noop | Placeholder | V8IntrinsicIdentifier;

declare const MISCELLANEOUS_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface MixedTypeAnnotation extends BaseNode {
    type: "MixedTypeAnnotation";
}

declare function mixedTypeAnnotation(): MixedTypeAnnotation;

declare type ModuleDeclaration = ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ImportDeclaration;

/**
 * @deprecated migrate to IMPORTOREXPORTDECLARATION_TYPES.
 */
declare const MODULEDECLARATION_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface ModuleExpression extends BaseNode {
    type: "ModuleExpression";
    body: Program;
}

declare function moduleExpression(body: Program): ModuleExpression;

declare type ModuleSpecifier = ExportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier | ImportSpecifier | ExportNamespaceSpecifier | ExportDefaultSpecifier;

declare const MODULESPECIFIER_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface NewExpression extends BaseNode {
    type: "NewExpression";
    callee: Expression | Super | V8IntrinsicIdentifier;
    arguments: Array<Expression | SpreadElement | JSXNamespacedName | ArgumentPlaceholder>;
    optional?: true | false | null;
    typeArguments?: TypeParameterInstantiation | null;
    typeParameters?: TSTypeParameterInstantiation | null;
}

declare function newExpression(callee: Expression | Super | V8IntrinsicIdentifier, _arguments: Array<Expression | SpreadElement | JSXNamespacedName | ArgumentPlaceholder>): NewExpression;

declare type Node_2 = types.Node;
export { Node_2 as Node }

declare type Node_3 = AnyTypeAnnotation | ArgumentPlaceholder | ArrayExpression | ArrayPattern | ArrayTypeAnnotation | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BigIntLiteral | BinaryExpression | BindExpression | BlockStatement | BooleanLiteral | BooleanLiteralTypeAnnotation | BooleanTypeAnnotation | BreakStatement | CallExpression | CatchClause | ClassAccessorProperty | ClassBody | ClassDeclaration | ClassExpression | ClassImplements | ClassMethod | ClassPrivateMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | ContinueStatement | DebuggerStatement | DecimalLiteral | DeclareClass | DeclareExportAllDeclaration | DeclareExportDeclaration | DeclareFunction | DeclareInterface | DeclareModule | DeclareModuleExports | DeclareOpaqueType | DeclareTypeAlias | DeclareVariable | DeclaredPredicate | Decorator | Directive | DirectiveLiteral | DoExpression | DoWhileStatement | EmptyStatement | EmptyTypeAnnotation | EnumBooleanBody | EnumBooleanMember | EnumDeclaration | EnumDefaultedMember | EnumNumberBody | EnumNumberMember | EnumStringBody | EnumStringMember | EnumSymbolBody | ExistsTypeAnnotation | ExportAllDeclaration | ExportDefaultDeclaration | ExportDefaultSpecifier | ExportNamedDeclaration | ExportNamespaceSpecifier | ExportSpecifier | ExpressionStatement | File_2 | ForInStatement | ForOfStatement | ForStatement | FunctionDeclaration | FunctionExpression | FunctionTypeAnnotation | FunctionTypeParam | GenericTypeAnnotation | Identifier | IfStatement | Import | ImportAttribute | ImportDeclaration | ImportDefaultSpecifier | ImportExpression | ImportNamespaceSpecifier | ImportSpecifier | IndexedAccessType | InferredPredicate | InterfaceDeclaration | InterfaceExtends | InterfaceTypeAnnotation | InterpreterDirective | IntersectionTypeAnnotation | JSXAttribute | JSXClosingElement | JSXClosingFragment | JSXElement | JSXEmptyExpression | JSXExpressionContainer | JSXFragment | JSXIdentifier | JSXMemberExpression | JSXNamespacedName | JSXOpeningElement | JSXOpeningFragment | JSXSpreadAttribute | JSXSpreadChild | JSXText | LabeledStatement | LogicalExpression | MemberExpression | MetaProperty | MixedTypeAnnotation | ModuleExpression | NewExpression | Noop | NullLiteral | NullLiteralTypeAnnotation | NullableTypeAnnotation | NumberLiteral$1 | NumberLiteralTypeAnnotation | NumberTypeAnnotation | NumericLiteral | ObjectExpression | ObjectMethod | ObjectPattern | ObjectProperty | ObjectTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalCallExpression | OptionalIndexedAccessType | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelinePrimaryTopicReference | PipelineTopicExpression | Placeholder | PrivateName | Program | QualifiedTypeIdentifier | RecordExpression | RegExpLiteral | RegexLiteral$1 | RestElement | RestProperty$1 | ReturnStatement | SequenceExpression | SpreadElement | SpreadProperty$1 | StaticBlock | StringLiteral | StringLiteralTypeAnnotation | StringTypeAnnotation | Super | SwitchCase | SwitchStatement | SymbolTypeAnnotation | TSAnyKeyword | TSArrayType | TSAsExpression | TSBigIntKeyword | TSBooleanKeyword | TSCallSignatureDeclaration | TSConditionalType | TSConstructSignatureDeclaration | TSConstructorType | TSDeclareFunction | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSExpressionWithTypeArguments | TSExternalModuleReference | TSFunctionType | TSImportEqualsDeclaration | TSImportType | TSIndexSignature | TSIndexedAccessType | TSInferType | TSInstantiationExpression | TSInterfaceBody | TSInterfaceDeclaration | TSIntersectionType | TSIntrinsicKeyword | TSLiteralType | TSMappedType | TSMethodSignature | TSModuleBlock | TSModuleDeclaration | TSNamedTupleMember | TSNamespaceExportDeclaration | TSNeverKeyword | TSNonNullExpression | TSNullKeyword | TSNumberKeyword | TSObjectKeyword | TSOptionalType | TSParameterProperty | TSParenthesizedType | TSPropertySignature | TSQualifiedName | TSRestType | TSSatisfiesExpression | TSStringKeyword | TSSymbolKeyword | TSThisType | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeLiteral | TSTypeOperator | TSTypeParameter | TSTypeParameterDeclaration | TSTypeParameterInstantiation | TSTypePredicate | TSTypeQuery | TSTypeReference | TSUndefinedKeyword | TSUnionType | TSUnknownKeyword | TSVoidKeyword | TaggedTemplateExpression | TemplateElement | TemplateLiteral | ThisExpression | ThisTypeAnnotation | ThrowStatement | TopicReference | TryStatement | TupleExpression | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeCastExpression | TypeParameter | TypeParameterDeclaration | TypeParameterInstantiation | TypeofTypeAnnotation | UnaryExpression | UnionTypeAnnotation | UpdateExpression | V8IntrinsicIdentifier | VariableDeclaration | VariableDeclarator | Variance | VoidTypeAnnotation | WhileStatement | WithStatement | YieldExpression;

declare const NODE_FIELDS: Record<string, FieldDefinitions>;

declare const NODE_PARENT_VALIDATIONS: Record<string, Validator>;

declare type NodeKeyOfArrays<T extends Node_3> = {
    [P in keyof T]-?: T[P] extends Array<Node_3 | null | undefined> ? P : never;
}[keyof T];

declare type NodeListType<N, K extends keyof N> = N[K] extends Array<infer P> ? (P extends Node_3 ? P : never) : never;

export declare class NodePath<T = Node_3> {
    constructor(hub: HubInterface, parent: Node_3);
    parent: Node_3;
    hub: Hub;
    data: Record<string | symbol, unknown>;
    context: TraversalContext;
    scope: Scope;
    contexts: TraversalContext[];
    state: any;
    opts: any; // exploded TraverseOptions
    skipKeys: Record<string, boolean> | null;
    parentPath: T extends types.Program ? null : NodePath;
    container: Node_3 | Node_3[] | null;
    listKey: string | null;
    key: string | number | null;
    node: T;
    type: T extends Node_3 ? T["type"] : T extends null | undefined ? undefined : Node_3["type"] | undefined;
    shouldSkip: boolean;
    shouldStop: boolean;
    removed: boolean;
    inList: boolean;
    parentKey: string;
    typeAnnotation: object;

    static get<C extends Node_3, K extends keyof C>(opts: {
        hub?: HubInterface;
        parentPath: NodePath | null;
        parent: Node_3;
        container: C;
        key: K;
    }): NodePath<C[K]>;
    static get<C extends Node_3, L extends NodeKeyOfArrays<C>>(opts: {
        hub?: HubInterface;
        parentPath: NodePath | null;
        parent: Node_3;
        container: C;
        listKey: L;
        key: number;
    }): C[L] extends Array<Node_3 | null | undefined> ? NodePath<C[L][number]> : never;

    getScope(scope: Scope): Scope;

    setData(key: string | symbol, val: any): any;

    getData(key: string | symbol, def?: any): any;

    hasNode(): this is NodePath<Exclude<T, null | undefined>>;

    buildCodeFrameError(msg: string, Error?: ErrorConstructor): Error;

    traverse<T>(visitor: Visitor<T>, state: T): void;
    traverse(visitor: Visitor): void;

    set(key: string, node: any): void;

    getPathLocation(): string;

    // Example: https://github.com/babel/babel/blob/63204ae51e020d84a5b246312f5eeb4d981ab952/packages/babel-traverse/src/path/modification.js#L83
    debug(buildMessage: () => string): void;

    // #region ------------------------- ancestry -------------------------
    /**
     * Starting at the parent path of the current `NodePath` and going up the
     * tree, return the first `NodePath` that causes the provided `callback`
     * to return a truthy value, or `null` if the `callback` never returns a
     * truthy value.
     */
    findParent(callback: (path: NodePath) => boolean): NodePath | null;

    /**
     * Starting at current `NodePath` and going up the tree, return the first
     * `NodePath` that causes the provided `callback` to return a truthy value,
     * or `null` if the `callback` never returns a truthy value.
     */
    find(callback: (path: NodePath) => boolean): NodePath | null;

    /** Get the parent function of the current path. */
    getFunctionParent(): NodePath<types.Function> | null;

    /** Walk up the tree until we hit a parent node path in a list. */
    getStatementParent(): NodePath<types.Statement> | null;

    /**
     * Get the deepest common ancestor and then from it, get the earliest relationship path
     * to that ancestor.
     *
     * Earliest is defined as being "before" all the other nodes in terms of list container
     * position and visiting key.
     */
    getEarliestCommonAncestorFrom(paths: NodePath[]): NodePath;

    /** Get the earliest path in the tree where the provided `paths` intersect. */
    getDeepestCommonAncestorFrom(
    paths: NodePath[],
    filter?: (deepest: Node_3, i: number, ancestries: NodePath[][]) => NodePath,
    ): NodePath;

    /**
     * Build an array of node paths containing the entire ancestry of the current node path.
     *
     * NOTE: The current node path is included in this.
     */
    getAncestry(): [this, ...NodePath[]];

    /**
     * A helper to find if `this` path is an ancestor of `maybeDescendant`
     */
    isAncestor(maybeDescendant: NodePath): boolean;

    /**
     * A helper to find if `this` path is a descendant of `maybeAncestor`
     */
    isDescendant(maybeAncestor: NodePath): boolean;

    inType(...candidateTypes: string[]): boolean;
    // #endregion

    // #region ------------------------- inference -------------------------
    /** Infer the type of the current `NodePath`. */
    getTypeAnnotation(): types.FlowType | types.TSType;

    isBaseType(baseName: string, soft?: boolean): boolean;

    couldBeBaseType(name: string): boolean;

    baseTypeStrictlyMatches(rightArg: NodePath): boolean;

    isGenericType(genericName: string): boolean;
    // #endregion

    // #region ------------------------- replacement -------------------------
    /**
     * Replace a node with an array of multiple. This method performs the following steps:
     *
     *  - Inherit the comments of first provided node with that of the current node.
     *  - Insert the provided nodes after the current node.
     *  - Remove the current node.
     */
    replaceWithMultiple<Nodes extends Node_3 | readonly Node_3[] | [Node_3, ...Node_3[]]>(nodes: Nodes): NodePaths<Nodes>;

    /**
     * Parse a string as an expression and replace the current node with the result.
     *
     * NOTE: This is typically not a good idea to use. Building source strings when
     * transforming ASTs is an antipattern and SHOULD NOT be encouraged. Even if it's
     * easier to use, your transforms will be extremely brittle.
     */
    replaceWithSourceString(replacement: string): [NodePath];

    /** Replace the current node with another. */
    replaceWith<R extends Node_3>(replacementPath: R | NodePath<R>): [NodePath<R>];
    replaceWith<R extends NodePath>(replacementPath: R): [R];

    /**
     * This method takes an array of statements nodes and then explodes it
     * into expressions. This method retains completion records which is
     * extremely important to retain original semantics.
     */
    replaceExpressionWithStatements(nodes: types.Statement[]): NodePaths<types.Expression | types.Statement>;

    replaceInline<Nodes extends Node_3 | readonly Node_3[] | [Node_3, ...Node_3[]]>(nodes: Nodes): NodePaths<Nodes>;
    // #endregion

    // #region ------------------------- evaluation -------------------------
    /**
     * Walk the input `node` and statically evaluate if it's truthy.
     *
     * Returning `true` when we're sure that the expression will evaluate to a
     * truthy value, `false` if we're sure that it will evaluate to a falsy
     * value and `undefined` if we aren't sure. Because of this please do not
     * rely on coercion when using this method and check with === if it's false.
     */
    evaluateTruthy(): boolean | undefined;

    /**
     * Walk the input `node` and statically evaluate it.
     *
     * Returns an object in the form `{ confident, value, deopt }`. `confident`
     * indicates whether or not we had to drop out of evaluating the expression
     * because of hitting an unknown node that we couldn't confidently find the
     * value of, in which case `deopt` is the path of said node.
     *
     * Example:
     *
     *   t.evaluate(parse("5 + 5")) // { confident: true, value: 10 }
     *   t.evaluate(parse("!true")) // { confident: true, value: false }
     *   t.evaluate(parse("foo + foo")) // { confident: false, value: undefined, deopt: NodePath }
     */
    evaluate(): {
        confident: boolean;
        value: any;
        deopt?: NodePath;
    };
    // #endregion

    // #region ------------------------- introspection -------------------------
    /**
     * Match the current node if it matches the provided `pattern`.
     *
     * For example, given the match `React.createClass` it would match the
     * parsed nodes of `React.createClass` and `React["createClass"]`.
     */
    matchesPattern(pattern: string, allowPartial?: boolean): boolean;

    /**
     * Check whether we have the input `key`. If the `key` references an array then we check
     * if the array has any items, otherwise we just check if it's falsy.
     */
    has(key: string): boolean;
    // has(key: keyof T): boolean;

    isStatic(): boolean;

    /** Alias of `has`. */
    is(key: string): boolean;
    // is(key: keyof T): boolean;

    /** Opposite of `has`. */
    isnt(key: string): boolean;
    // isnt(key: keyof T): boolean;

    /** Check whether the path node `key` strict equals `value`. */
    equals(key: string, value: any): boolean;
    // equals(key: keyof T, value: any): boolean;

    /**
     * Check the type against our stored internal type of the node. This is handy when a node has
     * been removed yet we still internally know the type and need it to calculate node replacement.
     */
    isNodeType(type: string): boolean;

    /**
     * This checks whether or not we're in one of the following positions:
     *
     *   for (KEY in right);
     *   for (KEY;;);
     *
     * This is because these spots allow VariableDeclarations AND normal expressions so we need
     * to tell the path replacement that it's ok to replace this with an expression.
     */
    canHaveVariableDeclarationOrExpression(): boolean;

    /**
     * This checks whether we are swapping an arrow function's body between an
     * expression and a block statement (or vice versa).
     *
     * This is because arrow functions may implicitly return an expression, which
     * is the same as containing a block statement.
     */
    canSwapBetweenExpressionAndStatement(replacement: Node_3): boolean;

    /** Check whether the current path references a completion record */
    isCompletionRecord(allowInsideFunction?: boolean): boolean;

    /**
     * Check whether or not the current `key` allows either a single statement or block statement
     * so we can explode it if necessary.
     */
    isStatementOrBlock(): boolean;

    /** Check if the currently assigned path references the `importName` of `moduleSource`. */
    referencesImport(moduleSource: string, importName: string): boolean;

    /** Get the source code associated with this node. */
    getSource(): string;

    /** Check if the current path will maybe execute before another path */
    willIMaybeExecuteBefore(target: NodePath): boolean;

    resolve(dangerous?: boolean, resolved?: NodePath[]): NodePath;

    isConstantExpression(): boolean;

    isInStrictMode(): boolean;
    // #endregion

    // #region ------------------------- context -------------------------
    call(key: string): boolean;

    isDenylisted(): boolean;

    /** @deprecated will be removed in Babel 8 */
    isBlacklisted(): boolean;

    visit(): boolean;

    skip(): void;

    skipKey(key: string): void;

    stop(): void;

    setScope(): void;

    setContext(context?: TraversalContext): this;

    /**
     * Here we resync the node paths `key` and `container`. If they've changed according
     * to what we have stored internally then we attempt to resync by crawling and looking
     * for the new values.
     */
    resync(): void;

    popContext(): void;

    pushContext(context: TraversalContext): void;

    requeue(pathToQueue?: NodePath): void;
    // #endregion

    // #region ------------------------- removal -------------------------
    remove(): void;
    // #endregion

    // #region ------------------------- conversion -------------------------
    toComputedKey(): types.PrivateName | types.Expression;

    /** @deprecated Use `arrowFunctionToExpression` */
    arrowFunctionToShadowed(): void;

    /**
     * Given an arbitrary function, process its content as if it were an arrow function, moving references
     * to "this", "arguments", "super", and such into the function's parent scope. This method is useful if
     * you have wrapped some set of items in an IIFE or other function, but want "this", "arguments", and super"
     * to continue behaving as expected.
     */
    unwrapFunctionEnvironment(): void;

    /**
     * Convert a given arrow function into a normal ES5 function expression.
     */
    arrowFunctionToExpression({
        allowInsertArrow,
        allowInsertArrowWithRest,
        /** @deprecated Use `noNewArrows` instead */
        specCompliant,
        noNewArrows,
    }?: {
        allowInsertArrow?: boolean;
        allowInsertArrowWithRest?: boolean;
        specCompliant?: boolean;
        noNewArrows?: boolean;
    }): NodePath<Exclude<types.Function, types.Method | types.ArrowFunctionExpression> | types.CallExpression>;

    ensureBlock(
    this: NodePath<types.Loop | types.WithStatement | types.Function | types.LabeledStatement | types.CatchClause>,
    ): asserts this is NodePath<
    T & {
        body: types.BlockStatement;
    }
    >;
    // #endregion

    // #region ------------------------- modification -------------------------
    /** Insert the provided nodes before the current one. */
    insertBefore<Nodes extends NodesInsertionParam<Node_3>>(nodes: Nodes): NodePaths<Nodes>;

    /**
     * Insert the provided nodes after the current one. When inserting nodes after an
     * expression, ensure that the completion record is correct by pushing the current node.
     */
    insertAfter<Nodes extends NodesInsertionParam<Node_3>>(nodes: Nodes): NodePaths<Nodes>;

    /** Update all sibling node paths after `fromIndex` by `incrementBy`. */
    updateSiblingKeys(fromIndex: number, incrementBy: number): void;

    /**
     * Insert child nodes at the start of the current node.
     * @param listKey - The key at which the child nodes are stored (usually body).
     * @param nodes - the nodes to insert.
     */
    unshiftContainer<
    T extends Node_3,
    K extends NodeKeyOfArrays<T>,
    Nodes extends NodesInsertionParam<NodeListType<T, K>>,
    >(this: NodePath<T>, listKey: K, nodes: Nodes): NodePaths<Nodes>;

    /**
     * Insert child nodes at the end of the current node.
     * @param listKey - The key at which the child nodes are stored (usually body).
     * @param nodes - the nodes to insert.
     */
    pushContainer<T extends Node_3, K extends NodeKeyOfArrays<T>, Nodes extends NodesInsertionParam<NodeListType<T, K>>>(
    this: NodePath<T>,
    listKey: K,
    nodes: Nodes,
    ): NodePaths<Nodes>;

    /** Hoist the current node to the highest scope possible and return a UID referencing it. */
    hoist(scope: Scope): void;
    // #endregion

    // #region ------------------------- family -------------------------
    getOpposite(): NodePath | null;

    getCompletionRecords(): NodePath[];

    getSibling(key: string | number): NodePath;
    getPrevSibling(): NodePath;
    getNextSibling(): NodePath;
    getAllPrevSiblings(): NodePath[];
    getAllNextSiblings(): NodePath[];

    get<K extends keyof T>(key: K, context?: boolean | TraversalContext): NodePathResult<T[K]>;
    get(key: string, context?: boolean | TraversalContext): NodePath | NodePath[];

    getBindingIdentifiers(duplicates: true): Record<string, types.Identifier[]>;
    getBindingIdentifiers(duplicates?: false): Record<string, types.Identifier>;
    getBindingIdentifiers(duplicates?: boolean): Record<string, types.Identifier | types.Identifier[]>;

    getOuterBindingIdentifiers(duplicates: true): Record<string, types.Identifier[]>;
    getOuterBindingIdentifiers(duplicates?: false): Record<string, types.Identifier>;
    getOuterBindingIdentifiers(duplicates?: boolean): Record<string, types.Identifier | types.Identifier[]>;

    getBindingIdentifierPaths(duplicates: true, outerOnly?: boolean): Record<string, Array<NodePath<types.Identifier>>>;
    getBindingIdentifierPaths(duplicates?: false, outerOnly?: boolean): Record<string, NodePath<types.Identifier>>;
    getBindingIdentifierPaths(
    duplicates?: boolean,
    outerOnly?: boolean,
    ): Record<string, NodePath<types.Identifier> | Array<NodePath<types.Identifier>>>;

    getOuterBindingIdentifierPaths(duplicates: true): Record<string, Array<NodePath<types.Identifier>>>;
    getOuterBindingIdentifierPaths(duplicates?: false): Record<string, NodePath<types.Identifier>>;
    getOuterBindingIdentifierPaths(
    duplicates?: boolean,
    outerOnly?: boolean,
    ): Record<string, NodePath<types.Identifier> | Array<NodePath<types.Identifier>>>;
    // #endregion

    // #region ------------------------- comments -------------------------
    /** Share comments amongst siblings. */
    shareCommentsWithSiblings(): void;

    addComment(type: types.CommentTypeShorthand, content: string, line?: boolean): void;

    /** Give node `comments` of the specified `type`. */
    addComments(type: types.CommentTypeShorthand, comments: types.Comment[]): void;
    // #endregion

    // #region ------------------------- isXXX -------------------------
    isAccessor(opts?: object): this is NodePath<types.Accessor>;
    isAnyTypeAnnotation(opts?: object): this is NodePath<types.AnyTypeAnnotation>;
    isArgumentPlaceholder(opts?: object): this is NodePath<types.ArgumentPlaceholder>;
    isArrayExpression(opts?: object): this is NodePath<types.ArrayExpression>;
    isArrayPattern(opts?: object): this is NodePath<types.ArrayPattern>;
    isArrayTypeAnnotation(opts?: object): this is NodePath<types.ArrayTypeAnnotation>;
    isArrowFunctionExpression(opts?: object): this is NodePath<types.ArrowFunctionExpression>;
    isAssignmentExpression(opts?: object): this is NodePath<types.AssignmentExpression>;
    isAssignmentPattern(opts?: object): this is NodePath<types.AssignmentPattern>;
    isAwaitExpression(opts?: object): this is NodePath<types.AwaitExpression>;
    isBigIntLiteral(opts?: object): this is NodePath<types.BigIntLiteral>;
    isBinary(opts?: object): this is NodePath<types.Binary>;
    isBinaryExpression(opts?: object): this is NodePath<types.BinaryExpression>;
    isBindExpression(opts?: object): this is NodePath<types.BindExpression>;
    isBlock(opts?: object): this is NodePath<types.Block>;
    isBlockParent(opts?: object): this is NodePath<types.BlockParent>;
    isBlockStatement(opts?: object): this is NodePath<types.BlockStatement>;
    isBooleanLiteral(opts?: object): this is NodePath<types.BooleanLiteral>;
    isBooleanLiteralTypeAnnotation(opts?: object): this is NodePath<types.BooleanLiteralTypeAnnotation>;
    isBooleanTypeAnnotation(opts?: object): this is NodePath<types.BooleanTypeAnnotation>;
    isBreakStatement(opts?: object): this is NodePath<types.BreakStatement>;
    isCallExpression(opts?: object): this is NodePath<types.CallExpression>;
    isCatchClause(opts?: object): this is NodePath<types.CatchClause>;
    isClass(opts?: object): this is NodePath<types.Class>;
    isClassAccessorProperty(opts?: object): this is NodePath<types.ClassAccessorProperty>;
    isClassBody(opts?: object): this is NodePath<types.ClassBody>;
    isClassDeclaration(opts?: object): this is NodePath<types.ClassDeclaration>;
    isClassExpression(opts?: object): this is NodePath<types.ClassExpression>;
    isClassImplements(opts?: object): this is NodePath<types.ClassImplements>;
    isClassMethod(opts?: object): this is NodePath<types.ClassMethod>;
    isClassPrivateMethod(opts?: object): this is NodePath<types.ClassPrivateMethod>;
    isClassPrivateProperty(opts?: object): this is NodePath<types.ClassPrivateProperty>;
    isClassProperty(opts?: object): this is NodePath<types.ClassProperty>;
    isCompletionStatement(opts?: object): this is NodePath<types.CompletionStatement>;
    isConditional(opts?: object): this is NodePath<types.Conditional>;
    isConditionalExpression(opts?: object): this is NodePath<types.ConditionalExpression>;
    isContinueStatement(opts?: object): this is NodePath<types.ContinueStatement>;
    isDebuggerStatement(opts?: object): this is NodePath<types.DebuggerStatement>;
    isDecimalLiteral(opts?: object): this is NodePath<types.DecimalLiteral>;
    isDeclaration(opts?: object): this is NodePath<types.Declaration>;
    isDeclareClass(opts?: object): this is NodePath<types.DeclareClass>;
    isDeclareExportAllDeclaration(opts?: object): this is NodePath<types.DeclareExportAllDeclaration>;
    isDeclareExportDeclaration(opts?: object): this is NodePath<types.DeclareExportDeclaration>;
    isDeclareFunction(opts?: object): this is NodePath<types.DeclareFunction>;
    isDeclareInterface(opts?: object): this is NodePath<types.DeclareInterface>;
    isDeclareModule(opts?: object): this is NodePath<types.DeclareModule>;
    isDeclareModuleExports(opts?: object): this is NodePath<types.DeclareModuleExports>;
    isDeclareOpaqueType(opts?: object): this is NodePath<types.DeclareOpaqueType>;
    isDeclareTypeAlias(opts?: object): this is NodePath<types.DeclareTypeAlias>;
    isDeclareVariable(opts?: object): this is NodePath<types.DeclareVariable>;
    isDeclaredPredicate(opts?: object): this is NodePath<types.DeclaredPredicate>;
    isDecorator(opts?: object): this is NodePath<types.Decorator>;
    isDirective(opts?: object): this is NodePath<types.Directive>;
    isDirectiveLiteral(opts?: object): this is NodePath<types.DirectiveLiteral>;
    isDoExpression(opts?: object): this is NodePath<types.DoExpression>;
    isDoWhileStatement(opts?: object): this is NodePath<types.DoWhileStatement>;
    isEmptyStatement(opts?: object): this is NodePath<types.EmptyStatement>;
    isEmptyTypeAnnotation(opts?: object): this is NodePath<types.EmptyTypeAnnotation>;
    isEnumBody(opts?: object): this is NodePath<types.EnumBody>;
    isEnumBooleanBody(opts?: object): this is NodePath<types.EnumBooleanBody>;
    isEnumBooleanMember(opts?: object): this is NodePath<types.EnumBooleanMember>;
    isEnumDeclaration(opts?: object): this is NodePath<types.EnumDeclaration>;
    isEnumDefaultedMember(opts?: object): this is NodePath<types.EnumDefaultedMember>;
    isEnumMember(opts?: object): this is NodePath<types.EnumMember>;
    isEnumNumberBody(opts?: object): this is NodePath<types.EnumNumberBody>;
    isEnumNumberMember(opts?: object): this is NodePath<types.EnumNumberMember>;
    isEnumStringBody(opts?: object): this is NodePath<types.EnumStringBody>;
    isEnumStringMember(opts?: object): this is NodePath<types.EnumStringMember>;
    isEnumSymbolBody(opts?: object): this is NodePath<types.EnumSymbolBody>;
    isExistsTypeAnnotation(opts?: object): this is NodePath<types.ExistsTypeAnnotation>;
    isExportAllDeclaration(opts?: object): this is NodePath<types.ExportAllDeclaration>;
    isExportDeclaration(opts?: object): this is NodePath<types.ExportDeclaration>;
    isExportDefaultDeclaration(opts?: object): this is NodePath<types.ExportDefaultDeclaration>;
    isExportDefaultSpecifier(opts?: object): this is NodePath<types.ExportDefaultSpecifier>;
    isExportNamedDeclaration(opts?: object): this is NodePath<types.ExportNamedDeclaration>;
    isExportNamespaceSpecifier(opts?: object): this is NodePath<types.ExportNamespaceSpecifier>;
    isExportSpecifier(opts?: object): this is NodePath<types.ExportSpecifier>;
    isExpression(opts?: object): this is NodePath<types.Expression>;
    isExpressionStatement(opts?: object): this is NodePath<types.ExpressionStatement>;
    isExpressionWrapper(opts?: object): this is NodePath<types.ExpressionWrapper>;
    isFile(opts?: object): this is NodePath<types.File>;
    isFlow(opts?: object): this is NodePath<types.Flow>;
    isFlowBaseAnnotation(opts?: object): this is NodePath<types.FlowBaseAnnotation>;
    isFlowDeclaration(opts?: object): this is NodePath<types.FlowDeclaration>;
    isFlowPredicate(opts?: object): this is NodePath<types.FlowPredicate>;
    isFlowType(opts?: object): this is NodePath<types.FlowType>;
    isFor(opts?: object): this is NodePath<types.For>;
    isForInStatement(opts?: object): this is NodePath<types.ForInStatement>;
    isForOfStatement(opts?: object): this is NodePath<types.ForOfStatement>;
    isForStatement(opts?: object): this is NodePath<types.ForStatement>;
    isForXStatement(opts?: object): this is NodePath<types.ForXStatement>;
    isFunction(opts?: object): this is NodePath<types.Function>;
    isFunctionDeclaration(opts?: object): this is NodePath<types.FunctionDeclaration>;
    isFunctionExpression(opts?: object): this is NodePath<types.FunctionExpression>;
    isFunctionParent(opts?: object): this is NodePath<types.FunctionParent>;
    isFunctionTypeAnnotation(opts?: object): this is NodePath<types.FunctionTypeAnnotation>;
    isFunctionTypeParam(opts?: object): this is NodePath<types.FunctionTypeParam>;
    isGenericTypeAnnotation(opts?: object): this is NodePath<types.GenericTypeAnnotation>;
    isIdentifier(opts?: object): this is NodePath<types.Identifier>;
    isIfStatement(opts?: object): this is NodePath<types.IfStatement>;
    isImmutable(opts?: object): this is NodePath<types.Immutable>;
    isImport(opts?: object): this is NodePath<types.Import>;
    isImportAttribute(opts?: object): this is NodePath<types.ImportAttribute>;
    isImportDeclaration(opts?: object): this is NodePath<types.ImportDeclaration>;
    isImportDefaultSpecifier(opts?: object): this is NodePath<types.ImportDefaultSpecifier>;
    isImportNamespaceSpecifier(opts?: object): this is NodePath<types.ImportNamespaceSpecifier>;
    isImportSpecifier(opts?: object): this is NodePath<types.ImportSpecifier>;
    isIndexedAccessType(opts?: object): this is NodePath<types.IndexedAccessType>;
    isInferredPredicate(opts?: object): this is NodePath<types.InferredPredicate>;
    isInterfaceDeclaration(opts?: object): this is NodePath<types.InterfaceDeclaration>;
    isInterfaceExtends(opts?: object): this is NodePath<types.InterfaceExtends>;
    isInterfaceTypeAnnotation(opts?: object): this is NodePath<types.InterfaceTypeAnnotation>;
    isInterpreterDirective(opts?: object): this is NodePath<types.InterpreterDirective>;
    isIntersectionTypeAnnotation(opts?: object): this is NodePath<types.IntersectionTypeAnnotation>;
    isJSX(opts?: object): this is NodePath<types.JSX>;
    isJSXAttribute(opts?: object): this is NodePath<types.JSXAttribute>;
    isJSXClosingElement(opts?: object): this is NodePath<types.JSXClosingElement>;
    isJSXClosingFragment(opts?: object): this is NodePath<types.JSXClosingFragment>;
    isJSXElement(opts?: object): this is NodePath<types.JSXElement>;
    isJSXEmptyExpression(opts?: object): this is NodePath<types.JSXEmptyExpression>;
    isJSXExpressionContainer(opts?: object): this is NodePath<types.JSXExpressionContainer>;
    isJSXFragment(opts?: object): this is NodePath<types.JSXFragment>;
    isJSXIdentifier(opts?: object): this is NodePath<types.JSXIdentifier>;
    isJSXMemberExpression(opts?: object): this is NodePath<types.JSXMemberExpression>;
    isJSXNamespacedName(opts?: object): this is NodePath<types.JSXNamespacedName>;
    isJSXOpeningElement(opts?: object): this is NodePath<types.JSXOpeningElement>;
    isJSXOpeningFragment(opts?: object): this is NodePath<types.JSXOpeningFragment>;
    isJSXSpreadAttribute(opts?: object): this is NodePath<types.JSXSpreadAttribute>;
    isJSXSpreadChild(opts?: object): this is NodePath<types.JSXSpreadChild>;
    isJSXText(opts?: object): this is NodePath<types.JSXText>;
    isLVal(opts?: object): this is NodePath<types.LVal>;
    isLabeledStatement(opts?: object): this is NodePath<types.LabeledStatement>;
    isLiteral(opts?: object): this is NodePath<types.Literal>;
    isLogicalExpression(opts?: object): this is NodePath<types.LogicalExpression>;
    isLoop(opts?: object): this is NodePath<types.Loop>;
    isMemberExpression(opts?: object): this is NodePath<types.MemberExpression>;
    isMetaProperty(opts?: object): this is NodePath<types.MetaProperty>;
    isMethod(opts?: object): this is NodePath<types.Method>;
    isMiscellaneous(opts?: object): this is NodePath<types.Miscellaneous>;
    isMixedTypeAnnotation(opts?: object): this is NodePath<types.MixedTypeAnnotation>;
    isModuleDeclaration(opts?: object): this is NodePath<types.ModuleDeclaration>;
    isModuleExpression(opts?: object): this is NodePath<types.ModuleExpression>;
    isModuleSpecifier(opts?: object): this is NodePath<types.ModuleSpecifier>;
    isNewExpression(opts?: object): this is NodePath<types.NewExpression>;
    isNoop(opts?: object): this is NodePath<types.Noop>;
    isNullLiteral(opts?: object): this is NodePath<types.NullLiteral>;
    isNullLiteralTypeAnnotation(opts?: object): this is NodePath<types.NullLiteralTypeAnnotation>;
    isNullableTypeAnnotation(opts?: object): this is NodePath<types.NullableTypeAnnotation>;

    /** @deprecated Use `isNumericLiteral` */
    isNumberLiteral(opts?: object): this is NodePath<types.NumberLiteral>;
    isNumberLiteralTypeAnnotation(opts?: object): this is NodePath<types.NumberLiteralTypeAnnotation>;
    isNumberTypeAnnotation(opts?: object): this is NodePath<types.NumberTypeAnnotation>;
    isNumericLiteral(opts?: object): this is NodePath<types.NumericLiteral>;
    isObjectExpression(opts?: object): this is NodePath<types.ObjectExpression>;
    isObjectMember(opts?: object): this is NodePath<types.ObjectMember>;
    isObjectMethod(opts?: object): this is NodePath<types.ObjectMethod>;
    isObjectPattern(opts?: object): this is NodePath<types.ObjectPattern>;
    isObjectProperty(opts?: object): this is NodePath<types.ObjectProperty>;
    isObjectTypeAnnotation(opts?: object): this is NodePath<types.ObjectTypeAnnotation>;
    isObjectTypeCallProperty(opts?: object): this is NodePath<types.ObjectTypeCallProperty>;
    isObjectTypeIndexer(opts?: object): this is NodePath<types.ObjectTypeIndexer>;
    isObjectTypeInternalSlot(opts?: object): this is NodePath<types.ObjectTypeInternalSlot>;
    isObjectTypeProperty(opts?: object): this is NodePath<types.ObjectTypeProperty>;
    isObjectTypeSpreadProperty(opts?: object): this is NodePath<types.ObjectTypeSpreadProperty>;
    isOpaqueType(opts?: object): this is NodePath<types.OpaqueType>;
    isOptionalCallExpression(opts?: object): this is NodePath<types.OptionalCallExpression>;
    isOptionalIndexedAccessType(opts?: object): this is NodePath<types.OptionalIndexedAccessType>;
    isOptionalMemberExpression(opts?: object): this is NodePath<types.OptionalMemberExpression>;
    isParenthesizedExpression(opts?: object): this is NodePath<types.ParenthesizedExpression>;
    isPattern(opts?: object): this is NodePath<types.Pattern>;
    isPatternLike(opts?: object): this is NodePath<types.PatternLike>;
    isPipelineBareFunction(opts?: object): this is NodePath<types.PipelineBareFunction>;
    isPipelinePrimaryTopicReference(opts?: object): this is NodePath<types.PipelinePrimaryTopicReference>;
    isPipelineTopicExpression(opts?: object): this is NodePath<types.PipelineTopicExpression>;
    isPlaceholder(opts?: object): this is NodePath<types.Placeholder>;
    isPrivate(opts?: object): this is NodePath<types.Private>;
    isPrivateName(opts?: object): this is NodePath<types.PrivateName>;
    isProgram(opts?: object): this is NodePath<types.Program>;
    isProperty(opts?: object): this is NodePath<types.Property>;
    isPureish(opts?: object): this is NodePath<types.Pureish>;
    isQualifiedTypeIdentifier(opts?: object): this is NodePath<types.QualifiedTypeIdentifier>;
    isRecordExpression(opts?: object): this is NodePath<types.RecordExpression>;
    isRegExpLiteral(opts?: object): this is NodePath<types.RegExpLiteral>;

    /** @deprecated Use `isRegExpLiteral` */
    isRegexLiteral(opts?: object): this is NodePath<types.RegexLiteral>;
    isRestElement(opts?: object): this is NodePath<types.RestElement>;

    /** @deprecated Use `isRestElement` */
    isRestProperty(opts?: object): this is NodePath<types.RestProperty>;
    isReturnStatement(opts?: object): this is NodePath<types.ReturnStatement>;
    isScopable(opts?: object): this is NodePath<types.Scopable>;
    isSequenceExpression(opts?: object): this is NodePath<types.SequenceExpression>;
    isSpreadElement(opts?: object): this is NodePath<types.SpreadElement>;

    /** @deprecated Use `isSpreadElement` */
    isSpreadProperty(opts?: object): this is NodePath<types.SpreadProperty>;
    isStandardized(opts?: object): this is NodePath<types.Standardized>;
    isStatement(opts?: object): this is NodePath<types.Statement>;
    isStaticBlock(opts?: object): this is NodePath<types.StaticBlock>;
    isStringLiteral(opts?: object): this is NodePath<types.StringLiteral>;
    isStringLiteralTypeAnnotation(opts?: object): this is NodePath<types.StringLiteralTypeAnnotation>;
    isStringTypeAnnotation(opts?: object): this is NodePath<types.StringTypeAnnotation>;
    isSuper(opts?: object): this is NodePath<types.Super>;
    isSwitchCase(opts?: object): this is NodePath<types.SwitchCase>;
    isSwitchStatement(opts?: object): this is NodePath<types.SwitchStatement>;
    isSymbolTypeAnnotation(opts?: object): this is NodePath<types.SymbolTypeAnnotation>;
    isTSAnyKeyword(opts?: object): this is NodePath<types.TSAnyKeyword>;
    isTSArrayType(opts?: object): this is NodePath<types.TSArrayType>;
    isTSAsExpression(opts?: object): this is NodePath<types.TSAsExpression>;
    isTSBaseType(opts?: object): this is NodePath<types.TSBaseType>;
    isTSBigIntKeyword(opts?: object): this is NodePath<types.TSBigIntKeyword>;
    isTSBooleanKeyword(opts?: object): this is NodePath<types.TSBooleanKeyword>;
    isTSCallSignatureDeclaration(opts?: object): this is NodePath<types.TSCallSignatureDeclaration>;
    isTSConditionalType(opts?: object): this is NodePath<types.TSConditionalType>;
    isTSConstructSignatureDeclaration(opts?: object): this is NodePath<types.TSConstructSignatureDeclaration>;
    isTSConstructorType(opts?: object): this is NodePath<types.TSConstructorType>;
    isTSDeclareFunction(opts?: object): this is NodePath<types.TSDeclareFunction>;
    isTSDeclareMethod(opts?: object): this is NodePath<types.TSDeclareMethod>;
    isTSEntityName(opts?: object): this is NodePath<types.TSEntityName>;
    isTSEnumDeclaration(opts?: object): this is NodePath<types.TSEnumDeclaration>;
    isTSEnumMember(opts?: object): this is NodePath<types.TSEnumMember>;
    isTSExportAssignment(opts?: object): this is NodePath<types.TSExportAssignment>;
    isTSExpressionWithTypeArguments(opts?: object): this is NodePath<types.TSExpressionWithTypeArguments>;
    isTSExternalModuleReference(opts?: object): this is NodePath<types.TSExternalModuleReference>;
    isTSFunctionType(opts?: object): this is NodePath<types.TSFunctionType>;
    isTSImportEqualsDeclaration(opts?: object): this is NodePath<types.TSImportEqualsDeclaration>;
    isTSImportType(opts?: object): this is NodePath<types.TSImportType>;
    isTSIndexSignature(opts?: object): this is NodePath<types.TSIndexSignature>;
    isTSIndexedAccessType(opts?: object): this is NodePath<types.TSIndexedAccessType>;
    isTSInferType(opts?: object): this is NodePath<types.TSInferType>;
    isTSInstantiationExpression(opts?: object): this is NodePath<types.TSInstantiationExpression>;
    isTSInterfaceBody(opts?: object): this is NodePath<types.TSInterfaceBody>;
    isTSInterfaceDeclaration(opts?: object): this is NodePath<types.TSInterfaceDeclaration>;
    isTSIntersectionType(opts?: object): this is NodePath<types.TSIntersectionType>;
    isTSIntrinsicKeyword(opts?: object): this is NodePath<types.TSIntrinsicKeyword>;
    isTSLiteralType(opts?: object): this is NodePath<types.TSLiteralType>;
    isTSMappedType(opts?: object): this is NodePath<types.TSMappedType>;
    isTSMethodSignature(opts?: object): this is NodePath<types.TSMethodSignature>;
    isTSModuleBlock(opts?: object): this is NodePath<types.TSModuleBlock>;
    isTSModuleDeclaration(opts?: object): this is NodePath<types.TSModuleDeclaration>;
    isTSNamedTupleMember(opts?: object): this is NodePath<types.TSNamedTupleMember>;
    isTSNamespaceExportDeclaration(opts?: object): this is NodePath<types.TSNamespaceExportDeclaration>;
    isTSNeverKeyword(opts?: object): this is NodePath<types.TSNeverKeyword>;
    isTSNonNullExpression(opts?: object): this is NodePath<types.TSNonNullExpression>;
    isTSNullKeyword(opts?: object): this is NodePath<types.TSNullKeyword>;
    isTSNumberKeyword(opts?: object): this is NodePath<types.TSNumberKeyword>;
    isTSObjectKeyword(opts?: object): this is NodePath<types.TSObjectKeyword>;
    isTSOptionalType(opts?: object): this is NodePath<types.TSOptionalType>;
    isTSParameterProperty(opts?: object): this is NodePath<types.TSParameterProperty>;
    isTSParenthesizedType(opts?: object): this is NodePath<types.TSParenthesizedType>;
    isTSPropertySignature(opts?: object): this is NodePath<types.TSPropertySignature>;
    isTSQualifiedName(opts?: object): this is NodePath<types.TSQualifiedName>;
    isTSRestType(opts?: object): this is NodePath<types.TSRestType>;
    isTSSatisfiesExpression(opts?: object): this is NodePath<types.TSSatisfiesExpression>;
    isTSStringKeyword(opts?: object): this is NodePath<types.TSStringKeyword>;
    isTSSymbolKeyword(opts?: object): this is NodePath<types.TSSymbolKeyword>;
    isTSThisType(opts?: object): this is NodePath<types.TSThisType>;
    isTSTupleType(opts?: object): this is NodePath<types.TSTupleType>;
    isTSType(opts?: object): this is NodePath<types.TSType>;
    isTSTypeAliasDeclaration(opts?: object): this is NodePath<types.TSTypeAliasDeclaration>;
    isTSTypeAnnotation(opts?: object): this is NodePath<types.TSTypeAnnotation>;
    isTSTypeAssertion(opts?: object): this is NodePath<types.TSTypeAssertion>;
    isTSTypeElement(opts?: object): this is NodePath<types.TSTypeElement>;
    isTSTypeLiteral(opts?: object): this is NodePath<types.TSTypeLiteral>;
    isTSTypeOperator(opts?: object): this is NodePath<types.TSTypeOperator>;
    isTSTypeParameter(opts?: object): this is NodePath<types.TSTypeParameter>;
    isTSTypeParameterDeclaration(opts?: object): this is NodePath<types.TSTypeParameterDeclaration>;
    isTSTypeParameterInstantiation(opts?: object): this is NodePath<types.TSTypeParameterInstantiation>;
    isTSTypePredicate(opts?: object): this is NodePath<types.TSTypePredicate>;
    isTSTypeQuery(opts?: object): this is NodePath<types.TSTypeQuery>;
    isTSTypeReference(opts?: object): this is NodePath<types.TSTypeReference>;
    isTSUndefinedKeyword(opts?: object): this is NodePath<types.TSUndefinedKeyword>;
    isTSUnionType(opts?: object): this is NodePath<types.TSUnionType>;
    isTSUnknownKeyword(opts?: object): this is NodePath<types.TSUnknownKeyword>;
    isTSVoidKeyword(opts?: object): this is NodePath<types.TSVoidKeyword>;
    isTaggedTemplateExpression(opts?: object): this is NodePath<types.TaggedTemplateExpression>;
    isTemplateElement(opts?: object): this is NodePath<types.TemplateElement>;
    isTemplateLiteral(opts?: object): this is NodePath<types.TemplateLiteral>;
    isTerminatorless(opts?: object): this is NodePath<types.Terminatorless>;
    isThisExpression(opts?: object): this is NodePath<types.ThisExpression>;
    isThisTypeAnnotation(opts?: object): this is NodePath<types.ThisTypeAnnotation>;
    isThrowStatement(opts?: object): this is NodePath<types.ThrowStatement>;
    isTopicReference(opts?: object): this is NodePath<types.TopicReference>;
    isTryStatement(opts?: object): this is NodePath<types.TryStatement>;
    isTupleExpression(opts?: object): this is NodePath<types.TupleExpression>;
    isTupleTypeAnnotation(opts?: object): this is NodePath<types.TupleTypeAnnotation>;
    isTypeAlias(opts?: object): this is NodePath<types.TypeAlias>;
    isTypeAnnotation(opts?: object): this is NodePath<types.TypeAnnotation>;
    isTypeCastExpression(opts?: object): this is NodePath<types.TypeCastExpression>;
    isTypeParameter(opts?: object): this is NodePath<types.TypeParameter>;
    isTypeParameterDeclaration(opts?: object): this is NodePath<types.TypeParameterDeclaration>;
    isTypeParameterInstantiation(opts?: object): this is NodePath<types.TypeParameterInstantiation>;
    isTypeScript(opts?: object): this is NodePath<types.TypeScript>;
    isTypeofTypeAnnotation(opts?: object): this is NodePath<types.TypeofTypeAnnotation>;
    isUnaryExpression(opts?: object): this is NodePath<types.UnaryExpression>;
    isUnaryLike(opts?: object): this is NodePath<types.UnaryLike>;
    isUnionTypeAnnotation(opts?: object): this is NodePath<types.UnionTypeAnnotation>;
    isUpdateExpression(opts?: object): this is NodePath<types.UpdateExpression>;
    isUserWhitespacable(opts?: object): this is NodePath<types.UserWhitespacable>;
    isV8IntrinsicIdentifier(opts?: object): this is NodePath<types.V8IntrinsicIdentifier>;
    isVariableDeclaration(opts?: object): this is NodePath<types.VariableDeclaration>;
    isVariableDeclarator(opts?: object): this is NodePath<types.VariableDeclarator>;
    isVariance(opts?: object): this is NodePath<types.Variance>;
    isVoidTypeAnnotation(opts?: object): this is NodePath<types.VoidTypeAnnotation>;
    isWhile(opts?: object): this is NodePath<types.While>;
    isWhileStatement(opts?: object): this is NodePath<types.WhileStatement>;
    isWithStatement(opts?: object): this is NodePath<types.WithStatement>;
    isYieldExpression(opts?: object): this is NodePath<types.YieldExpression>;

    isBindingIdentifier(opts?: object): this is NodePath<VirtualTypeAliases["BindingIdentifier"]>;
    isBlockScoped(opts?: object): this is NodePath<types.FunctionDeclaration | types.ClassDeclaration | types.VariableDeclaration>;

    /** @deprecated */
    isExistentialTypeParam(opts?: object): this is NodePath<VirtualTypeAliases["ExistentialTypeParam"]>;
    isForAwaitStatement(opts?: object): this is NodePath<VirtualTypeAliases["ForAwaitStatement"]>;
    isGenerated(opts?: object): boolean;

    /** @deprecated */
    isNumericLiteralTypeAnnotation(opts?: object): void;
    isPure(opts?: object): boolean;
    isReferenced(opts?: object): boolean;
    isReferencedIdentifier(opts?: object): this is NodePath<VirtualTypeAliases["ReferencedIdentifier"]>;
    isReferencedMemberExpression(opts?: object): this is NodePath<VirtualTypeAliases["ReferencedMemberExpression"]>;
    isScope(opts?: object): this is NodePath<VirtualTypeAliases["Scope"]>;
    isUser(opts?: object): boolean;
    isVar(opts?: object): this is NodePath<VirtualTypeAliases["Var"]>;
    // #endregion

    // #region ------------------------- assertXXX -------------------------
    assertAccessor(opts?: object): asserts this is NodePath<types.Accessor>;
    assertAnyTypeAnnotation(opts?: object): asserts this is NodePath<types.AnyTypeAnnotation>;
    assertArgumentPlaceholder(opts?: object): asserts this is NodePath<types.ArgumentPlaceholder>;
    assertArrayExpression(opts?: object): asserts this is NodePath<types.ArrayExpression>;
    assertArrayPattern(opts?: object): asserts this is NodePath<types.ArrayPattern>;
    assertArrayTypeAnnotation(opts?: object): asserts this is NodePath<types.ArrayTypeAnnotation>;
    assertArrowFunctionExpression(opts?: object): asserts this is NodePath<types.ArrowFunctionExpression>;
    assertAssignmentExpression(opts?: object): asserts this is NodePath<types.AssignmentExpression>;
    assertAssignmentPattern(opts?: object): asserts this is NodePath<types.AssignmentPattern>;
    assertAwaitExpression(opts?: object): asserts this is NodePath<types.AwaitExpression>;
    assertBigIntLiteral(opts?: object): asserts this is NodePath<types.BigIntLiteral>;
    assertBinary(opts?: object): asserts this is NodePath<types.Binary>;
    assertBinaryExpression(opts?: object): asserts this is NodePath<types.BinaryExpression>;
    assertBindExpression(opts?: object): asserts this is NodePath<types.BindExpression>;
    assertBlock(opts?: object): asserts this is NodePath<types.Block>;
    assertBlockParent(opts?: object): asserts this is NodePath<types.BlockParent>;
    assertBlockStatement(opts?: object): asserts this is NodePath<types.BlockStatement>;
    assertBooleanLiteral(opts?: object): asserts this is NodePath<types.BooleanLiteral>;
    assertBooleanLiteralTypeAnnotation(opts?: object): asserts this is NodePath<types.BooleanLiteralTypeAnnotation>;
    assertBooleanTypeAnnotation(opts?: object): asserts this is NodePath<types.BooleanTypeAnnotation>;
    assertBreakStatement(opts?: object): asserts this is NodePath<types.BreakStatement>;
    assertCallExpression(opts?: object): asserts this is NodePath<types.CallExpression>;
    assertCatchClause(opts?: object): asserts this is NodePath<types.CatchClause>;
    assertClass(opts?: object): asserts this is NodePath<types.Class>;
    assertClassAccessorProperty(opts?: object): asserts this is NodePath<types.ClassAccessorProperty>;
    assertClassBody(opts?: object): asserts this is NodePath<types.ClassBody>;
    assertClassDeclaration(opts?: object): asserts this is NodePath<types.ClassDeclaration>;
    assertClassExpression(opts?: object): asserts this is NodePath<types.ClassExpression>;
    assertClassImplements(opts?: object): asserts this is NodePath<types.ClassImplements>;
    assertClassMethod(opts?: object): asserts this is NodePath<types.ClassMethod>;
    assertClassPrivateMethod(opts?: object): asserts this is NodePath<types.ClassPrivateMethod>;
    assertClassPrivateProperty(opts?: object): asserts this is NodePath<types.ClassPrivateProperty>;
    assertClassProperty(opts?: object): asserts this is NodePath<types.ClassProperty>;
    assertCompletionStatement(opts?: object): asserts this is NodePath<types.CompletionStatement>;
    assertConditional(opts?: object): asserts this is NodePath<types.Conditional>;
    assertConditionalExpression(opts?: object): asserts this is NodePath<types.ConditionalExpression>;
    assertContinueStatement(opts?: object): asserts this is NodePath<types.ContinueStatement>;
    assertDebuggerStatement(opts?: object): asserts this is NodePath<types.DebuggerStatement>;
    assertDecimalLiteral(opts?: object): asserts this is NodePath<types.DecimalLiteral>;
    assertDeclaration(opts?: object): asserts this is NodePath<types.Declaration>;
    assertDeclareClass(opts?: object): asserts this is NodePath<types.DeclareClass>;
    assertDeclareExportAllDeclaration(opts?: object): asserts this is NodePath<types.DeclareExportAllDeclaration>;
    assertDeclareExportDeclaration(opts?: object): asserts this is NodePath<types.DeclareExportDeclaration>;
    assertDeclareFunction(opts?: object): asserts this is NodePath<types.DeclareFunction>;
    assertDeclareInterface(opts?: object): asserts this is NodePath<types.DeclareInterface>;
    assertDeclareModule(opts?: object): asserts this is NodePath<types.DeclareModule>;
    assertDeclareModuleExports(opts?: object): asserts this is NodePath<types.DeclareModuleExports>;
    assertDeclareOpaqueType(opts?: object): asserts this is NodePath<types.DeclareOpaqueType>;
    assertDeclareTypeAlias(opts?: object): asserts this is NodePath<types.DeclareTypeAlias>;
    assertDeclareVariable(opts?: object): asserts this is NodePath<types.DeclareVariable>;
    assertDeclaredPredicate(opts?: object): asserts this is NodePath<types.DeclaredPredicate>;
    assertDecorator(opts?: object): asserts this is NodePath<types.Decorator>;
    assertDirective(opts?: object): asserts this is NodePath<types.Directive>;
    assertDirectiveLiteral(opts?: object): asserts this is NodePath<types.DirectiveLiteral>;
    assertDoExpression(opts?: object): asserts this is NodePath<types.DoExpression>;
    assertDoWhileStatement(opts?: object): asserts this is NodePath<types.DoWhileStatement>;
    assertEmptyStatement(opts?: object): asserts this is NodePath<types.EmptyStatement>;
    assertEmptyTypeAnnotation(opts?: object): asserts this is NodePath<types.EmptyTypeAnnotation>;
    assertEnumBody(opts?: object): asserts this is NodePath<types.EnumBody>;
    assertEnumBooleanBody(opts?: object): asserts this is NodePath<types.EnumBooleanBody>;
    assertEnumBooleanMember(opts?: object): asserts this is NodePath<types.EnumBooleanMember>;
    assertEnumDeclaration(opts?: object): asserts this is NodePath<types.EnumDeclaration>;
    assertEnumDefaultedMember(opts?: object): asserts this is NodePath<types.EnumDefaultedMember>;
    assertEnumMember(opts?: object): asserts this is NodePath<types.EnumMember>;
    assertEnumNumberBody(opts?: object): asserts this is NodePath<types.EnumNumberBody>;
    assertEnumNumberMember(opts?: object): asserts this is NodePath<types.EnumNumberMember>;
    assertEnumStringBody(opts?: object): asserts this is NodePath<types.EnumStringBody>;
    assertEnumStringMember(opts?: object): asserts this is NodePath<types.EnumStringMember>;
    assertEnumSymbolBody(opts?: object): asserts this is NodePath<types.EnumSymbolBody>;
    assertExistsTypeAnnotation(opts?: object): asserts this is NodePath<types.ExistsTypeAnnotation>;
    assertExportAllDeclaration(opts?: object): asserts this is NodePath<types.ExportAllDeclaration>;
    assertExportDeclaration(opts?: object): asserts this is NodePath<types.ExportDeclaration>;
    assertExportDefaultDeclaration(opts?: object): asserts this is NodePath<types.ExportDefaultDeclaration>;
    assertExportDefaultSpecifier(opts?: object): asserts this is NodePath<types.ExportDefaultSpecifier>;
    assertExportNamedDeclaration(opts?: object): asserts this is NodePath<types.ExportNamedDeclaration>;
    assertExportNamespaceSpecifier(opts?: object): asserts this is NodePath<types.ExportNamespaceSpecifier>;
    assertExportSpecifier(opts?: object): asserts this is NodePath<types.ExportSpecifier>;
    assertExpression(opts?: object): asserts this is NodePath<types.Expression>;
    assertExpressionStatement(opts?: object): asserts this is NodePath<types.ExpressionStatement>;
    assertExpressionWrapper(opts?: object): asserts this is NodePath<types.ExpressionWrapper>;
    assertFile(opts?: object): asserts this is NodePath<types.File>;
    assertFlow(opts?: object): asserts this is NodePath<types.Flow>;
    assertFlowBaseAnnotation(opts?: object): asserts this is NodePath<types.FlowBaseAnnotation>;
    assertFlowDeclaration(opts?: object): asserts this is NodePath<types.FlowDeclaration>;
    assertFlowPredicate(opts?: object): asserts this is NodePath<types.FlowPredicate>;
    assertFlowType(opts?: object): asserts this is NodePath<types.FlowType>;
    assertFor(opts?: object): asserts this is NodePath<types.For>;
    assertForInStatement(opts?: object): asserts this is NodePath<types.ForInStatement>;
    assertForOfStatement(opts?: object): asserts this is NodePath<types.ForOfStatement>;
    assertForStatement(opts?: object): asserts this is NodePath<types.ForStatement>;
    assertForXStatement(opts?: object): asserts this is NodePath<types.ForXStatement>;
    assertFunction(opts?: object): asserts this is NodePath<types.Function>;
    assertFunctionDeclaration(opts?: object): asserts this is NodePath<types.FunctionDeclaration>;
    assertFunctionExpression(opts?: object): asserts this is NodePath<types.FunctionExpression>;
    assertFunctionParent(opts?: object): asserts this is NodePath<types.FunctionParent>;
    assertFunctionTypeAnnotation(opts?: object): asserts this is NodePath<types.FunctionTypeAnnotation>;
    assertFunctionTypeParam(opts?: object): asserts this is NodePath<types.FunctionTypeParam>;
    assertGenericTypeAnnotation(opts?: object): asserts this is NodePath<types.GenericTypeAnnotation>;
    assertIdentifier(opts?: object): asserts this is NodePath<types.Identifier>;
    assertIfStatement(opts?: object): asserts this is NodePath<types.IfStatement>;
    assertImmutable(opts?: object): asserts this is NodePath<types.Immutable>;
    assertImport(opts?: object): asserts this is NodePath<types.Import>;
    assertImportAttribute(opts?: object): asserts this is NodePath<types.ImportAttribute>;
    assertImportDeclaration(opts?: object): asserts this is NodePath<types.ImportDeclaration>;
    assertImportDefaultSpecifier(opts?: object): asserts this is NodePath<types.ImportDefaultSpecifier>;
    assertImportNamespaceSpecifier(opts?: object): asserts this is NodePath<types.ImportNamespaceSpecifier>;
    assertImportSpecifier(opts?: object): asserts this is NodePath<types.ImportSpecifier>;
    assertIndexedAccessType(opts?: object): asserts this is NodePath<types.IndexedAccessType>;
    assertInferredPredicate(opts?: object): asserts this is NodePath<types.InferredPredicate>;
    assertInterfaceDeclaration(opts?: object): asserts this is NodePath<types.InterfaceDeclaration>;
    assertInterfaceExtends(opts?: object): asserts this is NodePath<types.InterfaceExtends>;
    assertInterfaceTypeAnnotation(opts?: object): asserts this is NodePath<types.InterfaceTypeAnnotation>;
    assertInterpreterDirective(opts?: object): asserts this is NodePath<types.InterpreterDirective>;
    assertIntersectionTypeAnnotation(opts?: object): asserts this is NodePath<types.IntersectionTypeAnnotation>;
    assertJSX(opts?: object): asserts this is NodePath<types.JSX>;
    assertJSXAttribute(opts?: object): asserts this is NodePath<types.JSXAttribute>;
    assertJSXClosingElement(opts?: object): asserts this is NodePath<types.JSXClosingElement>;
    assertJSXClosingFragment(opts?: object): asserts this is NodePath<types.JSXClosingFragment>;
    assertJSXElement(opts?: object): asserts this is NodePath<types.JSXElement>;
    assertJSXEmptyExpression(opts?: object): asserts this is NodePath<types.JSXEmptyExpression>;
    assertJSXExpressionContainer(opts?: object): asserts this is NodePath<types.JSXExpressionContainer>;
    assertJSXFragment(opts?: object): asserts this is NodePath<types.JSXFragment>;
    assertJSXIdentifier(opts?: object): asserts this is NodePath<types.JSXIdentifier>;
    assertJSXMemberExpression(opts?: object): asserts this is NodePath<types.JSXMemberExpression>;
    assertJSXNamespacedName(opts?: object): asserts this is NodePath<types.JSXNamespacedName>;
    assertJSXOpeningElement(opts?: object): asserts this is NodePath<types.JSXOpeningElement>;
    assertJSXOpeningFragment(opts?: object): asserts this is NodePath<types.JSXOpeningFragment>;
    assertJSXSpreadAttribute(opts?: object): asserts this is NodePath<types.JSXSpreadAttribute>;
    assertJSXSpreadChild(opts?: object): asserts this is NodePath<types.JSXSpreadChild>;
    assertJSXText(opts?: object): asserts this is NodePath<types.JSXText>;
    assertLVal(opts?: object): asserts this is NodePath<types.LVal>;
    assertLabeledStatement(opts?: object): asserts this is NodePath<types.LabeledStatement>;
    assertLiteral(opts?: object): asserts this is NodePath<types.Literal>;
    assertLogicalExpression(opts?: object): asserts this is NodePath<types.LogicalExpression>;
    assertLoop(opts?: object): asserts this is NodePath<types.Loop>;
    assertMemberExpression(opts?: object): asserts this is NodePath<types.MemberExpression>;
    assertMetaProperty(opts?: object): asserts this is NodePath<types.MetaProperty>;
    assertMethod(opts?: object): asserts this is NodePath<types.Method>;
    assertMiscellaneous(opts?: object): asserts this is NodePath<types.Miscellaneous>;
    assertMixedTypeAnnotation(opts?: object): asserts this is NodePath<types.MixedTypeAnnotation>;
    assertModuleDeclaration(opts?: object): asserts this is NodePath<types.ModuleDeclaration>;
    assertModuleExpression(opts?: object): asserts this is NodePath<types.ModuleExpression>;
    assertModuleSpecifier(opts?: object): asserts this is NodePath<types.ModuleSpecifier>;
    assertNewExpression(opts?: object): asserts this is NodePath<types.NewExpression>;
    assertNoop(opts?: object): asserts this is NodePath<types.Noop>;
    assertNullLiteral(opts?: object): asserts this is NodePath<types.NullLiteral>;
    assertNullLiteralTypeAnnotation(opts?: object): asserts this is NodePath<types.NullLiteralTypeAnnotation>;
    assertNullableTypeAnnotation(opts?: object): asserts this is NodePath<types.NullableTypeAnnotation>;

    /** @deprecated Use `assertNumericLiteral` */
    assertNumberLiteral(opts?: object): asserts this is NodePath<types.NumberLiteral>;
    assertNumberLiteralTypeAnnotation(opts?: object): asserts this is NodePath<types.NumberLiteralTypeAnnotation>;
    assertNumberTypeAnnotation(opts?: object): asserts this is NodePath<types.NumberTypeAnnotation>;
    assertNumericLiteral(opts?: object): asserts this is NodePath<types.NumericLiteral>;
    assertObjectExpression(opts?: object): asserts this is NodePath<types.ObjectExpression>;
    assertObjectMember(opts?: object): asserts this is NodePath<types.ObjectMember>;
    assertObjectMethod(opts?: object): asserts this is NodePath<types.ObjectMethod>;
    assertObjectPattern(opts?: object): asserts this is NodePath<types.ObjectPattern>;
    assertObjectProperty(opts?: object): asserts this is NodePath<types.ObjectProperty>;
    assertObjectTypeAnnotation(opts?: object): asserts this is NodePath<types.ObjectTypeAnnotation>;
    assertObjectTypeCallProperty(opts?: object): asserts this is NodePath<types.ObjectTypeCallProperty>;
    assertObjectTypeIndexer(opts?: object): asserts this is NodePath<types.ObjectTypeIndexer>;
    assertObjectTypeInternalSlot(opts?: object): asserts this is NodePath<types.ObjectTypeInternalSlot>;
    assertObjectTypeProperty(opts?: object): asserts this is NodePath<types.ObjectTypeProperty>;
    assertObjectTypeSpreadProperty(opts?: object): asserts this is NodePath<types.ObjectTypeSpreadProperty>;
    assertOpaqueType(opts?: object): asserts this is NodePath<types.OpaqueType>;
    assertOptionalCallExpression(opts?: object): asserts this is NodePath<types.OptionalCallExpression>;
    assertOptionalIndexedAccessType(opts?: object): asserts this is NodePath<types.OptionalIndexedAccessType>;
    assertOptionalMemberExpression(opts?: object): asserts this is NodePath<types.OptionalMemberExpression>;
    assertParenthesizedExpression(opts?: object): asserts this is NodePath<types.ParenthesizedExpression>;
    assertPattern(opts?: object): asserts this is NodePath<types.Pattern>;
    assertPatternLike(opts?: object): asserts this is NodePath<types.PatternLike>;
    assertPipelineBareFunction(opts?: object): asserts this is NodePath<types.PipelineBareFunction>;
    assertPipelinePrimaryTopicReference(opts?: object): asserts this is NodePath<types.PipelinePrimaryTopicReference>;
    assertPipelineTopicExpression(opts?: object): asserts this is NodePath<types.PipelineTopicExpression>;
    assertPlaceholder(opts?: object): asserts this is NodePath<types.Placeholder>;
    assertPrivate(opts?: object): asserts this is NodePath<types.Private>;
    assertPrivateName(opts?: object): asserts this is NodePath<types.PrivateName>;
    assertProgram(opts?: object): asserts this is NodePath<types.Program>;
    assertProperty(opts?: object): asserts this is NodePath<types.Property>;
    assertPureish(opts?: object): asserts this is NodePath<types.Pureish>;
    assertQualifiedTypeIdentifier(opts?: object): asserts this is NodePath<types.QualifiedTypeIdentifier>;
    assertRecordExpression(opts?: object): asserts this is NodePath<types.RecordExpression>;
    assertRegExpLiteral(opts?: object): asserts this is NodePath<types.RegExpLiteral>;

    /** @deprecated Use `assertRegExpLiteral` */
    assertRegexLiteral(opts?: object): asserts this is NodePath<types.RegexLiteral>;
    assertRestElement(opts?: object): asserts this is NodePath<types.RestElement>;

    /** @deprecated Use `assertRestElement` */
    assertRestProperty(opts?: object): asserts this is NodePath<types.RestProperty>;
    assertReturnStatement(opts?: object): asserts this is NodePath<types.ReturnStatement>;
    assertScopable(opts?: object): asserts this is NodePath<types.Scopable>;
    assertSequenceExpression(opts?: object): asserts this is NodePath<types.SequenceExpression>;
    assertSpreadElement(opts?: object): asserts this is NodePath<types.SpreadElement>;

    /** @deprecated Use `assertSpreadElement` */
    assertSpreadProperty(opts?: object): asserts this is NodePath<types.SpreadProperty>;
    assertStandardized(opts?: object): asserts this is NodePath<types.Standardized>;
    assertStatement(opts?: object): asserts this is NodePath<types.Statement>;
    assertStaticBlock(opts?: object): asserts this is NodePath<types.StaticBlock>;
    assertStringLiteral(opts?: object): asserts this is NodePath<types.StringLiteral>;
    assertStringLiteralTypeAnnotation(opts?: object): asserts this is NodePath<types.StringLiteralTypeAnnotation>;
    assertStringTypeAnnotation(opts?: object): asserts this is NodePath<types.StringTypeAnnotation>;
    assertSuper(opts?: object): asserts this is NodePath<types.Super>;
    assertSwitchCase(opts?: object): asserts this is NodePath<types.SwitchCase>;
    assertSwitchStatement(opts?: object): asserts this is NodePath<types.SwitchStatement>;
    assertSymbolTypeAnnotation(opts?: object): asserts this is NodePath<types.SymbolTypeAnnotation>;
    assertTSAnyKeyword(opts?: object): asserts this is NodePath<types.TSAnyKeyword>;
    assertTSArrayType(opts?: object): asserts this is NodePath<types.TSArrayType>;
    assertTSAsExpression(opts?: object): asserts this is NodePath<types.TSAsExpression>;
    assertTSBaseType(opts?: object): asserts this is NodePath<types.TSBaseType>;
    assertTSBigIntKeyword(opts?: object): asserts this is NodePath<types.TSBigIntKeyword>;
    assertTSBooleanKeyword(opts?: object): asserts this is NodePath<types.TSBooleanKeyword>;
    assertTSCallSignatureDeclaration(opts?: object): asserts this is NodePath<types.TSCallSignatureDeclaration>;
    assertTSConditionalType(opts?: object): asserts this is NodePath<types.TSConditionalType>;
    assertTSConstructSignatureDeclaration(opts?: object): asserts this is NodePath<types.TSConstructSignatureDeclaration>;
    assertTSConstructorType(opts?: object): asserts this is NodePath<types.TSConstructorType>;
    assertTSDeclareFunction(opts?: object): asserts this is NodePath<types.TSDeclareFunction>;
    assertTSDeclareMethod(opts?: object): asserts this is NodePath<types.TSDeclareMethod>;
    assertTSEntityName(opts?: object): asserts this is NodePath<types.TSEntityName>;
    assertTSEnumDeclaration(opts?: object): asserts this is NodePath<types.TSEnumDeclaration>;
    assertTSEnumMember(opts?: object): asserts this is NodePath<types.TSEnumMember>;
    assertTSExportAssignment(opts?: object): asserts this is NodePath<types.TSExportAssignment>;
    assertTSExpressionWithTypeArguments(opts?: object): asserts this is NodePath<types.TSExpressionWithTypeArguments>;
    assertTSExternalModuleReference(opts?: object): asserts this is NodePath<types.TSExternalModuleReference>;
    assertTSFunctionType(opts?: object): asserts this is NodePath<types.TSFunctionType>;
    assertTSImportEqualsDeclaration(opts?: object): asserts this is NodePath<types.TSImportEqualsDeclaration>;
    assertTSImportType(opts?: object): asserts this is NodePath<types.TSImportType>;
    assertTSIndexSignature(opts?: object): asserts this is NodePath<types.TSIndexSignature>;
    assertTSIndexedAccessType(opts?: object): asserts this is NodePath<types.TSIndexedAccessType>;
    assertTSInferType(opts?: object): asserts this is NodePath<types.TSInferType>;
    assertTSInstantiationExpression(opts?: object): asserts this is NodePath<types.TSInstantiationExpression>;
    assertTSInterfaceBody(opts?: object): asserts this is NodePath<types.TSInterfaceBody>;
    assertTSInterfaceDeclaration(opts?: object): asserts this is NodePath<types.TSInterfaceDeclaration>;
    assertTSIntersectionType(opts?: object): asserts this is NodePath<types.TSIntersectionType>;
    assertTSIntrinsicKeyword(opts?: object): asserts this is NodePath<types.TSIntrinsicKeyword>;
    assertTSLiteralType(opts?: object): asserts this is NodePath<types.TSLiteralType>;
    assertTSMappedType(opts?: object): asserts this is NodePath<types.TSMappedType>;
    assertTSMethodSignature(opts?: object): asserts this is NodePath<types.TSMethodSignature>;
    assertTSModuleBlock(opts?: object): asserts this is NodePath<types.TSModuleBlock>;
    assertTSModuleDeclaration(opts?: object): asserts this is NodePath<types.TSModuleDeclaration>;
    assertTSNamedTupleMember(opts?: object): asserts this is NodePath<types.TSNamedTupleMember>;
    assertTSNamespaceExportDeclaration(opts?: object): asserts this is NodePath<types.TSNamespaceExportDeclaration>;
    assertTSNeverKeyword(opts?: object): asserts this is NodePath<types.TSNeverKeyword>;
    assertTSNonNullExpression(opts?: object): asserts this is NodePath<types.TSNonNullExpression>;
    assertTSNullKeyword(opts?: object): asserts this is NodePath<types.TSNullKeyword>;
    assertTSNumberKeyword(opts?: object): asserts this is NodePath<types.TSNumberKeyword>;
    assertTSObjectKeyword(opts?: object): asserts this is NodePath<types.TSObjectKeyword>;
    assertTSOptionalType(opts?: object): asserts this is NodePath<types.TSOptionalType>;
    assertTSParameterProperty(opts?: object): asserts this is NodePath<types.TSParameterProperty>;
    assertTSParenthesizedType(opts?: object): asserts this is NodePath<types.TSParenthesizedType>;
    assertTSPropertySignature(opts?: object): asserts this is NodePath<types.TSPropertySignature>;
    assertTSQualifiedName(opts?: object): asserts this is NodePath<types.TSQualifiedName>;
    assertTSRestType(opts?: object): asserts this is NodePath<types.TSRestType>;
    assertTSSatisfiesExpression(opts?: object): asserts this is NodePath<types.TSSatisfiesExpression>;
    assertTSStringKeyword(opts?: object): asserts this is NodePath<types.TSStringKeyword>;
    assertTSSymbolKeyword(opts?: object): asserts this is NodePath<types.TSSymbolKeyword>;
    assertTSThisType(opts?: object): asserts this is NodePath<types.TSThisType>;
    assertTSTupleType(opts?: object): asserts this is NodePath<types.TSTupleType>;
    assertTSType(opts?: object): asserts this is NodePath<types.TSType>;
    assertTSTypeAliasDeclaration(opts?: object): asserts this is NodePath<types.TSTypeAliasDeclaration>;
    assertTSTypeAnnotation(opts?: object): asserts this is NodePath<types.TSTypeAnnotation>;
    assertTSTypeAssertion(opts?: object): asserts this is NodePath<types.TSTypeAssertion>;
    assertTSTypeElement(opts?: object): asserts this is NodePath<types.TSTypeElement>;
    assertTSTypeLiteral(opts?: object): asserts this is NodePath<types.TSTypeLiteral>;
    assertTSTypeOperator(opts?: object): asserts this is NodePath<types.TSTypeOperator>;
    assertTSTypeParameter(opts?: object): asserts this is NodePath<types.TSTypeParameter>;
    assertTSTypeParameterDeclaration(opts?: object): asserts this is NodePath<types.TSTypeParameterDeclaration>;
    assertTSTypeParameterInstantiation(opts?: object): asserts this is NodePath<types.TSTypeParameterInstantiation>;
    assertTSTypePredicate(opts?: object): asserts this is NodePath<types.TSTypePredicate>;
    assertTSTypeQuery(opts?: object): asserts this is NodePath<types.TSTypeQuery>;
    assertTSTypeReference(opts?: object): asserts this is NodePath<types.TSTypeReference>;
    assertTSUndefinedKeyword(opts?: object): asserts this is NodePath<types.TSUndefinedKeyword>;
    assertTSUnionType(opts?: object): asserts this is NodePath<types.TSUnionType>;
    assertTSUnknownKeyword(opts?: object): asserts this is NodePath<types.TSUnknownKeyword>;
    assertTSVoidKeyword(opts?: object): asserts this is NodePath<types.TSVoidKeyword>;
    assertTaggedTemplateExpression(opts?: object): asserts this is NodePath<types.TaggedTemplateExpression>;
    assertTemplateElement(opts?: object): asserts this is NodePath<types.TemplateElement>;
    assertTemplateLiteral(opts?: object): asserts this is NodePath<types.TemplateLiteral>;
    assertTerminatorless(opts?: object): asserts this is NodePath<types.Terminatorless>;
    assertThisExpression(opts?: object): asserts this is NodePath<types.ThisExpression>;
    assertThisTypeAnnotation(opts?: object): asserts this is NodePath<types.ThisTypeAnnotation>;
    assertThrowStatement(opts?: object): asserts this is NodePath<types.ThrowStatement>;
    assertTopicReference(opts?: object): asserts this is NodePath<types.TopicReference>;
    assertTryStatement(opts?: object): asserts this is NodePath<types.TryStatement>;
    assertTupleExpression(opts?: object): asserts this is NodePath<types.TupleExpression>;
    assertTupleTypeAnnotation(opts?: object): asserts this is NodePath<types.TupleTypeAnnotation>;
    assertTypeAlias(opts?: object): asserts this is NodePath<types.TypeAlias>;
    assertTypeAnnotation(opts?: object): asserts this is NodePath<types.TypeAnnotation>;
    assertTypeCastExpression(opts?: object): asserts this is NodePath<types.TypeCastExpression>;
    assertTypeParameter(opts?: object): asserts this is NodePath<types.TypeParameter>;
    assertTypeParameterDeclaration(opts?: object): asserts this is NodePath<types.TypeParameterDeclaration>;
    assertTypeParameterInstantiation(opts?: object): asserts this is NodePath<types.TypeParameterInstantiation>;
    assertTypeScript(opts?: object): asserts this is NodePath<types.TypeScript>;
    assertTypeofTypeAnnotation(opts?: object): asserts this is NodePath<types.TypeofTypeAnnotation>;
    assertUnaryExpression(opts?: object): asserts this is NodePath<types.UnaryExpression>;
    assertUnaryLike(opts?: object): asserts this is NodePath<types.UnaryLike>;
    assertUnionTypeAnnotation(opts?: object): asserts this is NodePath<types.UnionTypeAnnotation>;
    assertUpdateExpression(opts?: object): asserts this is NodePath<types.UpdateExpression>;
    assertUserWhitespacable(opts?: object): asserts this is NodePath<types.UserWhitespacable>;
    assertV8IntrinsicIdentifier(opts?: object): asserts this is NodePath<types.V8IntrinsicIdentifier>;
    assertVariableDeclaration(opts?: object): asserts this is NodePath<types.VariableDeclaration>;
    assertVariableDeclarator(opts?: object): asserts this is NodePath<types.VariableDeclarator>;
    assertVariance(opts?: object): asserts this is NodePath<types.Variance>;
    assertVoidTypeAnnotation(opts?: object): asserts this is NodePath<types.VoidTypeAnnotation>;
    assertWhile(opts?: object): asserts this is NodePath<types.While>;
    assertWhileStatement(opts?: object): asserts this is NodePath<types.WhileStatement>;
    assertWithStatement(opts?: object): asserts this is NodePath<types.WithStatement>;
    assertYieldExpression(opts?: object): asserts this is NodePath<types.YieldExpression>;
    // #endregion
}

declare type NodePathResult<T> =
| (Extract<T, Node_3 | null | undefined> extends never ? never : NodePath<Extract<T, Node_3 | null | undefined>>)
| (T extends Array<Node_3 | null | undefined> ? Array<NodePath<T[number]>> : never);

declare type NodePaths<T extends Node_3 | readonly Node_3[]> = T extends readonly Node_3[]
? { -readonly [K in keyof T]: NodePath<Extract<T[K], Node_3>> }
: T extends Node_3 ? [NodePath<T>]
: never;

declare type NodesInsertionParam<T extends Node_3> = T | readonly T[] | [T, ...T[]];

declare type NodeType = Node_3["type"] | keyof types.Aliases;

declare type NodeTypes = NodeTypesWithoutComment | Comment_2["type"];

declare type NodeTypesWithoutComment = Node_3["type"] | keyof Aliases;

declare interface Noop extends BaseNode {
    type: "Noop";
}

declare function noop(): Noop;

declare const NOT_LOCAL_BINDING: unique symbol;

declare interface NullableTypeAnnotation extends BaseNode {
    type: "NullableTypeAnnotation";
    typeAnnotation: FlowType;
}

declare function nullableTypeAnnotation(typeAnnotation: FlowType): NullableTypeAnnotation;

declare interface NullLiteral extends BaseNode {
    type: "NullLiteral";
}

declare function nullLiteral(): NullLiteral;

declare interface NullLiteralTypeAnnotation extends BaseNode {
    type: "NullLiteralTypeAnnotation";
}

declare function nullLiteralTypeAnnotation(): NullLiteralTypeAnnotation;

declare const NUMBER_BINARY_OPERATORS: string[];

declare const NUMBER_UNARY_OPERATORS: string[];

/**
 * @deprecated Use `NumericLiteral`
 */
declare interface NumberLiteral$1 extends BaseNode {
    type: "NumberLiteral";
    value: number;
}

/** @deprecated */
declare function NumberLiteral(value: number): NumericLiteral;

declare interface NumberLiteralTypeAnnotation extends BaseNode {
    type: "NumberLiteralTypeAnnotation";
    value: number;
}

declare function numberLiteralTypeAnnotation(value: number): NumberLiteralTypeAnnotation;

declare interface NumberTypeAnnotation extends BaseNode {
    type: "NumberTypeAnnotation";
}

declare function numberTypeAnnotation(): NumberTypeAnnotation;

declare interface NumericLiteral extends BaseNode {
    type: "NumericLiteral";
    value: number;
}

declare function numericLiteral(value: number): NumericLiteral;

declare interface ObjectExpression extends BaseNode {
    type: "ObjectExpression";
    properties: Array<ObjectMethod | ObjectProperty | SpreadElement>;
}

declare function objectExpression(properties: Array<ObjectMethod | ObjectProperty | SpreadElement>): ObjectExpression;

declare type ObjectMember = ObjectMethod | ObjectProperty;

declare const OBJECTMEMBER_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface ObjectMethod extends BaseNode {
    type: "ObjectMethod";
    kind: "method" | "get" | "set";
    key: Expression | Identifier | StringLiteral | NumericLiteral | BigIntLiteral;
    params: Array<Identifier | Pattern | RestElement>;
    body: BlockStatement;
    computed: boolean;
    generator: boolean;
    async: boolean;
    decorators?: Array<Decorator> | null;
    returnType?: TypeAnnotation | TSTypeAnnotation | Noop | null;
    typeParameters?: TypeParameterDeclaration | TSTypeParameterDeclaration | Noop | null;
}

declare function objectMethod(kind: "method" | "get" | "set" | undefined, key: Expression | Identifier | StringLiteral | NumericLiteral | BigIntLiteral, params: Array<Identifier | Pattern | RestElement>, body: BlockStatement, computed?: boolean, generator?: boolean, async?: boolean): ObjectMethod;

declare interface ObjectPattern extends BaseNode {
    type: "ObjectPattern";
    properties: Array<RestElement | ObjectProperty>;
    decorators?: Array<Decorator> | null;
    optional?: boolean | null;
    typeAnnotation?: TypeAnnotation | TSTypeAnnotation | Noop | null;
}

declare function objectPattern(properties: Array<RestElement | ObjectProperty>): ObjectPattern;

declare interface ObjectProperty extends BaseNode {
    type: "ObjectProperty";
    key: Expression | Identifier | StringLiteral | NumericLiteral | BigIntLiteral | DecimalLiteral | PrivateName;
    value: Expression | PatternLike;
    computed: boolean;
    shorthand: boolean;
    decorators?: Array<Decorator> | null;
}

declare function objectProperty(key: Expression | Identifier | StringLiteral | NumericLiteral | BigIntLiteral | DecimalLiteral | PrivateName, value: Expression | PatternLike, computed?: boolean, shorthand?: boolean, decorators?: Array<Decorator> | null): ObjectProperty;

declare interface ObjectTypeAnnotation extends BaseNode {
    type: "ObjectTypeAnnotation";
    properties: Array<ObjectTypeProperty | ObjectTypeSpreadProperty>;
    indexers?: Array<ObjectTypeIndexer>;
    callProperties?: Array<ObjectTypeCallProperty>;
    internalSlots?: Array<ObjectTypeInternalSlot>;
    exact: boolean;
    inexact?: boolean | null;
}

declare function objectTypeAnnotation(properties: Array<ObjectTypeProperty | ObjectTypeSpreadProperty>, indexers?: Array<ObjectTypeIndexer>, callProperties?: Array<ObjectTypeCallProperty>, internalSlots?: Array<ObjectTypeInternalSlot>, exact?: boolean): ObjectTypeAnnotation;

declare interface ObjectTypeCallProperty extends BaseNode {
    type: "ObjectTypeCallProperty";
    value: FlowType;
    static: boolean;
}

declare function objectTypeCallProperty(value: FlowType): ObjectTypeCallProperty;

declare interface ObjectTypeIndexer extends BaseNode {
    type: "ObjectTypeIndexer";
    id?: Identifier | null;
    key: FlowType;
    value: FlowType;
    variance?: Variance | null;
    static: boolean;
}

declare function objectTypeIndexer(id: Identifier | null | undefined, key: FlowType, value: FlowType, variance?: Variance | null): ObjectTypeIndexer;

declare interface ObjectTypeInternalSlot extends BaseNode {
    type: "ObjectTypeInternalSlot";
    id: Identifier;
    value: FlowType;
    optional: boolean;
    static: boolean;
    method: boolean;
}

declare function objectTypeInternalSlot(id: Identifier, value: FlowType, optional: boolean, _static: boolean, method: boolean): ObjectTypeInternalSlot;

declare interface ObjectTypeProperty extends BaseNode {
    type: "ObjectTypeProperty";
    key: Identifier | StringLiteral;
    value: FlowType;
    variance?: Variance | null;
    kind: "init" | "get" | "set";
    method: boolean;
    optional: boolean;
    proto: boolean;
    static: boolean;
}

declare function objectTypeProperty(key: Identifier | StringLiteral, value: FlowType, variance?: Variance | null): ObjectTypeProperty;

declare interface ObjectTypeSpreadProperty extends BaseNode {
    type: "ObjectTypeSpreadProperty";
    argument: FlowType;
}

declare function objectTypeSpreadProperty(argument: FlowType): ObjectTypeSpreadProperty;

declare interface OpaqueType extends BaseNode {
    type: "OpaqueType";
    id: Identifier;
    typeParameters?: TypeParameterDeclaration | null;
    supertype?: FlowType | null;
    impltype: FlowType;
}

declare function opaqueType(id: Identifier, typeParameters: TypeParameterDeclaration | null | undefined, supertype: FlowType | null | undefined, impltype: FlowType): OpaqueType;

declare interface OptionalCallExpression extends BaseNode {
    type: "OptionalCallExpression";
    callee: Expression;
    arguments: Array<Expression | SpreadElement | JSXNamespacedName | ArgumentPlaceholder>;
    optional: boolean;
    typeArguments?: TypeParameterInstantiation | null;
    typeParameters?: TSTypeParameterInstantiation | null;
}

declare function optionalCallExpression(callee: Expression, _arguments: Array<Expression | SpreadElement | JSXNamespacedName | ArgumentPlaceholder>, optional: boolean): OptionalCallExpression;

declare interface OptionalIndexedAccessType extends BaseNode {
    type: "OptionalIndexedAccessType";
    objectType: FlowType;
    indexType: FlowType;
    optional: boolean;
}

declare function optionalIndexedAccessType(objectType: FlowType, indexType: FlowType): OptionalIndexedAccessType;

declare interface OptionalMemberExpression extends BaseNode {
    type: "OptionalMemberExpression";
    object: Expression;
    property: Expression | Identifier;
    computed: boolean;
    optional: boolean;
}

declare function optionalMemberExpression(object: Expression, property: Expression | Identifier, computed: boolean | undefined, optional: boolean): OptionalMemberExpression;

declare type Options = {
    preserveComments?: boolean;
};

declare type Opts<Obj> = Partial<{
    [Prop in keyof Obj]: Obj[Prop] extends Node_3 ? Node_3 : Obj[Prop] extends Node_3[] ? Node_3[] : Obj[Prop];
}>;

declare interface ParenthesizedExpression extends BaseNode {
    type: "ParenthesizedExpression";
    expression: Expression;
}

declare function parenthesizedExpression(expression: Expression): ParenthesizedExpression;

declare interface ParentMaps {
    AnyTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    ArgumentPlaceholder: CallExpression | NewExpression | OptionalCallExpression;
    ArrayExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    ArrayPattern: ArrayPattern | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | CatchClause | ClassMethod | ClassPrivateMethod | ForInStatement | ForOfStatement | FunctionDeclaration | FunctionExpression | ObjectMethod | ObjectProperty | RestElement | TSCallSignatureDeclaration | TSConstructSignatureDeclaration | TSConstructorType | TSDeclareFunction | TSDeclareMethod | TSFunctionType | TSMethodSignature | VariableDeclarator;
    ArrayTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    ArrowFunctionExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    AssignmentExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    AssignmentPattern: ArrayPattern | ArrowFunctionExpression | AssignmentExpression | ClassMethod | ClassPrivateMethod | ForInStatement | ForOfStatement | FunctionDeclaration | FunctionExpression | ObjectMethod | ObjectProperty | RestElement | TSDeclareFunction | TSDeclareMethod | TSParameterProperty | VariableDeclarator;
    AwaitExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    BigIntLiteral: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSLiteralType | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    BinaryExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    BindExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    BlockStatement: ArrowFunctionExpression | BlockStatement | CatchClause | ClassMethod | ClassPrivateMethod | DeclareModule | DoExpression | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | FunctionDeclaration | FunctionExpression | IfStatement | LabeledStatement | ObjectMethod | Program | StaticBlock | SwitchCase | TSModuleBlock | TryStatement | WhileStatement | WithStatement;
    BooleanLiteral: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | EnumBooleanMember | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSLiteralType | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    BooleanLiteralTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    BooleanTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    BreakStatement: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    CallExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    CatchClause: TryStatement;
    ClassAccessorProperty: ClassBody;
    ClassBody: ClassDeclaration | ClassExpression;
    ClassDeclaration: BlockStatement | DoWhileStatement | ExportDefaultDeclaration | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    ClassExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    ClassImplements: ClassDeclaration | ClassExpression | DeclareClass | DeclareExportDeclaration | DeclaredPredicate;
    ClassMethod: ClassBody;
    ClassPrivateMethod: ClassBody;
    ClassPrivateProperty: ClassBody;
    ClassProperty: ClassBody;
    CommentBlock: File_2;
    CommentLine: File_2;
    ConditionalExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    ContinueStatement: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    DebuggerStatement: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    DecimalLiteral: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    DeclareClass: BlockStatement | DeclareExportDeclaration | DeclaredPredicate | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    DeclareExportAllDeclaration: BlockStatement | DeclareExportDeclaration | DeclaredPredicate | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    DeclareExportDeclaration: BlockStatement | DeclareExportDeclaration | DeclaredPredicate | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    DeclareFunction: BlockStatement | DeclareExportDeclaration | DeclaredPredicate | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    DeclareInterface: BlockStatement | DeclareExportDeclaration | DeclaredPredicate | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    DeclareModule: BlockStatement | DeclareExportDeclaration | DeclaredPredicate | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    DeclareModuleExports: BlockStatement | DeclareExportDeclaration | DeclaredPredicate | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    DeclareOpaqueType: BlockStatement | DeclareExportDeclaration | DeclaredPredicate | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    DeclareTypeAlias: BlockStatement | DeclareExportDeclaration | DeclaredPredicate | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    DeclareVariable: BlockStatement | DeclareExportDeclaration | DeclaredPredicate | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    DeclaredPredicate: ArrowFunctionExpression | DeclareExportDeclaration | DeclareFunction | DeclaredPredicate | FunctionDeclaration | FunctionExpression;
    Decorator: ArrayPattern | AssignmentPattern | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateMethod | ClassPrivateProperty | ClassProperty | Identifier | ObjectMethod | ObjectPattern | ObjectProperty | RestElement | TSDeclareMethod | TSParameterProperty;
    Directive: BlockStatement | Program;
    DirectiveLiteral: Directive;
    DoExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    DoWhileStatement: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    EmptyStatement: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    EmptyTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    EnumBooleanBody: DeclareExportDeclaration | DeclaredPredicate | EnumDeclaration;
    EnumBooleanMember: DeclareExportDeclaration | DeclaredPredicate | EnumBooleanBody;
    EnumDeclaration: BlockStatement | DeclareExportDeclaration | DeclaredPredicate | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    EnumDefaultedMember: DeclareExportDeclaration | DeclaredPredicate | EnumStringBody | EnumSymbolBody;
    EnumNumberBody: DeclareExportDeclaration | DeclaredPredicate | EnumDeclaration;
    EnumNumberMember: DeclareExportDeclaration | DeclaredPredicate | EnumNumberBody;
    EnumStringBody: DeclareExportDeclaration | DeclaredPredicate | EnumDeclaration;
    EnumStringMember: DeclareExportDeclaration | DeclaredPredicate | EnumStringBody;
    EnumSymbolBody: DeclareExportDeclaration | DeclaredPredicate | EnumDeclaration;
    ExistsTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    ExportAllDeclaration: BlockStatement | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    ExportDefaultDeclaration: BlockStatement | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    ExportDefaultSpecifier: ExportNamedDeclaration;
    ExportNamedDeclaration: BlockStatement | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    ExportNamespaceSpecifier: DeclareExportDeclaration | ExportNamedDeclaration;
    ExportSpecifier: DeclareExportDeclaration | ExportNamedDeclaration;
    ExpressionStatement: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    File: null;
    ForInStatement: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    ForOfStatement: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    ForStatement: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    FunctionDeclaration: BlockStatement | DoWhileStatement | ExportDefaultDeclaration | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    FunctionExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    FunctionTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    FunctionTypeParam: DeclareExportDeclaration | DeclaredPredicate | FunctionTypeAnnotation;
    GenericTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    Identifier: ArrayExpression | ArrayPattern | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | BreakStatement | CallExpression | CatchClause | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassImplements | ClassMethod | ClassPrivateMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | ContinueStatement | DeclareClass | DeclareFunction | DeclareInterface | DeclareModule | DeclareOpaqueType | DeclareTypeAlias | DeclareVariable | Decorator | DoWhileStatement | EnumBooleanMember | EnumDeclaration | EnumDefaultedMember | EnumNumberMember | EnumStringMember | ExportDefaultDeclaration | ExportDefaultSpecifier | ExportNamespaceSpecifier | ExportSpecifier | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | FunctionDeclaration | FunctionExpression | FunctionTypeParam | GenericTypeAnnotation | IfStatement | ImportAttribute | ImportDefaultSpecifier | ImportExpression | ImportNamespaceSpecifier | ImportSpecifier | InterfaceDeclaration | InterfaceExtends | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LabeledStatement | LogicalExpression | MemberExpression | MetaProperty | NewExpression | ObjectMethod | ObjectProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | OpaqueType | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | Placeholder | PrivateName | QualifiedTypeIdentifier | RestElement | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSCallSignatureDeclaration | TSConstructSignatureDeclaration | TSConstructorType | TSDeclareFunction | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSExpressionWithTypeArguments | TSFunctionType | TSImportEqualsDeclaration | TSImportType | TSIndexSignature | TSInstantiationExpression | TSInterfaceDeclaration | TSMethodSignature | TSModuleDeclaration | TSNamedTupleMember | TSNamespaceExportDeclaration | TSNonNullExpression | TSParameterProperty | TSPropertySignature | TSQualifiedName | TSSatisfiesExpression | TSTypeAliasDeclaration | TSTypeAssertion | TSTypePredicate | TSTypeQuery | TSTypeReference | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeAlias | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    IfStatement: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    Import: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    ImportAttribute: ExportAllDeclaration | ExportNamedDeclaration | ImportDeclaration;
    ImportDeclaration: BlockStatement | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    ImportDefaultSpecifier: ImportDeclaration;
    ImportExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    ImportNamespaceSpecifier: ImportDeclaration;
    ImportSpecifier: ImportDeclaration;
    IndexedAccessType: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    InferredPredicate: ArrowFunctionExpression | DeclareExportDeclaration | DeclaredPredicate | FunctionDeclaration | FunctionExpression;
    InterfaceDeclaration: BlockStatement | DeclareExportDeclaration | DeclaredPredicate | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    InterfaceExtends: ClassDeclaration | ClassExpression | DeclareClass | DeclareExportDeclaration | DeclareInterface | DeclaredPredicate | InterfaceDeclaration | InterfaceTypeAnnotation;
    InterfaceTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    InterpreterDirective: Program;
    IntersectionTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    JSXAttribute: JSXOpeningElement;
    JSXClosingElement: JSXElement;
    JSXClosingFragment: JSXFragment;
    JSXElement: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXAttribute | JSXElement | JSXExpressionContainer | JSXFragment | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    JSXEmptyExpression: JSXExpressionContainer;
    JSXExpressionContainer: JSXAttribute | JSXElement | JSXFragment;
    JSXFragment: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXAttribute | JSXElement | JSXExpressionContainer | JSXFragment | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    JSXIdentifier: JSXAttribute | JSXClosingElement | JSXMemberExpression | JSXNamespacedName | JSXOpeningElement;
    JSXMemberExpression: JSXClosingElement | JSXMemberExpression | JSXOpeningElement;
    JSXNamespacedName: CallExpression | JSXAttribute | JSXClosingElement | JSXOpeningElement | NewExpression | OptionalCallExpression;
    JSXOpeningElement: JSXElement;
    JSXOpeningFragment: JSXFragment;
    JSXSpreadAttribute: JSXOpeningElement;
    JSXSpreadChild: JSXElement | JSXFragment;
    JSXText: JSXElement | JSXFragment;
    LabeledStatement: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    LogicalExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    MemberExpression: ArrayExpression | ArrayPattern | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | RestElement | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    MetaProperty: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    MixedTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    ModuleExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    NewExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    Noop: ArrayPattern | ArrowFunctionExpression | AssignmentPattern | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateMethod | ClassPrivateProperty | ClassProperty | FunctionDeclaration | FunctionExpression | Identifier | ObjectMethod | ObjectPattern | RestElement | TSDeclareFunction | TSDeclareMethod;
    NullLiteral: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    NullLiteralTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    NullableTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    NumberLiteral: null;
    NumberLiteralTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    NumberTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    NumericLiteral: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | EnumNumberMember | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSLiteralType | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    ObjectExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    ObjectMethod: ObjectExpression;
    ObjectPattern: ArrayPattern | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | CatchClause | ClassMethod | ClassPrivateMethod | ForInStatement | ForOfStatement | FunctionDeclaration | FunctionExpression | ObjectMethod | ObjectProperty | RestElement | TSCallSignatureDeclaration | TSConstructSignatureDeclaration | TSConstructorType | TSDeclareFunction | TSDeclareMethod | TSFunctionType | TSMethodSignature | VariableDeclarator;
    ObjectProperty: ObjectExpression | ObjectPattern | RecordExpression;
    ObjectTypeAnnotation: ArrayTypeAnnotation | DeclareClass | DeclareExportDeclaration | DeclareInterface | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | InterfaceDeclaration | InterfaceTypeAnnotation | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    ObjectTypeCallProperty: DeclareExportDeclaration | DeclaredPredicate | ObjectTypeAnnotation;
    ObjectTypeIndexer: DeclareExportDeclaration | DeclaredPredicate | ObjectTypeAnnotation;
    ObjectTypeInternalSlot: DeclareExportDeclaration | DeclaredPredicate | ObjectTypeAnnotation;
    ObjectTypeProperty: DeclareExportDeclaration | DeclaredPredicate | ObjectTypeAnnotation;
    ObjectTypeSpreadProperty: DeclareExportDeclaration | DeclaredPredicate | ObjectTypeAnnotation;
    OpaqueType: BlockStatement | DeclareExportDeclaration | DeclaredPredicate | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    OptionalCallExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    OptionalIndexedAccessType: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    OptionalMemberExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    ParenthesizedExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    PipelineBareFunction: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    PipelinePrimaryTopicReference: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    PipelineTopicExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    Placeholder: Node_3;
    PrivateName: BinaryExpression | ClassAccessorProperty | ClassPrivateMethod | ClassPrivateProperty | MemberExpression | ObjectProperty;
    Program: File_2 | ModuleExpression;
    QualifiedTypeIdentifier: DeclareExportDeclaration | DeclaredPredicate | GenericTypeAnnotation | InterfaceExtends | QualifiedTypeIdentifier;
    RecordExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    RegExpLiteral: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    RegexLiteral: null;
    RestElement: ArrayPattern | ArrowFunctionExpression | AssignmentExpression | ClassMethod | ClassPrivateMethod | ForInStatement | ForOfStatement | FunctionDeclaration | FunctionExpression | ObjectMethod | ObjectPattern | ObjectProperty | RestElement | TSCallSignatureDeclaration | TSConstructSignatureDeclaration | TSConstructorType | TSDeclareFunction | TSDeclareMethod | TSFunctionType | TSMethodSignature | VariableDeclarator;
    RestProperty: null;
    ReturnStatement: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    SequenceExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    SpreadElement: ArrayExpression | CallExpression | NewExpression | ObjectExpression | OptionalCallExpression | RecordExpression | TupleExpression;
    SpreadProperty: null;
    StaticBlock: ClassBody;
    StringLiteral: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | DeclareExportAllDeclaration | DeclareExportDeclaration | DeclareModule | Decorator | DoWhileStatement | EnumStringMember | ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ExportSpecifier | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportAttribute | ImportDeclaration | ImportExpression | ImportSpecifier | JSXAttribute | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | ObjectTypeProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSExternalModuleReference | TSImportType | TSInstantiationExpression | TSLiteralType | TSMethodSignature | TSModuleDeclaration | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    StringLiteralTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    StringTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    Super: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    SwitchCase: SwitchStatement;
    SwitchStatement: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    SymbolTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    TSAnyKeyword: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSArrayType: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSAsExpression: ArrayExpression | ArrayPattern | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | RestElement | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    TSBigIntKeyword: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSBooleanKeyword: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSCallSignatureDeclaration: TSInterfaceBody | TSTypeLiteral;
    TSConditionalType: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSConstructSignatureDeclaration: TSInterfaceBody | TSTypeLiteral;
    TSConstructorType: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSDeclareFunction: BlockStatement | DoWhileStatement | ExportDefaultDeclaration | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    TSDeclareMethod: ClassBody;
    TSEnumDeclaration: BlockStatement | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    TSEnumMember: TSEnumDeclaration;
    TSExportAssignment: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    TSExpressionWithTypeArguments: ClassDeclaration | ClassExpression | TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSInterfaceDeclaration | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSExternalModuleReference: TSImportEqualsDeclaration;
    TSFunctionType: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSImportEqualsDeclaration: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    TSImportType: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSTypeQuery | TSUnionType | TemplateLiteral;
    TSIndexSignature: ClassBody | TSInterfaceBody | TSTypeLiteral;
    TSIndexedAccessType: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSInferType: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSInstantiationExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    TSInterfaceBody: TSInterfaceDeclaration;
    TSInterfaceDeclaration: BlockStatement | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    TSIntersectionType: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSIntrinsicKeyword: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSLiteralType: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSMappedType: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSMethodSignature: TSInterfaceBody | TSTypeLiteral;
    TSModuleBlock: TSModuleDeclaration;
    TSModuleDeclaration: BlockStatement | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | TSModuleDeclaration | WhileStatement | WithStatement;
    TSNamedTupleMember: TSTupleType;
    TSNamespaceExportDeclaration: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    TSNeverKeyword: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSNonNullExpression: ArrayExpression | ArrayPattern | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | RestElement | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    TSNullKeyword: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSNumberKeyword: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSObjectKeyword: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSOptionalType: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSParameterProperty: ArrayPattern | AssignmentExpression | ClassMethod | ClassPrivateMethod | ForInStatement | ForOfStatement | RestElement | TSDeclareMethod | VariableDeclarator;
    TSParenthesizedType: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSPropertySignature: TSInterfaceBody | TSTypeLiteral;
    TSQualifiedName: TSExpressionWithTypeArguments | TSImportEqualsDeclaration | TSImportType | TSQualifiedName | TSTypeQuery | TSTypeReference;
    TSRestType: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSSatisfiesExpression: ArrayExpression | ArrayPattern | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | RestElement | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    TSStringKeyword: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSSymbolKeyword: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSThisType: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSTypePredicate | TSUnionType | TemplateLiteral;
    TSTupleType: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSTypeAliasDeclaration: BlockStatement | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    TSTypeAnnotation: ArrayPattern | ArrowFunctionExpression | AssignmentPattern | ClassAccessorProperty | ClassMethod | ClassPrivateMethod | ClassPrivateProperty | ClassProperty | FunctionDeclaration | FunctionExpression | Identifier | ObjectMethod | ObjectPattern | RestElement | TSCallSignatureDeclaration | TSConstructSignatureDeclaration | TSConstructorType | TSDeclareFunction | TSDeclareMethod | TSFunctionType | TSIndexSignature | TSMethodSignature | TSPropertySignature | TSTypePredicate;
    TSTypeAssertion: ArrayExpression | ArrayPattern | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | RestElement | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    TSTypeLiteral: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSTypeOperator: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSTypeParameter: TSInferType | TSMappedType | TSTypeParameterDeclaration;
    TSTypeParameterDeclaration: ArrowFunctionExpression | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateMethod | FunctionDeclaration | FunctionExpression | ObjectMethod | TSCallSignatureDeclaration | TSConstructSignatureDeclaration | TSConstructorType | TSDeclareFunction | TSDeclareMethod | TSFunctionType | TSInterfaceDeclaration | TSMethodSignature | TSTypeAliasDeclaration;
    TSTypeParameterInstantiation: CallExpression | ClassDeclaration | ClassExpression | JSXOpeningElement | NewExpression | OptionalCallExpression | TSExpressionWithTypeArguments | TSImportType | TSInstantiationExpression | TSTypeQuery | TSTypeReference | TaggedTemplateExpression;
    TSTypePredicate: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSTypeQuery: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSTypeReference: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSUndefinedKeyword: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSUnionType: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSUnknownKeyword: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TSVoidKeyword: TSArrayType | TSAsExpression | TSConditionalType | TSIndexedAccessType | TSIntersectionType | TSMappedType | TSNamedTupleMember | TSOptionalType | TSParenthesizedType | TSRestType | TSSatisfiesExpression | TSTupleType | TSTypeAliasDeclaration | TSTypeAnnotation | TSTypeAssertion | TSTypeOperator | TSTypeParameter | TSTypeParameterInstantiation | TSUnionType | TemplateLiteral;
    TaggedTemplateExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    TemplateElement: TemplateLiteral;
    TemplateLiteral: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSLiteralType | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    ThisExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    ThisTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    ThrowStatement: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    TopicReference: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    TryStatement: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    TupleExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    TupleTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    TypeAlias: BlockStatement | DeclareExportDeclaration | DeclaredPredicate | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    TypeAnnotation: ArrayPattern | ArrowFunctionExpression | AssignmentPattern | ClassAccessorProperty | ClassMethod | ClassPrivateMethod | ClassPrivateProperty | ClassProperty | DeclareExportDeclaration | DeclareModuleExports | DeclaredPredicate | FunctionDeclaration | FunctionExpression | Identifier | ObjectMethod | ObjectPattern | RestElement | TypeCastExpression | TypeParameter;
    TypeCastExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | DeclareExportDeclaration | DeclaredPredicate | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    TypeParameter: DeclareExportDeclaration | DeclaredPredicate | TypeParameterDeclaration;
    TypeParameterDeclaration: ArrowFunctionExpression | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateMethod | DeclareClass | DeclareExportDeclaration | DeclareInterface | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionDeclaration | FunctionExpression | FunctionTypeAnnotation | InterfaceDeclaration | ObjectMethod | OpaqueType | TypeAlias;
    TypeParameterInstantiation: CallExpression | ClassDeclaration | ClassExpression | ClassImplements | DeclareExportDeclaration | DeclaredPredicate | GenericTypeAnnotation | InterfaceExtends | JSXOpeningElement | NewExpression | OptionalCallExpression | TaggedTemplateExpression;
    TypeofTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    UnaryExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSLiteralType | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    UnionTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    UpdateExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
    V8IntrinsicIdentifier: CallExpression | NewExpression;
    VariableDeclaration: BlockStatement | DoWhileStatement | ExportNamedDeclaration | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    VariableDeclarator: VariableDeclaration;
    Variance: ClassAccessorProperty | ClassPrivateProperty | ClassProperty | DeclareExportDeclaration | DeclaredPredicate | ObjectTypeIndexer | ObjectTypeProperty | TypeParameter;
    VoidTypeAnnotation: ArrayTypeAnnotation | DeclareExportDeclaration | DeclareOpaqueType | DeclareTypeAlias | DeclaredPredicate | FunctionTypeAnnotation | FunctionTypeParam | IndexedAccessType | IntersectionTypeAnnotation | NullableTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeInternalSlot | ObjectTypeProperty | ObjectTypeSpreadProperty | OpaqueType | OptionalIndexedAccessType | TupleTypeAnnotation | TypeAlias | TypeAnnotation | TypeParameter | TypeParameterInstantiation | TypeofTypeAnnotation | UnionTypeAnnotation;
    WhileStatement: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    WithStatement: BlockStatement | DoWhileStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | LabeledStatement | Program | StaticBlock | SwitchCase | TSModuleBlock | WhileStatement | WithStatement;
    YieldExpression: ArrayExpression | ArrowFunctionExpression | AssignmentExpression | AssignmentPattern | AwaitExpression | BinaryExpression | BindExpression | CallExpression | ClassAccessorProperty | ClassDeclaration | ClassExpression | ClassMethod | ClassPrivateProperty | ClassProperty | ConditionalExpression | Decorator | DoWhileStatement | ExportDefaultDeclaration | ExpressionStatement | ForInStatement | ForOfStatement | ForStatement | IfStatement | ImportExpression | JSXExpressionContainer | JSXSpreadAttribute | JSXSpreadChild | LogicalExpression | MemberExpression | NewExpression | ObjectMethod | ObjectProperty | OptionalCallExpression | OptionalMemberExpression | ParenthesizedExpression | PipelineBareFunction | PipelineTopicExpression | ReturnStatement | SequenceExpression | SpreadElement | SwitchCase | SwitchStatement | TSAsExpression | TSDeclareMethod | TSEnumDeclaration | TSEnumMember | TSExportAssignment | TSInstantiationExpression | TSMethodSignature | TSNonNullExpression | TSPropertySignature | TSSatisfiesExpression | TSTypeAssertion | TaggedTemplateExpression | TemplateLiteral | ThrowStatement | TupleExpression | TypeCastExpression | UnaryExpression | UpdateExpression | VariableDeclarator | WhileStatement | WithStatement | YieldExpression;
}

/**
 * Given some code, parse it using Babel's standard behavior.
 * Referenced presets and plugins will be loaded such that optional syntax plugins are automatically enabled.
 */
export declare function parse(code: string, callback: FileParseCallback): void;

/**
 * Given some code, parse it using Babel's standard behavior.
 * Referenced presets and plugins will be loaded such that optional syntax plugins are automatically enabled.
 */
export declare function parse(code: string, options: TransformOptions | undefined, callback: FileParseCallback): void;

/**
 * Given some code, parse it using Babel's standard behavior.
 * Referenced presets and plugins will be loaded such that optional syntax plugins are automatically enabled.
 */
export declare function parse(code: string, options?: TransformOptions): ParseResult | null;

/**
 * Parse the provided code as an entire ECMAScript program.
 */
declare function parse_2(
input: string,
options?: ParserOptions
): ParseResult_2<types.File>;

/**
 * Given some code, parse it using Babel's standard behavior.
 * Referenced presets and plugins will be loaded such that optional syntax plugins are automatically enabled.
 */
export declare function parseAsync(code: string, options?: TransformOptions): Promise<ParseResult | null>;

declare interface ParseError {
    code: string;
    reasonCode: string;
}

export declare type ParseResult = ReturnType<parse_2>;

declare type ParseResult_2<Result> = Result & {
    errors: ParseError[];
};

export declare interface ParserOptions {
    /**
     * By default, import and export declarations can only appear at a program's top level.
     * Setting this option to true allows them anywhere where a statement is allowed.
     */
    allowImportExportEverywhere?: boolean;

    /**
     * By default, await use is not allowed outside of an async function.
     * Set this to true to accept such code.
     */
    allowAwaitOutsideFunction?: boolean;

    /**
     * By default, a return statement at the top level raises an error.
     * Set this to true to accept such code.
     */
    allowReturnOutsideFunction?: boolean;

    /**
     * By default, new.target use is not allowed outside of a function or class.
     * Set this to true to accept such code.
     */
    allowNewTargetOutsideFunction?: boolean;

    allowSuperOutsideMethod?: boolean;

    /**
     * By default, exported identifiers must refer to a declared variable.
     * Set this to true to allow export statements to reference undeclared variables.
     */
    allowUndeclaredExports?: boolean;

    /**
     * By default, Babel parser JavaScript code according to Annex B syntax.
     * Set this to `false` to disable such behavior.
     */
    annexB?: boolean;

    /**
     * By default, Babel attaches comments to adjacent AST nodes.
     * When this option is set to false, comments are not attached.
     * It can provide up to 30% performance improvement when the input code has many comments.
     * @babel/eslint-parser will set it for you.
     * It is not recommended to use attachComment: false with Babel transform,
     * as doing so removes all the comments in output code, and renders annotations such as
     * /* istanbul ignore next *\/ nonfunctional.
     */
    attachComment?: boolean;

    /**
     * By default, Babel always throws an error when it finds some invalid code.
     * When this option is set to true, it will store the parsing error and
     * try to continue parsing the invalid input file.
     */
    errorRecovery?: boolean;

    /**
     * Indicate the mode the code should be parsed in.
     * Can be one of "script", "module", or "unambiguous". Defaults to "script".
     * "unambiguous" will make @babel/parser attempt to guess, based on the presence
     * of ES6 import or export statements.
     * Files with ES6 imports and exports are considered "module" and are otherwise "script".
     */
    sourceType?: "script" | "module" | "unambiguous";

    /**
     * Correlate output AST nodes with their source filename.
     * Useful when generating code and source maps from the ASTs of multiple input files.
     */
    sourceFilename?: string;

    /**
     * By default, the first line of code parsed is treated as line 1.
     * You can provide a line number to alternatively start with.
     * Useful for integration with other source tools.
     */
    startLine?: number;

    /**
     * By default, the parsed code is treated as if it starts from line 1, column 0.
     * You can provide a column number to alternatively start with.
     * Useful for integration with other source tools.
     */
    startColumn?: number;

    /**
     * Array containing the plugins that you want to enable.
     */
    plugins?: ParserPlugin[];

    /**
     * Should the parser work in strict mode.
     * Defaults to true if sourceType === 'module'. Otherwise, false.
     */
    strictMode?: boolean;

    /**
     * Adds a ranges property to each node: [node.start, node.end]
     */
    ranges?: boolean;

    /**
     * Adds all parsed tokens to a tokens property on the File node.
     */
    tokens?: boolean;

    /**
     * By default, the parser adds information about parentheses by setting
     * `extra.parenthesized` to `true` as needed.
     * When this option is `true` the parser creates `ParenthesizedExpression`
     * AST nodes instead of using the `extra` property.
     */
    createParenthesizedExpressions?: boolean;

    /**
     * By default, `import(foo)` is parsed as `CallExpression(Import, [Identifier(foo)])`.
     * Set this to true to parse it as an `ImportExpression` node.
     */
    createImportExpressions?: boolean;
}

declare type ParserPlugin = PluginConfig;

declare type ParserPluginWithOptions =
| ["decorators", DecoratorsPluginOptions]
| ["estree", { classFeatures?: boolean }]
| ["importAttributes", { deprecatedAssertSyntax: boolean }]
// @deprecated
| ["moduleAttributes", { version: "may-2020" }]
| ["optionalChainingAssign", { version: "2023-07" }]
| ["pipelineOperator", PipelineOperatorPluginOptions]
| ["recordAndTuple", RecordAndTuplePluginOptions]
| ["flow", FlowPluginOptions]
| ["typescript", TypeScriptPluginOptions];

/**
 * Given some code, parse it using Babel's standard behavior.
 * Referenced presets and plugins will be loaded such that optional syntax plugins are automatically enabled.
 */
export declare function parseSync(code: string, options?: TransformOptions): ParseResult | null;

export declare interface PartialConfig {
    options: TransformOptions;
    babelrc?: string | undefined;
    babelignore?: string | undefined;
    config?: string | undefined;
    hasFilesystemConfig: () => boolean;
}

declare type Pattern = AssignmentPattern | ArrayPattern | ObjectPattern;

declare const PATTERN_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare type PatternLike = Identifier | RestElement | AssignmentPattern | ArrayPattern | ObjectPattern | TSAsExpression | TSSatisfiesExpression | TSTypeAssertion | TSNonNullExpression;

declare const PATTERNLIKE_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface PipelineBareFunction extends BaseNode {
    type: "PipelineBareFunction";
    callee: Expression;
}

declare function pipelineBareFunction(callee: Expression): PipelineBareFunction;

declare interface PipelineOperatorPluginOptions {
    proposal: "minimal" | "fsharp" | "hack" | "smart";
    topicToken?: "%" | "#" | "@@" | "^^" | "^";
}

declare interface PipelinePrimaryTopicReference extends BaseNode {
    type: "PipelinePrimaryTopicReference";
}

declare function pipelinePrimaryTopicReference(): PipelinePrimaryTopicReference;

declare interface PipelineTopicExpression extends BaseNode {
    type: "PipelineTopicExpression";
    expression: Expression;
}

declare function pipelineTopicExpression(expression: Expression): PipelineTopicExpression;

declare interface Placeholder extends BaseNode {
    type: "Placeholder";
    expectedNode: "Identifier" | "StringLiteral" | "Expression" | "Statement" | "Declaration" | "BlockStatement" | "ClassBody" | "Pattern";
    name: Identifier;
}

declare function placeholder(expectedNode: "Identifier" | "StringLiteral" | "Expression" | "Statement" | "Declaration" | "BlockStatement" | "ClassBody" | "Pattern", name: Identifier): Placeholder;

declare const PLACEHOLDERS: readonly ["Identifier", "StringLiteral", "Expression", "Statement", "Declaration", "BlockStatement", "ClassBody", "Pattern"];

declare const PLACEHOLDERS_ALIAS: Record<string, string[]>;

declare const PLACEHOLDERS_FLIPPED_ALIAS: Record<string, string[]>;

declare type Plugin_2 =
| "asyncDoExpressions"
| "asyncGenerators"
| "bigInt"
| "classPrivateMethods"
| "classPrivateProperties"
| "classProperties"
| "classStaticBlock" // Enabled by default
| "decimal"
| "decorators-legacy"
| "deferredImportEvaluation"
| "decoratorAutoAccessors"
| "destructuringPrivate"
| "doExpressions"
| "dynamicImport"
| "explicitResourceManagement"
| "exportDefaultFrom"
| "exportNamespaceFrom" // deprecated
| "flow"
| "flowComments"
| "functionBind"
| "functionSent"
| "importMeta"
| "jsx"
| "logicalAssignment"
| "importAssertions" // deprecated
| "importAttributes"
| "importReflection"
| "moduleBlocks"
| "moduleStringNames"
| "nullishCoalescingOperator"
| "numericSeparator"
| "objectRestSpread"
| "optionalCatchBinding"
| "optionalChaining"
| "partialApplication"
| "placeholders"
| "privateIn" // Enabled by default
| "regexpUnicodeSets" // Enabled by default
| "sourcePhaseImports"
| "throwExpressions"
| "topLevelAwait"
| "v8intrinsic"
| ParserPluginWithOptions[0];

declare type PluginConfig = Plugin_2 | ParserPluginWithOptions;

export declare type PluginItem =
| ConfigItem
| PluginObj<any>
| PluginTarget
| [PluginTarget, PluginOptions]
| [PluginTarget, PluginOptions, string | undefined];

export declare interface PluginObj<S = PluginPass> {
    name?: string | undefined;
    manipulateOptions?(opts: any, parserOpts: any): void;
    pre?(this: S, file: BabelFile): void;
    visitor: Visitor<S>;
    post?(this: S, file: BabelFile): void;
    inherits?: any;
}

export declare type PluginOptions = object | undefined | false;

export declare interface PluginPass {
    file: BabelFile;
    key: string;
    opts: object;
    cwd: string;
    filename: string | undefined;
    get(key: unknown): any;
    set(key: unknown, value: unknown): void;
    [key: string]: unknown;
}

export declare type PluginTarget = string | object | ((...args: any[]) => any);

declare interface Position {
    line: number;
    column: number;
    index: number;
}

/**
 * Prepend a node to a member expression.
 */
declare function prependToMemberExpression<T extends Pick<MemberExpression, "object" | "property">>(member: T, prepend: MemberExpression["object"]): T;

declare type PrimitiveTypes = ReturnType<typeof getType>;

declare type Private = ClassPrivateProperty | ClassPrivateMethod | PrivateName;

declare const PRIVATE_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface PrivateName extends BaseNode {
    type: "PrivateName";
    id: Identifier;
}

declare function privateName(id: Identifier): PrivateName;

declare interface Program extends BaseNode {
    type: "Program";
    body: Array<Statement>;
    directives: Array<Directive>;
    sourceType: "script" | "module";
    interpreter?: InterpreterDirective | null;
    sourceFile: string;
}

declare function program(body: Array<Statement>, directives?: Array<Directive>, sourceType?: "script" | "module", interpreter?: InterpreterDirective | null): Program;

declare const program_2: TemplateBuilder<Program>;

declare type Property = ObjectProperty | ClassProperty | ClassAccessorProperty | ClassPrivateProperty;

declare const PROPERTY_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare type PublicReplacements = { [index: string]: unknown } | unknown[];

declare type Pureish = FunctionDeclaration | FunctionExpression | StringLiteral | NumericLiteral | NullLiteral | BooleanLiteral | RegExpLiteral | ArrowFunctionExpression | BigIntLiteral | DecimalLiteral;

declare const PUREISH_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface QualifiedTypeIdentifier extends BaseNode {
    type: "QualifiedTypeIdentifier";
    id: Identifier;
    qualification: Identifier | QualifiedTypeIdentifier;
}

declare function qualifiedTypeIdentifier(id: Identifier, qualification: Identifier | QualifiedTypeIdentifier): QualifiedTypeIdentifier;

declare const react: {
    isReactComponent: (member: Node_3) => boolean;
    isCompatTag: typeof isCompatTag;
    buildChildren: typeof buildChildren;
};

declare interface RecordAndTuplePluginOptions {
    syntaxType: "bar" | "hash";
}

declare interface RecordExpression extends BaseNode {
    type: "RecordExpression";
    properties: Array<ObjectProperty | SpreadElement>;
}

declare function recordExpression(properties: Array<ObjectProperty | SpreadElement>): RecordExpression;

/**
 * @deprecated Use `RegExpLiteral`
 */
declare interface RegexLiteral$1 extends BaseNode {
    type: "RegexLiteral";
    pattern: string;
    flags: string;
}

/** @deprecated */
declare function RegexLiteral(pattern: string, flags?: string): RegExpLiteral;

declare interface RegExpLiteral extends BaseNode {
    type: "RegExpLiteral";
    pattern: string;
    flags: string;
}

declare function regExpLiteral(pattern: string, flags?: string): RegExpLiteral;

/**
 * Remove comment properties from a node.
 */
declare function removeComments<T extends Node_3>(node: T): T;

/**
 * Remove all of the _* properties from a node along with the additional metadata
 * properties like location data and raw token data.
 */
declare function removeProperties(node: Node_3, opts?: Options): void;

declare function removePropertiesDeep<T extends Node_3>(tree: T, opts?: {
    preserveComments: boolean;
} | null): T;

/**
 * Dedupe type annotations.
 */
declare function removeTypeDuplicates(nodesIn: ReadonlyArray<FlowType | false | null | undefined>): FlowType[];

export declare function resolvePlugin(name: string, dirname: string): string | null;

export declare function resolvePreset(name: string, dirname: string): string | null;

declare interface RestElement extends BaseNode {
    type: "RestElement";
    argument: LVal;
    decorators?: Array<Decorator> | null;
    optional?: boolean | null;
    typeAnnotation?: TypeAnnotation | TSTypeAnnotation | Noop | null;
}

declare function restElement(argument: LVal): RestElement;

/**
 * @deprecated Use `RestElement`
 */
declare interface RestProperty$1 extends BaseNode {
    type: "RestProperty";
    argument: LVal;
    decorators?: Array<Decorator> | null;
    optional?: boolean | null;
    typeAnnotation?: TypeAnnotation | TSTypeAnnotation | Noop | null;
}

/** @deprecated */
declare function RestProperty(argument: LVal): RestElement;

declare type ReturnedChild = JSXSpreadChild | JSXElement | JSXFragment | Expression;

declare interface ReturnStatement extends BaseNode {
    type: "ReturnStatement";
    argument?: Expression | null;
}

declare function returnStatement(argument?: Expression | null): ReturnStatement;

declare type Scopable = BlockStatement | CatchClause | DoWhileStatement | ForInStatement | ForStatement | FunctionDeclaration | FunctionExpression | Program | ObjectMethod | SwitchStatement | WhileStatement | ArrowFunctionExpression | ClassExpression | ClassDeclaration | ForOfStatement | ClassMethod | ClassPrivateMethod | StaticBlock | TSModuleBlock;

declare const SCOPABLE_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare class Scope {
    /**
     * This searches the current "scope" and collects all references/bindings
     * within.
     */
    constructor(path: NodePath, parentScope?: Scope);
    uid: number;
    path: NodePath;
    block: Node_3;
    labels: Map<string, NodePath<types.LabeledStatement>>;
    parentBlock: Node_3;
    parent: Scope;
    hub: HubInterface;
    bindings: { [name: string]: Binding };
    references: { [name: string]: true };
    globals: { [name: string]: types.Identifier | types.JSXIdentifier };
    uids: { [name: string]: boolean };
    data: Record<string | symbol, unknown>;
    crawling: boolean;

    static globals: string[];
    /** Variables available in current context. */
    static contextVariables: string[];

    /** Traverse node with current scope and path. */
    traverse<S>(node: Node_3 | Node_3[], opts: TraverseOptions<S>, state: S): void;
    traverse(node: Node_3 | Node_3[], opts?: TraverseOptions, state?: any): void;

    /** Generate a unique identifier and add it to the current scope. */
    generateDeclaredUidIdentifier(name?: string): types.Identifier;

    /** Generate a unique identifier. */
    generateUidIdentifier(name?: string): types.Identifier;

    /** Generate a unique `_id1` binding. */
    generateUid(name?: string): string;

    /** Generate a unique identifier based on a node. */
    generateUidIdentifierBasedOnNode(parent: Node_3, defaultName?: string): types.Identifier;

    /**
     * Determine whether evaluating the specific input `node` is a consequenceless reference. ie.
     * evaluating it wont result in potentially arbitrary code from being ran. The following are
     * whitelisted and determined not to cause side effects:
     *
     *  - `this` expressions
     *  - `super` expressions
     *  - Bound identifiers
     */
    isStatic(node: Node_3): boolean;

    /** Possibly generate a memoised identifier if it is not static and has consequences. */
    maybeGenerateMemoised(node: Node_3, dontPush?: boolean): types.Identifier;

    checkBlockScopedCollisions(local: Binding, kind: BindingKind, name: string, id: object): void;

    rename(oldName: string, newName?: string, block?: Node_3): void;

    dump(): void;

    toArray(
    node: types.Node,
    i?: number | boolean,
    arrayLikeIsIterable?: boolean,
    ): types.ArrayExpression | types.CallExpression | types.Identifier;

    hasLabel(name: string): boolean;

    getLabel(name: string): NodePath<types.LabeledStatement> | undefined;

    registerLabel(path: NodePath<types.LabeledStatement>): void;

    registerDeclaration(path: NodePath): void;

    buildUndefinedNode(): types.UnaryExpression;

    registerConstantViolation(path: NodePath): void;

    registerBinding(kind: BindingKind, path: NodePath, bindingPath?: NodePath): void;

    addGlobal(node: types.Identifier | types.JSXIdentifier): void;

    hasUid(name: string): boolean;

    hasGlobal(name: string): boolean;

    hasReference(name: string): boolean;

    isPure(node: Node_3, constantsOnly?: boolean): boolean;

    /**
     * Set some arbitrary data on the current scope.
     */
    setData(key: string, val: any): any;

    /**
     * Recursively walk up scope tree looking for the data `key`.
     */
    getData(key: string): any;

    /**
     * Recursively walk up scope tree looking for the data `key` and if it exists,
     * remove it.
     */
    removeData(key: string): void;

    crawl(): void;

    push(opts: {
        id: types.LVal;
        init?: types.Expression;
        unique?: boolean;
        _blockHoist?: number | undefined;
        kind?: "var" | "let" | "const";
    }): void;

    /** Walk up to the top of the scope tree and get the `Program`. */
    getProgramParent(): Scope;

    /** Walk up the scope tree until we hit either a Function or return null. */
    getFunctionParent(): Scope | null;

    /**
     * Walk up the scope tree until we hit either a BlockStatement/Loop/Program/Function/Switch or reach the
     * very top and hit Program.
     */
    getBlockParent(): Scope;

    /**
     * Walk up from a pattern scope (function param initializer) until we hit a non-pattern scope,
     * then returns its block parent
     * @returns An ancestry scope whose path is a block parent
     */
    getPatternParent(): Scope;

    /** Walks the scope tree and gathers **all** bindings. */
    getAllBindings(): Record<string, Binding>;

    /** Walks the scope tree and gathers all declarations of `kind`. */
    getAllBindingsOfKind(...kinds: string[]): Record<string, Binding>;

    bindingIdentifierEquals(name: string, node: Node_3): boolean;

    getBinding(name: string): Binding | undefined;

    getOwnBinding(name: string): Binding | undefined;

    getBindingIdentifier(name: string): types.Identifier;

    getOwnBindingIdentifier(name: string): types.Identifier;

    hasOwnBinding(name: string): boolean;

    hasBinding(
    name: string,
    optsOrNoGlobals?:
    | boolean
    | {
        noGlobals?: boolean;
        noUids?: boolean;
    },
    ): boolean;

    parentHasBinding(
    name: string,
    opts?: {
        noGlobals?: boolean;
        noUids?: boolean;
    },
    ): boolean;

    /** Move a binding of `name` to another `scope`. */
    moveBindingTo(name: string, scope: Scope): void;

    removeOwnBinding(name: string): void;

    removeBinding(name: string): void;
}

declare interface SequenceExpression extends BaseNode {
    type: "SequenceExpression";
    expressions: Array<Expression>;
}

declare function sequenceExpression(expressions: Array<Expression>): SequenceExpression;

declare function shallowEqual<T extends object>(actual: object, expected: T): actual is T;

export declare type SimpleCacheCallback<T extends SimpleCacheKey> = () => T;

/**
 * JS configs are great because they can compute a config on the fly,
 * but the downside there is that it makes caching harder.
 * Babel wants to avoid re-executing the config function every time a file is compiled,
 * because then it would also need to re-execute any plugin and preset functions
 * referenced in that config.
 *
 * To avoid this, Babel expects users of config functions to tell it how to manage caching
 * within a config file.
 *
 * @see https://babeljs.io/docs/en/next/config-files#apicache
 */
export declare interface SimpleCacheConfigurator {
    // there is an undocumented call signature that is a shorthand for forever()/never()/using().
    // (ever: boolean): void
    // <T extends SimpleCacheKey>(callback: CacheCallback<T>): T
    /**
     * Permacache the computed config and never call the function again.
     */
    forever(): void;
    /**
     * Do not cache this config, and re-execute the function every time.
     */
    never(): void;
    /**
     * Any time the using callback returns a value other than the one that was expected,
     * the overall config function will be called again and a new entry will be added to the cache.
     *
     * @example
     * api.cache.using(() => process.env.NODE_ENV)
     */
    using<T extends SimpleCacheKey>(callback: SimpleCacheCallback<T>): T;
    /**
     * Any time the using callback returns a value other than the one that was expected,
     * the overall config function will be called again and all entries in the cache will
     * be replaced with the result.
     *
     * @example
     * api.cache.invalidate(() => process.env.NODE_ENV)
     */
    invalidate<T extends SimpleCacheKey>(callback: SimpleCacheCallback<T>): T;
}

export declare type SimpleCacheKey = string | boolean | number | null | undefined;

declare const smart: TemplateBuilder<Statement | Statement[]>;

declare interface SourceLocation {
    start: Position;
    end: Position;
    filename: string;
    identifierName: string | undefined | null;
}

declare interface SpreadElement extends BaseNode {
    type: "SpreadElement";
    argument: Expression;
}

declare function spreadElement(argument: Expression): SpreadElement;

/**
 * @deprecated Use `SpreadElement`
 */
declare interface SpreadProperty$1 extends BaseNode {
    type: "SpreadProperty";
    argument: Expression;
}

/** @deprecated */
declare function SpreadProperty(argument: Expression): SpreadElement;

declare type Standardized = ArrayExpression | AssignmentExpression | BinaryExpression | InterpreterDirective | Directive | DirectiveLiteral | BlockStatement | BreakStatement | CallExpression | CatchClause | ConditionalExpression | ContinueStatement | DebuggerStatement | DoWhileStatement | EmptyStatement | ExpressionStatement | File_2 | ForInStatement | ForStatement | FunctionDeclaration | FunctionExpression | Identifier | IfStatement | LabeledStatement | StringLiteral | NumericLiteral | NullLiteral | BooleanLiteral | RegExpLiteral | LogicalExpression | MemberExpression | NewExpression | Program | ObjectExpression | ObjectMethod | ObjectProperty | RestElement | ReturnStatement | SequenceExpression | ParenthesizedExpression | SwitchCase | SwitchStatement | ThisExpression | ThrowStatement | TryStatement | UnaryExpression | UpdateExpression | VariableDeclaration | VariableDeclarator | WhileStatement | WithStatement | AssignmentPattern | ArrayPattern | ArrowFunctionExpression | ClassBody | ClassExpression | ClassDeclaration | ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ExportSpecifier | ForOfStatement | ImportDeclaration | ImportDefaultSpecifier | ImportNamespaceSpecifier | ImportSpecifier | ImportExpression | MetaProperty | ClassMethod | ObjectPattern | SpreadElement | Super | TaggedTemplateExpression | TemplateElement | TemplateLiteral | YieldExpression | AwaitExpression | Import | BigIntLiteral | ExportNamespaceSpecifier | OptionalMemberExpression | OptionalCallExpression | ClassProperty | ClassAccessorProperty | ClassPrivateProperty | ClassPrivateMethod | PrivateName | StaticBlock;

declare const STANDARDIZED_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare type Statement = BlockStatement | BreakStatement | ContinueStatement | DebuggerStatement | DoWhileStatement | EmptyStatement | ExpressionStatement | ForInStatement | ForStatement | FunctionDeclaration | IfStatement | LabeledStatement | ReturnStatement | SwitchStatement | ThrowStatement | TryStatement | VariableDeclaration | WhileStatement | WithStatement | ClassDeclaration | ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ForOfStatement | ImportDeclaration | DeclareClass | DeclareFunction | DeclareInterface | DeclareModule | DeclareModuleExports | DeclareTypeAlias | DeclareOpaqueType | DeclareVariable | DeclareExportDeclaration | DeclareExportAllDeclaration | InterfaceDeclaration | OpaqueType | TypeAlias | EnumDeclaration | TSDeclareFunction | TSInterfaceDeclaration | TSTypeAliasDeclaration | TSEnumDeclaration | TSModuleDeclaration | TSImportEqualsDeclaration | TSExportAssignment | TSNamespaceExportDeclaration;

declare const statement: TemplateBuilder<Statement>;

declare const STATEMENT_OR_BLOCK_KEYS: string[];

declare const STATEMENT_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare const statements: TemplateBuilder<Statement[]>;

declare interface StaticBlock extends BaseNode {
    type: "StaticBlock";
    body: Array<Statement>;
}

declare function staticBlock(body: Array<Statement>): StaticBlock;

declare const STRING_UNARY_OPERATORS: string[];

declare interface StringLiteral extends BaseNode {
    type: "StringLiteral";
    value: string;
}

declare function stringLiteral(value: string): StringLiteral;

declare interface StringLiteralTypeAnnotation extends BaseNode {
    type: "StringLiteralTypeAnnotation";
    value: string;
}

declare function stringLiteralTypeAnnotation(value: string): StringLiteralTypeAnnotation;

declare interface StringTypeAnnotation extends BaseNode {
    type: "StringTypeAnnotation";
}

declare function stringTypeAnnotation(): StringTypeAnnotation;

declare interface Super extends BaseNode {
    type: "Super";
}

declare function _super(): Super;

declare interface SwitchCase extends BaseNode {
    type: "SwitchCase";
    test?: Expression | null;
    consequent: Array<Statement>;
}

declare function switchCase(test: Expression | null | undefined, consequent: Array<Statement>): SwitchCase;

declare interface SwitchStatement extends BaseNode {
    type: "SwitchStatement";
    discriminant: Expression;
    cases: Array<SwitchCase>;
}

declare function switchStatement(discriminant: Expression, cases: Array<SwitchCase>): SwitchStatement;

declare interface SymbolTypeAnnotation extends BaseNode {
    type: "SymbolTypeAnnotation";
}

declare function symbolTypeAnnotation(): SymbolTypeAnnotation;

declare interface TaggedTemplateExpression extends BaseNode {
    type: "TaggedTemplateExpression";
    tag: Expression;
    quasi: TemplateLiteral;
    typeParameters?: TypeParameterInstantiation | TSTypeParameterInstantiation | null;
}

declare function taggedTemplateExpression(tag: Expression, quasi: TemplateLiteral): TaggedTemplateExpression;

export declare const template: DefaultTemplateBuilder;

declare interface TemplateBuilder<T> {
    /**
     * Build a new builder, merging the given options with the previous ones.
     */
    (opts: TemplateBuilderOptions): TemplateBuilder<T>;

    /**
     * Building from a string produces an AST builder function by default.
     */
    (code: string, opts?: TemplateBuilderOptions): (arg?: PublicReplacements) => T;

    /**
     * Building from a template literal produces an AST builder function by default.
     */
    (tpl: TemplateStringsArray, ...args: unknown[]): (arg?: PublicReplacements) => T;

    /**
     * Allow users to explicitly create templates that produce ASTs,
     * skipping the need for an intermediate function.
     *
     * Does not allow `%%foo%%` style placeholders.
     */
    ast: {
        (tpl: string, opts?: TemplateBuilderOptions): T;
        (tpl: TemplateStringsArray, ...args: unknown[]): T;
    };
}

declare interface TemplateBuilderOptions extends ParserOptions {
    /**
     * A set of placeholder names to automatically accept.
     * Items in this list do not need to match `placeholderPattern`.
     *
     * This option cannot be used when using `%%foo%%` style placeholders.
     */
    placeholderWhitelist?: Set<string> | null | undefined;

    /**
     * A pattern to search for when looking for `Identifier` and `StringLiteral`
     * nodes that should be considered as placeholders.
     *
     * `false` will disable placeholder searching placeholders, leaving only
     * the `placeholderWhitelist` value to find replacements.
     *
     * This option cannot be used when using `%%foo%%` style placeholders.
     *
     * @default /^[_$A-Z0-9]+$/
     */
    placeholderPattern?: RegExp | false | null | undefined;

    /**
     * Set this to `true` to preserve comments from the template string
     * into the resulting AST, or `false` to automatically discard comments.
     *
     * @default false
     */
    preserveComments?: boolean | null | undefined;

    /**
     * Set to `true` to use `%%foo%%` style placeholders, `false` to use legacy placeholders
     * described by `placeholderPattern` or `placeholderWhitelist`.
     *
     * When it is not set, it behaves as `true` if there are syntactic placeholders, otherwise as `false`.
     *
     * @since 7.4.0
     */
    syntacticPlaceholders?: boolean | null | undefined;
}

declare interface TemplateElement extends BaseNode {
    type: "TemplateElement";
    value: {
        raw: string;
        cooked?: string;
    };
    tail: boolean;
}

declare function templateElement(value: {
    raw: string;
    cooked?: string;
}, tail?: boolean): TemplateElement;

declare interface TemplateLiteral extends BaseNode {
    type: "TemplateLiteral";
    quasis: Array<TemplateElement>;
    expressions: Array<Expression | TSType>;
}

declare function templateLiteral(quasis: Array<TemplateElement>, expressions: Array<Expression | TSType>): TemplateLiteral;

declare type Terminatorless = BreakStatement | ContinueStatement | ReturnStatement | ThrowStatement | YieldExpression | AwaitExpression;

declare const TERMINATORLESS_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface ThisExpression extends BaseNode {
    type: "ThisExpression";
}

declare function thisExpression(): ThisExpression;

declare interface ThisTypeAnnotation extends BaseNode {
    type: "ThisTypeAnnotation";
}

declare function thisTypeAnnotation(): ThisTypeAnnotation;

declare interface ThrowStatement extends BaseNode {
    type: "ThrowStatement";
    argument: Expression;
}

declare function throwStatement(argument: Expression): ThrowStatement;

declare function toBindingIdentifierName(name: string): string;

declare function toBlock(node: Statement | Expression, parent?: Node_3): BlockStatement;

declare function toComputedKey(node: ObjectMember | ObjectProperty | ClassMethod | ClassProperty | ClassAccessorProperty | MemberExpression | OptionalMemberExpression, key?: Expression | PrivateName): PrivateName | Expression;

declare function toIdentifier(input: string): string;

declare function toKeyAlias(node: Method | Property, key?: Node_3): string;

declare namespace toKeyAlias {
    var uid: number;
    var increment: () => number;
}

declare interface TopicReference extends BaseNode {
    type: "TopicReference";
}

declare function topicReference(): TopicReference;

/**
 * Turn an array of statement `nodes` into a `SequenceExpression`.
 *
 * Variable declarations are turned into simple assignments and their
 * declarations hoisted to the top of the current scope.
 *
 * Expression statements are just resolved to their expression.
 */
declare function toSequenceExpression(nodes: ReadonlyArray<Node_3>, scope: any): SequenceExpression | undefined;

/**
 * Transforms the passed in code. Calling a callback with an object with the generated code, source map, and AST.
 */
export declare function transform(code: string, callback: FileResultCallback): void;

/**
 * Transforms the passed in code. Calling a callback with an object with the generated code, source map, and AST.
 */
export declare function transform(code: string, opts: TransformOptions | undefined, callback: FileResultCallback): void;

/**
 * Here for backward-compatibility. Ideally use `transformSync` if you want a synchronous API.
 */
export declare function transform(code: string, opts?: TransformOptions): BabelFileResult | null;

/**
 * Transforms the passed in code. Calling a callback with an object with the generated code, source map, and AST.
 */
export declare function transformAsync(code: string, opts?: TransformOptions): Promise<BabelFileResult | null>;

export declare interface TransformCaller {
    // the only required property
    name: string;
    // e.g. set to true by `babel-loader` and false by `babel-jest`
    supportsStaticESM?: boolean | undefined;
    supportsDynamicImport?: boolean | undefined;
    supportsExportNamespaceFrom?: boolean | undefined;
    supportsTopLevelAwait?: boolean | undefined;
    // augment this with a "declare module '@babel/core' { ... }" if you need more keys
}

/**
 * Asynchronously transforms the entire contents of a file.
 */
export declare function transformFile(filename: string, callback: FileResultCallback): void;

/**
 * Asynchronously transforms the entire contents of a file.
 */
export declare function transformFile(filename: string, opts: TransformOptions | undefined, callback: FileResultCallback): void;

/**
 * Asynchronously transforms the entire contents of a file.
 */
export declare function transformFileAsync(filename: string, opts?: TransformOptions): Promise<BabelFileResult | null>;

/**
 * Synchronous version of `babel.transformFile`. Returns the transformed contents of the `filename`.
 */
export declare function transformFileSync(filename: string, opts?: TransformOptions): BabelFileResult | null;

/**
 * Given an AST, transform it.
 */
export declare function transformFromAst(ast: Node_2, code: string | undefined, callback: FileResultCallback): void;

/**
 * Given an AST, transform it.
 */
export declare function transformFromAst(
ast: Node_2,
code: string | undefined,
opts: TransformOptions | undefined,
callback: FileResultCallback,
): void;

/**
 * Given an AST, transform it.
 */
export declare function transformFromAstAsync(
ast: Node_2,
code?: string,
opts?: TransformOptions,
): Promise<BabelFileResult | null>;

/**
 * Here for backward-compatibility. Ideally use ".transformSync" if you want a synchronous API.
 */
export declare function transformFromAstSync(ast: Node_2, code?: string, opts?: TransformOptions): BabelFileResult | null;

export declare interface TransformOptions {
    /**
     * Specify which assumptions it can make about your code, to better optimize the compilation result. **NOTE**: This replaces the various `loose` options in plugins in favor of
     * top-level options that can apply to multiple plugins
     *
     * @see https://babeljs.io/docs/en/assumptions
     */
    assumptions?: { [name: string]: boolean } | null | undefined;

    /**
     * Include the AST in the returned object
     *
     * Default: `false`
     */
    ast?: boolean | null | undefined;

    /**
     * Attach a comment after all non-user injected code
     *
     * Default: `null`
     */
    auxiliaryCommentAfter?: string | null | undefined;

    /**
     * Attach a comment before all non-user injected code
     *
     * Default: `null`
     */
    auxiliaryCommentBefore?: string | null | undefined;

    /**
     * Specify the "root" folder that defines the location to search for "babel.config.js", and the default folder to allow `.babelrc` files inside of.
     *
     * Default: `"."`
     */
    root?: string | null | undefined;

    /**
     * This option, combined with the "root" value, defines how Babel chooses its project root.
     * The different modes define different ways that Babel can process the "root" value to get
     * the final project root.
     *
     * @see https://babeljs.io/docs/en/next/options#rootmode
     */
    rootMode?: "root" | "upward" | "upward-optional" | undefined;

    /**
     * The config file to load Babel's config from. Defaults to searching for "babel.config.js" inside the "root" folder. `false` will disable searching for config files.
     *
     * Default: `undefined`
     */
    configFile?: string | boolean | null | undefined;

    /**
     * Specify whether or not to use .babelrc and
     * .babelignore files.
     *
     * Default: `true`
     */
    babelrc?: boolean | null | undefined;

    /**
     * Specify which packages should be search for .babelrc files when they are being compiled. `true` to always search, or a path string or an array of paths to packages to search
     * inside of. Defaults to only searching the "root" package.
     *
     * Default: `(root)`
     */
    babelrcRoots?: boolean | MatchPattern | MatchPattern[] | null | undefined;

    /**
     * Toggles whether or not browserslist config sources are used, which includes searching for any browserslist files or referencing the browserslist key inside package.json.
     * This is useful for projects that use a browserslist config for files that won't be compiled with Babel.
     *
     * If a string is specified, it must represent the path of a browserslist configuration file. Relative paths are resolved relative to the configuration file which specifies
     * this option, or to `cwd` when it's passed as part of the programmatic options.
     *
     * Default: `true`
     */
    browserslistConfigFile?: boolean | null | undefined;

    /**
     * The Browserslist environment to use.
     *
     * Default: `undefined`
     */
    browserslistEnv?: string | null | undefined;

    /**
     * By default `babel.transformFromAst` will clone the input AST to avoid mutations.
     * Specifying `cloneInputAst: false` can improve parsing performance if the input AST is not used elsewhere.
     *
     * Default: `true`
     */
    cloneInputAst?: boolean | null | undefined;

    /**
     * Defaults to environment variable `BABEL_ENV` if set, or else `NODE_ENV` if set, or else it defaults to `"development"`
     *
     * Default: env vars
     */
    envName?: string | undefined;

    /**
     * If any of patterns match, the current configuration object is considered inactive and is ignored during config processing.
     */
    exclude?: MatchPattern | MatchPattern[] | undefined;

    /**
     * Enable code generation
     *
     * Default: `true`
     */
    code?: boolean | null | undefined;

    /**
     * Output comments in generated output
     *
     * Default: `true`
     */
    comments?: boolean | null | undefined;

    /**
     * Do not include superfluous whitespace characters and line terminators. When set to `"auto"` compact is set to `true` on input sizes of >500KB
     *
     * Default: `"auto"`
     */
    compact?: boolean | "auto" | null | undefined;

    /**
     * The working directory that Babel's programmatic options are loaded relative to.
     *
     * Default: `"."`
     */
    cwd?: string | null | undefined;

    /**
     * Utilities may pass a caller object to identify themselves to Babel and
     * pass capability-related flags for use by configs, presets and plugins.
     *
     * @see https://babeljs.io/docs/en/next/options#caller
     */
    caller?: TransformCaller | undefined;

    /**
     * This is an object of keys that represent different environments. For example, you may have: `{ env: { production: { \/* specific options *\/ } } }`
     * which will use those options when the `envName` is `production`
     *
     * Default: `{}`
     */
    env?: { [index: string]: TransformOptions | null | undefined } | null | undefined;

    /**
     * A path to a `.babelrc` file to extend
     *
     * Default: `null`
     */
    extends?: string | null | undefined;

    /**
     * Filename for use in errors etc
     *
     * Default: `"unknown"`
     */
    filename?: string | null | undefined;

    /**
     * Filename relative to `sourceRoot`
     *
     * Default: `(filename)`
     */
    filenameRelative?: string | null | undefined;

    /**
     * An object containing the options to be passed down to the babel code generator, @babel/generator
     *
     * Default: `{}`
     */
    generatorOpts?: GeneratorOptions | null | undefined;

    /**
     * Specify a custom callback to generate a module id with. Called as `getModuleId(moduleName)`. If falsy value is returned then the generated module id is used
     *
     * Default: `null`
     */
    getModuleId?: ((moduleName: string) => string | null | undefined) | null | undefined;

    /**
     * ANSI highlight syntax error code frames
     *
     * Default: `true`
     */
    highlightCode?: boolean | null | undefined;

    /**
     * Opposite to the `only` option. `ignore` is disregarded if `only` is specified
     *
     * Default: `null`
     */
    ignore?: MatchPattern[] | null | undefined;

    /**
     * This option is a synonym for "test"
     */
    include?: MatchPattern | MatchPattern[] | undefined;

    /**
     * A source map object that the output source map will be based on
     *
     * Default: `null`
     */
    inputSourceMap?: InputSourceMap | null | undefined;

    /**
     * Should the output be minified (not printing last semicolons in blocks, printing literal string values instead of escaped ones, stripping `()` from `new` when safe)
     *
     * Default: `false`
     */
    minified?: boolean | null | undefined;

    /**
     * Specify a custom name for module ids
     *
     * Default: `null`
     */
    moduleId?: string | null | undefined;

    /**
     * If truthy, insert an explicit id for modules. By default, all modules are anonymous. (Not available for `common` modules)
     *
     * Default: `false`
     */
    moduleIds?: boolean | null | undefined;

    /**
     * Optional prefix for the AMD module formatter that will be prepend to the filename on module definitions
     *
     * Default: `(sourceRoot)`
     */
    moduleRoot?: string | null | undefined;

    /**
     * A glob, regex, or mixed array of both, matching paths to **only** compile. Can also be an array of arrays containing paths to explicitly match. When attempting to compile
     * a non-matching file it's returned verbatim
     *
     * Default: `null`
     */
    only?: MatchPattern[] | null | undefined;

    /**
     * Allows users to provide an array of options that will be merged into the current configuration one at a time.
     * This feature is best used alongside the "test"/"include"/"exclude" options to provide conditions for which an override should apply
     */
    overrides?: TransformOptions[] | undefined;

    /**
     * An object containing the options to be passed down to the babel parser, @babel/parser
     *
     * Default: `{}`
     */
    parserOpts?: ParserOptions | null | undefined;

    /**
     * List of plugins to load and use
     *
     * Default: `[]`
     */
    plugins?: PluginItem[] | null | undefined;

    /**
     * List of presets (a set of plugins) to load and use
     *
     * Default: `[]`
     */
    presets?: PluginItem[] | null | undefined;

    /**
     * Retain line numbers. This will lead to wacky code but is handy for scenarios where you can't use source maps. (**NOTE**: This will not retain the columns)
     *
     * Default: `false`
     */
    retainLines?: boolean | null | undefined;

    /**
     * An optional callback that controls whether a comment should be output or not. Called as `shouldPrintComment(commentContents)`. **NOTE**: This overrides the `comment` option when used
     *
     * Default: `null`
     */
    shouldPrintComment?: ((commentContents: string) => boolean) | null | undefined;

    /**
     * Set `sources[0]` on returned source map
     *
     * Default: `(filenameRelative)`
     */
    sourceFileName?: string | null | undefined;

    /**
     * If truthy, adds a `map` property to returned output. If set to `"inline"`, a comment with a sourceMappingURL directive is added to the bottom of the returned code. If set to `"both"`
     * then a `map` property is returned as well as a source map comment appended. **This does not emit sourcemap files by itself!**
     *
     * Default: `false`
     */
    sourceMaps?: boolean | "inline" | "both" | null | undefined;

    /**
     * The root from which all sources are relative
     *
     * Default: `(moduleRoot)`
     */
    sourceRoot?: string | null | undefined;

    /**
     * Indicate the mode the code should be parsed in. Can be one of "script", "module", or "unambiguous". `"unambiguous"` will make Babel attempt to guess, based on the presence of ES6
     * `import` or `export` statements. Files with ES6 `import`s and `export`s are considered `"module"` and are otherwise `"script"`.
     *
     * Default: `("module")`
     */
    sourceType?: "script" | "module" | "unambiguous" | null | undefined;

    /**
     * If all patterns fail to match, the current configuration object is considered inactive and is ignored during config processing.
     */
    test?: MatchPattern | MatchPattern[] | undefined;

    /**
     * Describes the environments you support/target for your project.
     * This can either be a [browserslist-compatible](https://github.com/ai/browserslist) query (with [caveats](https://babeljs.io/docs/en/babel-preset-env#ineffective-browserslist-queries))
     *
     * Default: `{}`
     */
    targets?:
    | string
    | string[]
    | {
        esmodules?: boolean;
        node?: Omit<string, "current"> | "current" | true;
        safari?: Omit<string, "tp"> | "tp";
        browsers?: string | string[];
        android?: string;
        chrome?: string;
        deno?: string;
        edge?: string;
        electron?: string;
        firefox?: string;
        ie?: string;
        ios?: string;
        opera?: string;
        rhino?: string;
        samsung?: string;
    };

    /**
     * An optional callback that can be used to wrap visitor methods. **NOTE**: This is useful for things like introspection, and not really needed for implementing anything. Called as
     * `wrapPluginVisitorMethod(pluginAlias, visitorType, callback)`.
     */
    wrapPluginVisitorMethod?:
    | ((
    pluginAlias: string,
    visitorType: "enter" | "exit",
    callback: (path: NodePath, state: any) => void,
    ) => (path: NodePath, state: any) => void)
    | null
    | undefined;
}

/**
 * Transforms the passed in code. Returning an object with the generated code, source map, and AST.
 */
export declare function transformSync(code: string, opts?: TransformOptions): BabelFileResult | null;

declare type TraversalAncestors = Array<{
    node: Node_3;
    key: string;
    index?: number;
}>;

declare interface TraversalContext<S = unknown> {
    parentPath: NodePath;
    scope: Scope;
    state: S;
    opts: TraverseOptions;
}

declare type TraversalHandler<T> = (this: undefined, node: Node_3, parent: TraversalAncestors, state: T) => void;

declare type TraversalHandlers<T> = {
    enter?: TraversalHandler<T>;
    exit?: TraversalHandler<T>;
};

export declare const traverse: {
    <S>(parent: Node_3, opts: TraverseOptions<S>, scope: Scope | undefined, state: S, parentPath?: NodePath): void;
    (parent: Node_3, opts?: TraverseOptions, scope?: Scope, state?: any, parentPath?: NodePath): void;

    visitors: typeof visitors;
    verify: typeof visitors.verify;
    explode: typeof visitors.explode;

    cheap: (node: Node_3, enter: (node: Node_3) => void) => void;
    node: (
    node: Node_3,
    opts: TraverseOptions,
    scope?: Scope,
    state?: any,
    path?: NodePath,
    skipKeys?: Record<string, boolean>,
    ) => void;
    clearNode: (node: Node_3, opts?: Options) => void;
    removeProperties: (tree: Node_3, opts?: Options) => Node_3;
    hasType: (tree: Node_3, type: Node_3["type"], denylistTypes?: string[]) => boolean;

    cache: typeof cache;
};

/**
 * A general AST traversal with both prefix and postfix handlers, and a
 * state object. Exposes ancestry data to each handler so that more complex
 * AST data can be taken into account.
 */
declare function traverse_2<T>(node: Node_3, handlers: TraversalHandler<T> | TraversalHandlers<T>, state?: T): void;

/**
 * A prefix AST traversal implementation meant for simple searching
 * and processing.
 */
declare function traverseFast<Options = {}>(node: Node_3 | null | undefined, enter: (node: Node_3, opts?: Options) => void, opts?: Options): void;

declare type TraverseOptions<S = Node_3> = {
    scope?: Scope;
    noScope?: boolean;
    denylist?: NodeType[];
    /** @deprecated will be removed in Babel 8 */
    blacklist?: NodeType[];
    shouldSkip?: (node: NodePath) => boolean;
} & Visitor<S>;

declare interface TryStatement extends BaseNode {
    type: "TryStatement";
    block: BlockStatement;
    handler?: CatchClause | null;
    finalizer?: BlockStatement | null;
}

declare function tryStatement(block: BlockStatement, handler?: CatchClause | null, finalizer?: BlockStatement | null): TryStatement;

declare interface TSAnyKeyword extends BaseNode {
    type: "TSAnyKeyword";
}

declare function tsAnyKeyword(): TSAnyKeyword;

declare interface TSArrayType extends BaseNode {
    type: "TSArrayType";
    elementType: TSType;
}

declare function tsArrayType(elementType: TSType): TSArrayType;

declare interface TSAsExpression extends BaseNode {
    type: "TSAsExpression";
    expression: Expression;
    typeAnnotation: TSType;
}

declare function tsAsExpression(expression: Expression, typeAnnotation: TSType): TSAsExpression;

declare type TSBaseType = TSAnyKeyword | TSBooleanKeyword | TSBigIntKeyword | TSIntrinsicKeyword | TSNeverKeyword | TSNullKeyword | TSNumberKeyword | TSObjectKeyword | TSStringKeyword | TSSymbolKeyword | TSUndefinedKeyword | TSUnknownKeyword | TSVoidKeyword | TSThisType | TSLiteralType;

declare const TSBASETYPE_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface TSBigIntKeyword extends BaseNode {
    type: "TSBigIntKeyword";
}

declare function tsBigIntKeyword(): TSBigIntKeyword;

declare interface TSBooleanKeyword extends BaseNode {
    type: "TSBooleanKeyword";
}

declare function tsBooleanKeyword(): TSBooleanKeyword;

declare interface TSCallSignatureDeclaration extends BaseNode {
    type: "TSCallSignatureDeclaration";
    typeParameters?: TSTypeParameterDeclaration | null;
    parameters: Array<ArrayPattern | Identifier | ObjectPattern | RestElement>;
    typeAnnotation?: TSTypeAnnotation | null;
}

declare function tsCallSignatureDeclaration(typeParameters: TSTypeParameterDeclaration | null | undefined, parameters: Array<ArrayPattern | Identifier | ObjectPattern | RestElement>, typeAnnotation?: TSTypeAnnotation | null): TSCallSignatureDeclaration;

declare interface TSConditionalType extends BaseNode {
    type: "TSConditionalType";
    checkType: TSType;
    extendsType: TSType;
    trueType: TSType;
    falseType: TSType;
}

declare function tsConditionalType(checkType: TSType, extendsType: TSType, trueType: TSType, falseType: TSType): TSConditionalType;

declare interface TSConstructorType extends BaseNode {
    type: "TSConstructorType";
    typeParameters?: TSTypeParameterDeclaration | null;
    parameters: Array<ArrayPattern | Identifier | ObjectPattern | RestElement>;
    typeAnnotation?: TSTypeAnnotation | null;
    abstract?: boolean | null;
}

declare function tsConstructorType(typeParameters: TSTypeParameterDeclaration | null | undefined, parameters: Array<ArrayPattern | Identifier | ObjectPattern | RestElement>, typeAnnotation?: TSTypeAnnotation | null): TSConstructorType;

declare interface TSConstructSignatureDeclaration extends BaseNode {
    type: "TSConstructSignatureDeclaration";
    typeParameters?: TSTypeParameterDeclaration | null;
    parameters: Array<ArrayPattern | Identifier | ObjectPattern | RestElement>;
    typeAnnotation?: TSTypeAnnotation | null;
}

declare function tsConstructSignatureDeclaration(typeParameters: TSTypeParameterDeclaration | null | undefined, parameters: Array<ArrayPattern | Identifier | ObjectPattern | RestElement>, typeAnnotation?: TSTypeAnnotation | null): TSConstructSignatureDeclaration;

declare interface TSDeclareFunction extends BaseNode {
    type: "TSDeclareFunction";
    id?: Identifier | null;
    typeParameters?: TSTypeParameterDeclaration | Noop | null;
    params: Array<Identifier | Pattern | RestElement>;
    returnType?: TSTypeAnnotation | Noop | null;
    async?: boolean;
    declare?: boolean | null;
    generator?: boolean;
}

declare function tsDeclareFunction(id: Identifier | null | undefined, typeParameters: TSTypeParameterDeclaration | Noop | null | undefined, params: Array<Identifier | Pattern | RestElement>, returnType?: TSTypeAnnotation | Noop | null): TSDeclareFunction;

declare interface TSDeclareMethod extends BaseNode {
    type: "TSDeclareMethod";
    decorators?: Array<Decorator> | null;
    key: Identifier | StringLiteral | NumericLiteral | BigIntLiteral | Expression;
    typeParameters?: TSTypeParameterDeclaration | Noop | null;
    params: Array<Identifier | Pattern | RestElement | TSParameterProperty>;
    returnType?: TSTypeAnnotation | Noop | null;
    abstract?: boolean | null;
    access?: "public" | "private" | "protected" | null;
    accessibility?: "public" | "private" | "protected" | null;
    async?: boolean;
    computed?: boolean;
    generator?: boolean;
    kind?: "get" | "set" | "method" | "constructor";
    optional?: boolean | null;
    override?: boolean;
    static?: boolean;
}

declare function tsDeclareMethod(decorators: Array<Decorator> | null | undefined, key: Identifier | StringLiteral | NumericLiteral | BigIntLiteral | Expression, typeParameters: TSTypeParameterDeclaration | Noop | null | undefined, params: Array<Identifier | Pattern | RestElement | TSParameterProperty>, returnType?: TSTypeAnnotation | Noop | null): TSDeclareMethod;

declare type TSEntityName = Identifier | TSQualifiedName;

declare const TSENTITYNAME_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface TSEnumDeclaration extends BaseNode {
    type: "TSEnumDeclaration";
    id: Identifier;
    members: Array<TSEnumMember>;
    const?: boolean | null;
    declare?: boolean | null;
    initializer?: Expression | null;
}

declare function tsEnumDeclaration(id: Identifier, members: Array<TSEnumMember>): TSEnumDeclaration;

declare interface TSEnumMember extends BaseNode {
    type: "TSEnumMember";
    id: Identifier | StringLiteral;
    initializer?: Expression | null;
}

declare function tsEnumMember(id: Identifier | StringLiteral, initializer?: Expression | null): TSEnumMember;

declare interface TSExportAssignment extends BaseNode {
    type: "TSExportAssignment";
    expression: Expression;
}

declare function tsExportAssignment(expression: Expression): TSExportAssignment;

declare interface TSExpressionWithTypeArguments extends BaseNode {
    type: "TSExpressionWithTypeArguments";
    expression: TSEntityName;
    typeParameters?: TSTypeParameterInstantiation | null;
}

declare function tsExpressionWithTypeArguments(expression: TSEntityName, typeParameters?: TSTypeParameterInstantiation | null): TSExpressionWithTypeArguments;

declare interface TSExternalModuleReference extends BaseNode {
    type: "TSExternalModuleReference";
    expression: StringLiteral;
}

declare function tsExternalModuleReference(expression: StringLiteral): TSExternalModuleReference;

declare interface TSFunctionType extends BaseNode {
    type: "TSFunctionType";
    typeParameters?: TSTypeParameterDeclaration | null;
    parameters: Array<ArrayPattern | Identifier | ObjectPattern | RestElement>;
    typeAnnotation?: TSTypeAnnotation | null;
}

declare function tsFunctionType(typeParameters: TSTypeParameterDeclaration | null | undefined, parameters: Array<ArrayPattern | Identifier | ObjectPattern | RestElement>, typeAnnotation?: TSTypeAnnotation | null): TSFunctionType;

declare interface TSImportEqualsDeclaration extends BaseNode {
    type: "TSImportEqualsDeclaration";
    id: Identifier;
    moduleReference: TSEntityName | TSExternalModuleReference;
    importKind?: "type" | "value" | null;
    isExport: boolean;
}

declare function tsImportEqualsDeclaration(id: Identifier, moduleReference: TSEntityName | TSExternalModuleReference): TSImportEqualsDeclaration;

declare interface TSImportType extends BaseNode {
    type: "TSImportType";
    argument: StringLiteral;
    qualifier?: TSEntityName | null;
    typeParameters?: TSTypeParameterInstantiation | null;
}

declare function tsImportType(argument: StringLiteral, qualifier?: TSEntityName | null, typeParameters?: TSTypeParameterInstantiation | null): TSImportType;

declare interface TSIndexedAccessType extends BaseNode {
    type: "TSIndexedAccessType";
    objectType: TSType;
    indexType: TSType;
}

declare function tsIndexedAccessType(objectType: TSType, indexType: TSType): TSIndexedAccessType;

declare interface TSIndexSignature extends BaseNode {
    type: "TSIndexSignature";
    parameters: Array<Identifier>;
    typeAnnotation?: TSTypeAnnotation | null;
    readonly?: boolean | null;
    static?: boolean | null;
}

declare function tsIndexSignature(parameters: Array<Identifier>, typeAnnotation?: TSTypeAnnotation | null): TSIndexSignature;

declare interface TSInferType extends BaseNode {
    type: "TSInferType";
    typeParameter: TSTypeParameter;
}

declare function tsInferType(typeParameter: TSTypeParameter): TSInferType;

declare interface TSInstantiationExpression extends BaseNode {
    type: "TSInstantiationExpression";
    expression: Expression;
    typeParameters?: TSTypeParameterInstantiation | null;
}

declare function tsInstantiationExpression(expression: Expression, typeParameters?: TSTypeParameterInstantiation | null): TSInstantiationExpression;

declare interface TSInterfaceBody extends BaseNode {
    type: "TSInterfaceBody";
    body: Array<TSTypeElement>;
}

declare function tsInterfaceBody(body: Array<TSTypeElement>): TSInterfaceBody;

declare interface TSInterfaceDeclaration extends BaseNode {
    type: "TSInterfaceDeclaration";
    id: Identifier;
    typeParameters?: TSTypeParameterDeclaration | null;
    extends?: Array<TSExpressionWithTypeArguments> | null;
    body: TSInterfaceBody;
    declare?: boolean | null;
}

declare function tsInterfaceDeclaration(id: Identifier, typeParameters: TSTypeParameterDeclaration | null | undefined, _extends: Array<TSExpressionWithTypeArguments> | null | undefined, body: TSInterfaceBody): TSInterfaceDeclaration;

declare interface TSIntersectionType extends BaseNode {
    type: "TSIntersectionType";
    types: Array<TSType>;
}

declare function tsIntersectionType(types: Array<TSType>): TSIntersectionType;

declare interface TSIntrinsicKeyword extends BaseNode {
    type: "TSIntrinsicKeyword";
}

declare function tsIntrinsicKeyword(): TSIntrinsicKeyword;

declare interface TSLiteralType extends BaseNode {
    type: "TSLiteralType";
    literal: NumericLiteral | StringLiteral | BooleanLiteral | BigIntLiteral | TemplateLiteral | UnaryExpression;
}

declare function tsLiteralType(literal: NumericLiteral | StringLiteral | BooleanLiteral | BigIntLiteral | TemplateLiteral | UnaryExpression): TSLiteralType;

declare interface TSMappedType extends BaseNode {
    type: "TSMappedType";
    typeParameter: TSTypeParameter;
    typeAnnotation?: TSType | null;
    nameType?: TSType | null;
    optional?: true | false | "+" | "-" | null;
    readonly?: true | false | "+" | "-" | null;
}

declare function tsMappedType(typeParameter: TSTypeParameter, typeAnnotation?: TSType | null, nameType?: TSType | null): TSMappedType;

declare interface TSMethodSignature extends BaseNode {
    type: "TSMethodSignature";
    key: Expression;
    typeParameters?: TSTypeParameterDeclaration | null;
    parameters: Array<ArrayPattern | Identifier | ObjectPattern | RestElement>;
    typeAnnotation?: TSTypeAnnotation | null;
    computed?: boolean;
    kind: "method" | "get" | "set";
    optional?: boolean | null;
}

declare function tsMethodSignature(key: Expression, typeParameters: TSTypeParameterDeclaration | null | undefined, parameters: Array<ArrayPattern | Identifier | ObjectPattern | RestElement>, typeAnnotation?: TSTypeAnnotation | null): TSMethodSignature;

declare interface TSModuleBlock extends BaseNode {
    type: "TSModuleBlock";
    body: Array<Statement>;
}

declare function tsModuleBlock(body: Array<Statement>): TSModuleBlock;

declare interface TSModuleDeclaration extends BaseNode {
    type: "TSModuleDeclaration";
    id: Identifier | StringLiteral;
    body: TSModuleBlock | TSModuleDeclaration;
    declare?: boolean | null;
    global?: boolean | null;
}

declare function tsModuleDeclaration(id: Identifier | StringLiteral, body: TSModuleBlock | TSModuleDeclaration): TSModuleDeclaration;

declare interface TSNamedTupleMember extends BaseNode {
    type: "TSNamedTupleMember";
    label: Identifier;
    elementType: TSType;
    optional: boolean;
}

declare function tsNamedTupleMember(label: Identifier, elementType: TSType, optional?: boolean): TSNamedTupleMember;

declare interface TSNamespaceExportDeclaration extends BaseNode {
    type: "TSNamespaceExportDeclaration";
    id: Identifier;
}

declare function tsNamespaceExportDeclaration(id: Identifier): TSNamespaceExportDeclaration;

declare interface TSNeverKeyword extends BaseNode {
    type: "TSNeverKeyword";
}

declare function tsNeverKeyword(): TSNeverKeyword;

declare interface TSNonNullExpression extends BaseNode {
    type: "TSNonNullExpression";
    expression: Expression;
}

declare function tsNonNullExpression(expression: Expression): TSNonNullExpression;

declare interface TSNullKeyword extends BaseNode {
    type: "TSNullKeyword";
}

declare function tsNullKeyword(): TSNullKeyword;

declare interface TSNumberKeyword extends BaseNode {
    type: "TSNumberKeyword";
}

declare function tsNumberKeyword(): TSNumberKeyword;

declare interface TSObjectKeyword extends BaseNode {
    type: "TSObjectKeyword";
}

declare function tsObjectKeyword(): TSObjectKeyword;

declare interface TSOptionalType extends BaseNode {
    type: "TSOptionalType";
    typeAnnotation: TSType;
}

declare function tsOptionalType(typeAnnotation: TSType): TSOptionalType;

declare interface TSParameterProperty extends BaseNode {
    type: "TSParameterProperty";
    parameter: Identifier | AssignmentPattern;
    accessibility?: "public" | "private" | "protected" | null;
    decorators?: Array<Decorator> | null;
    override?: boolean | null;
    readonly?: boolean | null;
}

declare function tsParameterProperty(parameter: Identifier | AssignmentPattern): TSParameterProperty;

declare interface TSParenthesizedType extends BaseNode {
    type: "TSParenthesizedType";
    typeAnnotation: TSType;
}

declare function tsParenthesizedType(typeAnnotation: TSType): TSParenthesizedType;

declare interface TSPropertySignature extends BaseNode {
    type: "TSPropertySignature";
    key: Expression;
    typeAnnotation?: TSTypeAnnotation | null;
    initializer?: Expression | null;
    computed?: boolean;
    kind: "get" | "set";
    optional?: boolean | null;
    readonly?: boolean | null;
}

declare function tsPropertySignature(key: Expression, typeAnnotation?: TSTypeAnnotation | null, initializer?: Expression | null): TSPropertySignature;

declare interface TSQualifiedName extends BaseNode {
    type: "TSQualifiedName";
    left: TSEntityName;
    right: Identifier;
}

declare function tsQualifiedName(left: TSEntityName, right: Identifier): TSQualifiedName;

declare interface TSRestType extends BaseNode {
    type: "TSRestType";
    typeAnnotation: TSType;
}

declare function tsRestType(typeAnnotation: TSType): TSRestType;

declare interface TSSatisfiesExpression extends BaseNode {
    type: "TSSatisfiesExpression";
    expression: Expression;
    typeAnnotation: TSType;
}

declare function tsSatisfiesExpression(expression: Expression, typeAnnotation: TSType): TSSatisfiesExpression;

declare interface TSStringKeyword extends BaseNode {
    type: "TSStringKeyword";
}

declare function tsStringKeyword(): TSStringKeyword;

declare interface TSSymbolKeyword extends BaseNode {
    type: "TSSymbolKeyword";
}

declare function tsSymbolKeyword(): TSSymbolKeyword;

declare interface TSThisType extends BaseNode {
    type: "TSThisType";
}

declare function tsThisType(): TSThisType;

declare interface TSTupleType extends BaseNode {
    type: "TSTupleType";
    elementTypes: Array<TSType | TSNamedTupleMember>;
}

declare function tsTupleType(elementTypes: Array<TSType | TSNamedTupleMember>): TSTupleType;

declare type TSType = TSAnyKeyword | TSBooleanKeyword | TSBigIntKeyword | TSIntrinsicKeyword | TSNeverKeyword | TSNullKeyword | TSNumberKeyword | TSObjectKeyword | TSStringKeyword | TSSymbolKeyword | TSUndefinedKeyword | TSUnknownKeyword | TSVoidKeyword | TSThisType | TSFunctionType | TSConstructorType | TSTypeReference | TSTypePredicate | TSTypeQuery | TSTypeLiteral | TSArrayType | TSTupleType | TSOptionalType | TSRestType | TSUnionType | TSIntersectionType | TSConditionalType | TSInferType | TSParenthesizedType | TSTypeOperator | TSIndexedAccessType | TSMappedType | TSLiteralType | TSExpressionWithTypeArguments | TSImportType;

declare const TSTYPE_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface TSTypeAliasDeclaration extends BaseNode {
    type: "TSTypeAliasDeclaration";
    id: Identifier;
    typeParameters?: TSTypeParameterDeclaration | null;
    typeAnnotation: TSType;
    declare?: boolean | null;
}

declare function tsTypeAliasDeclaration(id: Identifier, typeParameters: TSTypeParameterDeclaration | null | undefined, typeAnnotation: TSType): TSTypeAliasDeclaration;

declare interface TSTypeAnnotation extends BaseNode {
    type: "TSTypeAnnotation";
    typeAnnotation: TSType;
}

declare function tsTypeAnnotation(typeAnnotation: TSType): TSTypeAnnotation;

declare interface TSTypeAssertion extends BaseNode {
    type: "TSTypeAssertion";
    typeAnnotation: TSType;
    expression: Expression;
}

declare function tsTypeAssertion(typeAnnotation: TSType, expression: Expression): TSTypeAssertion;

declare type TSTypeElement = TSCallSignatureDeclaration | TSConstructSignatureDeclaration | TSPropertySignature | TSMethodSignature | TSIndexSignature;

declare const TSTYPEELEMENT_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface TSTypeLiteral extends BaseNode {
    type: "TSTypeLiteral";
    members: Array<TSTypeElement>;
}

declare function tsTypeLiteral(members: Array<TSTypeElement>): TSTypeLiteral;

declare interface TSTypeOperator extends BaseNode {
    type: "TSTypeOperator";
    typeAnnotation: TSType;
    operator: string;
}

declare function tsTypeOperator(typeAnnotation: TSType): TSTypeOperator;

declare interface TSTypeParameter extends BaseNode {
    type: "TSTypeParameter";
    constraint?: TSType | null;
    default?: TSType | null;
    name: string;
    const?: boolean | null;
    in?: boolean | null;
    out?: boolean | null;
}

declare function tsTypeParameter(constraint: TSType | null | undefined, _default: TSType | null | undefined, name: string): TSTypeParameter;

declare interface TSTypeParameterDeclaration extends BaseNode {
    type: "TSTypeParameterDeclaration";
    params: Array<TSTypeParameter>;
}

declare function tsTypeParameterDeclaration(params: Array<TSTypeParameter>): TSTypeParameterDeclaration;

declare interface TSTypeParameterInstantiation extends BaseNode {
    type: "TSTypeParameterInstantiation";
    params: Array<TSType>;
}

declare function tsTypeParameterInstantiation(params: Array<TSType>): TSTypeParameterInstantiation;

declare interface TSTypePredicate extends BaseNode {
    type: "TSTypePredicate";
    parameterName: Identifier | TSThisType;
    typeAnnotation?: TSTypeAnnotation | null;
    asserts?: boolean | null;
}

declare function tsTypePredicate(parameterName: Identifier | TSThisType, typeAnnotation?: TSTypeAnnotation | null, asserts?: boolean | null): TSTypePredicate;

declare interface TSTypeQuery extends BaseNode {
    type: "TSTypeQuery";
    exprName: TSEntityName | TSImportType;
    typeParameters?: TSTypeParameterInstantiation | null;
}

declare function tsTypeQuery(exprName: TSEntityName | TSImportType, typeParameters?: TSTypeParameterInstantiation | null): TSTypeQuery;

declare interface TSTypeReference extends BaseNode {
    type: "TSTypeReference";
    typeName: TSEntityName;
    typeParameters?: TSTypeParameterInstantiation | null;
}

declare function tsTypeReference(typeName: TSEntityName, typeParameters?: TSTypeParameterInstantiation | null): TSTypeReference;

declare interface TSUndefinedKeyword extends BaseNode {
    type: "TSUndefinedKeyword";
}

declare function tsUndefinedKeyword(): TSUndefinedKeyword;

declare interface TSUnionType extends BaseNode {
    type: "TSUnionType";
    types: Array<TSType>;
}

declare function tsUnionType(types: Array<TSType>): TSUnionType;

declare interface TSUnknownKeyword extends BaseNode {
    type: "TSUnknownKeyword";
}

declare function tsUnknownKeyword(): TSUnknownKeyword;

declare interface TSVoidKeyword extends BaseNode {
    type: "TSVoidKeyword";
}

declare function tsVoidKeyword(): TSVoidKeyword;

declare interface TupleExpression extends BaseNode {
    type: "TupleExpression";
    elements: Array<Expression | SpreadElement>;
}

declare function tupleExpression(elements?: Array<Expression | SpreadElement>): TupleExpression;

declare interface TupleTypeAnnotation extends BaseNode {
    type: "TupleTypeAnnotation";
    types: Array<FlowType>;
}

declare function tupleTypeAnnotation(types: Array<FlowType>): TupleTypeAnnotation;

declare interface TypeAlias extends BaseNode {
    type: "TypeAlias";
    id: Identifier;
    typeParameters?: TypeParameterDeclaration | null;
    right: FlowType;
}

declare function typeAlias(id: Identifier, typeParameters: TypeParameterDeclaration | null | undefined, right: FlowType): TypeAlias;

declare interface TypeAnnotation extends BaseNode {
    type: "TypeAnnotation";
    typeAnnotation: FlowType;
}

declare function typeAnnotation(typeAnnotation: FlowType): TypeAnnotation;

declare interface TypeCastExpression extends BaseNode {
    type: "TypeCastExpression";
    expression: Expression;
    typeAnnotation: TypeAnnotation;
}

declare function typeCastExpression(expression: Expression, typeAnnotation: TypeAnnotation): TypeCastExpression;

declare interface TypeofTypeAnnotation extends BaseNode {
    type: "TypeofTypeAnnotation";
    argument: FlowType;
}

declare function typeofTypeAnnotation(argument: FlowType): TypeofTypeAnnotation;

declare interface TypeParameter extends BaseNode {
    type: "TypeParameter";
    bound?: TypeAnnotation | null;
    default?: FlowType | null;
    variance?: Variance | null;
    name: string;
}

declare function typeParameter(bound?: TypeAnnotation | null, _default?: FlowType | null, variance?: Variance | null): TypeParameter;

declare interface TypeParameterDeclaration extends BaseNode {
    type: "TypeParameterDeclaration";
    params: Array<TypeParameter>;
}

declare function typeParameterDeclaration(params: Array<TypeParameter>): TypeParameterDeclaration;

declare interface TypeParameterInstantiation extends BaseNode {
    type: "TypeParameterInstantiation";
    params: Array<FlowType>;
}

declare function typeParameterInstantiation(params: Array<FlowType>): TypeParameterInstantiation;

declare const TYPES: Array<string>;

declare namespace types {
    export {
        ACCESSOR_TYPES,
        ALIAS_KEYS,
        ASSIGNMENT_OPERATORS,
        Accessor,
        Aliases,
        AnyTypeAnnotation,
        ArgumentPlaceholder,
        ArrayExpression,
        ArrayPattern,
        ArrayTypeAnnotation,
        ArrowFunctionExpression,
        AssignmentExpression,
        AssignmentPattern,
        AwaitExpression,
        BINARY_OPERATORS,
        BINARY_TYPES,
        BLOCKPARENT_TYPES,
        BLOCK_SCOPED_SYMBOL,
        BLOCK_TYPES,
        BOOLEAN_BINARY_OPERATORS,
        BOOLEAN_NUMBER_BINARY_OPERATORS,
        BOOLEAN_UNARY_OPERATORS,
        BUILDER_KEYS,
        BigIntLiteral,
        Binary,
        BinaryExpression,
        BindExpression,
        Block,
        BlockParent,
        BlockStatement,
        BooleanLiteral,
        BooleanLiteralTypeAnnotation,
        BooleanTypeAnnotation,
        BreakStatement,
        CLASS_TYPES,
        COMMENT_KEYS,
        COMPARISON_BINARY_OPERATORS,
        COMPLETIONSTATEMENT_TYPES,
        CONDITIONAL_TYPES,
        CallExpression,
        CatchClause,
        Class,
        ClassAccessorProperty,
        ClassBody,
        ClassDeclaration,
        ClassExpression,
        ClassImplements,
        ClassMethod,
        ClassPrivateMethod,
        ClassPrivateProperty,
        ClassProperty,
        Comment_2 as Comment,
        CommentBlock,
        CommentLine,
        CommentTypeShorthand,
        CompletionStatement,
        Conditional,
        ConditionalExpression,
        ContinueStatement,
        DECLARATION_TYPES,
        DEPRECATED_ALIASES,
        DEPRECATED_KEYS,
        DebuggerStatement,
        DecimalLiteral,
        Declaration,
        DeclareClass,
        DeclareExportAllDeclaration,
        DeclareExportDeclaration,
        DeclareFunction,
        DeclareInterface,
        DeclareModule,
        DeclareModuleExports,
        DeclareOpaqueType,
        DeclareTypeAlias,
        DeclareVariable,
        DeclaredPredicate,
        Decorator,
        DeprecatedAliases,
        Directive,
        DirectiveLiteral,
        DoExpression,
        DoWhileStatement,
        ENUMBODY_TYPES,
        ENUMMEMBER_TYPES,
        EQUALITY_BINARY_OPERATORS,
        EXPORTDECLARATION_TYPES,
        EXPRESSIONWRAPPER_TYPES,
        EXPRESSION_TYPES,
        EmptyStatement,
        EmptyTypeAnnotation,
        EnumBody,
        EnumBooleanBody,
        EnumBooleanMember,
        EnumDeclaration,
        EnumDefaultedMember,
        EnumMember,
        EnumNumberBody,
        EnumNumberMember,
        EnumStringBody,
        EnumStringMember,
        EnumSymbolBody,
        ExistsTypeAnnotation,
        ExportAllDeclaration,
        ExportDeclaration,
        ExportDefaultDeclaration,
        ExportDefaultSpecifier,
        ExportNamedDeclaration,
        ExportNamespaceSpecifier,
        ExportSpecifier,
        Expression,
        ExpressionStatement,
        ExpressionWrapper,
        FLATTENABLE_KEYS,
        FLIPPED_ALIAS_KEYS,
        FLOWBASEANNOTATION_TYPES,
        FLOWDECLARATION_TYPES,
        FLOWPREDICATE_TYPES,
        FLOWTYPE_TYPES,
        FLOW_TYPES,
        FORXSTATEMENT_TYPES,
        FOR_INIT_KEYS,
        FOR_TYPES,
        FUNCTIONPARENT_TYPES,
        FUNCTION_TYPES,
        FieldOptions,
        File_2 as File,
        Flow,
        FlowBaseAnnotation,
        FlowDeclaration,
        FlowPredicate,
        FlowType,
        For,
        ForInStatement,
        ForOfStatement,
        ForStatement,
        ForXStatement,
        Function_2 as Function,
        FunctionDeclaration,
        FunctionExpression,
        FunctionParent,
        FunctionTypeAnnotation,
        FunctionTypeParam,
        GenericTypeAnnotation,
        IMMUTABLE_TYPES,
        IMPORTOREXPORTDECLARATION_TYPES,
        INHERIT_KEYS,
        Identifier,
        IfStatement,
        Immutable,
        Import,
        ImportAttribute,
        ImportDeclaration,
        ImportDefaultSpecifier,
        ImportExpression,
        ImportNamespaceSpecifier,
        ImportOrExportDeclaration,
        ImportSpecifier,
        IndexedAccessType,
        InferredPredicate,
        InterfaceDeclaration,
        InterfaceExtends,
        InterfaceTypeAnnotation,
        InterpreterDirective,
        IntersectionTypeAnnotation,
        JSX_2 as JSX,
        JSXAttribute,
        JSXClosingElement,
        JSXClosingFragment,
        JSXElement,
        JSXEmptyExpression,
        JSXExpressionContainer,
        JSXFragment,
        JSXIdentifier,
        JSXMemberExpression,
        JSXNamespacedName,
        JSXOpeningElement,
        JSXOpeningFragment,
        JSXSpreadAttribute,
        JSXSpreadChild,
        JSXText,
        JSX_TYPES,
        LITERAL_TYPES,
        LOGICAL_OPERATORS,
        LOOP_TYPES,
        LVAL_TYPES,
        LVal,
        LabeledStatement,
        Literal,
        LogicalExpression,
        Loop,
        METHOD_TYPES,
        MISCELLANEOUS_TYPES,
        MODULEDECLARATION_TYPES,
        MODULESPECIFIER_TYPES,
        MemberExpression,
        MetaProperty,
        Method,
        Miscellaneous,
        MixedTypeAnnotation,
        ModuleDeclaration,
        ModuleExpression,
        ModuleSpecifier,
        NODE_FIELDS,
        NODE_PARENT_VALIDATIONS,
        NOT_LOCAL_BINDING,
        NUMBER_BINARY_OPERATORS,
        NUMBER_UNARY_OPERATORS,
        NewExpression,
        Node_3 as Node,
        Noop,
        NullLiteral,
        NullLiteralTypeAnnotation,
        NullableTypeAnnotation,
        NumberLiteral$1 as NumberLiteral,
        NumberLiteralTypeAnnotation,
        NumberTypeAnnotation,
        NumericLiteral,
        OBJECTMEMBER_TYPES,
        ObjectExpression,
        ObjectMember,
        ObjectMethod,
        ObjectPattern,
        ObjectProperty,
        ObjectTypeAnnotation,
        ObjectTypeCallProperty,
        ObjectTypeIndexer,
        ObjectTypeInternalSlot,
        ObjectTypeProperty,
        ObjectTypeSpreadProperty,
        OpaqueType,
        OptionalCallExpression,
        OptionalIndexedAccessType,
        OptionalMemberExpression,
        PATTERNLIKE_TYPES,
        PATTERN_TYPES,
        PLACEHOLDERS,
        PLACEHOLDERS_ALIAS,
        PLACEHOLDERS_FLIPPED_ALIAS,
        PRIVATE_TYPES,
        PROPERTY_TYPES,
        PUREISH_TYPES,
        ParentMaps,
        ParenthesizedExpression,
        Pattern,
        PatternLike,
        PipelineBareFunction,
        PipelinePrimaryTopicReference,
        PipelineTopicExpression,
        Placeholder,
        Private,
        PrivateName,
        Program,
        Property,
        Pureish,
        QualifiedTypeIdentifier,
        RecordExpression,
        RegExpLiteral,
        RegexLiteral$1 as RegexLiteral,
        Options as RemovePropertiesOptions,
        RestElement,
        RestProperty$1 as RestProperty,
        ReturnStatement,
        SCOPABLE_TYPES,
        STANDARDIZED_TYPES,
        STATEMENT_OR_BLOCK_KEYS,
        STATEMENT_TYPES,
        STRING_UNARY_OPERATORS,
        Scopable,
        SequenceExpression,
        SourceLocation,
        SpreadElement,
        SpreadProperty$1 as SpreadProperty,
        Standardized,
        Statement,
        StaticBlock,
        StringLiteral,
        StringLiteralTypeAnnotation,
        StringTypeAnnotation,
        Super,
        SwitchCase,
        SwitchStatement,
        SymbolTypeAnnotation,
        TERMINATORLESS_TYPES,
        TSAnyKeyword,
        TSArrayType,
        TSAsExpression,
        TSBASETYPE_TYPES,
        TSBaseType,
        TSBigIntKeyword,
        TSBooleanKeyword,
        TSCallSignatureDeclaration,
        TSConditionalType,
        TSConstructSignatureDeclaration,
        TSConstructorType,
        TSDeclareFunction,
        TSDeclareMethod,
        TSENTITYNAME_TYPES,
        TSEntityName,
        TSEnumDeclaration,
        TSEnumMember,
        TSExportAssignment,
        TSExpressionWithTypeArguments,
        TSExternalModuleReference,
        TSFunctionType,
        TSImportEqualsDeclaration,
        TSImportType,
        TSIndexSignature,
        TSIndexedAccessType,
        TSInferType,
        TSInstantiationExpression,
        TSInterfaceBody,
        TSInterfaceDeclaration,
        TSIntersectionType,
        TSIntrinsicKeyword,
        TSLiteralType,
        TSMappedType,
        TSMethodSignature,
        TSModuleBlock,
        TSModuleDeclaration,
        TSNamedTupleMember,
        TSNamespaceExportDeclaration,
        TSNeverKeyword,
        TSNonNullExpression,
        TSNullKeyword,
        TSNumberKeyword,
        TSObjectKeyword,
        TSOptionalType,
        TSParameterProperty,
        TSParenthesizedType,
        TSPropertySignature,
        TSQualifiedName,
        TSRestType,
        TSSatisfiesExpression,
        TSStringKeyword,
        TSSymbolKeyword,
        TSTYPEELEMENT_TYPES,
        TSTYPE_TYPES,
        TSThisType,
        TSTupleType,
        TSType,
        TSTypeAliasDeclaration,
        TSTypeAnnotation,
        TSTypeAssertion,
        TSTypeElement,
        TSTypeLiteral,
        TSTypeOperator,
        TSTypeParameter,
        TSTypeParameterDeclaration,
        TSTypeParameterInstantiation,
        TSTypePredicate,
        TSTypeQuery,
        TSTypeReference,
        TSUndefinedKeyword,
        TSUnionType,
        TSUnknownKeyword,
        TSVoidKeyword,
        TYPES,
        TYPESCRIPT_TYPES,
        TaggedTemplateExpression,
        TemplateElement,
        TemplateLiteral,
        Terminatorless,
        ThisExpression,
        ThisTypeAnnotation,
        ThrowStatement,
        TopicReference,
        TraversalAncestors,
        TraversalHandler,
        TraversalHandlers,
        TryStatement,
        TupleExpression,
        TupleTypeAnnotation,
        TypeAlias,
        TypeAnnotation,
        TypeCastExpression,
        TypeParameter,
        TypeParameterDeclaration,
        TypeParameterInstantiation,
        TypeScript,
        TypeofTypeAnnotation,
        UNARYLIKE_TYPES,
        UNARY_OPERATORS,
        UPDATE_OPERATORS,
        USERWHITESPACABLE_TYPES,
        UnaryExpression,
        UnaryLike,
        UnionTypeAnnotation,
        UpdateExpression,
        UserWhitespacable,
        V8IntrinsicIdentifier,
        VISITOR_KEYS,
        VariableDeclaration,
        VariableDeclarator,
        Variance,
        VoidTypeAnnotation,
        WHILE_TYPES,
        While,
        WhileStatement,
        WithStatement,
        YieldExpression,
        deprecationWarning as __internal__deprecationWarning,
        addComment,
        addComments,
        anyTypeAnnotation,
        appendToMemberExpression,
        argumentPlaceholder,
        arrayExpression,
        arrayPattern,
        arrayTypeAnnotation,
        arrowFunctionExpression,
        assertAccessor,
        assertAnyTypeAnnotation,
        assertArgumentPlaceholder,
        assertArrayExpression,
        assertArrayPattern,
        assertArrayTypeAnnotation,
        assertArrowFunctionExpression,
        assertAssignmentExpression,
        assertAssignmentPattern,
        assertAwaitExpression,
        assertBigIntLiteral,
        assertBinary,
        assertBinaryExpression,
        assertBindExpression,
        assertBlock,
        assertBlockParent,
        assertBlockStatement,
        assertBooleanLiteral,
        assertBooleanLiteralTypeAnnotation,
        assertBooleanTypeAnnotation,
        assertBreakStatement,
        assertCallExpression,
        assertCatchClause,
        assertClass,
        assertClassAccessorProperty,
        assertClassBody,
        assertClassDeclaration,
        assertClassExpression,
        assertClassImplements,
        assertClassMethod,
        assertClassPrivateMethod,
        assertClassPrivateProperty,
        assertClassProperty,
        assertCompletionStatement,
        assertConditional,
        assertConditionalExpression,
        assertContinueStatement,
        assertDebuggerStatement,
        assertDecimalLiteral,
        assertDeclaration,
        assertDeclareClass,
        assertDeclareExportAllDeclaration,
        assertDeclareExportDeclaration,
        assertDeclareFunction,
        assertDeclareInterface,
        assertDeclareModule,
        assertDeclareModuleExports,
        assertDeclareOpaqueType,
        assertDeclareTypeAlias,
        assertDeclareVariable,
        assertDeclaredPredicate,
        assertDecorator,
        assertDirective,
        assertDirectiveLiteral,
        assertDoExpression,
        assertDoWhileStatement,
        assertEmptyStatement,
        assertEmptyTypeAnnotation,
        assertEnumBody,
        assertEnumBooleanBody,
        assertEnumBooleanMember,
        assertEnumDeclaration,
        assertEnumDefaultedMember,
        assertEnumMember,
        assertEnumNumberBody,
        assertEnumNumberMember,
        assertEnumStringBody,
        assertEnumStringMember,
        assertEnumSymbolBody,
        assertExistsTypeAnnotation,
        assertExportAllDeclaration,
        assertExportDeclaration,
        assertExportDefaultDeclaration,
        assertExportDefaultSpecifier,
        assertExportNamedDeclaration,
        assertExportNamespaceSpecifier,
        assertExportSpecifier,
        assertExpression,
        assertExpressionStatement,
        assertExpressionWrapper,
        assertFile,
        assertFlow,
        assertFlowBaseAnnotation,
        assertFlowDeclaration,
        assertFlowPredicate,
        assertFlowType,
        assertFor,
        assertForInStatement,
        assertForOfStatement,
        assertForStatement,
        assertForXStatement,
        assertFunction,
        assertFunctionDeclaration,
        assertFunctionExpression,
        assertFunctionParent,
        assertFunctionTypeAnnotation,
        assertFunctionTypeParam,
        assertGenericTypeAnnotation,
        assertIdentifier,
        assertIfStatement,
        assertImmutable,
        assertImport,
        assertImportAttribute,
        assertImportDeclaration,
        assertImportDefaultSpecifier,
        assertImportExpression,
        assertImportNamespaceSpecifier,
        assertImportOrExportDeclaration,
        assertImportSpecifier,
        assertIndexedAccessType,
        assertInferredPredicate,
        assertInterfaceDeclaration,
        assertInterfaceExtends,
        assertInterfaceTypeAnnotation,
        assertInterpreterDirective,
        assertIntersectionTypeAnnotation,
        assertJSX,
        assertJSXAttribute,
        assertJSXClosingElement,
        assertJSXClosingFragment,
        assertJSXElement,
        assertJSXEmptyExpression,
        assertJSXExpressionContainer,
        assertJSXFragment,
        assertJSXIdentifier,
        assertJSXMemberExpression,
        assertJSXNamespacedName,
        assertJSXOpeningElement,
        assertJSXOpeningFragment,
        assertJSXSpreadAttribute,
        assertJSXSpreadChild,
        assertJSXText,
        assertLVal,
        assertLabeledStatement,
        assertLiteral,
        assertLogicalExpression,
        assertLoop,
        assertMemberExpression,
        assertMetaProperty,
        assertMethod,
        assertMiscellaneous,
        assertMixedTypeAnnotation,
        assertModuleDeclaration,
        assertModuleExpression,
        assertModuleSpecifier,
        assertNewExpression,
        assertNode,
        assertNoop,
        assertNullLiteral,
        assertNullLiteralTypeAnnotation,
        assertNullableTypeAnnotation,
        assertNumberLiteral,
        assertNumberLiteralTypeAnnotation,
        assertNumberTypeAnnotation,
        assertNumericLiteral,
        assertObjectExpression,
        assertObjectMember,
        assertObjectMethod,
        assertObjectPattern,
        assertObjectProperty,
        assertObjectTypeAnnotation,
        assertObjectTypeCallProperty,
        assertObjectTypeIndexer,
        assertObjectTypeInternalSlot,
        assertObjectTypeProperty,
        assertObjectTypeSpreadProperty,
        assertOpaqueType,
        assertOptionalCallExpression,
        assertOptionalIndexedAccessType,
        assertOptionalMemberExpression,
        assertParenthesizedExpression,
        assertPattern,
        assertPatternLike,
        assertPipelineBareFunction,
        assertPipelinePrimaryTopicReference,
        assertPipelineTopicExpression,
        assertPlaceholder,
        assertPrivate,
        assertPrivateName,
        assertProgram,
        assertProperty,
        assertPureish,
        assertQualifiedTypeIdentifier,
        assertRecordExpression,
        assertRegExpLiteral,
        assertRegexLiteral,
        assertRestElement,
        assertRestProperty,
        assertReturnStatement,
        assertScopable,
        assertSequenceExpression,
        assertSpreadElement,
        assertSpreadProperty,
        assertStandardized,
        assertStatement,
        assertStaticBlock,
        assertStringLiteral,
        assertStringLiteralTypeAnnotation,
        assertStringTypeAnnotation,
        assertSuper,
        assertSwitchCase,
        assertSwitchStatement,
        assertSymbolTypeAnnotation,
        assertTSAnyKeyword,
        assertTSArrayType,
        assertTSAsExpression,
        assertTSBaseType,
        assertTSBigIntKeyword,
        assertTSBooleanKeyword,
        assertTSCallSignatureDeclaration,
        assertTSConditionalType,
        assertTSConstructSignatureDeclaration,
        assertTSConstructorType,
        assertTSDeclareFunction,
        assertTSDeclareMethod,
        assertTSEntityName,
        assertTSEnumDeclaration,
        assertTSEnumMember,
        assertTSExportAssignment,
        assertTSExpressionWithTypeArguments,
        assertTSExternalModuleReference,
        assertTSFunctionType,
        assertTSImportEqualsDeclaration,
        assertTSImportType,
        assertTSIndexSignature,
        assertTSIndexedAccessType,
        assertTSInferType,
        assertTSInstantiationExpression,
        assertTSInterfaceBody,
        assertTSInterfaceDeclaration,
        assertTSIntersectionType,
        assertTSIntrinsicKeyword,
        assertTSLiteralType,
        assertTSMappedType,
        assertTSMethodSignature,
        assertTSModuleBlock,
        assertTSModuleDeclaration,
        assertTSNamedTupleMember,
        assertTSNamespaceExportDeclaration,
        assertTSNeverKeyword,
        assertTSNonNullExpression,
        assertTSNullKeyword,
        assertTSNumberKeyword,
        assertTSObjectKeyword,
        assertTSOptionalType,
        assertTSParameterProperty,
        assertTSParenthesizedType,
        assertTSPropertySignature,
        assertTSQualifiedName,
        assertTSRestType,
        assertTSSatisfiesExpression,
        assertTSStringKeyword,
        assertTSSymbolKeyword,
        assertTSThisType,
        assertTSTupleType,
        assertTSType,
        assertTSTypeAliasDeclaration,
        assertTSTypeAnnotation,
        assertTSTypeAssertion,
        assertTSTypeElement,
        assertTSTypeLiteral,
        assertTSTypeOperator,
        assertTSTypeParameter,
        assertTSTypeParameterDeclaration,
        assertTSTypeParameterInstantiation,
        assertTSTypePredicate,
        assertTSTypeQuery,
        assertTSTypeReference,
        assertTSUndefinedKeyword,
        assertTSUnionType,
        assertTSUnknownKeyword,
        assertTSVoidKeyword,
        assertTaggedTemplateExpression,
        assertTemplateElement,
        assertTemplateLiteral,
        assertTerminatorless,
        assertThisExpression,
        assertThisTypeAnnotation,
        assertThrowStatement,
        assertTopicReference,
        assertTryStatement,
        assertTupleExpression,
        assertTupleTypeAnnotation,
        assertTypeAlias,
        assertTypeAnnotation,
        assertTypeCastExpression,
        assertTypeParameter,
        assertTypeParameterDeclaration,
        assertTypeParameterInstantiation,
        assertTypeScript,
        assertTypeofTypeAnnotation,
        assertUnaryExpression,
        assertUnaryLike,
        assertUnionTypeAnnotation,
        assertUpdateExpression,
        assertUserWhitespacable,
        assertV8IntrinsicIdentifier,
        assertVariableDeclaration,
        assertVariableDeclarator,
        assertVariance,
        assertVoidTypeAnnotation,
        assertWhile,
        assertWhileStatement,
        assertWithStatement,
        assertYieldExpression,
        assignmentExpression,
        assignmentPattern,
        awaitExpression,
        bigIntLiteral,
        binaryExpression,
        bindExpression,
        blockStatement,
        booleanLiteral,
        booleanLiteralTypeAnnotation,
        booleanTypeAnnotation,
        breakStatement,
        buildMatchMemberExpression,
        buildUndefinedNode,
        callExpression,
        catchClause,
        classAccessorProperty,
        classBody,
        classDeclaration,
        classExpression,
        classImplements,
        classMethod,
        classPrivateMethod,
        classPrivateProperty,
        classProperty,
        clone,
        cloneDeep,
        cloneDeepWithoutLoc,
        cloneNode,
        cloneWithoutLoc,
        conditionalExpression,
        continueStatement,
        createFlowUnionType,
        createTSUnionType,
        _default$4 as createTypeAnnotationBasedOnTypeof,
        createFlowUnionType as createUnionTypeAnnotation,
        debuggerStatement,
        decimalLiteral,
        declareClass,
        declareExportAllDeclaration,
        declareExportDeclaration,
        declareFunction,
        declareInterface,
        declareModule,
        declareModuleExports,
        declareOpaqueType,
        declareTypeAlias,
        declareVariable,
        declaredPredicate,
        decorator,
        directive,
        directiveLiteral,
        doExpression,
        doWhileStatement,
        emptyStatement,
        emptyTypeAnnotation,
        ensureBlock,
        enumBooleanBody,
        enumBooleanMember,
        enumDeclaration,
        enumDefaultedMember,
        enumNumberBody,
        enumNumberMember,
        enumStringBody,
        enumStringMember,
        enumSymbolBody,
        existsTypeAnnotation,
        exportAllDeclaration,
        exportDefaultDeclaration,
        exportDefaultSpecifier,
        exportNamedDeclaration,
        exportNamespaceSpecifier,
        exportSpecifier,
        expressionStatement,
        file,
        forInStatement,
        forOfStatement,
        forStatement,
        functionDeclaration,
        functionExpression,
        functionTypeAnnotation,
        functionTypeParam,
        genericTypeAnnotation,
        getBindingIdentifiers,
        _default as getOuterBindingIdentifiers,
        identifier,
        ifStatement,
        _import as import,
        importAttribute,
        importDeclaration,
        importDefaultSpecifier,
        importExpression,
        importNamespaceSpecifier,
        importSpecifier,
        indexedAccessType,
        inferredPredicate,
        inheritInnerComments,
        inheritLeadingComments,
        inheritTrailingComments,
        inherits,
        inheritsComments,
        interfaceDeclaration,
        interfaceExtends,
        interfaceTypeAnnotation,
        interpreterDirective,
        intersectionTypeAnnotation,
        is,
        isAccessor,
        isAnyTypeAnnotation,
        isArgumentPlaceholder,
        isArrayExpression,
        isArrayPattern,
        isArrayTypeAnnotation,
        isArrowFunctionExpression,
        isAssignmentExpression,
        isAssignmentPattern,
        isAwaitExpression,
        isBigIntLiteral,
        isBinary,
        isBinaryExpression,
        isBindExpression,
        isBinding,
        isBlock,
        isBlockParent,
        isBlockScoped,
        isBlockStatement,
        isBooleanLiteral,
        isBooleanLiteralTypeAnnotation,
        isBooleanTypeAnnotation,
        isBreakStatement,
        isCallExpression,
        isCatchClause,
        isClass,
        isClassAccessorProperty,
        isClassBody,
        isClassDeclaration,
        isClassExpression,
        isClassImplements,
        isClassMethod,
        isClassPrivateMethod,
        isClassPrivateProperty,
        isClassProperty,
        isCompletionStatement,
        isConditional,
        isConditionalExpression,
        isContinueStatement,
        isDebuggerStatement,
        isDecimalLiteral,
        isDeclaration,
        isDeclareClass,
        isDeclareExportAllDeclaration,
        isDeclareExportDeclaration,
        isDeclareFunction,
        isDeclareInterface,
        isDeclareModule,
        isDeclareModuleExports,
        isDeclareOpaqueType,
        isDeclareTypeAlias,
        isDeclareVariable,
        isDeclaredPredicate,
        isDecorator,
        isDirective,
        isDirectiveLiteral,
        isDoExpression,
        isDoWhileStatement,
        isEmptyStatement,
        isEmptyTypeAnnotation,
        isEnumBody,
        isEnumBooleanBody,
        isEnumBooleanMember,
        isEnumDeclaration,
        isEnumDefaultedMember,
        isEnumMember,
        isEnumNumberBody,
        isEnumNumberMember,
        isEnumStringBody,
        isEnumStringMember,
        isEnumSymbolBody,
        isExistsTypeAnnotation,
        isExportAllDeclaration,
        isExportDeclaration,
        isExportDefaultDeclaration,
        isExportDefaultSpecifier,
        isExportNamedDeclaration,
        isExportNamespaceSpecifier,
        isExportSpecifier,
        isExpression,
        isExpressionStatement,
        isExpressionWrapper,
        isFile,
        isFlow,
        isFlowBaseAnnotation,
        isFlowDeclaration,
        isFlowPredicate,
        isFlowType,
        isFor,
        isForInStatement,
        isForOfStatement,
        isForStatement,
        isForXStatement,
        isFunction,
        isFunctionDeclaration,
        isFunctionExpression,
        isFunctionParent,
        isFunctionTypeAnnotation,
        isFunctionTypeParam,
        isGenericTypeAnnotation,
        isIdentifier,
        isIfStatement,
        isImmutable,
        isImport,
        isImportAttribute,
        isImportDeclaration,
        isImportDefaultSpecifier,
        isImportExpression,
        isImportNamespaceSpecifier,
        isImportOrExportDeclaration,
        isImportSpecifier,
        isIndexedAccessType,
        isInferredPredicate,
        isInterfaceDeclaration,
        isInterfaceExtends,
        isInterfaceTypeAnnotation,
        isInterpreterDirective,
        isIntersectionTypeAnnotation,
        isJSX,
        isJSXAttribute,
        isJSXClosingElement,
        isJSXClosingFragment,
        isJSXElement,
        isJSXEmptyExpression,
        isJSXExpressionContainer,
        isJSXFragment,
        isJSXIdentifier,
        isJSXMemberExpression,
        isJSXNamespacedName,
        isJSXOpeningElement,
        isJSXOpeningFragment,
        isJSXSpreadAttribute,
        isJSXSpreadChild,
        isJSXText,
        isLVal,
        isLabeledStatement,
        isLet,
        isLiteral,
        isLogicalExpression,
        isLoop,
        isMemberExpression,
        isMetaProperty,
        isMethod,
        isMiscellaneous,
        isMixedTypeAnnotation,
        isModuleDeclaration,
        isModuleExpression,
        isModuleSpecifier,
        isNewExpression,
        isNode,
        isNodesEquivalent,
        isNoop,
        isNullLiteral,
        isNullLiteralTypeAnnotation,
        isNullableTypeAnnotation,
        isNumberLiteral,
        isNumberLiteralTypeAnnotation,
        isNumberTypeAnnotation,
        isNumericLiteral,
        isObjectExpression,
        isObjectMember,
        isObjectMethod,
        isObjectPattern,
        isObjectProperty,
        isObjectTypeAnnotation,
        isObjectTypeCallProperty,
        isObjectTypeIndexer,
        isObjectTypeInternalSlot,
        isObjectTypeProperty,
        isObjectTypeSpreadProperty,
        isOpaqueType,
        isOptionalCallExpression,
        isOptionalIndexedAccessType,
        isOptionalMemberExpression,
        isParenthesizedExpression,
        isPattern,
        isPatternLike,
        isPipelineBareFunction,
        isPipelinePrimaryTopicReference,
        isPipelineTopicExpression,
        isPlaceholder,
        isPlaceholderType,
        isPrivate,
        isPrivateName,
        isProgram,
        isProperty,
        isPureish,
        isQualifiedTypeIdentifier,
        isRecordExpression,
        isReferenced,
        isRegExpLiteral,
        isRegexLiteral,
        isRestElement,
        isRestProperty,
        isReturnStatement,
        isScopable,
        isScope,
        isSequenceExpression,
        isSpecifierDefault,
        isSpreadElement,
        isSpreadProperty,
        isStandardized,
        isStatement,
        isStaticBlock,
        isStringLiteral,
        isStringLiteralTypeAnnotation,
        isStringTypeAnnotation,
        isSuper,
        isSwitchCase,
        isSwitchStatement,
        isSymbolTypeAnnotation,
        isTSAnyKeyword,
        isTSArrayType,
        isTSAsExpression,
        isTSBaseType,
        isTSBigIntKeyword,
        isTSBooleanKeyword,
        isTSCallSignatureDeclaration,
        isTSConditionalType,
        isTSConstructSignatureDeclaration,
        isTSConstructorType,
        isTSDeclareFunction,
        isTSDeclareMethod,
        isTSEntityName,
        isTSEnumDeclaration,
        isTSEnumMember,
        isTSExportAssignment,
        isTSExpressionWithTypeArguments,
        isTSExternalModuleReference,
        isTSFunctionType,
        isTSImportEqualsDeclaration,
        isTSImportType,
        isTSIndexSignature,
        isTSIndexedAccessType,
        isTSInferType,
        isTSInstantiationExpression,
        isTSInterfaceBody,
        isTSInterfaceDeclaration,
        isTSIntersectionType,
        isTSIntrinsicKeyword,
        isTSLiteralType,
        isTSMappedType,
        isTSMethodSignature,
        isTSModuleBlock,
        isTSModuleDeclaration,
        isTSNamedTupleMember,
        isTSNamespaceExportDeclaration,
        isTSNeverKeyword,
        isTSNonNullExpression,
        isTSNullKeyword,
        isTSNumberKeyword,
        isTSObjectKeyword,
        isTSOptionalType,
        isTSParameterProperty,
        isTSParenthesizedType,
        isTSPropertySignature,
        isTSQualifiedName,
        isTSRestType,
        isTSSatisfiesExpression,
        isTSStringKeyword,
        isTSSymbolKeyword,
        isTSThisType,
        isTSTupleType,
        isTSType,
        isTSTypeAliasDeclaration,
        isTSTypeAnnotation,
        isTSTypeAssertion,
        isTSTypeElement,
        isTSTypeLiteral,
        isTSTypeOperator,
        isTSTypeParameter,
        isTSTypeParameterDeclaration,
        isTSTypeParameterInstantiation,
        isTSTypePredicate,
        isTSTypeQuery,
        isTSTypeReference,
        isTSUndefinedKeyword,
        isTSUnionType,
        isTSUnknownKeyword,
        isTSVoidKeyword,
        isTaggedTemplateExpression,
        isTemplateElement,
        isTemplateLiteral,
        isTerminatorless,
        isThisExpression,
        isThisTypeAnnotation,
        isThrowStatement,
        isTopicReference,
        isTryStatement,
        isTupleExpression,
        isTupleTypeAnnotation,
        isType,
        isTypeAlias,
        isTypeAnnotation,
        isTypeCastExpression,
        isTypeParameter,
        isTypeParameterDeclaration,
        isTypeParameterInstantiation,
        isTypeScript,
        isTypeofTypeAnnotation,
        isUnaryExpression,
        isUnaryLike,
        isUnionTypeAnnotation,
        isUpdateExpression,
        isUserWhitespacable,
        isV8IntrinsicIdentifier,
        isValidES3Identifier,
        isValidIdentifier,
        isVar,
        isVariableDeclaration,
        isVariableDeclarator,
        isVariance,
        isVoidTypeAnnotation,
        isWhile,
        isWhileStatement,
        isWithStatement,
        isYieldExpression,
        jsxAttribute as jSXAttribute,
        jsxClosingElement as jSXClosingElement,
        jsxClosingFragment as jSXClosingFragment,
        jsxElement as jSXElement,
        jsxEmptyExpression as jSXEmptyExpression,
        jsxExpressionContainer as jSXExpressionContainer,
        jsxFragment as jSXFragment,
        jsxIdentifier as jSXIdentifier,
        jsxMemberExpression as jSXMemberExpression,
        jsxNamespacedName as jSXNamespacedName,
        jsxOpeningElement as jSXOpeningElement,
        jsxOpeningFragment as jSXOpeningFragment,
        jsxSpreadAttribute as jSXSpreadAttribute,
        jsxSpreadChild as jSXSpreadChild,
        jsxText as jSXText,
        jsxAttribute,
        jsxClosingElement,
        jsxClosingFragment,
        jsxElement,
        jsxEmptyExpression,
        jsxExpressionContainer,
        jsxFragment,
        jsxIdentifier,
        jsxMemberExpression,
        jsxNamespacedName,
        jsxOpeningElement,
        jsxOpeningFragment,
        jsxSpreadAttribute,
        jsxSpreadChild,
        jsxText,
        labeledStatement,
        logicalExpression,
        matchesPattern,
        memberExpression,
        metaProperty,
        mixedTypeAnnotation,
        moduleExpression,
        newExpression,
        noop,
        nullLiteral,
        nullLiteralTypeAnnotation,
        nullableTypeAnnotation,
        NumberLiteral as numberLiteral,
        numberLiteralTypeAnnotation,
        numberTypeAnnotation,
        numericLiteral,
        objectExpression,
        objectMethod,
        objectPattern,
        objectProperty,
        objectTypeAnnotation,
        objectTypeCallProperty,
        objectTypeIndexer,
        objectTypeInternalSlot,
        objectTypeProperty,
        objectTypeSpreadProperty,
        opaqueType,
        optionalCallExpression,
        optionalIndexedAccessType,
        optionalMemberExpression,
        parenthesizedExpression,
        pipelineBareFunction,
        pipelinePrimaryTopicReference,
        pipelineTopicExpression,
        placeholder,
        prependToMemberExpression,
        privateName,
        program,
        qualifiedTypeIdentifier,
        react,
        recordExpression,
        regExpLiteral,
        RegexLiteral as regexLiteral,
        removeComments,
        removeProperties,
        removePropertiesDeep,
        removeTypeDuplicates,
        restElement,
        RestProperty as restProperty,
        returnStatement,
        sequenceExpression,
        shallowEqual,
        spreadElement,
        SpreadProperty as spreadProperty,
        staticBlock,
        stringLiteral,
        stringLiteralTypeAnnotation,
        stringTypeAnnotation,
        _super as super,
        switchCase,
        switchStatement,
        symbolTypeAnnotation,
        tsAnyKeyword as tSAnyKeyword,
        tsArrayType as tSArrayType,
        tsAsExpression as tSAsExpression,
        tsBigIntKeyword as tSBigIntKeyword,
        tsBooleanKeyword as tSBooleanKeyword,
        tsCallSignatureDeclaration as tSCallSignatureDeclaration,
        tsConditionalType as tSConditionalType,
        tsConstructSignatureDeclaration as tSConstructSignatureDeclaration,
        tsConstructorType as tSConstructorType,
        tsDeclareFunction as tSDeclareFunction,
        tsDeclareMethod as tSDeclareMethod,
        tsEnumDeclaration as tSEnumDeclaration,
        tsEnumMember as tSEnumMember,
        tsExportAssignment as tSExportAssignment,
        tsExpressionWithTypeArguments as tSExpressionWithTypeArguments,
        tsExternalModuleReference as tSExternalModuleReference,
        tsFunctionType as tSFunctionType,
        tsImportEqualsDeclaration as tSImportEqualsDeclaration,
        tsImportType as tSImportType,
        tsIndexSignature as tSIndexSignature,
        tsIndexedAccessType as tSIndexedAccessType,
        tsInferType as tSInferType,
        tsInstantiationExpression as tSInstantiationExpression,
        tsInterfaceBody as tSInterfaceBody,
        tsInterfaceDeclaration as tSInterfaceDeclaration,
        tsIntersectionType as tSIntersectionType,
        tsIntrinsicKeyword as tSIntrinsicKeyword,
        tsLiteralType as tSLiteralType,
        tsMappedType as tSMappedType,
        tsMethodSignature as tSMethodSignature,
        tsModuleBlock as tSModuleBlock,
        tsModuleDeclaration as tSModuleDeclaration,
        tsNamedTupleMember as tSNamedTupleMember,
        tsNamespaceExportDeclaration as tSNamespaceExportDeclaration,
        tsNeverKeyword as tSNeverKeyword,
        tsNonNullExpression as tSNonNullExpression,
        tsNullKeyword as tSNullKeyword,
        tsNumberKeyword as tSNumberKeyword,
        tsObjectKeyword as tSObjectKeyword,
        tsOptionalType as tSOptionalType,
        tsParameterProperty as tSParameterProperty,
        tsParenthesizedType as tSParenthesizedType,
        tsPropertySignature as tSPropertySignature,
        tsQualifiedName as tSQualifiedName,
        tsRestType as tSRestType,
        tsSatisfiesExpression as tSSatisfiesExpression,
        tsStringKeyword as tSStringKeyword,
        tsSymbolKeyword as tSSymbolKeyword,
        tsThisType as tSThisType,
        tsTupleType as tSTupleType,
        tsTypeAliasDeclaration as tSTypeAliasDeclaration,
        tsTypeAnnotation as tSTypeAnnotation,
        tsTypeAssertion as tSTypeAssertion,
        tsTypeLiteral as tSTypeLiteral,
        tsTypeOperator as tSTypeOperator,
        tsTypeParameter as tSTypeParameter,
        tsTypeParameterDeclaration as tSTypeParameterDeclaration,
        tsTypeParameterInstantiation as tSTypeParameterInstantiation,
        tsTypePredicate as tSTypePredicate,
        tsTypeQuery as tSTypeQuery,
        tsTypeReference as tSTypeReference,
        tsUndefinedKeyword as tSUndefinedKeyword,
        tsUnionType as tSUnionType,
        tsUnknownKeyword as tSUnknownKeyword,
        tsVoidKeyword as tSVoidKeyword,
        taggedTemplateExpression,
        templateElement,
        templateLiteral,
        thisExpression,
        thisTypeAnnotation,
        throwStatement,
        toBindingIdentifierName,
        toBlock,
        toComputedKey,
        _default$3 as toExpression,
        toIdentifier,
        toKeyAlias,
        toSequenceExpression,
        _default$2 as toStatement,
        topicReference,
        traverse_2 as traverse,
        traverseFast,
        tryStatement,
        tsAnyKeyword,
        tsArrayType,
        tsAsExpression,
        tsBigIntKeyword,
        tsBooleanKeyword,
        tsCallSignatureDeclaration,
        tsConditionalType,
        tsConstructSignatureDeclaration,
        tsConstructorType,
        tsDeclareFunction,
        tsDeclareMethod,
        tsEnumDeclaration,
        tsEnumMember,
        tsExportAssignment,
        tsExpressionWithTypeArguments,
        tsExternalModuleReference,
        tsFunctionType,
        tsImportEqualsDeclaration,
        tsImportType,
        tsIndexSignature,
        tsIndexedAccessType,
        tsInferType,
        tsInstantiationExpression,
        tsInterfaceBody,
        tsInterfaceDeclaration,
        tsIntersectionType,
        tsIntrinsicKeyword,
        tsLiteralType,
        tsMappedType,
        tsMethodSignature,
        tsModuleBlock,
        tsModuleDeclaration,
        tsNamedTupleMember,
        tsNamespaceExportDeclaration,
        tsNeverKeyword,
        tsNonNullExpression,
        tsNullKeyword,
        tsNumberKeyword,
        tsObjectKeyword,
        tsOptionalType,
        tsParameterProperty,
        tsParenthesizedType,
        tsPropertySignature,
        tsQualifiedName,
        tsRestType,
        tsSatisfiesExpression,
        tsStringKeyword,
        tsSymbolKeyword,
        tsThisType,
        tsTupleType,
        tsTypeAliasDeclaration,
        tsTypeAnnotation,
        tsTypeAssertion,
        tsTypeLiteral,
        tsTypeOperator,
        tsTypeParameter,
        tsTypeParameterDeclaration,
        tsTypeParameterInstantiation,
        tsTypePredicate,
        tsTypeQuery,
        tsTypeReference,
        tsUndefinedKeyword,
        tsUnionType,
        tsUnknownKeyword,
        tsVoidKeyword,
        tupleExpression,
        tupleTypeAnnotation,
        typeAlias,
        typeAnnotation,
        typeCastExpression,
        typeParameter,
        typeParameterDeclaration,
        typeParameterInstantiation,
        typeofTypeAnnotation,
        unaryExpression,
        unionTypeAnnotation,
        updateExpression,
        v8IntrinsicIdentifier,
        validate,
        _default$1 as valueToNode,
        variableDeclaration,
        variableDeclarator,
        variance,
        voidTypeAnnotation,
        whileStatement,
        withStatement,
        yieldExpression
    }
}
export { types }

declare type TypeScript = TSParameterProperty | TSDeclareFunction | TSDeclareMethod | TSQualifiedName | TSCallSignatureDeclaration | TSConstructSignatureDeclaration | TSPropertySignature | TSMethodSignature | TSIndexSignature | TSAnyKeyword | TSBooleanKeyword | TSBigIntKeyword | TSIntrinsicKeyword | TSNeverKeyword | TSNullKeyword | TSNumberKeyword | TSObjectKeyword | TSStringKeyword | TSSymbolKeyword | TSUndefinedKeyword | TSUnknownKeyword | TSVoidKeyword | TSThisType | TSFunctionType | TSConstructorType | TSTypeReference | TSTypePredicate | TSTypeQuery | TSTypeLiteral | TSArrayType | TSTupleType | TSOptionalType | TSRestType | TSNamedTupleMember | TSUnionType | TSIntersectionType | TSConditionalType | TSInferType | TSParenthesizedType | TSTypeOperator | TSIndexedAccessType | TSMappedType | TSLiteralType | TSExpressionWithTypeArguments | TSInterfaceDeclaration | TSInterfaceBody | TSTypeAliasDeclaration | TSInstantiationExpression | TSAsExpression | TSSatisfiesExpression | TSTypeAssertion | TSEnumDeclaration | TSEnumMember | TSModuleDeclaration | TSModuleBlock | TSImportType | TSImportEqualsDeclaration | TSExternalModuleReference | TSNonNullExpression | TSExportAssignment | TSNamespaceExportDeclaration | TSTypeAnnotation | TSTypeParameterInstantiation | TSTypeParameterDeclaration | TSTypeParameter;

declare const TYPESCRIPT_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface TypeScriptPluginOptions {
    dts?: boolean;
    disallowAmbiguousJSXLike?: boolean;
}

declare const UNARY_OPERATORS: string[];

declare interface UnaryExpression extends BaseNode {
    type: "UnaryExpression";
    operator: "void" | "throw" | "delete" | "!" | "+" | "-" | "~" | "typeof";
    argument: Expression;
    prefix: boolean;
}

declare function unaryExpression(operator: "void" | "throw" | "delete" | "!" | "+" | "-" | "~" | "typeof", argument: Expression, prefix?: boolean): UnaryExpression;

declare type UnaryLike = UnaryExpression | SpreadElement;

declare const UNARYLIKE_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface UnionTypeAnnotation extends BaseNode {
    type: "UnionTypeAnnotation";
    types: Array<FlowType>;
}

declare function unionTypeAnnotation(types: Array<FlowType>): UnionTypeAnnotation;

declare const UPDATE_OPERATORS: string[];

declare interface UpdateExpression extends BaseNode {
    type: "UpdateExpression";
    operator: "++" | "--";
    argument: Expression;
    prefix: boolean;
}

declare function updateExpression(operator: "++" | "--", argument: Expression, prefix?: boolean): UpdateExpression;

declare type UserWhitespacable = ObjectMethod | ObjectProperty | ObjectTypeInternalSlot | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeProperty | ObjectTypeSpreadProperty;

declare const USERWHITESPACABLE_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface V8IntrinsicIdentifier extends BaseNode {
    type: "V8IntrinsicIdentifier";
    name: string;
}

declare function v8IntrinsicIdentifier(name: string): V8IntrinsicIdentifier;

declare function validate(node: Node_3 | undefined | null, key: string, val: any): void;

declare type Validator = ({
    type: PrimitiveTypes;
} | {
    each: Validator;
} | {
    chainOf: Validator[];
} | {
    oneOf: any[];
} | {
    oneOfNodeTypes: NodeTypes[];
} | {
    oneOfNodeOrValueTypes: (NodeTypes | PrimitiveTypes)[];
} | {
    shapeOf: {
        [x: string]: FieldOptions;
    };
} | {}) & ((node: Node_3, key: string, val: any) => void);

declare interface VariableDeclaration extends BaseNode {
    type: "VariableDeclaration";
    kind: "var" | "let" | "const" | "using" | "await using";
    declarations: Array<VariableDeclarator>;
    declare?: boolean | null;
}

declare function variableDeclaration(kind: "var" | "let" | "const" | "using" | "await using", declarations: Array<VariableDeclarator>): VariableDeclaration;

declare interface VariableDeclarator extends BaseNode {
    type: "VariableDeclarator";
    id: LVal;
    init?: Expression | null;
    definite?: boolean | null;
}

declare function variableDeclarator(id: LVal, init?: Expression | null): VariableDeclarator;

declare interface Variance extends BaseNode {
    type: "Variance";
    kind: "minus" | "plus";
}

declare function variance(kind: "minus" | "plus"): Variance;

export declare const version: string;

declare interface VirtualTypeAliases {
    BindingIdentifier: types.Identifier;
    BlockScoped: Node_3;
    ExistentialTypeParam: types.ExistsTypeAnnotation;
    Flow: types.Flow | types.ImportDeclaration | types.ExportDeclaration | types.ImportSpecifier;
    ForAwaitStatement: types.ForOfStatement;
    Generated: Node_3;
    NumericLiteralTypeAnnotation: types.NumberLiteralTypeAnnotation;
    Pure: Node_3;
    Referenced: Node_3;
    ReferencedIdentifier: types.Identifier | types.JSXIdentifier;
    ReferencedMemberExpression: types.MemberExpression;
    RestProperty: types.RestElement;
    Scope: types.Scopable | types.Pattern;
    SpreadProperty: types.RestElement;
    User: Node_3;
    Var: types.VariableDeclaration;
}

declare type VisitNode<S, P extends Node_3> = VisitNodeFunction<S, P> | VisitNodeObject<S, P>;

declare type VisitNodeFunction<S, P extends Node_3> = (this: S, path: NodePath<P>, state: S) => void;

declare interface VisitNodeObject<S, P extends Node_3> {
    enter?: VisitNodeFunction<S, P>;
    exit?: VisitNodeFunction<S, P>;
}

export declare type Visitor<S = unknown> =
& VisitNodeObject<S, Node_3>
& {
    [Type in Node_3["type"]]?: VisitNode<S, Extract<Node_3, { type: Type }>>;
}
& {
    [K in keyof types.Aliases]?: VisitNode<S, types.Aliases[K]>;
}
& {
    [K in keyof VirtualTypeAliases]?: VisitNode<S, VirtualTypeAliases[K]>;
}
& {
    // Babel supports `NodeTypesWithoutComment | NodeTypesWithoutComment | ... ` but it is
    // too complex for TS. So we type it as a general visitor only if the key contains `|`
    // this is good enough for non-visitor traverse options e.g. `noScope`
    [k: `${string}|${string}`]: VisitNode<S, Node_3>;
};

declare const VISITOR_KEYS: Record<string, string[]>;

declare namespace visitors {
    /**
     * `explode()` will take a `Visitor` object with all of the various shorthands
     * that we support, and validates & normalizes it into a common format, ready
     * to be used in traversal.
     *
     * The various shorthands are:
     * - `Identifier() { ... }` -> `Identifier: { enter() { ... } }`
     * - `"Identifier|NumericLiteral": { ... }` -> `Identifier: { ... }, NumericLiteral: { ... }`
     * - Aliases in `@babel/types`: e.g. `Property: { ... }` -> `ObjectProperty: { ... }, ClassProperty: { ... }`
     *
     * Other normalizations are:
     * - Visitors of virtual types are wrapped, so that they are only visited when their dynamic check passes
     * - `enter` and `exit` functions are wrapped in arrays, to ease merging of visitors
     */
    function explode<S = unknown>(
    visitor: Visitor<S>,
    ): {
        [Type in Exclude<Node_3, types.DeprecatedAliases>["type"]]?: VisitNodeObject<S, Extract<Node_3, { type: Type }>>;
    };
    function verify(visitor: Visitor): void;
    function merge<State>(visitors: Array<Visitor<State>>): Visitor<State>;
    function merge(
    visitors: Visitor[],
    states?: any[],
    wrapper?: (
    stateKey: any,
    visitorKey: keyof Visitor,
    func: VisitNodeFunction<unknown, Node_3>,
    ) => VisitNodeFunction<unknown, Node_3> | null,
    ): Visitor;
}

declare interface VoidTypeAnnotation extends BaseNode {
    type: "VoidTypeAnnotation";
}

declare function voidTypeAnnotation(): VoidTypeAnnotation;

declare type While = DoWhileStatement | WhileStatement;

declare const WHILE_TYPES: ("AnyTypeAnnotation" | "ArgumentPlaceholder" | "ArrayExpression" | "ArrayPattern" | "ArrayTypeAnnotation" | "ArrowFunctionExpression" | "AssignmentExpression" | "AssignmentPattern" | "AwaitExpression" | "BigIntLiteral" | "BinaryExpression" | "BindExpression" | "BlockStatement" | "BooleanLiteral" | "BooleanLiteralTypeAnnotation" | "BooleanTypeAnnotation" | "BreakStatement" | "CallExpression" | "CatchClause" | "ClassAccessorProperty" | "ClassBody" | "ClassDeclaration" | "ClassExpression" | "ClassImplements" | "ClassMethod" | "ClassPrivateMethod" | "ClassPrivateProperty" | "ClassProperty" | "ConditionalExpression" | "ContinueStatement" | "DebuggerStatement" | "DecimalLiteral" | "DeclareClass" | "DeclareExportAllDeclaration" | "DeclareExportDeclaration" | "DeclareFunction" | "DeclareInterface" | "DeclareModule" | "DeclareModuleExports" | "DeclareOpaqueType" | "DeclareTypeAlias" | "DeclareVariable" | "DeclaredPredicate" | "Decorator" | "Directive" | "DirectiveLiteral" | "DoExpression" | "DoWhileStatement" | "EmptyStatement" | "EmptyTypeAnnotation" | "EnumBooleanBody" | "EnumBooleanMember" | "EnumDeclaration" | "EnumDefaultedMember" | "EnumNumberBody" | "EnumNumberMember" | "EnumStringBody" | "EnumStringMember" | "EnumSymbolBody" | "ExistsTypeAnnotation" | "ExportAllDeclaration" | "ExportDefaultDeclaration" | "ExportDefaultSpecifier" | "ExportNamedDeclaration" | "ExportNamespaceSpecifier" | "ExportSpecifier" | "ExpressionStatement" | "File" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "FunctionExpression" | "FunctionTypeAnnotation" | "FunctionTypeParam" | "GenericTypeAnnotation" | "Identifier" | "IfStatement" | "Import" | "ImportAttribute" | "ImportDeclaration" | "ImportDefaultSpecifier" | "ImportExpression" | "ImportNamespaceSpecifier" | "ImportSpecifier" | "IndexedAccessType" | "InferredPredicate" | "InterfaceDeclaration" | "InterfaceExtends" | "InterfaceTypeAnnotation" | "InterpreterDirective" | "IntersectionTypeAnnotation" | "JSXAttribute" | "JSXClosingElement" | "JSXClosingFragment" | "JSXElement" | "JSXEmptyExpression" | "JSXExpressionContainer" | "JSXFragment" | "JSXIdentifier" | "JSXMemberExpression" | "JSXNamespacedName" | "JSXOpeningElement" | "JSXOpeningFragment" | "JSXSpreadAttribute" | "JSXSpreadChild" | "JSXText" | "LabeledStatement" | "LogicalExpression" | "MemberExpression" | "MetaProperty" | "MixedTypeAnnotation" | "ModuleExpression" | "NewExpression" | "Noop" | "NullLiteral" | "NullLiteralTypeAnnotation" | "NullableTypeAnnotation" | "NumberLiteral" | "NumberLiteralTypeAnnotation" | "NumberTypeAnnotation" | "NumericLiteral" | "ObjectExpression" | "ObjectMethod" | "ObjectPattern" | "ObjectProperty" | "ObjectTypeAnnotation" | "ObjectTypeCallProperty" | "ObjectTypeIndexer" | "ObjectTypeInternalSlot" | "ObjectTypeProperty" | "ObjectTypeSpreadProperty" | "OpaqueType" | "OptionalCallExpression" | "OptionalIndexedAccessType" | "OptionalMemberExpression" | "ParenthesizedExpression" | "PipelineBareFunction" | "PipelinePrimaryTopicReference" | "PipelineTopicExpression" | "Placeholder" | "PrivateName" | "Program" | "QualifiedTypeIdentifier" | "RecordExpression" | "RegExpLiteral" | "RegexLiteral" | "RestElement" | "RestProperty" | "ReturnStatement" | "SequenceExpression" | "SpreadElement" | "SpreadProperty" | "StaticBlock" | "StringLiteral" | "StringLiteralTypeAnnotation" | "StringTypeAnnotation" | "Super" | "SwitchCase" | "SwitchStatement" | "SymbolTypeAnnotation" | "TSAnyKeyword" | "TSArrayType" | "TSAsExpression" | "TSBigIntKeyword" | "TSBooleanKeyword" | "TSCallSignatureDeclaration" | "TSConditionalType" | "TSConstructSignatureDeclaration" | "TSConstructorType" | "TSDeclareFunction" | "TSDeclareMethod" | "TSEnumDeclaration" | "TSEnumMember" | "TSExportAssignment" | "TSExpressionWithTypeArguments" | "TSExternalModuleReference" | "TSFunctionType" | "TSImportEqualsDeclaration" | "TSImportType" | "TSIndexSignature" | "TSIndexedAccessType" | "TSInferType" | "TSInstantiationExpression" | "TSInterfaceBody" | "TSInterfaceDeclaration" | "TSIntersectionType" | "TSIntrinsicKeyword" | "TSLiteralType" | "TSMappedType" | "TSMethodSignature" | "TSModuleBlock" | "TSModuleDeclaration" | "TSNamedTupleMember" | "TSNamespaceExportDeclaration" | "TSNeverKeyword" | "TSNonNullExpression" | "TSNullKeyword" | "TSNumberKeyword" | "TSObjectKeyword" | "TSOptionalType" | "TSParameterProperty" | "TSParenthesizedType" | "TSPropertySignature" | "TSQualifiedName" | "TSRestType" | "TSSatisfiesExpression" | "TSStringKeyword" | "TSSymbolKeyword" | "TSThisType" | "TSTupleType" | "TSTypeAliasDeclaration" | "TSTypeAnnotation" | "TSTypeAssertion" | "TSTypeLiteral" | "TSTypeOperator" | "TSTypeParameter" | "TSTypeParameterDeclaration" | "TSTypeParameterInstantiation" | "TSTypePredicate" | "TSTypeQuery" | "TSTypeReference" | "TSUndefinedKeyword" | "TSUnionType" | "TSUnknownKeyword" | "TSVoidKeyword" | "TaggedTemplateExpression" | "TemplateElement" | "TemplateLiteral" | "ThisExpression" | "ThisTypeAnnotation" | "ThrowStatement" | "TopicReference" | "TryStatement" | "TupleExpression" | "TupleTypeAnnotation" | "TypeAlias" | "TypeAnnotation" | "TypeCastExpression" | "TypeParameter" | "TypeParameterDeclaration" | "TypeParameterInstantiation" | "TypeofTypeAnnotation" | "UnaryExpression" | "UnionTypeAnnotation" | "UpdateExpression" | "V8IntrinsicIdentifier" | "VariableDeclaration" | "VariableDeclarator" | "Variance" | "VoidTypeAnnotation" | "WhileStatement" | "WithStatement" | "YieldExpression" | keyof Aliases)[];

declare interface WhileStatement extends BaseNode {
    type: "WhileStatement";
    test: Expression;
    body: Statement;
}

declare function whileStatement(test: Expression, body: Statement): WhileStatement;

declare interface WithStatement extends BaseNode {
    type: "WithStatement";
    object: Expression;
    body: Statement;
}

declare function withStatement(object: Expression, body: Statement): WithStatement;

declare interface YieldExpression extends BaseNode {
    type: "YieldExpression";
    argument?: Expression | null;
    delegate: boolean;
}

declare function yieldExpression(argument?: Expression | null, delegate?: boolean): YieldExpression;

export { }
