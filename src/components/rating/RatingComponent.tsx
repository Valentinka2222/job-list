import React from 'react';
import Rating from '@mui/material/Rating';

import { RatingComponentProps } from '../../types';

const RatingComponent = ({ sx, classString, bookMark, max }: RatingComponentProps) => {
  const [value, setValue] = React.useState<number | null>(0);

  return (
    <Rating
      sx={{ ...sx, ...bookMark }}
      className={classString}
      max={max}
      size="medium"
      name="no-value"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
};
export default RatingComponent;
