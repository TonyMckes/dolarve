import ListRow from "./ListRow";

function List({ filteredCur }) {
  return (
    <div className="self-start table w-full mt-6 text-sm rounded-lg table-fixed md:px-4 md:border border-neutral-450 md:col-start-2 md:mx-auto md:mt-0">
      <div className="table-row-group">
        {filteredCur.map((cur) => (
          <ListRow {...cur} key={cur._id} />
        ))}
      </div>
    </div>
  );
}

export default List;
