import { TransactionRow } from './TransactionRow/TransactionRow';
import css from './TransactionTableBody.module.css';

export const TransactionTableBody = ({ items }) => {
  return (
    <tbody className={css.tbody}>
      {items.map(item => {
        return <TransactionRow item={item} key={item.id} />;
      })}
    </tbody>
  );
};
