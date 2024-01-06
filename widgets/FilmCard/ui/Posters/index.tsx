import { FC } from 'react';
import FlexTitle from '../../../../shared/ui/FlexTitle';
import styles from './Posters.module.scss';
import Image from 'next/image';

interface PostersProps {
  links: string[];
  paragraph: string;
}

const Posters: FC<PostersProps> = ({ links, paragraph }) => {
  const url = process.env.NEXT_PUBLIC_IMAGE_URL;

  return (
    <div className={styles.wrapper}>
      <FlexTitle paragraph={paragraph} header="Все постеры" link="/posters" title="Постеры" />

      <div className={styles.posters__block}>
        {links.map(
          (link, index) =>
            index < 5 && (
              <Image
                className={styles.image}
                key={link}
                alt="Poster"
                width={340}
                height={465}
                src={`${url}${link}`}
              />
            ),
        )}
      </div>
    </div>
  );
};

export default Posters;
