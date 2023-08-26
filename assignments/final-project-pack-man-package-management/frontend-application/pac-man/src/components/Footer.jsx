import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { i18n, getTranslation } from '../locale.ts';

export default function Footer() {

    const [translations, setTranslations] = useState({});

    useEffect(() => {
        getTranslation(i18n.default).then(dict => setTranslations(t => dict));
    }, []);

    return (
        <Alert className='text-center' variant='secondary'>
            <p>{translations.footer?.thankyou}<br />
                {translations.footer?.learnmore} <a rel="noreferrer" target="_blank" href="https://github.com/neu-mis-info-6150-summer-2023/final-project-pack-man-package-management">Repository ➡️</a>
            </p>
            <hr />
            &copy; 2023 All rights reserved.
        </Alert>
    )
}
