import { IBaseModel, IBaseAtrs } from "./IBaseModel";
import { IBaseResponse } from "./IBaseModel";

export interface IComment extends IBaseModel {
  attributes: ICommentAtrs;
}

interface ICommentAtrs extends IBaseAtrs {
  name: string | null;
  body: string | null;
}

export interface ICommentsResponse extends IBaseResponse {
  data: IComment[];
}
