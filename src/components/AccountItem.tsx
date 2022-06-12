import {
  Box,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { useState } from "react";
import { Account } from "../types";

type Props = {
  account?: Account;
  onSelect?: (account: Account) => void;
};

export const AccountItem = ({ account, onSelect }: Props) => {
  const { name, balance, unitName } = account;

  const [hover, setHover] = useState(false);

  return (
    // make a box with a border
    <Box
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="md"
      backgroundColor={hover ? "gray.100" : "white"}
      p="4"
      m="2"
      display="flex"
      flexDirection="column"
      // when hovering, make the background color light gray
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => {
        onSelect(account);
      }}
    >
      <Stat>
        <StatLabel>{name}</StatLabel>
        <StatNumber>
          {unitName} {balance}
        </StatNumber>
      </Stat>
    </Box>
  );
};
