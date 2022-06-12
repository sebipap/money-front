export type SendRequest = {
  from: string;
  to: string;
  amount: number;
};

export type Transaction = {
  _id: String;
  amountSent: Number;
  amountRecieved: Number;
};

export type Account = {
  _id: string;
  name: string;
  unit: string;
  balance: number;
  valueInUSD: number;
  unitName: string;
};
