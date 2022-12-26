import Layout from 'components/layout/main';
import { ReactElement } from 'react';

export function Blogs() {
  return <div className="text-2xl font-bold dark:text-white">Coming Soon</div>;
}
export default Blogs;

Blogs.getLayout = function getLayout(resume: ReactElement) {
  return <Layout>{resume}</Layout>;
};
