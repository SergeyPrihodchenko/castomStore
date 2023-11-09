import { useAppDispatch } from '@/Shared/lib/hooks/useAppDispatch/useAppDispatch';
import { MouseEventHandler, useEffect } from 'react';
import { fetchSettings } from '../../model/services/fetchSettings';
import { useAppSelector } from '@/Shared/lib/hooks/useAppSelector/useAppSelector';
import { getTitle } from '../../model/selectors/getTitle/getTitle';
import { getTitleList } from '../../model/selectors/getTitleList/getTitleList';
import { getHeader } from '../../model/selectors/getHeader/getHeader';
import { addMainPageSettingsActions } from '../../model/slice/addSettingsSlice';
import { ITitle } from '../../model/types/mainPage';
import { addSettings } from '../../model/services/addSettings';

interface AddSettingsFormProps {}
export const AddSettingsForm = (props: AddSettingsFormProps) => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.addMainPageSettings);
  console.log('settings', settings.data);

  const titleStore = useAppSelector(getTitle);
  const headerStore = useAppSelector(getHeader);
  const titleStoreList = useAppSelector(getTitleList);
  const handleStoreTitle = (value: string) => {
    dispatch(addMainPageSettingsActions.setTitle(value));
  };

  console.log('titleStore', titleStore);
  useEffect(() => {
    dispatch(fetchSettings());
  }, []);

  const handleClick = () => {
    dispatch(addSettings({ title: titleStore }));
  };

  return (
    <>
      {settings.error && <p>{settings.error}</p>}
      <form>
        <div className="">
          <div className="flex gap-3">
            <input
              className="text-gray-950"
              type="text"
              name="title"
              defaultValue={titleStore}
              onChange={(e) => handleStoreTitle(e.target.value)}
            />
            <button
              type="button"
              onClick={() => handleClick()}
            >
              Добавить в список
            </button>
          </div>
          <ul className="max-h-[80px] overflow-auto">
            {titleStoreList?.map((item: ITitle) => <li key={item.id}>{item.title}</li>)}
          </ul>
        </div>
        <div className="">
          <span className="text-red-400">функционал не сделан</span>
          <div className="flex gap-3">
            <input
              className="text-gray-950"
              type="text"
              name="header"
              defaultValue={headerStore}
            />
            <button>Добавить в список</button>
          </div>
          <ul></ul>
        </div>
        <div className="">
          <span className="text-red-400">функционал не сделан</span>
          <div className="flex gap-3">
            <input
              type="text"
              name="subheader"
            />
            <button>Добавить в список</button>
          </div>
          <ul></ul>
        </div>
      </form>
    </>
  );
};
