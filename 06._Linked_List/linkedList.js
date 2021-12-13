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
    // this.remove = remove;
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

function insert(newEl, item) {
    let newNode = new Node(newEl);
    let curNode = this.find(item);
    newNode.next = curNode.next;
    curNode.next = newNode;
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
