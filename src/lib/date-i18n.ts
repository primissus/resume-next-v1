import { ValidLocale } from './i18n'

const getDateFnLocale = async (locale: ValidLocale) => {
  const datefnLocale = await import(`date-fns/locale/${locale}`)
  console.log(datefnLocale);
  
  return datefnLocale;
}