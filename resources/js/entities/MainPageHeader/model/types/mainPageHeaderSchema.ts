export interface MainPageTitle {
  title: string;
}
export interface MainPageHeader {
  header: string;
}
export interface MainPageSubheader {
  title: string;
}
export interface MainPageImg {
  img_path: string;
}

export interface ITitle {
  id: number;
  title: string | null;
}

export interface IHeader {
  id: number;
  header: string | null;
}

export interface ISubheader {
  id: number;
  subheader: string | null;
}

export interface IImagePath {
  id: number;
  img_path: string | null;
}

export interface MainPageHeaderSchema {
  isLoading?: boolean;
  error?: string;
  data: MainPage;
}

export type MainPage = [
  MainPageTitle,
  MainPageHeader,
  MainPageSubheader,
  MainPageImg,
  { all_title: ITitle[] },
  { all_header: IHeader[] },
  { all_subheader: ISubheader[] },
  { all_img_path: IImagePath[] },
];
