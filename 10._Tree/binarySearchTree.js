class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.show = show;
    }
}

function show() {
    return this.data;
}

class BST {
    constructor() {
        this.root = null;
        this.insert = insert;
        this.inOrder = inOrder;
    }
}

function inOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}

function insert(data) {
    let n = new Node(data, null, null);
    if (this.root === null) {
        this.root = n;
    } else {
        // 루트노드를 current로 설정
        let current = this.root;
        let parent;

        while (true) {
            parent = current;
            // 삽입할 노드의 값(data)이 current노드보다 작으면
            if (data < current.data) {
                // 새로운 current노드를 current의 왼쪽 자식 노드로 설정
                current = current.left;
                // 노드 왼쪽 자식노드에 값이 없으면 새로운 노드를 왼쪽 자식으로 삽입하고 반복문 종료
                if (current === null) {
                    parent.left = n;
                    break;
                }
            } else {
                // current노드를 현재 노드의 오른쪽 자식 노드로 설정
                current = current.right;
                // 오른쪽 자식노드에 값이 없으면 새로운 노드를 오른쪽 자식으로 삽입하고 반복문 종료
                if (current === null) {
                    parent.right = n;
                    break;
                }
            }
            // 삽입되지 않았으면 다음 루프를 진행하게 된다 (break로 빠져나가지 못함)
        }
    }
}

let nums = new BST();
// nums.insert(23);
// nums.insert(45);
// nums.insert(16);
// nums.insert(37);
// nums.insert(3);
// nums.insert(99);
// nums.insert(22);
nums.insert(10);
nums.insert(22);
nums.insert(30);
nums.insert(77);
nums.insert(92);
nums.insert(18);
nums.insert(56);
console.log("Inorder traversal : ");
inOrder(nums.root);
