# Expose - Javascript: Part2

### Vairable Declaration

1. Line 12 will print the number ```3```.
   
   This is because the variable ```i``` is assigned as a ```var```, so it has no block scope,
   and lives after the ```for``` loop (where it is assigned). Then, the length of ```prices``` is 3,
   so when ```i``` reaches 3, the ```for``` loop ends. Thus we get the value of ```i``` is 3.

--------

2. Line 13 will print the number ```150```.

   This is because the variable ```discountedPrice``` is assigned as a ```var```, similar to ```i```, so it has no block scope.
   It also tolerates redeclarations as a ```var```, so in the ```for``` loop,
   ```discountedPrice``` will be assigned to a new number based on the function in the example.
   In the last time of the loop, it will read the last element of all prices, and assign ```discountedPrice``` as 150.
   Therefore, we will get the value of ```discountedPrice``` as 150 at line 13.
   
--------

3. Line 14 will print the number ```150```.

   Similar to the other ```var``` cariables above, ```finalPrice``` also has the property of redeclaration tolerance no block scope.
   So we can call and change the value of ```finalPrice``` within the function.
   The last time that we assign a value to ```finalPrice``` is in the ```for``` loop
   where the input price value is 300 and the corresponding ```discountedPrice``` is 150.
   Thus, we will get the value of ```finalPrice``` as 150. Therefore, the output for line 14 woule be ```150```.

--------

4. In this case, the function will return a list with three elements: ```[ 50, 100, 150 ]```.

   Since the variable returned by this function is ```discounted```, so we basically want to figure out what this variable is.
   ```discounted``` is a list declared in the function as a ```var```, so it can be called and reassigned within the whole
   section of this function.
   Every time in the ```for``` loop, we push a new elememt with the value of ```finalPrice``` to ```discounted```.
   As the ```for``` loop runs 3 times in this case, there will be three elements in the list,
   and we can get the value of the element based on the input price.
   Therefore, this function will return <ins>a list of discounted price</ins> of the input.

--------

5. There will be an error.

   Since we assign ```i``` with ```let```, it will have a block scope,
   which means that ```i``` can only be identified inside the block of the ```for``` loop.
   Thus, calling ```i``` outside the block at line 12 will cause an error.

--------

6. There will be an error.

   Similar to question 5, the variable ```discountedPrice``` is declared in the ```for``` loop with ```let```,
   so we cannot get access to it outside the code block of the ```for``` loop.
   Thus, there will be an error that the variable is not identified at line 13.

--------

7. The output would be ```150```.

   Since we declare ```finalPrice``` inside the code block of the whole function,
   we can reassign its value in the ```for``` loop and call this variable inside the function.
   Inside the ```for``` loop, we assign the ```discountedPrice``` and use it inside the ```for``` loop to define the value of ```finalPrice```.
   Thus, we can keep it and return the last assigned value of ```finalPrice``` after the ```for``` loop.
   Therefore, we can call ```finalPrice``` and print its value at line 14.

--------

8. This function still returns a list with three elements: ```[ 50, 100, 150 ]```.

   Even though we change ```var``` into ```let``` when declaring the variables,
   all the calculations and reassignments are completed in the ```for``` loop, where all the variables can be reached.
   Therefore, the function can successfully compute the discounted price and push it into the list,
   just like what we did in the first example code, and return the same result.

--------

9. 


### Data Type


















