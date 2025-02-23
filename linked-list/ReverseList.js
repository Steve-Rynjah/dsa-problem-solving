class Node{
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}

function createList(arrayList){
    if(arrayList.leng === 0) return null;

    let head = new Node(arrayList[0])
    let current = head;

    for(let i=1; i< arrayList.length; i++){
        current.next = new Node(arrayList[i])
        current = current.next
    }
    return head;
}

function printList(arrayList){
    let current = arrayList;
    let output = ""

    while(current){
        output = output + current.val + "->"
        current = current.next
    }
    return output;
}

function reverseList(arrayList){
    let prev = null;
    let current = arrayList;

    while(current){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp
    }
    return prev;
}

const input = [1,2,3,4,5]
const createNodeList = createList(input)
console.log("List : ", printList(createNodeList))
const reverseNodeList = reverseList(createNodeList)
console.log("Reverse :", printList(reverseNodeList))