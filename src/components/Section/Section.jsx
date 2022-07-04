import PropTypes from 'prop-types';

import styles from './section.module.css'

const Section = ({ title, children }) => (
    <>
        <h2 className={styles.text}>{title}</h2>
        {children}
    </>
)

Section.defaultProps = {
    title: "",
    children: null,
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default Section;