"use strict";
class B {
    constructor() {
        this.a = "123";
        this.b = "world";
        this.c = "wow";
    }
    method() {
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
    }
}
function abc(a, b, c) { }
abc(1);
abc(1, 2);
abc(1, 2, 3);
function abc2(...args) { }
abc2(1, 2, 3, 4);
let obj = { a: "hello", b: "world" };
obj = { a: "hello" };
//제네릭
// function add<T extends number, K extends string>(x: T, y: KHR_parallel_shader_compiless): T {
//     return x + y;
// }
// add(1, 2);
// add("1", "2");
// add(false, true); //이건 원치 않아 그래서 T에 제한
function add(x) {
    return x;
}
add({ a: "123" });
