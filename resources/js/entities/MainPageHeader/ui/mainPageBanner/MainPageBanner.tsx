import { ReactNode } from 'react';
import styles from './MainPageBanner.module.css';
import cn from 'classnames';

interface MainPageBannerProps {
  className?: string;
  img_path?: string;
  children: ReactNode;
}

export const MainPageBanner = (props: MainPageBannerProps) => {
  const { className, img_path, children } = props;
  return (
    <div
      style={{ backgroundImage: `url(${img_path})` }}
      className={styles.banner}
    >
      {children}
    </div>
  );
};
