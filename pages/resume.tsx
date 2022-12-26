import Layout from 'components/layout/main';
import { ReactElement } from 'react';

export function Resume() {
  return <div className="text-2xl font-bold dark:text-white">Coming Soon</div>;
}
export default Resume;

Resume.getLayout = function getLayout(resume: ReactElement) {
  return <Layout>{resume}</Layout>;
};
