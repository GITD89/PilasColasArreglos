class Stack {
    constructor() {
      this.stack = [];
    }
    
    push(element) {
      this.stack.push(element);
      return this.stack;
    }
    
    pop() {
      return this.stack.pop();
    }
    
    peek() {
      return this.stack[this.stack.length - 1];
    }
    
    size() {
      return this.stack.length;
    }
  
    print() {
      console.log(this.stack);
    }
  }
  
  const stack = new Stack();
  console.log(stack.size()); // 0
  console.log(stack.push('Miguel')); // ['Miguel']
  console.log(stack.push('Juan')); // ['Miguel', 'Juan']
  console.log(stack.size()); // 2
  stack.print(); // ['Miguel', 'Juan]
  console.log(stack.peek()); // 'Juan'
  console.log(stack.pop()); // 'Juan'
  console.log(stack.peek()); // Miguel
  //Disculpe el retraso profesor :(