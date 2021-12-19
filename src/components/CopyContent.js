const CopyContent = ({ content, noSpaces }) => {
    const copyOnClipboard = () => {
        const textToCopy = noSpaces ? content.replace(/\s/g, ""): content;
        if ('clipboard' in navigator) {
            navigator.clipboard.writeText(textToCopy);
        } else {
            document.execCommand('copy', true, textToCopy);
        }
    };

    return (
        <div>
            {content}
            <button onClick={copyOnClipboard} alt="Copy" style={{ backgroundColor: 'none', marginLeft: 14 }}>
                Copy
            </button>
        </div>
    );
};

export default CopyContent;