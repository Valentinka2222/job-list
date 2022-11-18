import ShareIcon from '@mui/icons-material/Share';

import BookMark from '../bookmark/BookMark';
import RatingComponent from '../rating/RatingComponent';

import '../../colors.scss';

const Navigation = () => {
  const bookMark = {
    xs: 'block',
    md: 'block',
    sm: 'block',
    lg: 'block',
    xl: 'none',
  };
  return (
    <div className="mt-6 mb-8 flex xl:absolute xl:-top-4 xl:right-0">
      <RatingComponent
        classString=""
        bookMark={bookMark}
        max={1}
        sx={{
          display: bookMark,
          color: '#3A4562',
        }}
      />
      <div className="absolute -top-5 left-9 ">
        <BookMark />
      </div>
      <div className="xl:none">
        <label className="grey ml-3 mr-9 text-base">Save to my list</label>
        <ShareIcon />
      </div>
      <label className="grey  ml-2.5 text-base">Share</label>
    </div>
  );
};
export default Navigation;
