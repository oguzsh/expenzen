import { useUserData } from 'pages/__generated__/Dashboard.gql';

import BaseLayout from '../layouts/BaseLayout';

const Dashboard = () => {
  const { data, loading, error } = useUserData();

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return <BaseLayout user={data?.user}>test</BaseLayout>;
};

export default Dashboard;
