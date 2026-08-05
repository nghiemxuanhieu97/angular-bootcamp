# Knowledge Graph

```text
Frontend Foundation
│
├── Browser ✅
│   ├── Chrome → V8 ✅
│   ├── Firefox → SpiderMonkey ✅
│   ├── Safari → JavaScriptCore ✅
│   ├── HTML ✅
│   ├── CSS ✅
│   ├── DOM 🟡
│   ├── Events 🟡
│   └── Rendering 🟡
│
├── JavaScript ✅
│   └── ECMAScript specification ✅
│
├── TypeScript 🟡
│   └── Build to JavaScript ✅
│
└── Angular 🟡
    └── Runs as JavaScript in browser ✅
```

## Legend

- ✅ Đã hiểu ở mức cần thiết hiện tại.
- 🟡 Đã được nhắc tới nhưng chưa học chính thức.

## JavaScript Foundation

```text
JavaScript Foundation
│
├── Variables ✅
│   ├── Declaration ✅
│   ├── Assignment ✅
│   ├── Initialization ✅
│   ├── Reassignment ✅
│   ├── undefined ✅
│   ├── var ✅
│   ├── let ✅
│   ├── const ✅
│   ├── Block Scope ✅
│   ├── Strict Mode 🟡
│   ├── Object Reference 🟡
│   ├── Hoisting 🟡
│   └── Temporal Dead Zone 🟡
│
├── Angular Class Fields ✅
│
├── Functions ✅
│   ├── Declaration ✅
│   ├── Invocation ✅
│   ├── Parameter ✅
│   ├── Argument ✅
│   ├── Return Value ✅
│   ├── undefined return ✅
│   ├── Function Decomposition ✅
│   ├── Single Responsibility ✅
│   ├── First-class Function 🟡
│   ├── Execution Context 🟡
│   └── Call Stack 🟡
│
├── Objects ✅
│   ├── Property ✅
│   ├── Property Access ✅
│   ├── Add/Delete Property ✅
│   ├── Java vs JavaScript Object ✅
│   ├── Object Reference 🟡
│   ├── Deep/Shallow Copy 🟡
│   └── Prototype 🟡
│  
├── Arrays ✅
│   ├── Index ✅
│   ├── push/pop ✅
│   ├── Array vs Object ✅
│   ├── Index vs id ✅
│   └── Array Methods ✅
│       ├── forEach() ✅
│       ├── map() ✅
│       ├── filter() ✅
│       ├── find() ✅
│       ├── reduce() ✅
│       ├── Callback-based Methods ✅
│       ├── Non-mutating Transformations ✅
│       ├── some() 🟡
│       ├── every() 🟡
│       └── sort() 🟡
│
├── Destructuring ✅
│   ├── Object Destructuring ✅
│   ├── Array Destructuring ✅
│   ├── Skip Array Elements ✅
│   ├── Property Name Matching ✅
│   ├── Missing Property → undefined ✅
│   ├── Rename 🟡
│   ├── Default Value 🟡
│   ├── Nested Destructuring 🟡
│   ├── Function Parameter Destructuring 🟡
│   └── Rest Destructuring 🟡
│
├── Spread & Rest ✅
│   ├── Spread Array ✅
│   ├── Merge Arrays ✅
│   ├── Copy Array ✅
│   ├── Rest Parameter ✅
│   ├── Rest → Array ✅
│   ├── Java Varargs Comparison ✅
│   ├── Spread Object 🟡
│   ├── Shallow Copy 🟡
│   ├── Deep Copy 🟡
│   └── Object Rest Destructuring 🟡
│
├── Modules ✅
│   ├── File as Module ✅
│   ├── Module Boundary ✅
│   ├── Export ✅
│   ├── Import ✅
│   ├── Named Export ✅
│   ├── Default Export ✅
│   ├── Many Named + One Default ✅
│   ├── Angular Imports ✅
│   ├── Circular Dependency 🟡
│   ├── Dynamic Import 🟡
│   ├── Bundler 🟡
│   └── Tree Shaking 🟡
│
├── First-class Functions & Arrow Functions ✅
│   ├── Function as Value ✅
│   ├── Function Reference vs Invocation ✅
│   ├── Assign Function to Variable ✅
│   ├── Pass Function as Argument ✅
│   ├── Return Function ✅
│   ├── Arrow Function Syntax ✅
│   ├── Implicit Return ✅
│   ├── Callback Foundation ✅
│   ├── Lexical this 🟡
│   ├── Closure 🟡
│   └── Higher-order Function 🟡
│
├── Callback ✅
│   ├── Named Callback ✅
│   ├── Anonymous Callback ✅
│   ├── Arrow Function Callback ✅
│   ├── Function Reference ✅
│   ├── Function Invocation ✅
│   ├── Array Method Callback ✅
│   ├── Event Callback ✅
│   └── Timer Callback ✅
│
├── Promise ✅
│   ├── Pending ✅
│   ├── Fulfilled ✅
│   ├── Rejected ✅
│   ├── then(callback) ✅
│   ├── catch(callback) ✅
│   ├── Async Result ✅
│   ├── Non-blocking UI ✅
│   ├── Promise Constructor 🟡
│   ├── resolve() 🟡
│   ├── reject() 🟡
│   ├── finally() 🟡
│   ├── Promise.all() 🟡
│   ├── Promise.race() 🟡
│   ├── Async / Await ✅
│   │   ├── async Function ✅
│   │   ├── await Promise Result ✅
│   │   ├── async Function Returns Promise ✅
│   │   ├── try/catch Error Handling ✅
│   │   └── Promise vs Async / Await ✅
│   └── Microtask Queue 🟡
│
├── Event Loop ✅
│   ├── Call Stack ✅
│   ├── Browser / Web APIs ✅
│   ├── Callback Queue ✅
│   ├── Callback to Call Stack ✅
│   ├── Non-blocking JavaScript ✅
│   ├── Timer and Event Callbacks ✅
│   ├── Promise and Event Loop ✅
│   ├── await pauses current function ✅
│   ├── Task Queue 🟡
│   ├── Microtask Queue 🟡
│   └── Promise before setTimeout 🟡
│
└── DOM & Events ✅
    ├── DOM Tree ✅
    ├── HTML to DOM Objects ✅
    ├── document.getElementById() ✅
    ├── DOM Object Access ✅
    ├── textContent and DOM Mutation ✅
    ├── Browser Event ✅
    ├── addEventListener() ✅
    ├── Click Event ✅
    ├── Input Event ✅
    ├── Event Callback ✅
    ├── Angular Event Binding ✅
    ├── querySelector() 🟡
    ├── querySelectorAll() 🟡
    ├── DOM Rendering 🟡
    ├── Virtual DOM 🟡
    └── Angular Change Detection 🟡
```
