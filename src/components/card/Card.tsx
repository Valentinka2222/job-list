import React from 'react';
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RatingComponent from '../rating/RatingComponent';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import { postDate } from '../../utils/utils';
import BookMark from '../bookmark/BookMark';
import { CardProps } from '../../types';

import './card.scss';

const Card: React.FC<CardProps> = ({ card }) => {
  const bull = (
    <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
      •
    </Box>
  );
  const { createdAt, updatedAt, pictures, id, name, address, title } = card;

  return (
    <>
      <ListItem
        sx={{
          background: {
            sm: '#FFFFFF',
            md: '#FFFFFF',
            xl: '#FFFFFF',
            lg: '#FFFFFF',
            xs: '#EFF0F5',
          },
          height: '50px',
        }}
        className="card relative"
      >
        <BookMark />
        <ListItemAvatar>
          <Avatar
            sx={{ margin: '0 19px 0 16px ', width: '66px', height: '66px' }}
            alt="Remy Sharp"
            src={pictures[Math.floor(Math.random() * pictures.length)]}
          />
        </ListItemAvatar>
        <div className=" w-full pr-4  pb-4 xl:order-2 xl:flex xl:flex-row xl:pr-0">
          <ListItemButton
            sx={{
              padding: 0,
            }}
            className=" xl:order-1  xl:flex xl:items-center xl:p-0 "
          >
            <RatingComponent
              classString="xl:m-auto"
              bookMark={null}
              max={5}
              sx={{
                color: '#384564',
              }}
            />
            <div className="ml-auto flex h-full items-end  p-0  xl:pt-5">
              {postDate(createdAt, updatedAt)}
            </div>
          </ListItemButton>
          <Box className="w-2/3">
            <ListItemText
              secondary={
                <React.Fragment>
                  <NavLink to={`details/${id}`}>
                    <span className="dark-grey mb-2 block text-base">{title}</span>
                  </NavLink>
                  <span className="flint mb-2 block text-base">
                    {name}
                    {bull} {address}
                  </span>
                </React.Fragment>
              }
            />
            <ListItemIcon>
              <div className="pt-4.5 flex w-full pr-4">
                <div className="mr-3">
                  <LocationOnIcon />
                </div>
                <span className="flint block text-end text-base">{address}</span>
              </div>
            </ListItemIcon>
          </Box>
        </div>
      </ListItem>
    </>
  );
};

export default Card;
