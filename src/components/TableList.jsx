import TableListRow from "./TableListRow";

// TODO: Refactor
function TableList({ prices, variant, currency }) {
  return (
    <table className="w-full p-2 text-center border border-neutral-450">
      <thead className="">
        <tr className="bg-emerald-500">
          <th className="">Dia</th>
          <th className="text-right ">Valor</th>
        </tr>
      </thead>

      <tbody className="">
        {prices.map(({ _id, price, updatedAt }) => (
          <TableListRow
            price={price}
            updatedAt={updatedAt}
            currency={currency}
            variant={variant}
            key={_id}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TableList;
