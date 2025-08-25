import { Challenge, Hero, TopicGrid, WordOfDay } from '../components/home';
import Layout from '../components/layout/Layout';

const HomePage = () => {
  return (
    <Layout
      sx={{
        p: 2,
        gap: 4
      }}
    >
      <Hero />
      <Challenge />
      <WordOfDay />
      <TopicGrid />
    </Layout>
  );
};

export default HomePage;
