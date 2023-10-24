import React, { useEffect, useState } from "react";
import { groupBy } from "core-js/actual/array/group-by";
import CodeBlock from '@theme/CodeBlock';

const categories = [
  {
    en: "Figurative language comprehension",
    ro: "Procesarea limbajului figurativ"
  },
  {
    en: "Figurative language generation",
    ro: "Generarea limbajului figurativ"
  },
  {
    en: "Computational social science",
    ro: "Metode de calcul aplicate științelor sociale"
  }
]
const papers = [
  {
    key: "abu-farha-etal-2022-sarcasm",
    category: categories[0],
    title: "Sarcasm Detection is Way Too Easy! An Empirical Comparison of Human and Machine Sarcasm Detection",
    authors: ["Ibrahim Abu Farha", "Steven Wilson", "Silviu Vlad Oprea", "Walid Magdy"],
    year: 2022,
    venue: "Findings of the Association for Computational Linguistics: EMNLP 2022",
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
    category: categories[0],
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
  }
]

function Paper({paperData}) {
  const [shown, setShown] = useState(false);
  return (
    <div>
      <div >
        {paperData.title}
      </div>
      <div>
        {
          paperData.authors.map((author) =>
            author === "Silviu Vlad Oprea"? <u>{author}</u> : author
          ).map((author, index) => {
            if (index < paperData.authors.length - 2)
              return <React.Fragment>{author}, </React.Fragment>
            else if (index == paperData.authors.length - 2)
              return <React.Fragment>{author}, and </React.Fragment>
            else return <React.Fragment>{author}</React.Fragment>
          })
        }
      </div>
      <div>
        In <i>{paperData.venue}</i>. {paperData.year}.
      </div>
      <button
        className="tag"
        onClick={() => setShown(c => c === "abs"? "" : "abs")}
      >
        ABS
      </button>
      <button
        className="tag"
        onClick={() => setShown(c => c === "bib"? "" : "bib")}
        style={{marginLeft: ".625rem"}}
      >
        BIB
      </button>
      <div
        className={`abstract ${shown === "abs" ? 'visible' : 'hidden'}`}
      >
        {paperData.abstract}
      </div>
      <div
        className={`bibtex ${shown === "bib" ? 'visible' : 'hidden'}`}
      >
        <CodeBlock className="language-latex">
          {paperData.bib}
        </CodeBlock>
      </div>
      {
        ["pdf", "video", "html"].filter(tag => tag in paperData).map(tag =>
          <a
            className="tag"
            style={{marginLeft: ".625rem"}}
            href={paperData[tag]}
            target="_blank" rel="noopener noreferrer"
          >
            {tag}
          </a>
        )
      }
    </div>
  );
}

export default function Papers({language}) {
  const languageCategories = categories.map(category => category[language])
  const categoryToPapers = papers.groupBy(({ category }) => category[language])
  return <React.Fragment>
    {
      languageCategories.filter(category => category in categoryToPapers).map(category => <React.Fragment>
        <h3 >{category}</h3>
        <ul>
          {
            categoryToPapers[category].map((paperData) => <li
              style={{marginBottom: ".5rem"}}
              key={paperData.key}
            >
              <Paper paperData={paperData} />
            </li>)
          }
        </ul>
      </React.Fragment>)
    }
  </React.Fragment>
}