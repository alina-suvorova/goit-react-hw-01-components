import PropTypes from 'prop-types';

function StatisticsItem ({label, percent}) {
    return (
        <>
            <span className="label">{label}</span>
            <span className="percentage">{percent}%</span>
        </>
    );
}

export default StatisticsItem;

StatisticsItem.propType = {
    label: PropTypes.string,
    percent: PropTypes.number,
}