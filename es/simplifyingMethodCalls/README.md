# Add Parameter
## Benefits
The choice here is between adding a new parameter and adding a new private field that contains the data needed by the method. A field is preferable when you need some occasional or frequently changing data for which there is no point in holding it in an object all of the time. In this case, a new parameter will be a better fit than a private field and the refactoring will pay off. Otherwise, add a private field and fill it with the necessary data before calling the method.

## Drawbacks
Adding a new parameter is always easier than removing it, which is why parameter lists frequently balloon to grotesque sizes. This smell is known as the Long Parameter List.

If you need to add a new parameter, sometimes this means that your class does not contain the necessary data or the existing parameters do not contain the necessary related data. In both cases, the best solution is to consider moving data to the main class or to other classes whose objects are already accessible from inside the method.

## How to Refactor
Adding the parameter to the end of the params list for backwards compatibility.