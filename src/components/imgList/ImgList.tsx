import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { ImgListProps } from '../../types';

const ImgList: React.FC<ImgListProps> = ({ detail }) => {
  const imageListStyle = { width: '100%', height: '344px', display: 'flex', marginTop: '15px' };

  return (
    <ImageList sx={imageListStyle} cols={3} rowHeight={133}>
      {detail.pictures.map((item: string, index: number) => {
        return (
          <ImageListItem
            key={index}
            sx={{
              margin: '4px 10px 0px 0',
              borderRadius: '8px',
            }}
          >
            <img
              height="200px"
              width="300px"
              className="rounded-lg"
              src={`${item}?w=343&h=343&fit=crop&auto=format`}
              loading="lazy"
              alt="Places"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};
export default ImgList;
