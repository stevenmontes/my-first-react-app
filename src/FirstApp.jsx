const getMessage = (name) => `Hola ${name}`;

const FirstApp = () => {
    return (
        <>
            <code>{getMessage('Chris')}</code>
            <p>Soy un subtitulo</p>
        </>
    )
}

export default FirstApp;
