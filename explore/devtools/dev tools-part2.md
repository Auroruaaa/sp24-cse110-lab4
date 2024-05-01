1. What was the bug?

   When we assign num1 and num2, we assign them as strings in `document.getElementById("numx").value`.
   So when we try to do the `+` operation, it actually do string combination and combine two strings together.
   
2. How would you fix it? 

   We can convert the string into an integer before add them together.
