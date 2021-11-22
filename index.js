class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element) {
      this.queue.push(element);
      return this.queue;
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    peek() {
      return this.queue[0];
    }
  
    size() {
      return this.queue.length;
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    print() {
      return this.queue;
    }
  }
  
  const queue = new Queue();
  console.log(queue.enqueue('Juan')); // ['Juan']
  console.log(queue.enqueue('Miguel')); // ['Juan', 'Miguel']
  console.log(queue.enqueue('Ana')); // ['The Rock', 'Miguel', 'Ana']
  console.log(queue.dequeue()); // 'Juan'
  console.log(queue.peek()); // 'Miguel'
  console.log(queue.isEmpty()); // false
  console.log(queue.print()); // ['Miguel', 'Ana']
  //Disculpe el retraso profesor :(