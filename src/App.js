import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1> Stock Profile & Loss Calculator </h1>
      <h2> initial price </h2>
      <p>
        <input placeHolder = "enter initial price"/>
      </p>
      <h2> Quantity of Stocks </h2>
      <input placeHolder = "enter quantity of stock "/>
      <h1>Current Price</h1>
      <input placeHolder = "enter current price"/>
      <br />
      <bitton> tell me </bitton>
    </div>
  );
}
