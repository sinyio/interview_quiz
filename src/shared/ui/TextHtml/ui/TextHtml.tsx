import DOMPurify from 'dompurify';
import styles from './TextHtml.module.css';

export interface TextHtmlProps {
  html: string;
  className?: string;
}

export const TextHtml = ({ html, className }: TextHtmlProps) => {
  const sanitizedHtmlContent = DOMPurify.sanitize(html);

  return (
    <pre className={`${styles.text} ${className}`}>
      <div dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }} />
    </pre>
  );
};
