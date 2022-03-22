import { useState } from 'react';
import { useQuery } from 'react-query';
import DatePicker from 'react-datepicker';
import Modal from 'react-modal';
import { format, startOfYesterday } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Root,
  Card,
  FormField,
  FormFieldInput,
  FormFieldLabel,
  List,
  ListSpinner,
  Form,
  Header,
  CardInfo,
  CardTitle,
  CardRank,
  CardViews,
  ModalStyles,
  ModalTitle,
  ModalContent,
  ModalSpinner,
} from './styles';
import Spinner from '../Spinner';
import { fetchArticlesByDate, fetchArticleByTitle } from '../../helpers';

export const toDateObj = (date) => {
  const day = format(date, 'dd');
  const month = format(date, 'MM');
  const year = format(date, 'yyyy');
  return {
    day,
    month,
    year,
  };
};

const RESULTS_COUNTS = [25, 50, 75, 100, 200];

function Error() {
  return (
    <div>
      Whops, something went wrong! Please refresh the page and try again.
    </div>
  );
}

function ArticlesView() {
  // Modal
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const afterOpenModal = () => {};
  const closeModal = () => setIsOpen(false);

  // Fetch articles
  const [startDate, setStartDate] = useState(startOfYesterday());
  const [count, setCount] = useState(100);
  const dateObj = toDateObj(startDate);
  const articlesRequest = useQuery(['articles', dateObj], async () =>
    fetchArticlesByDate(dateObj)
  );
  const articles = articlesRequest.data?.data.items[0].articles?.slice(
    0,
    count
  );

  // Fetch article by title
  const [title, setTitle] = useState('');
  const articleRequest = useQuery(
    ['article', { title }],
    async () => {
      const data = await fetchArticleByTitle({ title });
      const { title: articleTitle, extract } = data?.data.query.pages[0];
      return {
        content: extract ? extract : 'This article does not have any content!',
        title: articleTitle,
      };
    },
    {
      enabled: Boolean(title) && modalIsOpen,
    }
  );

  return (
    <Root>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={ModalStyles}
      >
        {articleRequest.isSuccess ? (
          <>
            <ModalTitle>{articleRequest.data?.title}</ModalTitle>
            <ModalContent>{articleRequest.data?.content}</ModalContent>
          </>
        ) : articleRequest.isLoading ? (
          <ModalSpinner as={Spinner} />
        ) : (
          <Error />
        )}
      </Modal>
      <Header>Most Viewed Articles</Header>
      <Form>
        <FormField>
          <FormFieldLabel htmlFor='date'>Start Date:</FormFieldLabel>
          <FormFieldInput
            as={DatePicker}
            id='date'
            name='date'
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </FormField>
        <FormField>
          <FormFieldLabel htmlFor='counts'>Number of Results:</FormFieldLabel>
          <FormFieldInput
            as='select'
            id='counts'
            name='counts'
            value={count}
            onChange={(e) => setCount(e.target.value)}
          >
            {RESULTS_COUNTS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </FormFieldInput>
        </FormField>
      </Form>
      <List>
        {articlesRequest.isSuccess ? (
          articles?.map(({ article: articleTitle, rank, views }, index) => (
            <Card
              data-testid='card'
              key={index}
              onClick={() => {
                setTitle(articleTitle);
                openModal();
              }}
            >
              <CardTitle data-testid='card-title'>{articleTitle}</CardTitle>
              <CardInfo>
                <CardRank data-testid='card-rank'>Rank: {rank}</CardRank>
                <CardViews data-testid='card-views'>
                  Views:
                  <br />
                  {views}
                </CardViews>
              </CardInfo>
            </Card>
          ))
        ) : articlesRequest.isLoading ? (
          <ListSpinner as={Spinner} />
        ) : (
          <Error />
        )}
      </List>
    </Root>
  );
}

export default ArticlesView;
