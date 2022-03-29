import { formatCur } from "../utils/utils";
import { formatTime } from "../utils/formatTime";

export default function TableList({ prices, variant, currency }) {
  return (
    <table className="w-full p-2 text-center border dark:border-neutral-700">
      <thead className="">
        <tr className="bg-emerald-500">
          <th className="">Dia</th>
          <th className="text-right ">Valor</th>
        </tr>
      </thead>

      <tbody className="">
        {prices.map((item) => (
          <TableRow
            {...item}
            currency={currency}
            variant={variant}
            key={item._id}
          />
        ))}
      </tbody>
    </table>
  );
}

function TableRow({ price, updatedAt, currency, variant }) {
  return (
    <tr
      className={`${
        variant
          ? "even:bg-emerald-200 dark:even:bg-emerald-800"
          : "even:bg-white dark:even:bg-neutral-700"
      }`}
    >
      <td className="">{formatTime("", updatedAt)}</td>

      <td className="text-right ">{formatCur(price, currency)}</td>
    </tr>
  );
}
