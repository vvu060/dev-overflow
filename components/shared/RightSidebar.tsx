import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const topQuestions = [
  {
    _id: 1,
    title: 'How to create a new project?',
  },
  {
    _id: 2,
    title: 'How to create a new project?',
  },
  {
    _id: 3,
    title: 'How to create a new project?',
  },
  {
    _id: 4,
    title: 'How to create a new project?',
  },
  {
    _id: 5,
    title: 'How to create a new project?',
  },
];

const RightSidebar = () => {
  return (
    <section className='background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden'>
      <div>
        <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-[30px]'>
          {topQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className='flex cursor-pointer items-center justify-between gap-7'
            >
              <p className='body-medium text-dark500_light700'>
                {question.title}
              </p>
              <Image
                src='/assets/icons/chevron-right.svg'
                alt='chevron right'
                height={20}
                width={20}
                className='invert-colors'
              />
            </Link>
          ))}
        </div>
      </div>

      <div className='mt-16'></div>
    </section>
  );
};

export default RightSidebar;
