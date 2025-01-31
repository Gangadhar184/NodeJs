
### Understanding require ('./path') in Node.js (cjs)

When we run the require function in Node.js, behind the scenes, all the code of the module is wrapped inside a function using an IIFE (Immediately Invoked Function Expression).

# IIFE - Immediately Invoked Function Expression

An IIFE is a function that is executed immediately after its definition. It helps keep variables and functions private, ensuring independent execution of code.

```js
(function () {
    // Module code
})();


How require('./path') Works

- Resolving the Module

    - Searches for the module in:

    - Local paths (./local_path)

    - JSON files (.json)

- node_modules directory

2. Loading the Module

Loads the file content based on its type:

.js files are treated as JavaScript modules.

.json files are parsed as JSON objects.

.node files are treated as compiled add-ons.

3. Wrapping Inside IIFE

The module code is wrapped inside an IIFE to create a private scope.

4. Evaluation

The module code is executed.

module.exports is used to export values.

5. Caching

Once a module is loaded, it is cached.

Subsequent require calls return the cached module instead of reloading it.
