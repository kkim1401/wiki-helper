import axios from 'axios';

export const createGetArticlesByDateUrl = ({ month, year, day }) =>
  `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${year}/${month}/${day}`;

export const fetchArticlesByDate = ({ month, year, day }) =>
  axios.get(createGetArticlesByDateUrl({ month, year, day }));

export const createGetArticleByTitleUrl = ({ title }) =>
  `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&exsentences=4&exlimit=1&titles=${title}&explaintext=1&formatversion=2&format=json&origin=*`;

export const fetchArticleByTitle = ({ title }) =>
  axios.get(createGetArticleByTitleUrl({ title }));
