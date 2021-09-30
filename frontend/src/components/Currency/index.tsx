type Props = {
  value: number;
  currency?: string;
};

export function Currency({ value, currency = "BRL" }: Props) {
  const currencies: { [key: string]: any } = {
    BRL: () =>
      "R$ " +
      value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        useGrouping: false,
      }),
  };

  if (Object.keys(currencies).includes(currency))
    return currencies[currency](value);

  return value;
}
