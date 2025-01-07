// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr) {
            let temp = curr.next; // Save the next node
            curr.next = prev; // Reverse the current node's next pointer
            prev = curr; // Move prev to the current node
            curr = temp; // Move to the next node
        }

        return prev; // prev now points to the new head (reversed list)
    }
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

// Helper function to print a linked list
function printLinkedList(head) {
    let current = head;
    let output = "";
    while (current) {
        output += current.val + " -> ";
        current = current.next;
    }
    console.log(output + "null"); // Indicating the end of the list
}

// Example usage
const inputArray = [1, 2, 3, 4, 5]; // Input array
const head = createLinkedList(inputArray); // Create the linked list from the array

console.log("Original List:");
printLinkedList(head); // Print the original linked list

const solution = new Solution(); // Create an instance of Solution
const reversedHead = solution.reverseList(head); // Reverse the list

console.log("Reversed List:");
printLinkedList(reversedHead); // Print the reversed linked list
