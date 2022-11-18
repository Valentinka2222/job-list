import DividerComponent from '../divider/DividerComponent';

import { TypesProps } from '../../types';

const Types = ({ employment, benefits }: TypesProps) => {
  return (
    <div className="xl:order-2">
      <p className="mb-2.5 mt-14 text-3xl  font-bold xl:mt-20"> Additional info</p>
      <DividerComponent classString="mb-5  w-5/6" />
      <span className="mt-3.5 mb-2.5  flex  text-lg ">Employment type</span>
      <div className="justify-flex-start mb-2 flex ">
        {employment.map((type: string, index: number) => (
          <button key={index} className="btn btn-blue">
            {type}
          </button>
        ))}
      </div>
      <span className="mt-3.5 mb-2.5 flex   text-lg ">Benefits</span>
      <div className="justify-flex-start mb-8 flex h-12">
        {benefits.map((type: string, index: number) => (
          <button className="btn btn-yellow" key={index}>
            {type}
          </button>
        ))}
      </div>
      <p className="mb-2.5  mt-16 text-3xl font-bold xl:hidden"> Contacts</p>
      <DividerComponent classString="mb-3 xl:hidden" />
    </div>
  );
};
export default Types;
