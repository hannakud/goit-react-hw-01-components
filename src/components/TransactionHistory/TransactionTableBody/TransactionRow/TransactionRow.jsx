import css from './TransactionRow.module.css';

export const TransactionRow = ({ item }) => {
  return (
    <tr className={css.row}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  );
};
