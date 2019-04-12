// part 1 

    class Node {
        constructor(value, left_child, right_child) {  
        value;
        left_child;      
        right_child;        
        }
    }

    let node1 = new Node(4, null, null);

    node1.value = 4;
    node1.left_child = new Node(2, null, null);
    node1.left_child.value = (2);
    node1.left_child.left_child = new Node(0, null, null);
    node1.left_child.left_child.value = 0;
    node1.left_child.right_child = new Node(3, null, null);
    node1.left_child.right_child.value = 3;
    node1.right_child = new Node(8, null, null);
    node1.right_child.value = 8;
    node1.right_child.left_child = new Node(6, null, null);
    node1.right_child.left_child.value= 6;
    node1.right_child.right_child = new Node(9, null,null);
    node1.right_child.right_child.value= 9;


//end of part 1 

// part 2

function findSmallestNode(root) {
    if (!root) {
        return false
    }
    if (!root.left_child) {
        return root
    }

    let current = root;

    while (current.left_child) {
        current = current.left_child
    }

    return current.value

}

findSmallestNode(node1);

// runtime: 0(log(n)). The size of the tree matters but we don't need to visit each node, only the left most child. We are cutting out half of the remaining options with each move, similar to a binary search but specifically looking for the left-most node. 

// tests:

// valid tree : pass 

// invalid tree - out of order: 
// findSmallestNode(node1)
//     returned 8  (Fail: 0 is in the tree)

// invalid tree - unbalanced: 
//     findSmallestNode(node1)
//         returned 2 (fail: from example moved 0 from left child of 2 to right child of 3)

// invalid data type: 

//     findSmallestNode([])
//         returned []
//     findSmallestNode('')
//         returned false  
//     findSmallestNode({})   
//         returned {}
//     findSmallestNode(node2)
//         error undefiend 


// part 3 

    findSmallestNode(node1);

    function binarySearch(root, target) {
        if (!root) {
            return false
        };
        let current = root;
        let value = root.value

        while (true) {
            if (value === target) {
                return true
            };

            if (value > target) {
                if (!current.left_child) {
                    return false
                }
                current = current.left_child;
                value = current.value

            }

            if (value < target) {
                if (!current.right_child) {
                    return false
                }
                current = current.right_child;
                value = current.value
            }

        }
        return false;

    }

// runtime: 0(log(n)). The size of the tree matters but we don't need to visit each node and cut out half of the remaining nodes with each iteration of the while loop.

// tests: 

// valid tree : consistently passes (returns true)
//     target included in tree
//     binarySearch(node1,9) 
//         returns true 
//     target not included in tree 
//     binarySearch(node1,-77)
//         returns false 

// invalid tree - out of order 
//     target included in tree : inconsistant random chance results
//     binarySearch(node1,6)
//         returns true 
//     binarySearch(node1,8)  
//         returns false
//     binarySearch(node1,9)
//         returns false 

// invalid tree - out of order  
//     target not included in tree : consistently passed (returns false)        
//         binarySearch(node1,-10000)
//         binarySearch(node1,10000)

// wrong data type : consistently crashes 
//         binarySearch(node1,'')
//         binarySearch(node1,[])
//         binarySearch(node1,{})
//         binarySearch([], node1)













