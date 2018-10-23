# Replace Conditional with Gurad Clauses
# Motivation
It is difficult to figure out what each conditional does and how, since the "normal" flow of code execution is not immediately obvious. These conditionals indicate helter-skelter evolution, with each condition added as a stopgap measure without any thought paid to optimizing the overall structure.

To simplify the situation, isolate the special cases into separate conditions that immediately end execution and return a null value if the guard clauses are true. In effect, your mission here is to make the structure flat.

# Mechanics
Try to rid the code of side effects – Separate Query from Modifier may be helpful for the purpose. This solution will be necessary for the reshuffling described below.

1. Isolate all guard clauses that lead to calling an exception or immediate return of a value from the method. Place these conditions at the beginning of the method.

2. After rearrangement is complete and all tests are successfully completed, see whether you can use Consolidate Conditional Expression for guard clauses that lead to the same exceptions or returned values.