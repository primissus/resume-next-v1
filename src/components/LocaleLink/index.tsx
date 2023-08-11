import Link, { LinkProps } from 'next/link';
import { useLocaleRaw } from '@server/hooks/useLocale';

interface LocaleLinkProps extends LinkProps {
  children: React.ReactElement | string;
}

export default function LocaleLink({ href: hrefRaw, children, ...linkProps }: LocaleLinkProps) {
  const locale = useLocaleRaw();
  const href = locale ? `/${locale}/${hrefRaw}` : hrefRaw;

  return <Link href={href} {...linkProps}>{children}</Link>
}