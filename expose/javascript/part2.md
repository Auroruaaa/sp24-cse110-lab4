# Expose - Javascript: Part2

### Vairable Declaration

1. Line 12 will print the number `3`.
   
   This is because the variable `i` is assigned as a `var`, so it has no block scope,
   and lives after the `for` loop (where it is assigned). Then, the length of `prices` is 3,
   so when `i` reaches 3, the `for` loop ends. Thus we get the value of `i` is 3.

--------

2. Line 13 will print the number `150`.

   This is because the variable `discountedPrice` is assigned as a `var`, similar to `i`, so it has no block scope.
   It also tolerates redeclarations as a `var`, so in the `for` loop,
   `discountedPrice` will be assigned to a new number based on the function in the example.
   In the last time of the loop, it will read the last element of all prices, and assign `discountedPrice` as 150.
   Therefore, we will get the value of `discountedPrice` as 150 at line 13.
   
--------

3. Line 14 will print the number `150`.

   Similar to the other `var` cariables above, `finalPrice` also has the property of redeclaration tolerance no block scope.
   So we can call and change the value of `finalPrice` within the function.
   The last time that we assign a value to `finalPrice` is in the `for` loop
   where the input price value is 300 and the corresponding `discountedPrice` is 150.
   Thus, we will get the value of `finalPrice` as 150. Therefore, the output for line 14 woule be `150`.

--------

4. In this case, the function will return a array with three elements: `[ 50, 100, 150 ]`.

   Since the variable returned by this function is `discounted`, so we basically want to figure out what this variable is.
   `discounted` is a array declared in the function as a `var`, so it can be called and reassigned within the whole
   section of this function.
   Every time in the `for` loop, we push a new elememt with the value of `finalPrice` to `discounted`.
   As the `for` loop runs 3 times in this case, there will be three elements in the array,
   and we can get the value of the element based on the input price.
   Therefore, this function will return <ins>a array of discounted price</ins> of the input.

--------

5. There will be an error.

   Since we assign `i` with `let`, it will have a block scope,
   which means that `i` can only be identified inside the block of the `for` loop.
   Thus, calling `i` outside the block at line 12 will cause an error.

--------

6. There will be an error.

   Similar to question 5, the variable `discountedPrice` is declared in the `for` loop with `let`,
   so we cannot get access to it outside the code block of the `for` loop.
   Thus, there will be an error that the variable is not identified at line 13.

--------

7. The output would be `150`.

   Since we declare `finalPrice` inside the code block of the whole function,
   we can reassign its value in the `for` loop and call this variable inside the function.
   Inside the `for` loop, we assign the `discountedPrice` and use it inside the `for` loop to define the value of `finalPrice`.
   Thus, we can keep it and return the last assigned value of `finalPrice` after the `for` loop.
   Therefore, we can call `finalPrice` and print its value at line 14.

--------

8. This function still returns a array with three elements: `[ 50, 100, 150 ]`.

   Even though we change `var` into `let` when declaring the variables,
   all the calculations and reassignments are completed in the `for` loop, where all the variables can be reached.
   Therefore, the function can successfully compute the discounted price and push it into the array,
   just like what we did in the first example code, and return the same result.

--------

9. There will be an error.

   The reason why there is an error is the same as question 5 that
   `i` is declared with `let` and thus is invisible outside the `for` loop.
   Therefore, there will be an error at line 11 that the variable is not defined.

----------

10. Line 12 will print the number `3`.

    This is because `length` is declared as a `const` and is assigned to the number of input prices.
    So it is assigned to be 3 at the beginning of the function, and can be accessed in the function.
    Therefore, we will get the value of `length` as 3.

----------

11. The output should be a array with three elements: `[ 50, 100, 150 ]`.

    The function is returning `discounted`, so we want to figure out what this variable is about.
    `discounted` is declared in the function as a `const` array, so it is accessable in the function.
    And we push the new element in the `for` loop for threee time.
    Therefore, the function will reture an array of the result of the discounted price from the input.

----------

### Data Type

12. * A: `student.name`
    * B: `student["Grad Year"]`
    * C: `student.greeting();`
    * D: `student["Favorite Teacher"].name`
    * E: `student.courseLoad[0]`

--------

### Basic Operators & Type Conversion 

13. **Arithmetic**
    * A: Output: `'32'`.
      This is because the integer `2` maps to its exact string representation,
      and the `+` plays as a string concatenator, combining '3' and '2' together.
    * B: Output: `1`. Since the `-` operator is strictly for arithmetic operations,
    `'3'` is converted to the integer `3`, and the output is the result of the arithmetic subtraction.
    * C: Output: `3`. Because `null` will be coerced to 0 in arithmetic addition.
    * D: Output: `'3null'`. Here the `+` operation will do string concatenation, conbining strings together.
    * E: Output: `4`. Since `true` maps to 1 in arithemtic addition.
    * F: Output: `0`. Since both `false` and `null` map to 0.
    * G: Output: `'3undefined'`. The `+` operation will do string concatenation and combine strings.
    * H: Output: `NaN`. This means that the result is not a number
      since the `-` operator is strictly for arithmetic operations,
      but `undefined` does not convert neatly to a number.

--------

14. **Comparison**
    * A: Output: `true`. Because string `'2'` becomes a number `2` in this comparison.
    * B: Output: `false`. Since there is a string on both sides, it compares from the first character of the string.
      And the first character of `'2'` is 2 and the first character of `'12'` is 1, so `'2' > '12'`.
    * C: Output: `true`. Since string `'2'` becomes a number `2` and `2=2`.
    * D: Output: `false`. Because the variable type on the two side of the comparison is different,
      one is integer and the other is string
    * E: Output: `false`. Since `true` maps to 1 and therefore does not equal to 2.
    * F: Output: `true`. The function Boolean(2) returns a `true` because the input number is a non-zero number.
      So both type and value are the same on the two sides of the comparison.
      
--------

15. The operator `==` is a regular equality check that only check of two vairables,
    but it cannot check whether the two variables have the same type.
    The operator `===` is a strict equality operator that checks the equality without type conversion.
    So if the compared variables are of different types, then it immediately returns false without an attempt to convert them.

--------

### Loops

16. Link to the JS file [part2-question16.js](https://github.com/Auroruaaa/sp24-cse110-lab4/blob/main/expose/javascript/part2-question16.js).

--------

### Functions

17. The resulf would be `[ 2, 4, 6 ]`.

    We first turn to the function `modifyArray` with two inputs
    where `array = [1,2,3]` and `callback` is the function `doSomething`.
    So in the `for` loop under `modifyArray`, it will push the result of `doSomething` to `newArr`.

    When it comes to compiling the function `doSomething`, it takes the `i`th element of `array` as the input,
    and return the doubled input.

    Back to the function `modifyArray`, each time in the `for` loop, the `i`th element of `array` will be doubled
    and pushed to the array `newArr`.
    Therefore, the result of `modifyArray` will be an array that doubles each element of the input array.

--------

### setInterval(), setTimeout(), clearTimeout()

18. Link to the JS file [part2-question18.js](https://github.com/Auroruaaa/sp24-cse110-lab4/blob/main/expose/javascript/part2-question18.js)

--------

19. The output should be:
    ```
    1
    4
    3
    2
    ```
   When calling the function `printNums`, line 2 will immediately compile and print `1`. 
   
   Line 3 will wait for 1 second to print because it calles `setTimeout` and have to wait for 1000ms.

   Then it comes to Line 4, where the delay of printing is 0ms. 
   However, it does not compile immediately because it is put into a queue and scheduled to run at the next opportunity,
   so Line 5 will print before that, thus we will get `4` in the second.

   After that, Line 4 will print `3`, and Line 3 will print `2` one seconde later.









