import TableListRow from "./TableListRow";

function TableList({ currency, prices, rounded }) {
  const roundedStyles = rounded
    ? "border rounded-lg shadow-md border-neutral-450"
    : "";

  return prices?.length > 0 ? (
    <div className={`relative overflow-x-auto ${roundedStyles}`}>
      <table className="w-full">
        <thead>
          <tr className="text-xs uppercase duration-500 border-b bg-neutral-100/75 dark:bg-neutral-800/75 border-neutral-450">
            <th className="px-2 py-3 ">Dia</th>
            <th className="px-2 py-3 ">Valor</th>
          </tr>
        </thead>
        <tbody>
          {prices.map(({ _id, price, updatedAt }) => (
            <TableListRow
              currency={currency}
              key={_id}
              price={price}
              updatedAt={updatedAt}
            />
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p className="py-4 text-center">
      No encontramos mas detalles sobre esta moneda. <br /> Intenta con otra. 😥
    </p>
  );
}

export default TableList;
