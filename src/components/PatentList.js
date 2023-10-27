export const patentCategories = [
    {
      en: "European patent office",
      ro: "Oficiul European de brevete"
    },
]

export const patentList = [
    {
        key: "patent-2020",
        category: patentCategories[0],
        title: "Processing communications in a computing arrangement for semantic understanding and interpretation of code-switching",
        authors: ["Sourav Dutta", "Silviu Vlad Oprea", "Haytham Assem", "Hu Peng"],
        year: 2022,
        venue: "Patent WO2022069030A1 issued from application PCT/EP2020/077336",
        html: "https://worldwide.espacenet.com/patent/search/family/072709373/publication/WO2022069030A1?q=WO2022069030A1&queryLang=en%3Ade%3Afr",
        abstract: `
A method of processing a communication in a computing arrangement that increases accuracy of semantic understanding and improves meaningful interpretation of code- switched regions in the communication. The method includes using the computing arrangement to analyze the communication to identify a predominant language used in the communication, and also to identify one or more code switched regions occurring in the communication. The method further includes using an artificial intelligence (AI) engine of the computing arrangement to translate the one or more languages used in the respective one or more code switched regions into one or more equivalent expressions of the predominant language. The one or more code switched regions of the communication are then replacing or supplemented with the one or more equivalent expressions included into the communication.
        `.trim(),
    },
]