//arrays
////const numbers = [6, 7, 9, 5, 7, 3, 2]
////console.log(numbers[0]) //output 6
//algorithm complixité O(1)
//inserting of index //algorithm complixité: O(n)
//deleting from index //algorithm complixité: O(n)
//UPDATING OF INDEX //algorithm complixité O(1)
//traversing the array //algorithm complixité O(n)

//NODE CONTAINING THE DATA AND REFERENCES TO THE NEXT NODE
class Node {
    constructor(data, next){
        this.data = data
        this.next = next
    }
};
//class to hold our data structure
class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

//complixity: O(1)
prepend(value){
    const newNode = new Node(value, this.head);
    this.head = newNode,
    this.tail = this.tail ? this.tail : newNode;
    
    return this;
}
//complixity: O(1)
append(value){
    const newNode = new Node(value, this.head);

    //if the linked list is empty
    if(!this.head )
    this.head = newNode;
    this.tail = newNode;
    
    return;
}
    //make the last item refer to the newly add node
    this.tail.next = newNode;
    //make the newly node the last/tail node
    this.tail = newNode;
}
//complixity: O(n)
traverse(){
    let currentNode =this.head.LinkedList

    while(currentNode) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}
//complixity: O(n)
Find(value){
    let currentNode = this.head;

    while(currentNode) {
        if(currentNode.data === value){
            return currentNode;
        }
        currentNode = currentNode.next;
    }
    return null;
}
//complixity: O(1)
deleteNode(){
    if (!this.head){
        return;
    }

    if(this.head.next){
        this.head = this.head.next;
    } else {
        this.head = null;
        this.tail = null;
    }
}
toArray(){
    const items = [];
    let currentNode= this.head;

    while(currentNode){
        items.push(currentNode.data);
        currentNode = currentNode.next;
    }
    return items;
}

const list = new LinkedList();

list.append(4);
list.append(6);
list.append(2);

console.log(list.toArray());

list.prepend(value);
console.log(list.toArray());

list.find(value);
list.delettead(list.toArray());