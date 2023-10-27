export const paperCategories = [
    {
      en: "Figurative language comprehension",
      ro: "Procesarea limbajului figurativ"
    },
    {
        en: "Computational social science",
        ro: "Metode de calcul aplicate științelor sociale"
    },
    {
      en: "Controllable text generation",
      ro: "Generare controlată a textului"
    },
    {
      en: "Machine translation",
      ro: "Traducere automată"
    },
    {
        en: "Computer vision",
        ro: "Viziune artificiala"
    }
]

export const paperList = [
{
    key: "abu-farha-etal-2022-sarcasm",
    category: paperCategories[0],
    title: "Sarcasm Detection is Way Too Easy! An Empirical Comparison of Human and Machine Sarcasm Detection",
    authors: ["Ibrahim Abu Farha", "Steven Wilson", "Silviu Vlad Oprea", "Walid Magdy"],
    year: 2022,
    venue: "Findings of the Association for Computational Linguistics",
    pdf: "https://aclanthology.org/2022.findings-emnlp.387.pdf",
    abstract: `
Recently, author-annotated sarcasm datasets, which focus on intended, rather than perceived sarcasm, have been introduced. Although datasets collected using first-party annotation have important benefits, there is no comparison of human and machine performance on these new datasets. In this paper, we collect new annotations to provide human-level benchmarks for these first-party annotated sarcasm tasks in both English and Arabic, and compare the performance of human annotators to that of state-of-the-art sarcasm detection systems. Our analysis confirms that sarcasm detection is extremely challenging, with individual humans performing close to or slightly worse than the best trained models. With majority voting, however, humans are able to achieve the best results on all tasks. We also perform error analysis, finding that some of the most challenging examples are those that require additional context. We also highlight common features and patterns used to express sarcasm in English and Arabic such as idioms and proverbs. We suggest that to better capture sarcasm, future sarcasm detection datasets and models should focus on representing conversational and cultural context while leveraging world knowledge and common sense.
    `.trim(),
    bib: `
@inproceedings{abu-farha-etal-2022-sarcasm,
    title = {Sarcasm Detection is Way Too Easy! An Empirical Comparison of Human and Machine Sarcasm Detection},
    author = {Abu Farha, Ibrahim and Wilson, Steven and Oprea, Silviu Vlad and Magdy, Walid},
    booktitle = {Findings of the Association for Computational Linguistics: EMNLP 2022},
    month = dec,
    year = {2022},
    address = {Abu Dhabi, United Arab Emirates},
    publisher = {Association for Computational Linguistics},
    url = {https://aclanthology.org/2022.findings-emnlp.387},
    doi = {10.18653/v1/2022.findings-emnlp.387},
    pages = {5284--5295},
}
    `.trim(),
},
{
    key: "abu-farha-etal-2022-semeval",
    category: paperCategories[0],
    title: "SemEval-2022 Task 6: iSarcasmEval, Intended Sarcasm Detection in English and Arabic",
    authors: ["Ibrahim Abu Farha", "Silviu Vlad Oprea", "Steven Wilson", "Walid Magdy"],
    year: 2022,
    venue: "Proceedings of the 16th International Workshop on Semantic Evaluation (SemEval-2022)",
    pdf: "https://aclanthology.org/2022.semeval-1.111.pdf",
    video: "https://aclanthology.org/2022.semeval-1.111.mp4",
    abstract: `
    iSarcasmEval is the first shared task to target intended sarcasm detection: the data for this task was provided and labelled by the authors of the texts themselves. Such an approach minimises the downfalls of other methods to collect sarcasm data, which rely on distant supervision or third-party annotations. The shared task contains two languages, English and Arabic, and three subtasks: sarcasm detection, sarcasm category classification, and pairwise sarcasm identification given a sarcastic sentence and its non-sarcastic rephrase. The task received submissions from 60 different teams, with the sarcasm detection task being the most popular. Most of the participating teams utilised pre-trained language models. In this paper, we provide an overview of the task, data, and participating teams.
    `.trim(),
    bib: `
@inproceedings{abu-farha-etal-2022-semeval,
    title = {{S}em{E}val-2022 Task 6: i{S}arcasm{E}val, Intended Sarcasm Detection in {E}nglish and {A}rabic},
    author = {Abu Farha, Ibrahim and Oprea, Silviu Vlad and Wilson, Steven and Magdy, Walid},
    booktitle = {Proceedings of the 16th International Workshop on Semantic Evaluation (SemEval-2022)},
    month = jul,
    year = {2022},
    address = {Seattle, United States},
    publisher = {Association for Computational Linguistics},
    url = {https://aclanthology.org/2022.semeval-1.111},
    doi = {10.18653/v1/2022.semeval-1.111},
    pages = {802--814},
}
    `.trim(),
},

{
    key: "oprea-etal-2022-chatbot",
    category: paperCategories[2],
    title: "Should a Chatbot be Sarcastic? Understanding User Preferences Towards Sarcasm Generation",
    authors: ["Silviu Vlad Oprea", "Steven Wilson", "Walid Magdy"],
    year: 2022,
    venue: "Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics",
    pdf: "https://aclanthology.org/2022.acl-long.530.pdf",
    video: "https://aclanthology.org/2022.acl-long.530.mp4",
    abstract: `
Previous sarcasm generation research has focused on how to generate text that people perceive as sarcastic to create more human-like interactions. In this paper, we argue that we should first turn our attention to the question of when sarcasm should be generated, finding that humans consider sarcastic responses inappropriate to many input utterances. Next, we use a theory-driven framework for generating sarcastic responses, which allows us to control the linguistic devices included during generation. For each device, we investigate how much humans associate it with sarcasm, finding that pragmatic insincerity and emotional markers are devices crucial for making sarcasm recognisable.
    `.trim(),
    bib: `
@inproceedings{oprea-etal-2022-chatbot,
    title = {Should a Chatbot be Sarcastic? Understanding User Preferences Towards Sarcasm Generation},
    author = {Oprea, Silviu Vlad and Wilson, Steven and Magdy, Walid},
    booktitle = {Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)},
    month = may,
    year = {2022},
    address = {Dublin, Ireland},
    publisher = {Association for Computational Linguistics},
    url = {https://aclanthology.org/2022.acl-long.530},
    doi = {10.18653/v1/2022.acl-long.530},
    pages = {7686--7700},
}
    `.trim(),
},

{
    key: "oprea-etal-2022-multi",
    category: paperCategories[3],
    title: "Multi-Stage Framework with Refinement Based Point Set Registration for Unsupervised Bi-Lingual Word Alignment",
    authors: ["Silviu Vlad Oprea", "Sourav Dutta", "Haytham Assem"],
    year: 2022,
    venue: "Proceedings of the 29th International Conference on Computational Linguistics",
    pdf: "https://aclanthology.org/2022.coling-1.92.pdf",
    abstract: `
Cross-lingual alignment of word embeddings are important in knowledge transfer across languages, for improving machine translation and other multi-lingual applications. Current unsupervised approaches relying on learning structure-preserving transformations, using adversarial networks and refinement strategies, suffer from instability and convergence issues. This paper proposes BioSpere, a novel multi-stage framework for unsupervised mapping of bi-lingual word embeddings onto a shared vector space, by combining adversarial initialization, refinement procedure and point set registration. Experiments for parallel dictionary induction and word similarity demonstrate state-of-the-art unsupervised results for BioSpere on diverse languages – showcasing robustness against variable adversarial performance.
    `.trim(),
    bib: `
@inproceedings{oprea-etal-2022-multi,
    title = {Multi-Stage Framework with Refinement Based Point Set Registration for Unsupervised Bi-Lingual Word Alignment},
    author = {Oprea, Silviu Vlad and Dutta, Sourav and Assem, Haytham},
    booktitle = {Proceedings of the 29th International Conference on Computational Linguistics},
    month = oct,
    year = {2022},
    address = {Gyeongju, Republic of Korea},
    publisher = {International Committee on Computational Linguistics},
    url = {https://aclanthology.org/2022.coling-1.92},
    pages = {1089--1097},
}
    `.trim(),
},

{
    key: "oprea-etal-2022-multi",
    category: paperCategories[1],
    title: "Chandler: An Explainable Sarcastic Response Generator",
    authors: ["Silviu Vlad Oprea", "Steven Wilson", "Walid Magdy"],
    year: 2021,
    venue: "Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing: System Demonstrations",
    pdf: "https://aclanthology.org/2021.emnlp-demo.38.pdf",
    video: "https://aclanthology.org/2021.emnlp-demo.38.mp4",
    abstract: `
We introduce Chandler, a system that generates sarcastic responses to a given utterance. Previous sarcasm generators assume the intended meaning that sarcasm conceals is the opposite of the literal meaning. We argue that this traditional theory of sarcasm provides a grounding that is neither necessary, nor sufficient, for sarcasm to occur. Instead, we ground our generation process on a formal theory that specifies conditions that unambiguously differentiate sarcasm from non-sarcasm. Furthermore, Chandler not only generates sarcastic responses, but also explanations for why each response is sarcastic. This provides accountability, crucial for avoiding miscommunication between humans and conversational agents, particularly considering that sarcastic communication can be offensive. In human evaluation, Chandler achieves comparable or higher sarcasm scores, compared to state-of-the-art generators, while generating more diverse responses, that are more specific and more coherent to the input.
    `.trim(),
    bib: `
@inproceedings{oprea-etal-2021-chandler,
    title = {Chandler: An Explainable Sarcastic Response Generator},
    author = {Oprea, Silviu Vlad and Wilson, Steven and Magdy, Walid},
    booktitle = {Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing: System Demonstrations},
    month = nov,
    year = {2021},
    address = {Online and Punta Cana, Dominican Republic},
    publisher = {Association for Computational Linguistics},
    url = {https://aclanthology.org/2021.emnlp-demo.38},
    doi = {10.18653/v1/2021.emnlp-demo.38},
    pages = {339--349},
}
    `.trim(),
},

{
    key: "Mateo-Garcia2021",
    category: paperCategories[4],
    title: "Towards global flood mapping onboard low cost satellites with machine learning",
    authors: ["Gonzalo Mateo-Garcia*", "Joshua Veitch-Michaelis*", "Lewis Smith*", "Silviu Vlad Oprea", "Guy Schumann", "Yarin Gal", "Atılım Güneş Baydin", "Dietmar Backes" ],
    year: 2021,
    venue: "Nature (Scientific Reports)",
    html: "https://www.nature.com/articles/s41598-021-86650-z",
    abstract: `
Spaceborne Earth observation is a key technology for flood response, offering valuable information to decision makers on the ground. Very large constellations of small, nano satellites— ’CubeSats’ are a promising solution to reduce revisit time in disaster areas from days to hours. However, data transmission to ground receivers is limited by constraints on power and bandwidth of CubeSats. Onboard processing offers a solution to decrease the amount of data to transmit by reducing large sensor images to smaller data products. The ESA’s recent PhiSat-1 mission aims to facilitate the demonstration of this concept, providing the hardware capability to perform onboard processing by including a power-constrained machine learning accelerator and the software to run custom applications. This work demonstrates a flood segmentation algorithm that produces flood masks to be transmitted instead of the raw images, while running efficiently on the accelerator aboard the PhiSat-1. Our models are trained on WorldFloods: a newly compiled dataset of 119 globally verified flooding events from disaster response organizations, which we make available in a common format. We test the system on independent locations, demonstrating that it produces fast and accurate segmentation masks on the hardware accelerator, acting as a proof of concept for this approach.
    `.trim(),
    bib: `
@article{Mateo-Garcia2021,
    author = {Mateo-Garcia, Gonzalo and Veitch-Michaelis, Joshua and Smith, Lewis and Oprea, Silviu Vlad and Schumann, Guy and Gal, Yarin and Baydin, At{\i}l{\i}m G{\"u}ne{\c{s}} and Backes, Dietmar},
    title = {Towards global flood mapping onboard low cost satellites with machine learning},
    journal = {Scientific Reports},
    year = {2021},
    month = mar,
    day = {31},
    volume = {11},
    number = {1},
    pages = {7249},
    issn = {2045-2322},
    doi = {10.1038/s41598-021-86650-z},
    url = {https://doi.org/10.1038/s41598-021-86650-z},
    }
    `.trim(),
},

{
    key: "oprea-magdy-2020-the-effect",
    category: paperCategories[2],
    title: "The Effect of Sociocultural Variables on Sarcasm Communication Online",
    authors: ["Silviu Vlad Oprea", "Walid Magdy"],
    year: 2020,
    venue: "Proceedings of the ACM on Human-Computer Interaction",
    html: "https://dl.acm.org/doi/abs/10.1145/3392834",
    pdf: "https://arxiv.org/pdf/2004.04945.pdf",
    abstract: `
Online social networks (OSN) play an essential role for connecting people and allowing them to communicate online. OSN users share their thoughts, moments, and news with their network. The messages they share online can include sarcastic posts, where the intended meaning expressed by the written text is different from the literal one. This could result in miscommunication. Previous research in psycholinguistics has studied the sociocultural factors the might lead to sarcasm misunderstanding between speakers and listeners. However, there is a lack of such studies in the context of OSN. In this paper we fill this gap by performing a quantitative analysis on the influence of sociocultural variables, including gender, age, country, and English language nativeness, on the effectiveness of sarcastic communication online. We collect examples of sarcastic tweets directly from the authors who posted them. Further, we ask third-party annotators of different sociocultural backgrounds to label these tweets for sarcasm. Our analysis indicates that age, English language nativeness, and country are significantly influential and should be considered in the design of future social analysis tools that either study sarcasm directly, or look at related phenomena where sarcasm may have an influence. We also make observations about the social ecology surrounding sarcastic exchanges on OSNs. We conclude by suggesting ways in which our findings can be included in future work.
    `.trim(),
    bib: `
@article{oprea-magdy-2020-the-effect,
    author = {Oprea, Silviu Vlad and Magdy, Walid},
    title = {The Effect of Sociocultural Variables on Sarcasm Communication Online},
    year = {2020},
    issue_date = {May 2020},
    publisher = {Association for Computing Machinery},
    address = {New York, NY, USA},
    volume = {4},
    number = {CSCW1},
    url = {https://doi.org/10.1145/3392834},
    doi = {10.1145/3392834},
    journal = {Proceedings of the ACM on Human-Computer Interaction},
    month = may,
    articleno = {29},
    numpages = {22},
    keywords = {online communication, sarcasm, social media, sociocultural background},
    }
      `.trim(),
},

{
    key: "oprea-magdy-2020-isarcasm",
    category: paperCategories[0],
    title: "iSarcasm: A Dataset of Intended Sarcasm",
    authors: ["Silviu Vlad Oprea", "Walid Magdy"],
    year: 2020,
    venue: "Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics",
    pdf: "https://aclanthology.org/2020.acl-main.118.pdf",
    video: "http://slideslive.com/38929208",
    abstract: `
Online social networks (OSN) play an essential role for connecting people and allowing them to communicate online. OSN users share their thoughts, moments, and news with their network. The messages they share online can include sarcastic posts, where the intended meaning expressed by the written text is different from the literal one. This could result in miscommunication. Previous research in psycholinguistics has studied the sociocultural factors the might lead to sarcasm misunderstanding between speakers and listeners. However, there is a lack of such studies in the context of OSN. In this paper we fill this gap by performing a quantitative analysis on the influence of sociocultural variables, including gender, age, country, and English language nativeness, on the effectiveness of sarcastic communication online. We collect examples of sarcastic tweets directly from the authors who posted them. Further, we ask third-party annotators of different sociocultural backgrounds to label these tweets for sarcasm. Our analysis indicates that age, English language nativeness, and country are significantly influential and should be considered in the design of future social analysis tools that either study sarcasm directly, or look at related phenomena where sarcasm may have an influence. We also make observations about the social ecology surrounding sarcastic exchanges on OSNs. We conclude by suggesting ways in which our findings can be included in future work.
    `.trim(),
    bib: `
@inproceedings{oprea-magdy-2020-isarcasm,
    title = {i{S}arcasm: A Dataset of Intended Sarcasm},
    author = {Oprea, Silviu Vlad and Magdy, Walid},
    booktitle = {Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics},
    month = jul,
    year = {2020},
    address = {Online},
    publisher = {Association for Computational Linguistics},
    url = {https://aclanthology.org/2020.acl-main.118},
    doi = {10.18653/v1/2020.acl-main.118},
    pages = {1279--1289},
}
    `.trim(),
},

{
    key: "oprea-magdy-2019-exploring",
    category: paperCategories[0],
    title: "Exploring Author Context for Detecting Intended vs Perceived Sarcasm",
    authors: ["Silviu Vlad Oprea", "Walid Magdy"],
    year: 2019,
    venue: "Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics",
    pdf: "https://aclanthology.org/P19-1275.pdf",
    video: "https://vimeo.com/384744638",
    abstract: `
We investigate the impact of using author context on textual sarcasm detection. We define author context as the embedded representation of their historical posts on Twitter and suggest neural models that extract these representations. We experiment with two tweet datasets, one labelled manually for sarcasm, and the other via tag-based distant supervision. We achieve state-of-the-art performance on the second dataset, but not on the one labelled manually, indicating a difference between intended sarcasm, captured by distant supervision, and perceived sarcasm, captured by manual labelling.
    `.trim(),
    bib: `
@inproceedings{oprea-magdy-2019-exploring,
    title = {Exploring Author Context for Detecting Intended vs Perceived Sarcasm},
    author = {Oprea, Silviu Vlad and Magdy, Walid},
    booktitle = {Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics},
    month = jul,
    year = {2019},
    address = {Florence, Italy},
    publisher = {Association for Computational Linguistics},
    url = {https://aclanthology.org/P19-1275},
    doi = {10.18653/v1/P19-1275},
    pages = {2854--2859},
}
    `.trim(),
}
]