import styles from './Skeleton.module.css';

interface SkeletonBlockProps {
  width?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  style?: React.CSSProperties;
  className?: string;
}

export const Skeleton = ({
  width = '100%',
  height,
  maxWidth,
  borderRadius = '8px',
  style = {},
  className = '',
}: SkeletonBlockProps) => {
  return (
    <div
      className={`${styles.skeleton} ${className}`}
      style={{ width, maxWidth, height, borderRadius, ...style }}
    />
  );
};
