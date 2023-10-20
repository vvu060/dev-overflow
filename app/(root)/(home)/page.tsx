import QuestionCard from '@/components/cards/QuestionCard';
import HomeFilters from '@/components/home/HomeFilters';
import Filter from '@/components/shared/Filter';
import NoResult from '@/components/shared/NoResult';
import LocalSearchbar from '@/components/shared/search/LocalSearchbar';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filters';
import Link from 'next/link';

const questions = [
  {
    _id: '1',
    title: 'How to use Redux with React?',
    tags: [
      { _id: '1', name: 'react' },
      { _id: '2', name: 'redux' },
    ],
    author: {
      _id: '2',
      name: 'Alice Smith',
      picture: 'url_to_picture',
    },
    upvotes: 15,
    views: 30,
    answers: [],
    createdAt: new Date('2022-01-15T14:30:00.000Z'),
  },
  {
    _id: '2',
    title: 'Best practices for API authentication',
    tags: [
      { _id: '3', name: 'api' },
      { _id: '4', name: 'authentication' },
    ],
    author: {
      _id: '3',
      name: 'Bob Johnson',
      picture: 'url_to_picture',
    },
    upvotes: 25,
    views: 50,
    answers: [],
    createdAt: new Date('2022-03-20T09:45:00.000Z'),
  },
  {
    _id: '3',
    title: 'Optimizing performance in React applications',
    tags: [
      { _id: '1', name: 'react' },
      { _id: '5', name: 'performance' },
    ],
    author: {
      _id: '4',
      name: 'Eva Brown',
      picture: 'url_to_picture',
    },
    upvotes: 12,
    views: 40,
    answers: [],
    createdAt: new Date('2022-05-10T16:15:00.000Z'),
  },
];

export default function Home() {
  return (
    <>
      <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='h1-bold text-dark100_light900'>All Questions</h1>
        <Link href='/ask-question' className='flex justify-end max-sm:w-full'>
          <Button className='primary-gradient min-h-[46px] px-4 py-3 !text-light-900'>
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchbar
          route='/'
          iconPosition='left'
          imgSrc='/assets/icons/search.svg'
          placeholder='Search for questions'
          otherClasses='flex-1'
        />
        <Filter
          filters={HomePageFilters}
          otherClasses='min-h-[56px] sm:min-w-[170px]'
          containerClasses='hidden max-md:flex'
        />
      </div>

      <HomeFilters />

      <div className='mt-10 flex w-full flex-col gap-6'>
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description=' Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡'
            link='/ask-question'
            linkTitle='Ask a Question'
          />
        )}
      </div>
    </>
  );
}
