import "./App.css";
import Header from "./components/Header.jsx";
import Due from "./components/Due.jsx";
import Received from "./components/Received.jsx";
import Button from "./components/Button.jsx";

function App() {
  const [due, setDue] = useState("");
  const [received, setReceived] = useState("");
  const [output, setOutput] = useState(null);

  function calculateChange(due, received) {
    if (isNaN(due) || isNaN(received)) return null;
    const diff = received - due;
    if (diff < 0) return null;
    return diff;
  }

  function breakdownChange(amount) {
    let cents = Math.round(amount * 100);

    const twenties = Math.floor(cents / 2000);
    cents = cents % 2000;

    const tens = Math.floor(cents / 1000);
    cents = cents % 1000;

    const fives = Math.floor(cents / 500);
    cents = cents % 500;

    const ones = Math.floor(cents / 100);
    cents = cents % 100;

    const quarters = Math.floor(cents / 25);
    cents = cents % 25;

    const dimes = Math.floor(cents / 10);
    cents = cents % 10;

    const nickels = Math.floor(cents / 5);
    const pennies = cents % 5;

    return { twenties, tens, fives, ones, quarters, dimes, nickels, pennies };
  }

  return (
    <>
      <Header />
      <Due />
      <Received />
      <Button />
    </>
  );
}

export default App;
