import { formatCur, formatTime } from "utils";
// TODO: Refactor
function TableListRow({ price, updatedAt, currency, variant }) {
  const style = variant
    ? "even:bg-emerald-200 dark:even:bg-emerald-800"
    : "even:bg-white dark:even:bg-neutral-700";

  return (
    <tr className={`${style}`}>
      <td className="">{formatTime("", updatedAt)}</td>

      <td className="text-right ">{formatCur(price, currency)}</td>
    </tr>
  );
}
export default TableListRow;
