let MAX = 100000;

let data = new Array(MAX);
let pre = new Array(MAX);
let nxt = new Array(MAX);
// 0번지는 dummy node
// 길이가 필요하다면 변수 len을 두고 원소 추가시 +1, 제거시 -1
let unused = 1;

const insert = function (addr, num) {
    data[unused] = num;
    pre[unused] = addr;
    nxt[unused] = nxt[addr];

    if (nxt[addr] != -1) {
        pre[nxt[addr]] = unused;
    }
    nxt[addr] = unused;
    unused++;
};

const erase = function (addr) {
    nxt[pre[addr]] = nxt[addr];
    if (nxt[addr] !== -1) {
        pre[nxt[addr]] = pre[addr];
    }
};

const traverse = function () {
    let cur = nxt[0];
    let print = "";
    while (cur !== -1) {
        print += data[cur] + " / ";
        // console.log(data[cur]);
        cur = nxt[cur];
    }
    console.log(print);
};

const insert_test = function () {
    console.log("insert_test");
    insert(0, 10); // 10(address=1)
    traverse();
    insert(0, 30); // 30(address=2) 10
    traverse();
    insert(2, 40); // 30 40(address=3) 10
    traverse();
    insert(1, 20); // 30 40 10 20(address=4)
    traverse();
    insert(4, 70); // 30 40 10 20 70(address=5)
    traverse();
};

const erase_test = function () {
    console.log("erase_test");
    erase(1); // 30 40 20 70
    traverse();
    erase(2); // 40 20 70
    traverse();
    erase(4); // 40 70
    traverse();
    erase(5); // 40
    traverse();
};

pre.fill(-1);
nxt.fill(-1);
insert_test();
erase_test();

// reference
// https://blog.encrypted.gg/932?category=773649
// https://github.com/encrypted-def/basic-algo-lecture/blob/master/0x04/linked_list_test_ans.cpp
