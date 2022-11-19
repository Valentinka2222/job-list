import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import Container from '@mui/material/Container';

import logo from '../../images/Arrow.png';
import { useGlobalState } from '../../store';
import { IJobList } from '../../interfaces';
import { replace, postDate } from '../../utils/utils';
import Map from '../map/Map';
import Types from '../types/Types';
import ImgList from '../imgList/ImgList';
import Navigation from '../navigation/navigation';
import DividerComponent from '../divider/DividerComponent';
import Contacts from '../contacts/Contacts';

import './details.scss';
import '../../colors.scss';

const Details: React.FC = () => {
  const params = useParams();
  const [jobList] = useGlobalState('list');
  const detail: IJobList | undefined = jobList.data.find(
    (el: IJobList) => el.id === params.detailsId,
  );
  if (detail === undefined) {
    throw new TypeError('Details undefined');
  }
  const {
    location,
    description,
    phone,
    email,
    title,
    salary,
    createdAt,
    updatedAt,
    benefits,
    employment_type,
    name,
    address,
  } = detail;

  const { lat, long } = location;
  const center = {
    lat: Number(lat),
    lng: Number(long),
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingBottom: '162px',
        position: 'relative',
      }}
    >
      <div className=" xl:flex xl:items-start">
        <div className=" dark-grey my-6  mx-3.5  md:ml-0 xl:relative xl:flex xl:flex-col">
          <div className="text-3xl font-bold ">Job Details</div>
          <DividerComponent classString="" />
          <button className="btn-apply auto  hidden xl:mt-10 xl:mr-auto xl:mb-8 xl:flex">
            APPLY NOW
          </button>
          <Navigation />
          <div className="post ">
            <span className="post__title  flex grow text-2xl font-bold xl:-order-2 xl:pr-14 ">
              {title}
            </span>
            <div className="max-m-md-50  order-2 flex flex-col xl:-order-2 xl:items-start">
              <p className="text-right text-lg  ">Brutto, per year</p>
              <p className="text-right text-xl  font-bold   ">{`€ ${salary}`}</p>
            </div>
            <p className="post__date  light-grey my-2 mr-auto  flex items-center text-base">
              {postDate(createdAt, updatedAt)}
            </p>
          </div>
          <p className="mt-3.5 mb-11 text-lg xl:mt-0">{replace(description)[0]}</p>
          <p className="text-xl font-bold xl:mb-2">{replace(description)[2]}</p>
          <p className="mb-6.5  text-lg">{replace(description)[3]}</p>
          <p className="mb-7 mt-6 text-xl font-bold">{replace(description)[5]}</p>
          <p className="mb-8 text-lg ">{replace(description)[6]}</p>
          <button className="btn-apply m-auto flex xl:mb-8 xl:mt-10 xl:hidden">APPLY NOW</button>
          <div className="xl:order-3 xl:mt-20">
            <p className="mb-2.5 text-3xl font-bold">Attached images</p>
            <DividerComponent classString="mb-6" />
            <ImgList detail={detail} />
          </div>
          <Types employment={employment_type} benefits={benefits} />
        </div>
        <div className="contacts m-auto xl:mt-14 xl:ml-28 ">
          <Contacts address={address} phone={phone} email={email} name={name} />
          <div className="xl:ml-30 m-auto">
            <Map center={center} />
          </div>
        </div>
      </div>

      <NavLink to="/" className="btn-return">
        <img className="h-4.5 w-2.5" src={logo} alt="Icon Arrow" />
        <span className="z-10 ml-5 ">RETURN TO JOB BOARD</span>
      </NavLink>
    </Container>
  );
};

export default Details;
