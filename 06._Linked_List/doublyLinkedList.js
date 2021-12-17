class Node {
    constructor(el) {
        this.el = el;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node("head");
        this.find = find;
        this.findLastNode = findLastNode;
        this.insert = insert;
        this.remove = remove;
        this.display = display;
        this.revDisplay = revDisplay;
    }
}

function insert(newEl, curEl) {
    let newNode = new Node(newEl);
    let curNode = this.find(curEl);
    newNode.next = curNode.next;
    newNode.prev = curNode;
    curNode.next = newNode;
}

function remove(item) {
    let curNode = this.find(item);
    if (curNode.next !== null) {
        // 현재노드의 이전노드가 가리키는 다음노드를 현재노드의 다음노드로 변경
        curNode.prev.next = curNode.next;
        // 현재노드의 다음노드가 가리키는 이전노드를 현재노드의 이전노드로 변경
        curNode.next.prev = curNode.prev;

        // 현재노드가 양방향으로 가리키는 노드를 null로 만듦
        curNode.next = null;
        curNode.prev = null;
    }
}

function find(item) {
    let curNode = this.head;
    while (curNode.el !== item) {
        curNode = curNode.next;
    }
    return curNode;
}

function findLastNode() {
    let curNode = this.head;
    while (curNode.next !== null) {
        curNode = curNode.next;
    }
    return curNode;
}

function display() {
    let curNode = this.head;
    while (curNode.next !== null) {
        console.log(curNode.next.el);
        curNode = curNode.next;
    }
}
// 역순 출력
function revDisplay() {
    let curNode = this.head;
    curNode = this.findLastNode();

    while (curNode.prev !== null) {
        console.log(curNode.el);
        curNode = curNode.prev;
    }
}

/////////////////////////////////////////////////////////

let alphabets = new LinkedList();
alphabets.insert("a", "head");
alphabets.insert("b", "a");
alphabets.insert("c", "b");
alphabets.insert("d", "c");
alphabets.insert("e", "d");
alphabets.display();
console.log("========================");
alphabets.revDisplay();
console.log("========================");
alphabets.remove("a");
alphabets.display();
