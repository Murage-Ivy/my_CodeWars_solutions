class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }


    pop(element) {
        if (this.items.length === 0) {
            return "Empty stack"
        } else {
            return this.items.pop(element);
        }
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}


let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);
myStack.push(7);
myStack.push(8);
myStack.push(9);
myStack.push(10);
console.log(myStack.items);

console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.isEmpty());