import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statlist}>
        {stats.map(stat => (
          <StatisticsItem key={stat.id} data={stat} className={css.item} />
        ))}
      </ul>
    </section>
  );
}

export function StatisticsItem({ data }) {
  return (
    <li
      className={css.item}
      style={{
        backgroundColor: getRandomHexColor(),
      }}
    >
      <span className={css.label}>{data.label}</span>
      <span className={css.percentage}>{data.percentage}%</span>
    </li>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
