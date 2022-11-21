function App() {

    //   Queue
    // The queue data structure is a sequential collection of elements that follows the principle of First In First Out (FIFO)
    // The first element inserted into the queue is first element to be removed
    // A queue of people. People enter the queue at one end (rear/tail) and leave the queue from the other end (front/ head).
    // Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model
    // The Queue data structure supports two main operations
    
    // 1. Enqueue, which adds an element to the rear/tail of the collection
    // 2. Dequeue, which removes an element from the front/head of the collection
    
    // use in like printers, CPU task scheduling and callback queue in Javascript runtime
    
    
    // Queue Implementation
    // enqueue(element) - add an element to the queue
    // dequeue() - remove the oldest element from the queue
    // peek() - get the value of the element at the front of the queue without removing it
    // isEmpty() - check if the queue is empty
    // size() - get the number of elements in the queue
    // print() - visualize the elements in the queue
    
    
    
      // const queueDS = () => {
    
      //   class Queue {
      //     constructor(){
      //       this.items = [];
      //     }
    
      //     enqueue(element){
      //       this.items.push(element)
      //     }
    
      //     dequeue(){
      //       return this.items.shift()
      //     }
    
      //     isEmpty(){
      //       return this.items.length === 0
      //     }
    
      //     peek(){
      //       return this.isEmpty() ? null : this.items[0]
      //     }
    
      //     size(){
      //       return this.items.length 
      //     }
    
      //     print(){
      //       console.log(this.items.toString())
      //     }
      //   }
    
    
      //   const queue = new Queue();
    
      //   console.log(queue.isEmpty())
    
      //   queue.enqueue(10)
      //   queue.enqueue(20)
      //   queue.enqueue(30)
        
      //   console.log(queue.print())
      //   console.log(queue.dequeue())
      //   console.log(queue.size())
      //   console.log(queue.peek())
    
      // };
    
    
      // Above whole process is correct but in dequeue function, time complexity is linear so we will use below process where time complexity 
      // for all functions are linear:
    
    
      const queueDS = () => {
    
        class Queue {
          constructor(){
            this.items = {};
            this.rear = 0;
            this.front = 0;
          }
    
          enqueue(element){
            this.items[this.rear] = element;
            this.rear++
          }
    
          dequeue(){
            const item = this.items[this.front];
            delete this.items[this.front]
            this.front++
            return item;
          }
    
          isEmpty(){
            return this.rear - this.front === 0
          }
    
          peek(){
            return this.isEmpty() ? null : this.items[this.front]
          }
    
          size(){
            return this.rear - this.front 
          }
    
          print(){
            console.log(this.items)
          }
        }
    
    
        const queue = new Queue();
    
        console.log(queue.isEmpty())
    
        queue.enqueue(10)
        queue.enqueue(20)
        queue.enqueue(30)
        
        console.log(queue.print())
        console.log(queue.dequeue())
        console.log(queue.size())
        console.log(queue.peek())
    
      };
    
    
    
      return (
        <div className="App">
          Queue..
          <>{queueDS()}</>
        </div>
      );
    }
    
    export default App;
    