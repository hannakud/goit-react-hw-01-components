import css from './Statistics.module.css';
import { getRandomHexColor } from './Statistics';

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
