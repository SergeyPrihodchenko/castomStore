export type { MainPageSchema } from './model/types/mainPage';
export {
  addMainPageSettingsReducer,
  addMainPageSettingsActions,
} from './model/slice/addSettingsSlice';

export { AddSettingsForm as default } from './ui/AddMainPageSettingsForm/AddSettingsForm';
