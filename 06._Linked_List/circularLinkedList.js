class Node {
    constructor(el) {
        this.el = el;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node("head");
        // 항상 마지막 노드의 next는 head를 가리킨다.
        // 맨 처음, 마지막노드는 head이므로 head.next는 head를 가리킨다.
        this.head.next = this.head;
        this.find = find;
        this.insert = insert;
        this.findPrev = findPrev;
        this.remove = remove;
        this.display = display;
    }
}

function find(item) {
    let curNode = this.head;
    while (curNode.el !== item) {
        curNode = curNode.next;
    }
    return curNode;
}

function insert(newEl, curEl) {
    let newNode = new Node(newEl);
    let curNode = this.find(curEl);
    newNode.next = curNode.next;
    curNode.next = newNode;
}

function findPrev(item) {
    let curNode = this.head;
    while (curNode.next !== null && curNode.next.el !== item) {
        curNode = curNode.next;
    }
    return curNode;
}

function remove(item) {
    let prevNode = this.findPrev(item);
    if (prevNode.next !== null) {
        prevNode.next = prevNode.next.next;
    }
}

function display() {
    let curNode = this.head;
    while (curNode.next !== null && curNode.next.el !== "head") {
        // curNode.next.el이 "head"인 경우 curNode가 마지막 노드
        console.log(curNode.next.el);
        curNode = curNode.next;
    }
}

/////////////////////////////////////////////////////////

let cities = new LinkedList();
cities.insert("Seoul", "head");
cities.insert("Kyeongkki", "Seoul");
cities.insert("Incheon", "Kyeongkki");
cities.display();
console.log("========================");
cities.remove("Incheon");
cities.display();

// 순환형 연결 리스트(원형 연결 리스트)는 복잡한 양방향 연결 없이도 간단하게 역방향으로 탐색 가능
// 노드의 끝을 지나 계속 탐색하면 결국 역방향 노드에 접근
