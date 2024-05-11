import { Nav } from './_components';

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default LandingLayout;
