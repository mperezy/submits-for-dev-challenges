import NextImage from 'next/image';
import styles from './styles.module.css';

export default ({ title, description, emoji, emojiBackground, coverImageUrl }: SimpleFeature) => (
  <div className={styles.root}>
    <div
      className='flex place-content-center w-[3.625rem] h-[3.625rem] rounded-full'
      style={{ backgroundColor: emojiBackground }}
    >
      <span className='flex items-center text-[1.75rem]'>{emoji}</span>
    </div>
    <h4 className='text-xl font-semibold text-[#E5E7EB]'>{title}</h4>
    <span className='text-[#9DA3AE]'>{description}</span>
    <NextImage
      width='534'
      height='386'
      className='rounded-lg'
      src={coverImageUrl}
      alt={`Cover image - ${title}`}
    />
  </div>
);
