import ListRow from "./ListRow";

function List({ filteredCur }) {
  return (
    <div className="self-start table w-full mt-6 text-sm rounded-lg md:px-4 md:border dark:border-neutral-700 dark:bg-neutral-800 md:dark:bg-inherit dark:text-gray-100 md:col-start-2 md:mx-auto md:mt-0">
      <div className="table-row-group">
        {filteredCur.map((cur) => (
          <ListRow {...cur} key={cur._id} />
        ))}
      </div>
    </div>
  );
}

export default List;
