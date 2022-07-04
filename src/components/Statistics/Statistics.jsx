import PropTypes from 'prop-types';

import styles from './statistics.module.css';


const Statistics = ({total, good, neutral, bad, percentage}) => {
    return (
        <>
            <p className={styles.text}>Good: { good}</p>
            <p className={styles.text}>Neutral: {neutral }</p>
            <p className={styles.text}>Bad: {bad} </p>
            <p className={styles.text}>Total: { total}</p>
            <p className={styles.text}>Positive feedback: { percentage} </p>
        </>
)
}

Statistics.defaultProps = {
    total: 0,
    percentage: '',
}

Statistics.propTypes = {
    total: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    percentage: PropTypes.string.isRequired,

}

export default Statistics;