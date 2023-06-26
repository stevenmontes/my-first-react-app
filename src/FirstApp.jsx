import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, fullName }) => {

    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <p>{fullName}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    subTitle: 'No hay subtitulo',
    fullName: 'Chris Montes'
}

export default FirstApp;
