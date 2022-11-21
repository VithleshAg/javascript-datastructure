function App() {

    // Circular Queue
    // The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element
    // Also referred to as circular buffer or ring buffer and follows the FIFO principle
    // A circular queue will reuse the empty block created during the dequeue operation When working with queues of fixed maximum size, a circular queue is a great implementation choice
    // The Circular Queue data structure supports two main operations
    // Enqueue, which adds an element to the rear/tail of the collection
    // Dequeue, which removes an element from the front/head of the collection
  
    // Used in Clock, streaming data and traffic lights
    
  
  
  // Queue Implementation
  // enqueue(element) - add an element to the queue
  // dequeue() - remove the oldest element from the queue
  // peek() - get the value of the element at the front of the queue without removing it
  // isEmpty() - check if the queue is empty
  // size() - get the number of elements in the queue
  // print() - visualize the elements in the queue
  // isFull() - check if queue is full or not
  
  
    const circularQueueDS = () => {
  
      class CircularQueue {
        constructor(capacity){
          this.items = new Array(capacity);
          this.capacity = capacity;
          this.currentLength = 0;
          this.rear = -1;
          this.front = -1;
        }
  
        isFull(){
          return this.currentLength === this.capacity
        }
  
        isEmpty(){
          return this.currentLength === 0
        }
  
        enqueue(element){
          if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity;          
            this.items[this.rear] = element;
            if(this.front === -1){ 
              this.front=0
            }
            this.currentLength++;
          }
        }
  
        dequeue(){
          if(this.isEmpty()) return null;
  
          const item = this.items[this.front];
          this.items[this.front] = null;
          this.front = (this.front + 1) % this.capacity;
          this.currentLength--;
          if(this.isEmpty()){
            this.rear = -1
            this.front = -1
          }
          return item;
        }      
  
        peek(){
          return this.isEmpty() ? null : this.items[this.front]
        }
  
        size(){
          return this.currentLength
        }
  
        print(){
          if(this.isEmpty()) return console.log("Circular queue is empty")
          let str = ""
          for(let i=this.front; i!=this.rear; i=(i+1)%this.capacity){
            str += this.items[i] + "";
          }
          str += this.items[this.rear];
          console.log("front: ", this.front, " rear: ", this.rear)
          console.log("str: ",str)
        }
      }
  
  
      const circluarQueue = new CircularQueue(5);
  
      console.log(circluarQueue.isEmpty())
  
      circluarQueue.enqueue(10)
      circluarQueue.enqueue(20)
      circluarQueue.enqueue(30)
      circluarQueue.enqueue(40)
      circluarQueue.enqueue(50)
      
      console.log(circluarQueue.isFull())
      circluarQueue.print()
      console.log(circluarQueue.size())
      console.log(circluarQueue.peek())
      console.log(circluarQueue.dequeue())
      circluarQueue.print()
      console.log(circluarQueue.size())
      console.log(circluarQueue.peek())
  
      circluarQueue.enqueue(60)
      circluarQueue.enqueue(70)
      circluarQueue.print()
      console.log(circluarQueue.size())
      console.log(circluarQueue.peek())
    };
  
  
  
    return (
      <div className="App">
        Circular Queue..
        <>{circularQueueDS()}</>
      </div>
    );
  }
  
  export default App;
  