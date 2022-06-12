import { AccordionItem, Button, Heading, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Account, Transaction } from "../types";
import { graphQL } from "../utils";
import { AccountInput } from "./AccountInput";
import { AccountItem } from "./AccountItem";

export const TransferForm = () => {
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [amount, setAmount] = useState<number>();

  useEffect(() => {
    graphQL("query {allTransactions { amountSent, amountRecieved } }").then(
      (res) => setTransactions(res.allTransactions)
    );

    graphQL(
      "query{allAccounts { _id, balance ,name, unit, valueInUSD, unitName } }"
    ).then((res) => setAccounts(res.allAccounts));
  }, []);

  const [accounts, setAccounts] = useState<Account[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  return (
    <>
      {accounts.find((a) => a._id === from)?.name}

      <Heading>From:</Heading>

      {from ? (
        <>
          <AccountItem account={accounts.find((a) => a._id === from)} />{" "}
          <Button onClick={() => setFrom("")}>X</Button>
        </>
      ) : (
        <AccountInput
          accounts={accounts}
          onSelect={(account) => {
            setFrom(account._id);
          }}
        />
      )}

      <Heading>To:</Heading>
      {to ? (
        <>
          <AccountItem account={accounts.find((a) => a._id === to)} />{" "}
          <Button onClick={() => setTo("")}>X</Button>
        </>
      ) : (
        <AccountInput
          accounts={accounts}
          onSelect={(account) => {
            setTo(account._id);
          }}
        />
      )}
    </>
  );
};
