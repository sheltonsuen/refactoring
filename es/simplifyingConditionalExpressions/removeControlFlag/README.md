# Remove Control Flag
# Motivation
Control flags date back to the days of yore, when "proper" programmers always had one entry point for their functions (the function declaration line) and one exit point (at the very end of the function).

In modern programming languages this style tic is obsolete, since we have special operators for modifying the control flow in loops and other complex constructions:

break: stops loop

continue: stops execution of the current loop branch and goes to check the loop conditions in the next iteration

return: stops execution of the entire function and returns its result if given in the operator

# Mechanics
1. Find the value assignment to the control flag that causes the exit from the loop or current iteration.

2. Replace it with break, if this is an exit from a loop; continue, if this is an exit from an iteration, or return, if you need to return this value from the function.

3. Remove the remaining code and checks associated with the control flag.