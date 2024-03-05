import { ControlledGrid } from '../components/ControlledGrid/ControlledGrid';
import { gridImages } from './Home.constants';

export const Home = () => {
  return (
    <main className="min-h-screen">
      <ControlledGrid images={gridImages} />
    </main>
  );
};
