import "./styles.css";

export default function App() {
  function changeClickHandler1(event) {
    var buy = event.target.value;
    console.log(buy);
  }
  function changeClickHandler1(event) {
    var buy = event.target.value;
    console.log(buy);
  }
  function changeClickHandler2(event) {
    var buy = event.target.value;
    console.log(buy);
  }

  function changeClickHandler3(event) {
    var sp = event.target.value;
    console.log(buy);
  }
  return (
    <div className="App">
      <h1> Stock Profile & Loss Calculator </h1>
      <h2> initial price </h2>
      <p>
        <input
          onChange={changeClickHandler1}
          placeHolder="enter initial price"
        />
      </p>
      <h2> Quantity of Stocks </h2>
      <input
        onChange={changeClickHandler2}
        placeHolder="enter quantity of stock "
      />
      <h1>Current Price</h1>
      <input placeHolder="enter current price" />
      <br />
      <button onChange={changeClickHandler3} />
    </div>
  );
}
