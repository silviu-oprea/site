import { newsList } from '@site/src/components/NewsList';
const language = 'en';

# News

<ul>
  {
    newsList.map(newsObt => <li>
      <b>{newsObt.date}</b>: {newsObt.languageToText[language]}
    </li>)
  }
</ul>
