import { auth } from '@/auth';
import { logout } from '@/lib/actions/auth.actions';

const Page = async () => {
  const session = await auth();

  return (
    <>
      <div>{JSON.stringify(session)}</div>
      <form action={logout}>
        <button type="submit">Logout</button>
      </form>
    </>
  );
};

export default Page;
