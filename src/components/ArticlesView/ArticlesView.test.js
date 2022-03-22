import { startOfYesterday } from 'date-fns';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import { render, within, screen } from '../../../test-utils';
import ArticlesView, { toDateObj } from './ArticlesView';
import { createGetArticlesByDateUrl } from '../../helpers';

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('ArticlesView', () => {
  it('should load and show cards', async () => {
    const yesterday = startOfYesterday();
    const dateObj = toDateObj(yesterday);
    const mockResponse = {
      items: [
        {
          articles: [
            {
              article: 'DBZ',
              rank: 1,
              views: 9001,
            },
            {
              article: 'Weightlifting',
              rank: 2,
              views: 9000,
            },
            {
              article: 'Taylor Swift',
              rank: 3,
              views: 7000,
            },
          ],
        },
      ],
    };
    server.use(
      rest.get(createGetArticlesByDateUrl(dateObj), (req, res, ctx) => {
        return res(ctx.json(mockResponse));
      })
    );

    render(<ArticlesView />);

    const cards = await screen.findAllByTestId('card');
    const dbzCard = cards[0];
    const weightliftingCard = cards[1];
    const taylorSwiftCard = cards[2];

    expect(cards.length).toBe(3);

    expect(within(dbzCard).getByTestId('card-rank')).toHaveTextContent(
      'Rank: 1'
    );
    expect(within(dbzCard).getByTestId('card-title')).toHaveTextContent('DBZ');
    expect(within(dbzCard).getByTestId('card-views')).toHaveTextContent(
      'Views:9001'
    );

    expect(
      within(weightliftingCard).getByTestId('card-rank')
    ).toHaveTextContent('Rank: 2');
    expect(
      within(weightliftingCard).getByTestId('card-title')
    ).toHaveTextContent('Weightlifting');
    expect(
      within(weightliftingCard).getByTestId('card-views')
    ).toHaveTextContent('Views:9000');

    expect(within(taylorSwiftCard).getByTestId('card-rank')).toHaveTextContent(
      'Rank: 3'
    );
    expect(within(taylorSwiftCard).getByTestId('card-title')).toHaveTextContent(
      'Taylor Swift'
    );
    expect(within(taylorSwiftCard).getByTestId('card-views')).toHaveTextContent(
      'Views:7000'
    );
  });
});
