import LinkedList from "./linked-list";

const linkedList = new LinkedList();

linkedList.prepend("a");
linkedList.append("b");
linkedList.append("c");
console.log(linkedList.toString());