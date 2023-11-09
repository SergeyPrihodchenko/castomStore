export interface MainPageSchema {
  isLoading: boolean;
  error?: string;
  data: MainPageSettings;
}
// export type mainPageSchema = mainPageSettings[];

export type MainPageSettings = [
  { title: string },
  { header: string },
  { title: string },
  { img_path: string },
  { all_title: ITitle[] },
  { all_header: AllHeader[] },
  { all_subheader: AllSubheader[] },
  { all_img_path: AllImgPath[] },
];

export interface ITitle {
  id: number;
  title: string;
}

export interface AllHeader {
  id: number;
  header: string;
}

export interface AllSubheader {
  id: number;
  subheader: string;
}

export interface AllImgPath {
  id: number;
  img_path: string;
}
