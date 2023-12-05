'use client';

import { Button, FormControl, Grid, Input, InputLabel } from '@mui/material';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useApiClient } from './AxiosProvider';

export const SearchUser = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<any>(undefined);

  const { api } = useApiClient();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setQuery(e.target.value);
    },
    [],
  );

  const handleSubmit = useCallback(async () => {
    try {
      console.debug(query);
      const r = await api?.user.unsafe.$post({ body: { query } });
      setResponse(r);
    } catch (error) {}
  }, [api, query]);

  const data: { id?: string; username?: string; extended?: string }[] =
    useMemo(() => {
      try {
        return response.map((r: { id: any; username: any; password: any }) => {
          return {
            id: r?.id ?? '',
            username: r?.username ?? '',
            extended: r?.password ?? '',
          };
        });
      } catch (error) {}
      return [];
    }, [response]);

  return (
    <Grid container spacing={2}>
      <Grid item container xs={12}>
        <Grid item xs={4} width={480}>
          <FormControl fullWidth>
            <InputLabel>ユーザID</InputLabel>
            <Input value={query} onChange={handleChange} />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handleSubmit} variant='outlined'>検索</Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {data.map(({ id, username, extended }) => {
          return (
            <Grid key={id} container>
              <Grid item xs={1}>
                {id}
              </Grid>
              <Grid item xs={1}>
                {username}
              </Grid>
              <Grid item>
                {extended}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
