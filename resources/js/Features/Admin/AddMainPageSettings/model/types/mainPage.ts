// export interface MainPageSchema {
//   settings: MainPageSettings;
// }
// // export type mainPageSchema = mainPageSettings[];

// export type MainPageSettings = [
//   current_settings: CurrentSettings,
//   { all_title: ITitle[] },
//   { all_header: IHeader[] },
//   { all_subheader: ISubheader[] },
//   { all_img_path: IImgPath[] },
// ];

// export interface CurrentSettings {
//   title: string;
//   header: string;
//   subheader: string;
//   image_path: string;
// }
// export interface SettingsLists {
//   all_title: ITitle[];
// }
// export interface AddSettingsFields {
//   title?: string;
//   header?: string;
//   subheader?: string;
//   image_path?: string;
// }

// export interface ITitle {
//   id: number;
//   title: string;
// }

// export interface IHeader {
//   id: number;
//   header: string;
// }

// export interface ISubheader {
//   id: number;
//   subheader: string;
// }

// export interface IImgPath {
//   id: number;
//   img_path: string;
// }
export interface MainPageSchema {
  current_settings: CurrentSettings;
  list_settings: ListSettings;
}

export interface CurrentSettings {
  title: string;
  header: string;
  subheader: string;
  img_path: string;
}

export interface ListSettings {
  all_title: ITitle[];
  all_header: IHeader[];
  all_img_path: AllImgPath[];
  all_subheader: AllSubheader[];
}

export interface ITitle {
  id: number;
  title: string;
}

export interface IHeader {
  id: number;
  header: string;
}

export interface AllImgPath {
  id: number;
  img_path: string;
}

export interface AllSubheader {
  id: number;
  subheader: string;
}
