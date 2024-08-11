export interface IBaseModel {
  id: string;
  attributes: IBaseAtrs;
}

export interface IBaseAtrs {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IBaseResponse {
  data: any;
  meta: IMeta;
}

interface IMeta {
  pagination: IPagination;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
