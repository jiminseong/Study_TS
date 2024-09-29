class B {
    private readonly a: string = "123";
    b: string = "world";
    c: string = "wow";

    method() {
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
    }
}

function abc(a: number, b?: number, c?: number) {}
abc(1);
abc(1, 2);
abc(1, 2, 3);

function abc2(...args: number[]) {}
abc2(1, 2, 3, 4);

let obj: { a: string; b?: string } = { a: "hello", b: "world" };
obj = { a: "hello" };

//제네릭
// function add<T extends number, K extends string>(x: T, y: KHR_parallel_shader_compiless): T {
//     return x + y;
// }

// add(1, 2);
// add("1", "2");
// add(false, true); //이건 원치 않아 그래서 T에 제한

function add<T extends { a: string }>(x: T): T {
    return x;
}

add({ a: "123" });
