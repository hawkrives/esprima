/**
 * This test works differently than the other tests.
 *
 * test/fbtest.js
 *     This file lists out the tests but not the expected ASTs/errors
 *
 * test/fbtest.rec.js
 *     This AUTOGENERATED file contains the ASTs and errors for the
 *     tests below. This is the test run by test/run.js
 *
 * tools/generate-fbtest.js
 *     This script reads fbtest.js and generates fbtest.rec.js
 *
 *
 * TO ADD A TEST
 *     1) Add the string you want to parse to test/fbtest.js
 *     2) Run tools/generate-fbtest.js
 *
 * TO RE-RECORD AN EXISTING TEST
 *     1) Run tools/generate-fbtest.js
 *
 * TO DELETE A TEST
 *     1) Remove the test from test/fbtest.js
 *     2) Run tools/generate-fbtest.js
 */

module.exports = {
    'XJS': [
        '<a />',
        '<n:a n:v />',
        '<a n:foo="bar"> {value} <b><c /></b></a>',
        '<a b={" "} c=" " d="&amp;" e="id=1&group=2" f="&#123456789" g="&#123*;" h="&#x;" />',
        '<a\n/>',
        '<日本語></日本語>',
        '<AbC-def\n  test="&#x0026;&#38;">\nbar\nbaz\r\n</AbC-def>',
        '<a b={x ? <c /> : <d />} />',
        '<a>{}</a>',
        '<a>{/* this is a comment */}</a>',
        '<div>@test content</div>',
        '<div><br />7x invalid-js-identifier</div>',
        '<LeftRight left=<a /> right=<b>monkeys /> gorillas</b> />',
        '<a.b></a.b>',
        '<a.b.c></a.b.c>',
        '(<div />) < x;',
        '<div {...props} />',
        '<div {...props} post="attribute" />',
        '<div pre="leading" pre2="attribute" {...props}></div>',
        '<a>    </a>',
    ],
    'Invalid XJS Syntax': [
        '</>',
        '<a: />',
        '<:a />',
        '<a b=d />',
        '<a>',
        '<a></b>',
        '<a foo="bar',
        '<a:b></b>',
        '<a:b.c></a:b.c>',
        '<a.b:c></a.b:c>',
        '<a.b.c></a>',
        '<.a></.a>',
        '<a.></a.>',
        '<a[foo]></a[foo]>',
        '<a[\'foo\']></a[\'foo\']>',
        '<a><a />',
        '<a b={}>',
        'var x = <div>one</div><div>two</div>;',
        'var x = <div>one</div> /* intervening comment */ <div>two</div>;',
        '<a>{"str";}</a>',
        '<span className="a", id="b" />',
        '<div className"app">',
        '<div {props} />',
        '<div>stuff</div {...props}>',
        '<div {...props}>stuff</div {...props}>',
    ],
    'Type Annotations': [
        'function foo(numVal: any){}',
        'function foo(numVal: number){}',
        'function foo(numVal: number, strVal: string){}',
        'function foo(numVal: number, untypedVal){}',
        'function foo(untypedVal, numVal: number){}',
        'function foo(nullableNum: ?number){}',
        'function foo(callback: () => void){}',
        'function foo(callback: () => number){}',
        'function foo(callback: (_:bool) => number){}',
        'function foo(callback: (_1:bool, _2:string) => number){}',
        'function foo(callback: (_1:bool, ...foo:Array<number>) => number){}',
        'function foo():number{}',
        'function foo():() => void{}',
        'function foo():(_:bool) => number{}',
        'function foo():(_?:bool) => number{}',
        'function foo(): {} {}',
        'function foo<T>() {}',
        'function foo<T,S>() {}',
        'a=function<T,S>() {}',
        'a={set fooProp(value:number){}}',
        'class Foo {set fooProp(value:number){}}',
        'var numVal:number;',
        'var numVal:number = otherNumVal;',
        'var a: {numVal: number};',
        'var a: {numVal: number; [indexer: string]: number};',
        'var a: ?{numVal: number};',
        'var a: {numVal: number; strVal: string}',
        'var a: {subObj: {strVal: string}}',
        'var a: {subObj: ?{strVal: string}}',
        'var a: {param1: number; param2: string}',
        'var a: {param1: number; param2?: string}',
        'var a:Array<number> = [1, 2, 3]',
        'a = class Foo<T> { }',
        'class Foo<T> {}',
        'class Foo<T> { bar<U>():number { return 42; }}',
        'class Foo { "bar"<T>() { } }',
        'function foo(requiredParam, optParam?) {}',
        'class Foo { prop1:string; prop2:number; }',
        'var x : number | string = 4;',
        'class Array { concat(items:number | string) {}; }',
        'var x : () => number | () => string = fn;',
        'var x: typeof Y = Y;',
        'var x: typeof Y | number = Y;',
        'var {x}: {x: string; } = { x: "hello" };',
        'var {x}: {x: string } = { x: "hello" };',
        'var [x]: Array<string> = [ "hello" ];',
        'function foo({x}: { x: string; }) {}',
        'function foo([x]: Array<string>) {}',
        'function foo(...rest: Array<number>) {}',
        '(function (...rest: Array<number>) {})',
        '((...rest: Array<number>) => rest)',
        'var a: Map<string, Array<string> >',
        'var a: Map<string, Array<string>>',
        'var a: number[]',
        'var a: ?string[]',
        'var a: Promise<bool>[]',
    ],
    'Invalid Type Annotations': [
        'function foo(callback:) {}',
        'function foo(): {}',
        'function foo(): { foo() }',
        'function foo(callback:(string) => number) {}',
        'a = {foo(): { return 42; }}',
        'class Foo { get bar<T>() { } }',
        'var a:{a:number b:string}',
        'var a: { [a: number]: string; [b: number]: string; };',
        'var x: (number) => string',
        'var y: return',
        'var a: { x: number, y: string }',
    ],
    'Type Alias': [
        'type FBID = number;',
        'type Foo<T> = Bar<T>',
    ],
    'Interfaces': [
        'interface A {}',
        'interface A extends B {}',
        'interface A<T> extends B<T>, C<T> {}',
        'interface A { foo: () => number; }',
        'interface Dictionary { [index: string]: string; length: number; }',
    ],
    'Type Grouping': [
        'var a: (number)',
        'var a: (() => number) | () => string',
        'var a: number & (string | bool)',
        'var a: (typeof A)',
    ],
    'Invalid Type Alias': [
        'if (true) type foo = number',
    ],
    'Invalid Interfaces': [
        'interface {}',
        'interface A extends {}',
    ],
};
