import { useAppDispatch } from '@/Shared/lib/hooks/useAppDispatch/useAppDispatch';
import styles from './MainPageSettingsForm.module.css';
import { useCallback } from 'react';
import { addMainPageSettingsActions } from '../..';
import { useSelector } from 'react-redux';
import { getFields } from '../../model/selectors/getFields/getFields';
import { addSettings } from '../../model/services/addSettings/addSettings';

interface MainPageSettingsFormProps {
  className?: string;
}

export const MainPageSettingsForm = (props: MainPageSettingsFormProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { title, header, subheader, image } = useSelector(getFields);
  const handleTitleChange = useCallback(
    (value: string) => {
      dispatch(addMainPageSettingsActions.setTitle(value));
    },
    [dispatch],
  );
  const handleHeaderChange = useCallback(
    (value: string) => {
      dispatch(addMainPageSettingsActions.setHeader(value));
    },
    [dispatch],
  );
  const handleSubheaderChange = useCallback(
    (value: string) => {
      dispatch(addMainPageSettingsActions.setSubheader(value));
    },
    [dispatch],
  );
  const handleSubmit = useCallback(() => {
    dispatch(addSettings({ title, header, subheader, image }));
  }, [dispatch, title, header, subheader, image]);
  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            name="header"
            value={header}
            placeholder="Введите заголовок"
            onChange={(e) => handleHeaderChange(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Введите название магазина"
            onChange={(e) => handleTitleChange(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="subheader"
            value={subheader}
            placeholder="Введите подзаголовок"
            onChange={(e) => handleSubheaderChange(e.target.value)}
          />
        </div>
        <div>
          {/* <input
            type="text"
            value={image}
          /> */}
        </div>
        <button onClick={handleSubmit}>Применить</button>
      </form>
    </div>
  );
};
