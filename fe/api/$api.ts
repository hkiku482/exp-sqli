import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_tli9od } from './user';
import type { Methods as Methods_13i5w2z } from './user/_id@string';
import type { Methods as Methods_8prwy0 } from './user/unsafe';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/user';
  const PATH1 = '/user/unsafe';
  const GET = 'GET';
  const POST = 'POST';
  const DELETE = 'DELETE';
  const PATCH = 'PATCH';

  return {
    user: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_13i5w2z['get']['resBody'], BasicHeaders, Methods_13i5w2z['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_13i5w2z['get']['resBody'], BasicHeaders, Methods_13i5w2z['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          patch: (option: { body: Methods_13i5w2z['patch']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_13i5w2z['patch']['status']>(prefix, prefix1, PATCH, option).send(),
          $patch: (option: { body: Methods_13i5w2z['patch']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_13i5w2z['patch']['status']>(prefix, prefix1, PATCH, option).send().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_13i5w2z['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods_13i5w2z['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      unsafe: {
        post: (option: { body: Methods_8prwy0['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_8prwy0['post']['resBody'], BasicHeaders, Methods_8prwy0['post']['status']>(prefix, PATH1, POST, option).json(),
        $post: (option: { body: Methods_8prwy0['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_8prwy0['post']['resBody'], BasicHeaders, Methods_8prwy0['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH1}`,
      },
      post: (option: { body: Methods_tli9od['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_tli9od['post']['status']>(prefix, PATH0, POST, option).send(),
      $post: (option: { body: Methods_tli9od['post']['reqBody'], config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods_tli9od['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_tli9od['get']['resBody'], BasicHeaders, Methods_tli9od['get']['status']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_tli9od['get']['resBody'], BasicHeaders, Methods_tli9od['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods_by08hd['get']['status']>(prefix, '', GET, option).send(),
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods_by08hd['get']['status']>(prefix, '', GET, option).send().then(r => r.body),
    $path: () => `${prefix}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
