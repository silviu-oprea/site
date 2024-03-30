import React, { useEffect, useState } from "react";
import { Link } from '@site/src/components/Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.

export const workList = [
    {
        symbol: <React.Fragment><FontAwesomeIcon icon="fa-solid fa-flask" size="lg" /></React.Fragment>,
        dates: "2022 - present",
        degree: "Applied Scientist",
        institution: "Amazon Alexa AI",
        description: <React.Fragment>
            I am working on improving the ability of large language models (LLMs) to generate more intuitive, personalised, and context-sensitive responses, and to interact with external systems, with the purpose of providing Alexa customers with a more delightful experience.
        </React.Fragment>
    },
    {
        symbol: <React.Fragment><FontAwesomeIcon icon="fa-solid fa-flask" size="lg" /></React.Fragment>,
        dates: "2021",
        degree: "Applied Scientist (Intern)",
        institution: "Amazon Alexa AI",
        description: <React.Fragment>
At Amazon, I worked with Elisabeth Kwan, <Link href="https://www.microsoft.com/en-us/research/people/mollyxia/">Molly Xia</Link>, <Link href="https://scholar.google.com/citations?user=oZORQtwAAAAJ&hl=en">Christos Christodoulopoulos</Link>, <Link href="https://www.amazon.science/author/dave-palfrey">Dave Palfrey</Link>, and Stephen Teskey on language generation using language models.
        </React.Fragment>
    },
    {
        symbol: <React.Fragment><FontAwesomeIcon icon="fa-solid fa-flask" size="lg" /></React.Fragment>,
        dates: "2020",
        degree: "Research Scientist (Intern)",
        institution: "Huawei",
        description: <React.Fragment>
At Huawei, I worked with <Link href="https://scholar.google.co.uk/citations?user=804VsL8AAAAJ&hl=en">Haytham Assem</Link> and <Link href="https://scholar.google.com/citations?user=9y1l5IoAAAAJ&hl=en">Sourav Dutta</Link> on learning transformations between monolingual word embedding spaces, to enable unsupervised translation and transfer learning to low-resource languages. Check out our <Link href="https://aclanthology.org/2022.coling-1.92/">COLING 2022 paper</Link> based on this work.
        </React.Fragment>
    },
    {
        symbol: <React.Fragment><FontAwesomeIcon icon="fa-solid fa-flask" size="lg" /></React.Fragment>,
        dates: "2019",
        degree: "Researcher",
        institution: "Frontier Development Lab",
        description: <React.Fragment>
            <p>
At <Link href="https://fdleurope.org">Frontier Developemnt Lab</Link>, we built a flood segmentation model. In the process, we collaborated with the European Space Agency and UNICEF. The model has now been deployed by SpaceX on an actual satellite 🛰.
</p>
<p>
Our work was covered by <Link href="https://www.ox.ac.uk/news/2021-06-29-artificial-intelligence-pioneered-oxford-detect-floods-launches-space">
    this
</Link> post from the University of Oxford; and by several media outlets: <Link href="https://watchers.news/2021/07/11/worldfloods-ai-pioneered-at-oxford-for-global-flood-mapping-launches-into-space/">
    1
</Link>, <Link href="https://www.innovationnewsnetwork.com/historic-breakthroughs-in-flood-mapping-from-space/24369/?utm_source=rss&utm_medium=rss&utm_campaign=historic-breakthroughs-in-flood-mapping-from-space)">
    2
</Link>, <Link href="https://www.homelandsecuritynewswire.com/dr20210712-detecting-floods-from-space-using-artificial-intelligence">
    3
</Link>, <Link href="https://www.cas.cn/kj/202107/t20210722_4799503.shtml">
    4
</Link>, <Link href="https://www.kepuchina.cn/more/202107/t20210722_3010644.shtml">
    5
</Link>.

Check out our <Link href="/publications/#Mateo-Garcia2021">
    Nature (Scientific Reports) paper
</Link> and the <Link href="https://www.nature.com/articles/s41598-021-86650-z">
    video of the rocket launch
</Link> 🚀
</p>
            <p>
<iframe width="504" height="283" src="https://www.youtube.com/embed/sSiuW1HcGjA?si=1T89v4S5tO-OhIlL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>
        </React.Fragment>
    },
    {
        symbol: <React.Fragment><FontAwesomeIcon icon="fa-solid fa-laptop-code" size="lg" /></React.Fragment>,
        dates: "2014 - 2017",
        degree: "Engineer",
        institution: "VisualDNA and TheySay",
        description: <React.Fragment>
            <p>
During this time, I was an engineer at two tech startups.
First, a software engineer at VisualDNA, a data science and management platform, where I worked on data aggregation and reporting using Scala and the Scalding interface to Hadoop.
After VisualDNA, I spent some time as a contractor. Next, I was an artificial intelligence engineer at TheySay, a startup providing text analytics services, where I used technologies such as Scala and MongoDB.
            </p>
            <p>
Both startups were acquired, see <Link href="https://www.businessinsider.com/teddy-sagi-acquires-visualdna-2015-5?r=US&IR=T">this article about VisualDNA</Link>, and <Link href="https://www.aptean.com/fr/insights/press-release/aptean-expands-text-analytics-capabilities-with-theysay-acquisition">this one about TheySay</Link>.
            </p>
        </React.Fragment>
    },
    {
        symbol: <React.Fragment><FontAwesomeIcon icon="fa-solid fa-flask" size="lg" /></React.Fragment>,
        dates: "2012",
        degree: "Guest Researcher",
        institution: "the National Institute for Standards and Technology",
        description: <React.Fragment>
I worked with <Link href="https://www.nist.gov/people/bruce-r-miller">Bruce Miller</Link> on extending <Link href="https://math.nist.gov/~BMiller/LaTeXML/">LaTeXML</Link>, a <Link href="https://en.wikipedia.org/wiki/TeX">TeX</Link> parser that he wrote in <Link href="https://www.perl.org/">Perl</Link>. The goal of my extenssion was to convert <Link href="https://tikz.net/">TikZ</Link> graphics to <Link href="https://en.wikipedia.org/wiki/SVG">SVG</Link>. See <Link href="https://link.springer.com/chapter/10.1007/978-3-319-08434-3_32">this paper</Link> that mentions my work.
        </React.Fragment>
    },
]
