/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    let head = null;
    let tail = null;
  
    const getHead = () => {
      return head;
    }
  
    const getTail = () => {
      return tail;
    }
    
    const add = (valz) => {
        let newNode = { //newly created and appended node
          value: valz,
          next: null
        };
      //if head is null OR the boolean value of 'head' is true or false  
      if (head === null) {     
          head = newNode;
          tail = newNode;
        } 
        else { 
          tail.next = newNode; //adds a new node to the end of a list
          tail = newNode;
        }
        return tail; //Returns the new node that was created.
      }

    const get = (index) => {
      if (index < 0) {
        return false;
      } 
      else { 
        let targetNode = head;
        //search for the node in the list
        for (let i = 0; i < index; i++) {
          if (!targetNode.next) {
            return false; //if no node is found, return false
          }
          targetNode = targetNode.next;
        }
        return targetNode;
      }
    }
  
    const remove = (index) => {
      let prevNode = get(index - 1);
      // console.log("prevNode: ",prevNode);
      let targetNode = get(index);
      // console.log("targetNode: ",targetNode);
  
      if (!targetNode) {
        return false;
      } 
      else if (!prevNode) {
        head = targetNode.next;
      } 
      else if (targetNode.next === null || !targetNode.next) { //OR targetNode.next is false
        tail = prevNode;
        // console.log("tail: ",tail);
        tail.next = null;
      } 
      else {
        prevNode.next = targetNode.next;
      }
    }
  
    const insert = (val, index) => { //takes two arguments, a value and an index
      let prevNode = get(index-1);
      // console.log("prevNode: ",prevNode);
      let targetNode = get(index);
      // console.log("targetNode: ",targetNode);
      let newNode = { value: val, next: null };
      // console.log("newNode: ",newNode);
  
      if (!targetNode) {
        return false;
      } 
      else if (!prevNode) {
        newNode.next = head;
        // console.log("newNode: ",newNode.next);
        head = newNode;
        // console.log("head: ",head);
      } 
      else {
        newNode.next = targetNode;
        // console.log("newNode.next: ",newNode.next);
        prevNode.next = newNode;
        // console.log("prevNode: ",prevNode.next);
      }
    }

    return {
      getHead,
      getTail,
      add,
      get,
      remove,
      insert
    };
  }