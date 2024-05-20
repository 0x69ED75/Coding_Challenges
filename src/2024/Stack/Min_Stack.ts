class MinStack {
    stack = []
    min = [Infinity]

    constructor() {

    }

    push(val: number): void {
        if (val <= this.min[0]) this.min.unshift(val)
        this.stack.unshift(val)
    }

    pop(): void {
        if(this.stack[0] === this.min[0]) this.min.shift()
        this.stack = this.stack.slice(1,this.stack.length)
    }

    top(): number {
        return this.stack[0]
    }

    getMin(): number {
        return this.min[0]
    }
}

let x = new MinStack()
x.push(-1)
x.push(0)
x.pop()
console.log(x.getMin())