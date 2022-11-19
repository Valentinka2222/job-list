import ShareIcon from '@mui/icons-material/Share';

import BookMark from '../bookmark/BookMark';
import RatingComponent from '../rating/RatingComponent';

import '../../colors.scss';

const Navigation = () => {
  return (
    <div className="mt-6 mb-8 flex xl:absolute xl:-top-4 xl:right-0">
      <RatingComponent
        classString=""
        max={1}
        sx={{
          color: '#3A4562',
        }}
      />
      <div className="xl:absolute xl:-top-5 xl:left-9 hidden xl:block">
        <BookMark />
      </div>
      <div>
        <label className="grey ml-3 mr-9 text-base">Save to my list</label>
        <ShareIcon />
      </div>
      <label className="grey  ml-2.5 text-base">Share</label>
    </div>
  );
};
export default Navigation;
