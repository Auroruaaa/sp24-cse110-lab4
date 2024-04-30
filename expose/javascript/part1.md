# Expose - Javascript: Part 1

### ```var``` declaration

1. The content printed in line 9 is ```values added: 20```.
2. The content printed in line 13 is ```final result: 20```.

--------

### ```let``` declaration

3. The content printed in line 9 is ```values added: 20```.
4. There will be an error. This is because ```let``` is different from ```var```.
   Variables assigned by ```let``` has block scope; thus they cannot live after the block.
   In the example, the variable ```result``` is declared in the ```if``` statement by ```let```,
   ```result``` will be only visible within the ```if``` statement. Therefore, there will be an error
   when calling ```result``` in line 13 that this variable is not defined.

--------

### ```const``` declaration

5. There will be an error. Since ```result``` is declared as a ```const``` variable, then ```result``` is an unchangable variable
   and will constantly equals to 0. In line 7, we try to reassign the value of ```result```, and reassigning a ```const``` variable
   will lead to an error. So the example will stop at line 7 and show an error.
6. There will be an error. Similar to question 6, we cannot reassigne the constant, and it will lead to an error.

