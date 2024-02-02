export interface Step {
  index: number;
  content: string;
}

export interface IMedia {
  image: string;
}

export interface CdnResponse {
  data: {
    width: number;
    height: number;
    image: ImageInfo;
  };
}

export interface ImageInfo {
  filename: string;
  url: string;
}
