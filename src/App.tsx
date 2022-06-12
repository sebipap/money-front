import TransferModal from "./components/TransferModal";
import { SendRequest, Transaction } from "./types";
import { graphQL } from "./utils";

function App() {
  const handleSend = ({ from, to, amount }: SendRequest) =>
    graphQL(
      `mutation{send(from: "${from}", to: "${to}", amountSent: ${amount}){date, exchangeRate}}`
    );

  return <TransferModal />;
}

export default App;
