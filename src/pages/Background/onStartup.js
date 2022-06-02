import { refreshExtensionData } from '../../common/dataProvider';

export const onStartup = () => {
  refreshExtensionData();
};
