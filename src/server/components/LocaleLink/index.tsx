import Link, { LinkProps } from 'next/link';
import { useLocaleRaw } from '@server/hooks/useLocale';
import removeTrailingSlash from '@lib/removeTrailingSlash';

interface LocaleLinkProps extends LinkProps {
  children: React.ReactElement | string;
  href: string;
}

export default function LocaleLink({ href: hrefRaw, children, ...linkProps }: LocaleLinkProps) {
  const locale = useLocaleRaw();
  const href = locale ? removeTrailingSlash(`/${locale}/${hrefRaw}`) : hrefRaw;

  return <Link href={href} {...linkProps}>{children}</Link>
}

