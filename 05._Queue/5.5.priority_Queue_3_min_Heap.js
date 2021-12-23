// 최소 힙

class minHeap {
    constructor() {
        this.node = [];
        this.front = front;
        this.back = back;
        this.isEmpty = isEmpty;
        this.enqueue = enqueue;
        this.chkEnqueuePri = chkEnqueuePri;
        this.dequeue = dequeue;
        this.chkDequeuePri = chkDequeuePri;
        this.print = print;
    }
}

class Data {
    constructor(data, pri) {
        this.data = data;
        this.pri = pri;
    }
}

function front() {
    return this.node[0].data;
}

function back() {
    return this.node[this.node.length - 1].data;
}

function enqueue(data, pri) {
    let d = new Data(data, pri);
    // this.node.push(new Data(data, pri));
    this.node.push(d);
    this.chkEnqueuePri();
}

function chkEnqueuePri(idx = this.node.length - 1) {
    if (idx < 1) {
        return;
    }

    let curNode = this.node[idx];
    let parentIdx = Math.floor((idx - 1) / 2);
    let parentNode = this.node[parentIdx];

    if (parentNode.pri <= curNode.pri) {
        return;
    }

    this.node[parentIdx] = curNode;
    this.node[idx] = parentNode;
    idx = parentIdx;
    this.chkEnqueuePri(idx);
}

function dequeue() {
    let dequeueNode = this.node[0];

    if (this.node.length === 1) {
        this.node.pop();
        return dequeueNode.data;
    }

    this.node[0] = this.node.pop();
    this.chkDequeuePri();

    return dequeueNode.data;
}

function chkDequeuePri(idx = 0) {
    let leftChildIdx = idx * 2 + 1;
    let rightChildIdx = leftChildIdx + 1;

    let length = this.node.length;
    let curRoot = idx;

    if (!this.node[leftChildIdx] && !this.node[rightChildIdx]) {
        return;
    }
    if (!this.node[rightChildIdx]) {
        if (this.node[leftChildIdx].pri < this.node[curRoot].pri) {
            curRoot = leftChildIdx;
        }
    } else if (this.node[leftChildIdx].pri > this.node[rightChildIdx].pri) {
        if (
            rightChildIdx <= length &&
            this.node[rightChildIdx].pri < this.node[curRoot].pri
        ) {
            curRoot = rightChildIdx;
        }
    } else {
        if (
            leftChildIdx <= length &&
            this.node[leftChildIdx].pri < this.node[curRoot].pri
        ) {
            curRoot = leftChildIdx;
        }
    }

    if (curRoot !== idx) {
        let temp = this.node[curRoot];
        this.node[curRoot] = this.node[idx];
        this.node[idx] = temp;
        this.chkDequeuePri(curRoot);
    }
}

function isEmpty() {
    if (this.node[0]) {
        return false;
    } else {
        return true;
    }
}

function print() {
    let i = 0;
    while (i < this.node.length) {
        console.log(this.node[i].data, this.node[i].pri);
        i++;
    }
}

let heap = new minHeap();
heap.enqueue("test1", 1);
heap.enqueue("test2", 2);
heap.enqueue("test3", 3);
heap.enqueue("test4", 4);
heap.enqueue("test5", 5);
heap.enqueue("test6", 6);
heap.enqueue("test7", 7);
heap.enqueue("test8", 8);
heap.enqueue("test9", 9);
heap.print();
console.log("-------------");
console.log(heap.front());
console.log(heap.back());
console.log("-------------");
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log("-------------");
heap.print();
console.log("-------------");
console.log(heap.front());
console.log(heap.back());
