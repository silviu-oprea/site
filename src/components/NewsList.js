import React, { useEffect, useState } from "react";
import { Link } from '@site/src/components/Utils';

export const newsList = [
    {
        date: "16 April 2024",
        onMainPage: true,
        languageToText: {
            en: <React.Fragment>
Excited to announce that I'll be joining Samsung Research UK as a Principal Machine Learning Research Engineer. Research agenda coming soon ⏳🧐🤖🚀🙏🏻! Thanks to everyone at Amazon for the last two years.
            </React.Fragment>,
            ro: ""
        }
    },
    {
        date: "3 March 2023",
        onMainPage: true,
        languageToText: {
            en: <React.Fragment>
I passed my PhD viva with no reviewable corrections 🥳! Thanks be to God 🙏🏻; to my supervisors <Link href="https://homepages.inf.ed.ac.uk/wmagdy/">Walid Magdy</Link>, <Link href="https://homepages.inf.ed.ac.uk/bonnie/">Bonnie Webber</Link>, and <Link href="https://mariawolters.net/">Maria Wolters</Link>; and to my examiners <Link href="https://sites.google.com/view/alexandra-birch/">Alexandra Birch-Mayne</Link> and <Link href="https://web.eecs.umich.edu/~mihalcea/">Rada Mihalcea</Link>. Check out my thesis, <Link href="https://era.ed.ac.uk/handle/1842/40531">Computational Sarcasm Detection and Understanding in Online Communication</Link>.
            </React.Fragment>,
            ro: ""
        }
    },
    {
        date: "15 August 2022",
        onMainPage: false,
        languageToText: {
            en: <React.Fragment>
Our paper, <Link href="/#publications">Multi-Stage Framework with Refinement Based Point Set Registration for Unsupervised Bi-Lingual Word Alignment</Link>, by <u>Silviu Vlad Oprea</u>, Sourav Dutta, and Haytham Assem, was accepted at COLING 2022.
            </React.Fragment>
        }
    },
    {
        date: "18 April 2022",
        onMainPage: false,
        languageToText: {
            en: <React.Fragment>
I started working for Amazon as an Applied Scientist in the Alexa AI 🤖 team.
            </React.Fragment>
        }
    },
    {
        date: "4 April 2022",
        onMainPage: true,
        languageToText: {
            en: <React.Fragment>
Our patent, <Link href="https://worldwide.espacenet.com/patent/search/family/072709373/publication/WO2022069030A1?q=WO2022069030A1&queryLang=en%3Ade%3Afr">Processing communications in a computing arrangement for semantic understanding and interpretation of code-switching</Link>, by Sourav Dutta, <u>Silviu Vlad Oprea</u>, Salama Hitham, and Hu Peng, was published.
            </React.Fragment>,
            ro: ""
        }
    },
    {
        date: "23 February 2022",
        onMainPage: false,
        languageToText: {
            en: <React.Fragment>
Our paper, <Link href="/#publications">Should a Chatbot be Sarcastic? Understanding User Preferences Towards Sarcasm Generation</Link>, by <u>Silviu Vlad Oprea</u> and Walid Magdy, was accepted at ACL 2022.
            </React.Fragment>
        }
    },
    {
        date: "30 June 2021",
        onMainPage: true,
        languageToText: {
            en: <React.Fragment>
The flood segmentation model that we built at <Link href="https://fdleurope.org">Frontier Development Lab</Link> has now been deployed by SpaceX on an actual satellite 🛰. Along the way, we collaborated with the European Space Agency and UNICEF.

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

Check out our <Link href="https://www.nature.com/articles/s41598-021-86650-z">
    Nature (Scientific Reports) paper
</Link> and the <Link href="https://www.youtube.com/watch?v=sSiuW1HcGjA">
    video of the rocket launch
</Link> 🚀
            </React.Fragment>,
            ro: `
            `
        }
    },
]

