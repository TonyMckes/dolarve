import { formatCur } from "utils";
import formatDateAndTime from "utils/formatDateAndTime";

function TableListRow({ currency, price, updatedAt }) {
  return (
    <tr className="duration-500 border-b hover:shadow-md hover:bg-emerald-500 hover:dark:bg-emerald-700 border-neutral-450 even:bg-neutral-100/75 even:dark:bg-neutral-800/75">
      <td className="px-2 py-1">{formatDateAndTime(updatedAt)}</td>
      <td className="px-2 py-1 text-left">{formatCur(price, currency)}</td>
    </tr>
  );
}
export default TableListRow;
