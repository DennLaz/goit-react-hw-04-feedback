import PropTypes from 'prop-types';

import styles from './feedbackOptions.module.css'

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    const btnElement = options.map(({ id, review }) => (
        <li key={id}>
            <button className={styles.btn} onClick={()=> onLeaveFeedback(review)} type="button">{review}</button>
        </li>
    ))
    return (
        <ul className={styles.list}>
{btnElement}
        </ul>
    )
}

FeedbackOptions.defaultProps = {
    options: [],
    onLeaveFeedback: ()=>{},
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            review: PropTypes.string.isRequired,
        })
    ),
}

export default FeedbackOptions;