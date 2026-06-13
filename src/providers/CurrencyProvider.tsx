"use client";
import { createContext, FC, ReactNode, useState } from "react";

export enum Currency {
  USD = "USD",
  Euro = "EUR",
  GBP = "GBP",
  JPY = "JPY",
  CAD = "CAD",
  AUD = "AUD",
  INR = "INR",
  SGD = "SGD",
  CHF = "CHF",
}

interface CurrencyContextType {
  activeCurrency: Currency;
  setActiveCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}

export const CurrencyContext = createContext<CurrencyContextType>({
  activeCurrency: Currency.USD,
  setActiveCurrency: () => {},
});

interface CurrencyProviderProps {
  children: ReactNode;
}

const CurrencyProvider: FC<CurrencyProviderProps> = ({ children }) => {
  const [activeCurrency, setActiveCurrency] = useState(Currency.USD);

  return (
    <CurrencyContext.Provider value={{ activeCurrency, setActiveCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
