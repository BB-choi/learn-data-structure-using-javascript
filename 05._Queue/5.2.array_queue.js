class Queue {
    constructor() {
        this.dataStore = [];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.front = front;
        this.back = back;
        this.toString = toString;
        this.empty = empty;
    }
}

function enqueue(el) {
    this.dataStore.push(el);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    let ret = "";
    for (let i = 0; i < this.dataStore.length; i++) {
        ret += this.dataStore[i] + " ";
    }
    return ret;
}

function empty() {
    if (this.dataStore.length) {
        return false;
    } else {
        return true;
    }
}

let q = new Queue();
q.enqueue("A");
q.enqueue("B");
q.enqueue("C");
q.enqueue("D");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("front", q.front());
console.log("back", q.back());
