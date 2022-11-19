import React from 'react';
import Rating from '@mui/material/Rating';

import { RatingComponentProps } from '../../types';

const RatingComponent = ({ sx, classString, max }: RatingComponentProps) => {
  const [value, setValue] = React.useState<number | null>(0);

  return (
    <div className="xl:hidden block">
      <Rating
        sx={{ ...sx }}
        className={classString}
        max={max}
        size="medium"
        name="no-value"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
};
export default RatingComponent;
