'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, FormControl, Grid, Input, InputLabel } from '@mui/material';
import { useCallback } from 'react';
import { Form, useForm } from 'react-hook-form';
import { KeyedMutator } from 'swr';
import { Schema, schema } from '../schema';
import { useApiClient } from './AxiosProvider';
import { User } from '@/api/@types';

type Props = {
  mutate: KeyedMutator<User[] | undefined>;
};
export const CreateForm = ({ mutate }: Props) => {
  const { register, handleSubmit, control } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const { api } = useApiClient();

  const onSubmit = useCallback(
    async (values: Schema) => {
      try {
        await api?.user.post({
          body: values,
        });
        mutate();
      } catch (error) {
        throw error;
      }
    },
    [api, mutate],
  );

  return (
    <Form control={control}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>名前</InputLabel>
            <Input {...register('username')} />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>パスワード</InputLabel>
            <Input {...register('password')} type="password" />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" onClick={handleSubmit(onSubmit)}>
            登録
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};
