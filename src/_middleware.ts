import { parse as parseLangs } from 'accept-language-parser';
import { NextRequest, NextResponse } from 'next/server';
import { ValidLocale, defaultLocale, getLocaleFrom, locales } from '@lib/i18n';

const findBestMatchingLocale = (acceptLangHeader: string): ValidLocale => {
    const parsedLangs = parseLangs(acceptLangHeader);

    for (const parsedLang of parsedLangs) {
        const matchedLocale = locales.find((locale) =>
            parsedLang.code.toLowerCase() === locale
        );

        if (matchedLocale) {
            return matchedLocale;
        }
    }
    return defaultLocale;
}


export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const locale = getLocaleFrom(pathname);


    if (locale === defaultLocale) {
        return NextResponse.redirect(
            new URL(
                pathname.replace(
                    `/${defaultLocale}`,
                    '',
                ),
                request.nextUrl.origin,
            ),
        );
    }

    const pathnameIsMissingValidLocale = locales.every((locale) => {
        return !pathname.startsWith(`/${locale}`);
    });

    if (pathnameIsMissingValidLocale) {
        const matchedLocale = findBestMatchingLocale(
            request.headers.get('Accept-Language') || defaultLocale
        );

        if (matchedLocale !== defaultLocale) {
            return NextResponse.redirect(
                new URL(
                    `${matchedLocale}${pathname}`,
                    request.nextUrl.origin,
                ),
            );
        }
        return NextResponse.rewrite(
            new URL(
                `/${defaultLocale}${pathname}`,
                request.nextUrl.origin,
            )
        );
    }
}


export const config = {
    matcher: [
        "/((?!api|_next/static|next_static|_next/image|assets|favicon.ico|sw.js).*)",
    ],
};

