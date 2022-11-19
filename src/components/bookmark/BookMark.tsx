import React from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const BookMark = () => {
  const [isColor, setIsColor] = React.useState<boolean>(false);
  return (
    <BookmarkBorderIcon
      onClick={() => {
        setIsColor(!isColor);
      }}
      sx={{
        color: isColor ? '#3A4562' : '#70778B',
        width: '32px',
        height: '32px',
      }}
      className=" xl:absolute xl:top-4 xl:right-8 "
    />
  );
};
export default BookMark;
