import { useTranslation } from 'react-i18next';

const CopyContent = ({ content, noSpaces }) => {
    const { t } = useTranslation();

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
            <button
                onClick={copyOnClipboard}
                alt="Copy"
                style={{
                    backgroundColor: 'transparent',
                    fontSize: '0.8em',
                    fontFamily: 'serif',
                    padding: '0.4em',
                    margin: '1em',
                }}
            >
                {t('copy').toUpperCase()}
            </button>
        </div>
    );
};

export default CopyContent;