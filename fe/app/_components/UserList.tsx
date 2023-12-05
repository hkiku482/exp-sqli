'use client';
import { List, ListItem } from '@mui/material';
import { User } from '@/api/@types';

type Props = {
  users: User[];
};
export const UserList = ({ users }: Props) => {
  return (
    <List>
      {users && (
        <>
          {users.map(({ id, username }) => {
            return <ListItem key={id}>{username}</ListItem>;
          })}
        </>
      )}
    </List>
  );
};
