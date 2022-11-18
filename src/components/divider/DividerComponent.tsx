import Divider from '@mui/material/Divider';

import { DividerCompProps } from '../../types';

const DividerComponent: React.FC<DividerCompProps> = ({ classString }) => {
  return (
    <Divider
      component="p"
      sx={{
        background: 'rgba(58, 69, 98, 1)',
      }}
      className={classString}
    />
  );
};
export default DividerComponent;
