import React, { useEffect, useState } from "react";
import { Link } from '@site/src/components/Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.

export const educationList = [
    {
        symbol: <React.Fragment><FontAwesomeIcon icon="fa-solid fa-graduation-cap" size="lg" /></React.Fragment>,
        dates: "2018 - 2023",
        degree: "PhD in Data Science",
        institution: "the University of Edinburgh",
        description: <React.Fragment>
            <p>
Check out my thesis, <Link href="https://era.ed.ac.uk/handle/1842/40531">Computational Sarcasm Detection and Understanding in Online Communication</Link>.
            </p>
            <p>
In summary, I used computational methods to detect and understand the phenomenon of sarcasm, as it is manifested in online textual communication, together with my supervisors, <Link href="https://homepages.inf.ed.ac.uk/wmagdy/">Walid Magdy</Link>, <Link href="https://homepages.inf.ed.ac.uk/bonnie/">Bonnie Webber</Link>, and <Link href="https://mariawolters.net/">Maria Wolters</Link>.
            </p>
            <p>
More specifically, I built a dataset of texts annotated for sarcasm (<Link href="https://aclanthology.org/2020.acl-main.118.pdf">ACL 2020 paper</Link>), introduced sarcasm detection models (<Link href="https://aclanthology.org/P19-1275.pdf">ACL 2019 paper</Link>), and also organised a competition encouraging the community to build such models (<Link href="https://aclanthology.org/2022.semeval-1.111.pdf">SemEval 2022 paper</Link>).

I showed that people of similar socio-demographic backgrounds understand each other's sarcasm more often than people of dissimilar backgrounds (<Link href="https://doi.org/10.1145/3392834">CSCW 2022 paper</Link>).

Finally, I built a sarcastic chatbot (<Link href="https://aclanthology.org/2021.emnlp-demo.38.pdf">EMNLP 2021 demo</Link>), and investigated when it is appropriate for chatbots to be sarcastic, and how they should formulate their utterances (<Link href="https://aclanthology.org/2022.acl-long.530.pdf">ACL 2022 paper</Link>).
            </p>
            <p>
Along the way, I had fun as an intern at Frontier Development Lab in 2019, at Huawei in 2020, and at Amazon Alexa AI in 2021. See below, in the <i>Work</i> section.
            </p>
            {/* <p>
            At <Link href="https://fdleurope.org">Frontier Developemnt Lab</Link> in 2019, we built a flood segmentation model. In the process, we collaborated with the European Space Agency and UNICEF. The model has now been deployed by SpaceX on an actual satellite 🛰.

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
</Link> and the <Link href="https://www.youtube.com/watch?v=sSiuW1HcGjA">
    video of the rocket launch
</Link> 🚀
            </p>
            <p>
At Huawei in 2020, I worked with <Link href="https://scholar.google.co.uk/citations?user=804VsL8AAAAJ&hl=en">Haytham Assem</Link> and <Link href="https://scholar.google.com/citations?user=9y1l5IoAAAAJ&hl=en">Sourav Dutta</Link> on learning transformations between monolingual word embedding spaces, to enable unsupervised translation and transfer learning to low-resource languages. Check out our <Link href="publications/#oprea-etal-2022-multi">COLING 2022 paper</Link> based on this work.
            </p>
            <p>
At Amazon in 2021, I worked with Elisabeth Kwan, <Link href="https://www.microsoft.com/en-us/research/people/mollyxia/">Molly Xia</Link>, and <Link href="https://scholar.google.com/citations?user=oZORQtwAAAAJ&hl=en">Christos Christodoulopoulos</Link> on enabling language models to generate commonsense facts, along the lines of <Link href="https://aclanthology.org/P19-1470.pdf">this paper</Link>. My paper is in the making 👨🏻‍🍳
            </p> */}
        </React.Fragment>
    },
    {
        symbol: <React.Fragment><FontAwesomeIcon icon="fa-solid fa-graduation-cap" size="lg" /></React.Fragment>,
        dates: "2017 - 2018",
        degree: "MRes in Data Science",
        institution: "the University of Edinburgh",
        description: <React.Fragment>
I used computational methods to detect the presence of sarcasm in tweets, together with my supervisor, <Link href="https://homepages.inf.ed.ac.uk/wmagdy/">Walid Magdy</Link>.
        </React.Fragment>
    },
    {
        symbol: <React.Fragment><FontAwesomeIcon icon="fa-solid fa-graduation-cap" size="lg" /></React.Fragment>,
        dates: "2012 - 2013",
        degree: "MSc in Computer Science",
        institution: "the University of Oxford",
        description: <React.Fragment>
I worked with <Link href="https://scholar.google.co.uk/citations?user=eJwbbXEAAAAJ">Phil Blunsom</Link> on building character-level language models for the Romanian language using recurrent neural networks.
        </React.Fragment>
    },
    {
        symbol: <React.Fragment><FontAwesomeIcon icon="fa-solid fa-graduation-cap" size="lg" /></React.Fragment>,
        dates: "2009 - 2012",
        degree: "BSc in Computer Science",
        institution: "Jacobs University Bremen",
        description: <React.Fragment>
This is where my interest in natural language processing was triggered, working with <Link href="https://kwarc.info/people/mkohlhase/">Michael Kohlhase</Link>.
        </React.Fragment>
    }
]