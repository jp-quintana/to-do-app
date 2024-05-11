interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="my-20">{children}</div>
    </div>
  );
};

export default AuthLayout;
