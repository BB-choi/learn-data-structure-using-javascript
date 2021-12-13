// 노드의 데이터 저장
function Node(el) {
    this.el = el;
    this.next = null;
}

// 연결리스트
function LinkedList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.findPrev = findPrev;
    this.remove = remove;
    this.display = display;
}

function find(item) {
    let curNode = this.head;
    while (curNode.el !== item) {
        curNode = curNode.next;
    }
    // curNode.el이 item과 같은 경우의 노드가 반환된다
    return curNode;
}

function insert(newEl, curEl) {
    let newNode = new Node(newEl);
    let curNode = this.find(curEl);
    newNode.next = curNode.next;
    curNode.next = newNode;
}

// remove()를 위해 필요
// (삭제하는 노드의 다음노드가, 직전 노드의 다음노드가 되어야 한다.)
function findPrev(item) {
    let curNode = this.head;
    while (curNode.next !== null && curNode.next.el !== item) {
        curNode = curNode.next;
    }
    return curNode;
}

function remove(item) {
    let prevNode = this.findPrev(item);
    // 이전 노드의 next는 item이 들어있는 Node임
    if (prevNode.next !== null) {
        prevNode.next = prevNode.next.next;
    }
}

function display() {
    let curNode = this.head;
    while (curNode.next !== null) {
        console.log(curNode.next.el);
        curNode = curNode.next;
    }
}

/////////////////////////////////////////////////////////

// 새로운 연결리스트 생성
let cities = new LinkedList();
cities.insert("Seoul", "head");
cities.insert("Kyeongkki", "Seoul");
cities.insert("Incheon", "Kyeongkki");
cities.display();
console.log(cities.find("Seoul"));
console.log("========================");
cities.remove("Incheon");
cities.display();
