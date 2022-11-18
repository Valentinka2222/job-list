import moment from 'moment';

export const getCreatedDate = (createdDate: string, updatedDate: string) => {
  const timePost = moment(new Date(updatedDate)).diff(moment(new Date(createdDate)), 'days');
  return timePost;
};
export const postDate = (createdAt: string, updatedAt: string) =>
  `Posted ${getCreatedDate(createdAt, updatedAt)} days ago`;

export const replace = (description: string) => {
  const regex = /^ +| +$|( ) +/g;
  return description
    .replace(regex, '$1')
    .split('\n')
    .filter((el: string) => el);
};
