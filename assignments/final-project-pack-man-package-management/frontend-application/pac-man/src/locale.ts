export const i18n = {

    // default: 'hi_IN', // Default locale of that application
    default: 'en_US', // Default locale of that application
    locales: ['en_US', 'hi_IN'] // List of all existing locales

} as const;

export type Locale = (typeof i18n)['locales'][number]; // Defining the Locale datatype

const fetchTranslation = (uri: string) => () => fetch(uri).then(response => response.json()) // Function to fetch the translation file

const translations = {

    en_US : fetchTranslation('./translations/en_US.json') ,
    hi_IN : fetchTranslation('./translations/hi_IN.json')

}

export const getTranslation = async(locale: Locale) => translations[locale]?.() ?? translations[i18n.default]()