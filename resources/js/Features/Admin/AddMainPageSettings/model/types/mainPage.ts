export interface MainPageSchema {
  isLoading: boolean;
  error?: string;
  data: MainPageSettings;
}
// export type mainPageSchema = mainPageSettings[];

export type MainPageSettings = [
  CurrentTitle,
  { header: string },
  { title: string },
  { img_path: string },
  { all_title: ITitle[] },
  { all_header: IHeader[] },
  { all_subheader: ISubheader[] },
  { all_img_path: IImgPath[] },
];

export interface CurrentTitle {
  title: string;
}

export interface ITitle {
  id: number;
  title: string;
}

export interface IHeader {
  id: number;
  header: string;
}

export interface ISubheader {
  id: number;
  subheader: string;
}

export interface IImgPath {
  id: number;
  img_path: string;
}
