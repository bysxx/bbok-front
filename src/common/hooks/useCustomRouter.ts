import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { ParsedUrlQueryInput } from 'querystring';
import type { UrlObject, URLSearchParams } from 'url';

interface Href extends Pick<UrlObject, 'pathname' | 'query'> {
  query?: ParsedUrlQueryInput;
}
type Url = Href | string;
interface NavigateOptions {
  forceOptimisticNavigation?: boolean;
}

const qs = (params?: Href['query']) => {
  if (!params) return null;

  const queryStringArray: string[] = [];

  Object.entries(params).forEach(([key, initialValue]) => {
    const value =
      typeof initialValue === 'boolean' || typeof initialValue === 'number'
        ? JSON.stringify(initialValue)
        : initialValue;
    const isObject = initialValue?.constructor === Object;

    if (!value) return;
    if (isObject) throw new Error(`객체는 올 수 없습니다.`);
    if (Array.isArray(value)) {
      const uniqueValue = Array.from(new Set(value));
      queryStringArray.push(`${key}=${uniqueValue.join(`&${key}=`)}`);
      return;
    }
    queryStringArray.push(`${key}=${value}`);
  });
  return queryStringArray.join('&');
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customRouter = (href: Url, method: any, options?: NavigateOptions): void => {
  if (typeof href === 'string') return method(href, options);
  if (!href.pathname) throw new Error('pathname이 없습니다.');
  if (href.pathname && !href.query) return method(href.pathname, options);
  if (href.query?.constructor !== Object) {
    throw new Error('query는 객체여야 합니다.');
  }

  const query: string = `${qs(href.query) ? `?${qs(href.query)}` : ''}`;
  const url: string = `${href.pathname}${query}`;
  return method(url, options);
};

const useCustomRouter = () => {
  const { forEach }: URLSearchParams = useSearchParams();
  const pathname: string = usePathname();
  const { prefetch: navigationPrefetch, push: navigationPush, replace: navigationReplace, ...router } = useRouter();

  const parseQuery = () => {
    let params: {
      [key: string]: string | string[] | number | number[] | (string | number)[];
    } = {};

    forEach((initialValue, key) => {
      const value = initialValue.toString();
      if (Object.keys(params).includes(key)) {
        params = {
          ...params,
          [key]: Array.from(new Set([...(params[key] as []), value])),
        };
        return;
      }
      params = { ...params, [key]: value };
    });

    return params;
  };

  const push = (href: Url, options?: NavigateOptions): void => {
    customRouter(href, navigationPush, options);
  };
  const replace = (href: Url, options?: NavigateOptions): void => {
    customRouter(href, navigationReplace, options);
  };
  const prefetch = (href: Url): void => {
    customRouter(href, navigationPrefetch);
  };

  const query = parseQuery();

  return { pathname, prefetch, push, query, replace, ...router };
};

export default useCustomRouter;
