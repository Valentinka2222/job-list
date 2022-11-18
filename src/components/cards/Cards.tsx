import React, { useState } from 'react';

import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

import { IJobList } from '../../interfaces';
import { DataProps } from '../../types';
import Card from '../card/Card';

import './cards.scss';

const Cards: React.FC<DataProps> = ({ list, count }: DataProps) => {
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    list.jump(p);
  };
  return (
    <>
      <Box className="board pb-1.1  flex h-full w-full flex-1 flex-col px-2.5 pt-2.5 ">
        <List sx={{ width: '100%', height: '100%', backgroundColor: '#e6e9f2' }}>
          {list.currentData().map((card: IJobList) => {
            return <Card card={card} key={card.id} />;
          })}
        </List>
        <Pagination
          onChange={handleChange}
          count={count}
          page={page}
          className="mg-10 mt-4.5 hadow-black m-auto flex h-10 max-w-lg justify-center rounded-xl bg-white shadow-sm"
        />
      </Box>
    </>
  );
};

export default Cards;
