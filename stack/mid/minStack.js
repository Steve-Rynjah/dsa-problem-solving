class MinStack {
    constructor(){
        this.stack = [];
        this.minStack = []
    }

    push(val){
        this.stack.push(val);
        if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]){
            this.minStack.push(val)
        }
    }

    pop(){
        const removeValue = this.stack.pop()
        if(removeValue === this.minStack[this.minStack.length - 1]){
            this.minStack.pop()
        }
    }

    top(){
        return this.stack[this.stack.length - 1]
    }

    getMin(){
        return this.minStack[this.minStack.length - 1]
    }

    getStack() {
        return this.stack;
    }
    
}

const stack = new MinStack()

stack.push(1)
stack.push(2)

console.log("stack : ", stack.getStack())
console.log("top : ", stack.top())