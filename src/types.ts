import { DataPagination, IJobList } from './interfaces';

export type MapProps = {
  center: google.maps.LatLng | google.maps.LatLngLiteral;
};
export type Libraries = 'places'[];
export type CardProps = {
  card: IJobList;
};
export type DataProps = {
  list: DataPagination;
  count: number;
};
export type ContactsProps = {
  address: string;
  phone: string;
  email: string;
  name: string;
};
export type DividerCompProps = {
  classString: string;
};
export type ImgListProps = {
  detail: { pictures: string[] };
};
export type RatingComponentProps = {
  sx: { [key: string]: number | string | {} };
  classString: string;
  max: number;
};
export type TypesProps = {
  employment: string[];
  benefits: string[];
};
