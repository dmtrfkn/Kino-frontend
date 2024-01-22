import Container from '@/shared/ui/Container';
import styles from './Footer.module.scss';
import Navbar from '../Header/ui/Navbar';
import Logo from '@/shared/ui/Logo';
import Input from '@/shared/ui/Input';
import CheckboxInput from '@/shared/ui/CheckboxInput';
import Button from '@/shared/ui/Button';
import LogoLinks from '@/shared/ui/LogoLinks';
import { useState } from 'react';
const Footer = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [activeCheckbox, setActiveCheckbox] = useState<boolean>(false);
  const onClickHandler = () => {};
  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.flex}>
          <div className={styles.presubscribe}>
            <div className={styles.subscribe}>
              <span className={styles.subscribe__logo}>
                <Logo />
              </span>
              <h1 className={styles.subscribe__title}>Подпишитесь на E-mail рассылку</h1>
              <p className={styles.subscribe__description}>
                Если хотиет быть в курсе последних новостей и новинок кино - заполните форму ниже и
                оформите бесплатную E-mail рассылку!{' '}
              </p>
              <div className={styles.subscribe__input}>
                <Input onChange={setInputValue} placeholder="Введите свой E-mail адрес" />
                <Button color="yellow-small" text="Подписаться" onClick={onClickHandler} />
              </div>
              <span className={styles.subscribe__checkbox}>
                <CheckboxInput
                  activeState={activeCheckbox}
                  text="Соглашаюсь на условия "
                  linkText="политики конфиденциальности"
                  setActiveState={setActiveCheckbox}
                />
              </span>
            </div>
          </div>
          <div className={styles.links}>
            <LogoLinks />
          </div>
          <div className={styles.navbar}>
            <Navbar />
          </div>
          <p className={styles.bottom}>2020 © Kinoarea. Все права защищены</p>
          <p className={styles.bottom}>Политика конфиденциальности</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
