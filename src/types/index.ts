export interface IRequestBody {
  operationName: string;
  query: string;
  variables: any;
}

export interface IMedia {
  bannerImage: string;
  coverImage: CoverImage;
}

export interface CoverImage {
  color: string;
}
