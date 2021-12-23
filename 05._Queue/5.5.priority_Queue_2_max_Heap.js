// 최대 힙

class maxHeap {
    constructor() {
        this.node = [];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.isEmpty = isEmpty;
        this.chkEnqueuePri = chkEnqueuePri;
        this.chkDequeuePri = chkDequeuePri;
        this.show = show;
        this.front = front;
        this.back = back;
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
    this.node.push(new Data(data, pri));
    // this.node.push(data);
    this.chkEnqueuePri();
}

// function getParentIDX(idx) {
//     return parseInt(idx / 2);
// }

// function getLChildIDX(idx) {
//     return idx * 2;
// }

// function getRChildIDX(idx) {
//     return getLChildIDX(idx) + 1;
// }

function chkEnqueuePri(idx = this.node.length - 1) {
    if (idx < 1) return;
    let curNode = this.node[idx];
    let parentIdx = Math.floor((idx - 1) / 2);
    let parentNode = this.node[parentIdx];

    if (parentNode.pri >= curNode.pri) return;

    this.node[parentIdx] = curNode;
    this.node[idx] = parentNode;
    idx = parentIdx;
    // enqueue후 배열을 우선순위에 따라 재배치
    this.chkEnqueuePri(idx);
}

function dequeue() {
    let dequeueNode = this.node[0];

    if (this.node.length === 1) {
        this.node.pop();
        return dequeueNode.data;
    }

    this.node[0] = this.node.pop();
    // dequeue 후 배열 재배치
    this.chkDequeuePri();
    return dequeueNode.data;
}

function chkDequeuePri(idx = 0) {
    let leftChildIdx = idx * 2 + 1;
    let rightChildIdx = leftChildIdx + 1;

    let length = this.node.length;
    let root = idx;

    if (!this.node[leftChildIdx] && !this.node[rightChildIdx]) return;
    if (!this.node[rightChildIdx]) {
        if (this.node[leftChildIdx].pri > this.node[root].pri) {
            root = leftChildIdx;
        }
    } else if (this.node[leftChildIdx].pri < this.node[rightChildIdx].pri) {
        if (
            rightChildIdx <= length &&
            this.node[rightChildIdx].pri > this.node[root].pri
        ) {
            root = rightChildIdx;
        }
    } else {
        if (
            leftChildIdx <= length &&
            this.node[leftChildIdx].pri > this.node[root].pri
        ) {
            root = leftChildIdx;
        }
    }

    if (root !== idx) {
        let t = this.node[root];
        this.node[root] = this.node[idx];
        this.node[idx] = t;
        this.chkDequeuePri(root);
    }
}

function isEmpty() {
    if (this.node.length) {
        return false;
    } else {
        return true;
    }
}

function show() {
    let i = 0;
    while (i < this.node.length) {
        console.log(this.node[i].data, this.node[i].pri);
        i++;
    }
}

let heap = new maxHeap();
// heap.enqueue("test1", 1);
// heap.enqueue("test2", 2);
// heap.enqueue("test3", 3);
// heap.enqueue("test4", 4);
// heap.enqueue("test5", 5);
// heap.enqueue("test6", 9);
// heap.enqueue("test7", 8);
// heap.enqueue("test8", 7);
// heap.enqueue("test9", 6);
heap.enqueue("test1", 1);
heap.enqueue("test2", 2);
heap.enqueue("test3", 3);
heap.enqueue("test4", 4);
heap.enqueue("test5", 5);
heap.enqueue("test6", 6);
heap.enqueue("test7", 7);
heap.enqueue("test8", 8);
heap.enqueue("test9", 9);
// heap.enqueue(1);
// heap.enqueue(2);
// heap.enqueue(3);
// heap.enqueue(4);
// heap.enqueue(5);
// heap.enqueue(9);
// heap.enqueue(8);
// heap.enqueue(7);
// heap.enqueue(6);
heap.show();
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
heap.show();
console.log(heap.front());
console.log(heap.back());
