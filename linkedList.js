/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    var head = null;
    var tail = null;
  
    return {
      getHead : getHead,
      getTail: getTail,
      add: add
    };
  
    function getHead() {
      return head;
    }
  
    function getTail() {
      return tail;
    }
    
    function add(valz) {
        let nodeNew = {
          value : valz,
          next : null
        };
    
        if (!head) {      
          head = nodeNew;
          tail = nodeNew;
    
        } else {
          tail.next = nodeNew;
          tail = nodeNew;
        }
        return tail;
      }
  }