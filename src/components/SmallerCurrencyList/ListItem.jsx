import CurIcon from "components/CurIcon";
import CurName from "components/CurName";
import { Link } from "react-router-dom";
import { urlPath } from "../../constants";

function ListItem({ _id, name, icon, slug, symbol, type }) {
  return (
    <li className="w-full transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-2xl ">
      <Link
        className="block p-1 my-1 truncate"
        to={`/${urlPath[type]}/${slug ? slug : _id}`}
      >
        <CurIcon name={name} icon={icon} size="6" />{" "}
        <CurName name={name} size="xs" />
      </Link>
    </li>
  );
}

export default ListItem;
