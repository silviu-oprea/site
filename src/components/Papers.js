import React, { useEffect, useState } from "react";
import { groupBy } from "core-js/actual/array/group-by";
import CodeBlock from '@theme/CodeBlock';

function Paper({paperData}) {
  const [shown, setShown] = useState(false);
  console.log(`a: ${paperData.bib}`);
  return (
    <div style={{marginBottom: "1.5rem"}}>
      <div>
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
        <i>{paperData.venue}</i>. {paperData.year}.
      </div>
      <button
        className="tag"
        onClick={() => setShown(c => c === "abs"? "" : "abs")}
      >
        ABS
      </button>
      {paperData.bib && <button
        className="tag"
        onClick={() => setShown(c => c === "bib"? "" : "bib")}
        style={{marginLeft: ".625rem"}}
      >
        BIB
      </button>}
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
      <div
        className={`abstract ${shown === "abs" ? 'visible' : 'hidden'}`}
      >
        {paperData.abstract}
      </div>
      {paperData.bib && <div
        className={`bibtex ${shown === "bib" ? 'visible' : 'hidden'}`}
      >
        <CodeBlock className="language-latex">
          {paperData.bib}
        </CodeBlock>
      </div>}
    </div>
  );
}

export default function Papers({language, paperList, paperCategories}) {
  const languageCategories = paperCategories.map(category => category[language])
  const categoryToPapers = paperList.groupBy(({ category }) => category[language])
  return <React.Fragment>
    {
      languageCategories.filter(
        category => category in categoryToPapers
      ).map(category => <React.Fragment>
        <h4>{category}</h4>
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