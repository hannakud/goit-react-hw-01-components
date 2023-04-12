import css from './TransactionTableHeader.module.css';

export const TransactionTableHeader = () => {
  return (
    <thead className={css.head}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  );
};
