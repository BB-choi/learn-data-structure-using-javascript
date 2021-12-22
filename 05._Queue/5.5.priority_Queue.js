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

function pQueue(data, pri) {
    this.data = data;
    this.pri = pri;
}
function enqueue(el) {
    this.dataStore.push(el);
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function empty() {
    if (this.dataStore.length) {
        return false;
    } else {
        return true;
    }
}

function dequeue() {
    let idx = 0;
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].pri > this.dataStore[idx].pri) {
            idx = i;
        }
    }
    return this.dataStore.splice(idx, 1);
}

function toString() {
    let ret = "";
    for (let i = 0; i < this.dataStore.length; i++) {
        ret += this.dataStore[i].data + " " + this.dataStore[i].pri + " / ";
    }
    return ret;
}

let data = new pQueue("test1", 1);
let q = new Queue();

q.enqueue(data);

data = new pQueue("test2", 2);
q.enqueue(data);
data = new pQueue("test3", 3);
q.enqueue(data);
data = new pQueue("test4", 4);
q.enqueue(data);
data = new pQueue("test5", 5);
q.enqueue(data);
data = new pQueue("test6", 1);
q.enqueue(data);
data = new pQueue("test7", 9);
q.enqueue(data);

console.log(q.toString()); // 입력 순으로 출력된다

let deq = q.dequeue();
console.log(deq[0].data, deq[0].pri);

console.log(q.toString());

deq = q.dequeue();
console.log(deq[0].data, deq[0].pri);

console.log(q.toString());

/* 
test1 1 / test2 2 / test3 3 / test4 4 / test5 5 / test6 1 / test7 9 / 
test7 9
test1 1 / test2 2 / test3 3 / test4 4 / test5 5 / test6 1 /
test5 5
test1 1 / test2 2 / test3 3 / test4 4 / test6 1 /
*/
