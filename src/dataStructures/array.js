function App() {
  // An array is a DS that can hold a collection of values.

  // Arrays can contain mix of different data types(string, boolean, number, object)

  // Arrays are resizable, dont have to declare its size before creating it.

  // It is Zero indexed and insertion order is maintained

  // Arrays are iterables, they can be used with for of loop.

  // Big O Time complexity:
  // Insert/remove from end - O(1)
  // Insert/remove from beginning - O(n)
  // Access - O(1)
  // Search - O(n)
  // Push/pop - O(1)
  // Shift/ unshift/ concat/ slice/ splice - O(n)
  // forEach/ map/ filter/ reduce - O(n)

  const arrayDS = () => {
    const arr = [1, 2, 3, "Vithlesh"];

    arr.push("4");
    arr.unshift(0);
    arr.pop();
    arr.shift();

    for (const item of arr) {
      console.log(item);
    }

    //array methods: map, filter, reduce, concat, slice and splice
  };

  return (
    <div className="App">
      Array..
      <>{arrayDS()}</>
    </div>
  );
}

export default App;
