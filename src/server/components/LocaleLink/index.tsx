import Link, { LinkProps } from 'next/link';
import { useLocaleRaw } from '@server/hooks/useLocale';

interface LocaleLinkProps extends LinkProps {
  children: React.ReactElement | string;
  href: string;
}

function removeTrailingSlash(path: string) {
    if (path.length > 1 && path.endsWith('/')) {
        return path.slice(0, -2);
    }
    return path;
}

export default function LocaleLink({ href: hrefRaw, children, ...linkProps }: LocaleLinkProps) {
  const locale = useLocaleRaw();
  const href = locale ? removeTrailingSlash(`/${locale}/${hrefRaw}`) : hrefRaw;

  return <Link href={href} {...linkProps}>{children}</Link>
}

