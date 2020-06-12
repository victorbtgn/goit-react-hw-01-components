import React from "react";
import PropTypes from "prop-types";

const labels = [];
const statData = [];

const Statistics = ({ stats, title }) => {
  filterStats(stats);

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {statData.map(({ label, percentage, id }) => (
          <li key={id} className="item">
            <span className="label">{label} - </span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

function filterStats(array) {
  array.forEach((item) => {
    if (labels.includes(item.label)) {
      statData.forEach((i) => {
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
