interface LandingLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: LandingLayoutProps) => {
  return <div>{children}</div>;
};

export default AppLayout;
