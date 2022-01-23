const detectWhatsapp = (phone, text) => {
    const uri = `https://wa.me/${phone}&text=${text}`;

    const onIE = () => {
        return new Promise((resolve) => {
            window.navigator.msLaunchUri(
                uri,
                () => resolve(true),
                () => resolve(false)
            );
        });
    };

    const notOnIE = () => {
        return new Promise((resolve) => {
            const a = document.getElementById("wapp-launcher") || document.createElement("a");
            a.id = "wapp-launcher";
            a.href = uri;
            a.style.display = "none";
            document.body.appendChild(a);

            const start = Date.now();
            const timeoutToken = setTimeout(() => {
                resolve(Date.now() - start > 1250);
                document.body.removeChild(a);
                return window.removeEventListener("blur", handleBlur);
            }, 1000);

            const handleBlur = () => {
                clearTimeout(timeoutToken);
                resolve(true);
                document.body.removeChild(a);
                return window.removeEventListener("blur", handleBlur);
            };
            window.addEventListener("blur", handleBlur);

            a.click();
        });
    };

    return window.navigator.msLaunchUri ? onIE() : notOnIE();
};

export default detectWhatsapp;
