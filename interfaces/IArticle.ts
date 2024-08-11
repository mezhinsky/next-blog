import { IBaseModel, IBaseAtrs, IBaseResponse } from "./IBaseModel";
import { IComment } from "./IComment";

export interface IArticle extends IBaseModel {
  attributes: IArticleAtrs;
}

interface IArticleAtrs extends IBaseAtrs {
  title: string;
  body: string;
  slug: string;
  description: string;
  comments: {
    data: IComment[];
  };
  cover: {
    data: {
      id: string;
      attributes: {
        name: string;
        alternativeText: string;
        caption: string;
        width: string;
        height: string;
        formats: {
          thumbnail: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            path: string;
            width: string;
            height: string;
            size: string;
            sizeInBytes: string;
            url: string;
          };
        };
        hash: string;
        ext: string;
        mime: string;
        size: string;
        url: string;
        previewUrl: string;
        provider: string;
        provider_metadata: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
}

export interface IArticleResponse extends IBaseResponse {
  data: IArticle[];
}
