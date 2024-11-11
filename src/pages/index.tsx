import NextLink from 'next/link';
import pages from 'constants/pages';

export default () => (
  <>
    <title>Dev Challenges</title>
    <div className='w-screen h-screen bg-[#000] flex place-content-center'>
      <div className='flex flex-col gap-y-4 justify-center px-10'>
        <h1 className='font-extrabold text-6xl'>Challenges made</h1>

        <div className='flex flex-col gap-y-5 lg:flex-row lg:gap-x-5 ml-4'>
          {pages.map(({ type, challenges }) =>
            challenges.length > 0 ? (
              <div key={type} className='flex flex-col gap-y-3'>
                <h3 className='text-3xl font-semibold'>{type}</h3>

                <div className='flex flex-col gap-y-1'>
                  {challenges.map(({ href, title }, index) => (
                    <NextLink key={index} href={href} className='hover:underline'>
                      {title}
                    </NextLink>
                  ))}
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </div>
  </>
);
