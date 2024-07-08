import { Nav } from './_components/nav';

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <div>
      <header className="relative">
        <Nav />
      </header>
      {children}
    </div>
  );
};

export default LandingLayout;
