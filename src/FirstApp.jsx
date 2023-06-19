const getMessage = (name) => `Hola ${name}`;

const FirstApp = () => {
    return (
        <>
            <h1>{getMessage('Chris')}</h1>
            <p>Soy un subtitulo</p>
        </>
    )
}

export default FirstApp;
