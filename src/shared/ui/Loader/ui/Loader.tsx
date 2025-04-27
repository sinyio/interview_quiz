import { CSSProperties } from 'react';
import { Card } from '@/shared/ui/Card';

import styles from './Loader.module.css';

interface LoaderProps {
  hasText?: boolean;
  style?: CSSProperties;
  className?: string;
}

export const Loader = ({ hasText = true, style, className }: LoaderProps) => {
  return (
    <div className={`${styles.wrapper}  ${className}`} style={style}>
      <Card>
        <div className={styles.content}>
          <span className={styles.loader}></span>
          {hasText && <span className={styles.text}>Loading...</span>}
        </div>
      </Card>
    </div>
  );
};
