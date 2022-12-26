import Layout from 'components/layout/main';
import { ReactElement } from 'react';

export function Stuffs() {
  return <div className="text-2xl font-bold dark:text-white">Coming Soon</div>;
}
export default Stuffs;

Stuffs.getLayout = function getLayout(stuffs: ReactElement) {
  return <Layout>{stuffs}</Layout>;
};
