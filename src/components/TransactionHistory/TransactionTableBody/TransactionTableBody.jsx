import { TransactionRow } from './TransactionRow/TransactionRow';
import PropTypes from 'prop-types';
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

TransactionTableBody.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
