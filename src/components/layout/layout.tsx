import { useEffect, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { setJobList, useGlobalState } from '../../store';
import { getJobsList } from '../../getaway/getaway';
import Cards from '../cards/Cards';
import usePagination from '../../pagination/pagination';
import { IData, IJobList } from '../../interfaces';

const Layout = (): ReactElement<IJobList> => {
  const [jobList] = useGlobalState('list');
  const data = useGlobalState('list') as Partial<IData>;
  useEffect(() => {
    getJobsList().then(res => setJobList((data.data = res)));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const list: Array<IJobList> = jobList.data;
  const length = list.length;
  const PER_PAGE = Math.floor(5);
  const count = Math.ceil(length / PER_PAGE);
  const _DATA = usePagination(list, PER_PAGE);

  return (
    <>
      <Cards list={_DATA} count={count} />
      <Outlet />
    </>
  );
};

export default Layout;
