# A simple Linked List in Vanilla JS. Class constructors: LinkedList() Node()

## Linked List methods:

1. `append(value)` inserts value at the end of the list
2. `prepend(value)` inserts new node that points to current head. makes new node the new head
3. `getHead()` returns first node value
4. `getTail()` returns last node value
5. `size()` returns list length
6. `at(index)` returns value at specified index
7. `pop()` removes the last node of the list
8. `contains(value)` returns boolean
9. `find(value)` returns the index of the value or not found
10. `toString()` returns readable list
11. `insertAt(index, value)` places a new node at the given index, if index > length, simply appends, if index is zero, it prepends
12. `removeAt(value)` removes any node if it exists at a valid index