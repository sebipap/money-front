import { Button, Input, Select } from "@chakra-ui/react";
import Fuse from "fuse.js";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { Account } from "../types";
import { AccountItem } from "./AccountItem";

type Props = {
  accounts: Account[];
  onSelect: (account: Account) => void;
};

export const AccountInput = ({ accounts, onSelect }: Props) => {
  const [value, setValue] = useState("");

  // use fuse to search for accounts
  const [accountsFiltered, setAccountsFiltered] = useState<Account[]>([]);

  const [isOpen, setIsOpen] = useState(false);

  const input = useRef(null);

  useEffect(() => {
    const fuse = new Fuse(accounts, {
      keys: ["name"],
      threshold: 0.3,
    });
    const result = fuse.search(value);

    setAccountsFiltered(result.map((r) => r.item));
  }, [value, accounts]);

  return (
    <>
      <Input
        ref={input}
        value={value}
        onChange={(e: { target: { value: SetStateAction<string> } }) => {
          setValue(e.target.value);
        }}
        onFocus={() => {
          setIsOpen(true);
        }}
        onBlur={() => {
          setIsOpen(false);
        }}
      />

      {accountsFiltered.map((account) => (
        <AccountItem key={account._id} account={account} onSelect={onSelect} />
      ))}
    </>
  );
};
