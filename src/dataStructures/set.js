function App() {
  // A Set is a DS that contains a collection of values which are unique
  // Set can contain mix of diff data types. It can store strings, booleans, numbers, or even objects all in same set.
  // Sets are dynamically sized. Size dont have to be declared before creating it.
  // Sets dont maintain an insertion order
  // Sets are iterables. It can be used with a for of loop

  const setDS = () => {
    const set = new Set([1, 2, 3]);

    set.add("Vithlesh");
    console.log(set.has(2));

    set.delete(3);
    console.log(set.size);

    for (const item of set) {
      console.log(item);
    }
  };

  return (
    <div className="App">
      Set..
      <>{setDS()}</>
    </div>
  );
}

export default App;
