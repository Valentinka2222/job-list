export interface IData {
  data: Array<IJobList>;
}
export interface IList {
  list: DataPagination;
}
export interface UseLoadScriptOptions {
  isLoaded: {
    id: string;
    googleMapsApiKey: string | '';
  };
}
export interface DataPagination {
  next: () => void;
  prev: () => void;
  jump: (page: number) => void;
  currentData: () => [] | IJobList[];
  currentPage: number;
  maxPage: number;
}
export interface LoadScriptUrlOptions {
  googleMapsApiKey: string | '';
  googleMapsClientId?: string;
  version?: string;
  language?: string;
  region?: string;
  channel?: string;
  mapIds?: string[];
  authReferrerPolicy?: 'origin';
}

export interface IJobList {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  benefits: string[];
  location: { lat: number; long: number };
  pictures: string[];
  createdAt: string;
  updatedAt: string;
  description: string;
  employment_type: string[];
}
