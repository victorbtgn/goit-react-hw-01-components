import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const labels = [];
const statData = [];

const Statistics = ({ stats, title }) => {
  filterStats(stats);
  const hexColor = () => '#' + Math.random().toString(16).substr(-6);

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {statData.map(({ label, percentage, id }) => {
          // let bgColor = '#' + Math.random().toString(16).substr(-6);
          let bgColor = hexColor();

          return (
            <li
              key={id}
              className={styles.item}
              style={{ backgroundColor: bgColor }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}&#37;</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

function filterStats(array) {
  array.forEach(item => {
    if (labels.includes(item.label)) {
      statData.forEach(i => {
        if (i.label === item.label) {
          i.percentage += item.percentage;
        }
      });
      return;
    }
    labels.push(item.label);
    statData.push(item);
  });
}

export default Statistics;
