function App() {
  // An object is an unordered collection of key-value pairs. The key must either be a string or symbol data type whereas value can be of any data type.
  // To retrieve a value, corresponding key can be used. It can be achieved using dot notation or bracket notation.
  // It is not an iterable. It cant be used with a for of loop

  // Big O Time complexity:
  // Insert - O(1)
  // Remove - O(1)
  // Access - O(1)
  // Search - O(n)
  //Object.keys() - O(n)
  //Object.values() - O(n)
  //Object.entries() - O(n)

  const objectDS = () => {
    const obj = {
      name: "Vithlesh",
      age: 26,
      key: true,
      myName: function () {
        console.log(this.name);
      },
    };

    obj.hobby = "Travelling";
    delete obj.hobby;

    console.log(obj.name);
    console.log(obj["age"]);
    console.log(obj["key"]);
    console.log(obj);
    obj.myName();

    //Object methods: Object.keys(), values(), entries()
  };

  return (
    <div className="App">
      Object..
      <>{objectDS()}</>
    </div>
  );
}

export default App;
