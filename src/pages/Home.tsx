import { ControlledGrid } from '../components/ControlledGrid/ControlledGrid';
import { gridConfig, gridImages } from './Home.constants';

export const Home = () => {
  return (
    <main className="min-h-screen">
      <ControlledGrid images={gridImages} config={gridConfig} />
    </main>
  );
};
