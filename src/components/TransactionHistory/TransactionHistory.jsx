import { TransactionTableBody } from './TransactionTableBody/TransactionTableBody';
import { TransactionTableHeader } from './TransactionTableHeader/TransactionTableHeader';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.history}>
      <TransactionTableHeader />
      <TransactionTableBody items={items} />
    </table>
  );
};
