import styles from './Image.module.css';

interface ImageProps {
	imageSrc: string;
	alt: string;
	className?: string;
}

export const Image = ({ imageSrc, alt, className }: ImageProps) => {
	return (
		<div className={`${styles.wrapper} ${className}`}>
			{imageSrc && <img src={imageSrc} alt={alt} className={styles.image} />}
		</div>
	);
};
