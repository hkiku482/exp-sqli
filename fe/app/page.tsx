'use client';

import { Grid, Typography } from '@mui/material';
import useSWR from 'swr';
import { useApiClient } from './_components/AxiosProvider';
import { CreateForm } from './_components/CreateForm';
import { SearchUser } from './_components/SearchUser';
import { UserList } from './_components/UserList';

export default function Home() {
  const { api } = useApiClient();
  const { data, mutate } = useSWR(api?.user.$path(), () => api?.user.$get());
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" mb={2}>
          新規登録
        </Typography>
        <CreateForm mutate={mutate} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" mb={2}>
          検索
        </Typography>
        <SearchUser />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" mb={2}>
          すべてのユーザ
        </Typography>
        <UserList users={data ?? []} />
      </Grid>
    </Grid>
  );
}
