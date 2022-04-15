import ListItem from "components/SmallerCurrencyList/ListItem";

function SmallerCurrencyList({ currencies }) {
  return (
    currencies.length > 0 && (
      <ul>
        {currencies.slice(0, 6).map((cur) => (
          <ListItem key={cur._id} {...cur} />
        ))}
      </ul>
    )
  );
}

export default SmallerCurrencyList;
