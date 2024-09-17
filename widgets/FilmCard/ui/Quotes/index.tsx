import { Quote } from '@/entities/Quote';
import Image from 'next/image';
import { FC } from 'react';
import quoteMarks from '@/assets/quoteMarks.svg';
import styles from './Quotes.module.scss';
import FlexTitle from '../../../../shared/ui/FlexTitle';

interface QuotesProps {
  quotes: Quote[];
}

const Quotes: FC<QuotesProps> = ({ quotes }) => {
  return (
    <div className={styles.quotes}>
      <FlexTitle title="Цитаты из фильма" />
      <div className={styles.quotes__block}>
        {quotes.map((quote) => (
          <div className={styles.quotes__block__item} key={quote._id}>
            <Image
              className={styles.image}
              width={140}
              height={80}
              alt="quotation marks"
              src={quoteMarks}
            />
            <q className={styles.text}>{quote.text}</q>
            <p className={styles.whoseText}>{quote.whoseText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
