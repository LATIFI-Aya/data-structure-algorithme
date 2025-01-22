// Stack class (Below is an example of a stack class using an array in JavaScript)
class Stack {

    // Array is used to implement stack
    constructor()
    {
        this.items = [];
    }

    // Functions to be implemented
    // push(item)
    // pop()
    // peek()
    // isEmpty()
    // printStack()
}

//Methods in Stack
// push function
push(element)
{
    // push element into the items
    this.items.push(element);
}
// pop function (Removes an element from the stack, if the function is call on an empty stack it indicates “Underflow”. This method returns the topmost element of stack and removes it. Return underflow when called on an empty stack.)
pop()
{
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0)
        return 'Underflow'
    return this.items.pop();
}
// peek function(returns the top most elements in the stack, but doesn’t delete it. It Return the topmost element without removing it from the stack.)
peek()
{
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
}

//Helper methods
// isEmpty function( return true if the stack is empty. Returns true if the stack is empty.)
isEmpty()
{
    // return true if stack is empty
    return this.items.length == 0;
}
// printStack function(This method returns a string in which all the element of an stack is concatenated)
printStack()
{
    let str = "";
    for (let i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
}
