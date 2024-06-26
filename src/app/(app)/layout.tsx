interface LandingLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: LandingLayoutProps) => {
  return <div className="relative">{children}</div>;
};

export default AppLayout;
