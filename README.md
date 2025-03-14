# LeetCode-Journal
The solutions and notes to my current leetcode grind!
## **LeetCode Solutions**

### **Two Sum**
- Create a hashmap to store the number that the loop is currently on.
- For every number, check if `target - number` is present in the hashmap.
- If so:
  - Return the index from the hashmap and the index from the current loop.
- If not:
  - Add the number the loop is currently on as the key and the index as the value.

---

### **Valid Parentheses**
- Create an array to keep track of the latest parenthesis (acts as a stack).
- Create a hashmap to check the corresponding parenthesis (to make it DRY).
- Only push to the array if it's an **opening** bracket.
- The last item of the array should **never** be a closing bracket.
- If it's a closing parenthesis:
  - Check if the array is empty.
    - If so, return `false`.
  - If not:
    - Check if the top of the array is the corresponding opening parenthesis using the hashmap.
      - If so, **splice** the element.
      - If not, return `false`.
- If it's opening, just push to the array.
- Return whether or not the array is **empty**.

---

### **Merge Two Sorted Lists**
- The biggest hint is that you’re using a **linked list**, not an array.
- Create a **dummy node** to attach the next nodes to.
- Create a `tail` variable to keep track of where you are in the linked list.
- Use a `while` loop to make sure that both lists still have values (some lists are different lengths).
- Check which head of the linked list is greater.
  - Whichever one is greater, move it to the `next` of the tail.
  - Make the new head of that linked list the `next`.
  - Move the tail to `next` to avoid rewriting.
- Check which list still has content.
  - Add the rest of the list.
- Return `dummy.next` (remember the tail is just for tracking).

---

### **Best Time to Buy and Sell Stock**
- Remember: You only need to return the **max profit**, **not the index of the days**.
- Use **two pointers**.
- Iterate through the array, increasing the sell window each time.
- If the sell price is lower than the buy price, move the buy pointer to the current sell.
- Compare the **max profit** to the current profit of the window.
- Return the **max profit**.

---

### **Valid Palindrome**
- If the string is less than **two characters long**, it's a palindrome.
- Use **two pointers**, one at the start and one at the end.
- While the end pointer is greater than or equal to the start pointer:
  - Keep comparing characters.
  - If at any time they don’t match, return `false`.
- Return `true` at the end of the while loop.

---

### **Invert Binary Tree**
- The key is recursion using **Depth-First Search (DFS)**.
- Have a **base case** to check if the root is `null`.
- **Swap** the left and right of the root.
- Call the function recursively, passing in the left and right of the root.
- Return the root.
---

### **Valid Anagram**
- Initialize an empty dictionary to track letters and their counts.
- Iterate through the first word:
  - If the letter is already in the dictionary:
    - Increment its count by 1.
  - Else:
    - Initialize it with 1.
- Iterate through the second word:
  - If the letter is not in the dictionary:
    - Return `False`.
  - Else:
    - Decrement its count by 1.
- Iterate through the dictionary:
  - If any value is not zero:
    - Return `False`.
- Return `True` (if all values are zero, the words are anagrams).
---

### **Binary Search**
- Initialize three variables: `start`, `end`.
- While `start` is less than or equal to `end`:
  - Initialize `mid` as the floor of `(start + end) / 2`.
  - If the middle index is the target:
    - Return the index.
  - If the target is greater than the middle index:
    - Set `start` to `mid + 1`.
  - Else:
    - Set `end` to `mid - 1`.
- Return `-1` if the target is not found.
---
### **Flood Fill**

- Initialize a variable to track the old color of the chosen pixel.
- If the old color is the same as the new color passed, return the same image.
- Initialize a new function called `dfs`.
- Initialize two variables:
  - One for the length of the large array.
  - One for the size of a nested array.
- Check if the numbers are within a given range and if the pixel matches the old color:
  - If not, return.
  - If it is:
    - Update the pixel to the new color.
    - Run `dfs` recursively 4 times (up, down, left, right).
- Return the updated image.

### **Lowest Common Ancestor of Binary Tree**

- While the `root` is not `null`:
  - Check which side `p` and `q` are in.
  - If both are **less than** the `root`, search only in the **left subtree**.
  - If both are **greater than** the `root`, search only in the **right subtree**.
  - Else:
    - `p` and `q` are on separate sides of the tree.
    - Return `root` as the **Lowest Common Ancestor**.
- Return `null` if not found.

---

### **Balanced Binary Tree**
- Do a bottom up approach
- Instead of starting from the root node, go all the way down to the bottom
- Create a separate function called dfs that takes an input of root
  - This function returns two things in a list,
    - whether a node is balanced and the height
- If the root is null 
  - Return true and 0
- Next initialize variables left and right with each being the recursive result of the dfs function
- If the left and right are balanced and the difference in height is less than or equal to 1
  - Return true and the max value between the left and right height
- If it's not return false and the max value between the left and right height
- Return a boolean!!!

---

### **Linked List Cycle**
- Use a tortoise hare approach
- Check the length of the linked list by checking if the head or the next of the head is null
  - If so return false
- Initialize two pointers
  - One fast
  - One slow
- While the fast pointer has not reached null
  - Check if the slow and fast pointer are equal,
    - This would only be possible if there was a cycle
  - Check if the next of the fast pointer is null
    - Avoid a null pointer exception
    - Return false as it means theres an end to the list
  - Move the fast pointer twice and the slow pointer once
- Return false
    
---

### **Implement Queue Using Stacks**
- Just imagine you’re using two arrays
- For push use unshift
- For pop put all the items in the first stack into the second stack using unshift
  - Save the top item of the second stack
  - Remove the top item of the second stack
  - Put all the items in the second stack back to the first stack using unshift
- For peek 
  - Save the top item of the second stack
- For empty
  - Check if the top item exists in both stacks
    - If not return true
- Return false

---
### **First Bad Version**
- Its Binary search with tracking!
- Setup a variable to track the first bad version
- Initialize three variables
  - Start, end 
- While the start is less than or equal to end 
  - Initialize mid as the floor of start + end / 2
  - If the middle is the bad version
    - Change the first bad version to middle
    - Make the high: middle - 1
  - Else
    - Make the low: middle + 1
- Return first bad version
---
### **Ransom Note**
- Initialize object to track letters used
- Iterate words in magazine with for loop
  - If it exists add 1
  - If not initialize it as 1
- Iterate words in ransom with for loop
  - If it exists 
    - Subtract by 1
  - If it is 0
    - Return false
  - Else
    - Return false
- Return true if everything checks out
---
### **Climbing Stairs**
- Dynamic Programming problem
- First instinct is to use fibonacci algorithm
  - Recurse (n-1) + (n-2)
  - This is 2^n 
    - Super slow
- Use like sliding window approach
  - Initialize two variables with value of 1
  - Iterate n - 1 times
    - Each time make one variable both variables added
    - Make second variable the first variable
  - Return the first variable
---
### **Longest Palindrome**
- Initialize a dictionary to keep track of the number of appearances of the letters
- Initialize a variable to keep track of the total 
- Iterate through the string 
  - If the letter exists in the dictionary
    - Add the number of that by 1
    - If the number of that string is even it means its a pair
      - Increase the total by 2
  - If it doesn't
    - Initialize it by 1
- Iterate through the dictionary
  - If an odd exists
    - Add one
    - Break the loop
- Return the total variable
---
### **Reverse Linked List**
  - Initialize a dummy variable for a null list node
  - Initialize a tail which is the dummy variable
  - Iterate through the linked list using a while loop
    - Initialize two temp variables
      - The first temp variable is for the current head
      - The second temp variable is for the head’s next 
        - This is important to preserve the next when you modify the temp
    - Make the temp.next the current tail.next
    - Make the tail.next the current head by assigning it to temp
    - Move along the linked list by assigning head to the second variable tracking the head’s next
  - Return dummy.next
---
### **Majority Element**
- Initialize a dictionary to store instance of numbers appearing
- If the array is of length one return the first element of the array
- Iterate through nums array
  - If nums is in dictionary
    - Add one
    - Check if nums is more than length/2
      - Return num
- Initialize num in the dictionary
---
### **Add Binary**
