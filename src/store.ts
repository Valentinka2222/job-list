import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  list: {
    data: [],
  },
});

export const setJobList = (dataList:[]) => {
  setGlobalState('list', prev => ({
    ...prev,
    data: [].concat(dataList),
  }));
};

export { useGlobalState };
