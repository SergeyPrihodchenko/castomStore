import { useSelector } from 'react-redux';
import { MainPageNavbar } from '../mainPageNavbar/mainPageNavbar';
import { getMainPageTitle } from '../../model/selectors/getMainPageTitle/getMainPageTitle';
import { getMainPageImage } from '../../model/selectors/getMainPageImage/getMainPageImage';
import { MainPageBanner } from '../mainPageBanner/MainPageBanner';
import { getHeader } from '../../model/selectors/getHeader/getHeader';
import Typography from '@mui/material/Typography';
import { getSubheader } from '../../model/selectors/getSubheader/getSubheader';

export const MainPageHeader = () => {
  const title = useSelector(getMainPageTitle);
  const imagePath = useSelector(getMainPageImage);
  const heading = useSelector(getHeader);
  const subHeading = useSelector(getSubheader);
  return (
    <>
      <MainPageBanner img_path={imagePath}>
        <>
          <Typography
            variant="h1"
            gutterBottom
            color={'#FFF'}
          >
            {heading}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            color={'#FFF'}
          >
            {subHeading}
          </Typography>
        </>
      </MainPageBanner>
      <MainPageNavbar title={title} />
    </>
  );
};
