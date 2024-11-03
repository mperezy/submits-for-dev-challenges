import NextLink from 'next/link';
import pages from 'constants/pages';

export default () => (
  <>
    <title>Dev Challenges</title>
    <div className='w-screen h-screen bg-[#000] flex place-content-center'>
      <div className='flex flex-col gap-y-4 justify-center px-10'>
        <h1 className='font-extrabold text-6xl'>Challenges made</h1>

        <div className='flex flex-col gap-y-2'>
          {pages.map(({ href, title }, index) => (
            <NextLink key={index} href={href}>
              {title}
            </NextLink>
          ))}
        </div>
      </div>
    </div>
  </>
);
