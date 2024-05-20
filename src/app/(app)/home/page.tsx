import { auth } from '@/auth';
import { logout } from '@/lib/actions/auth.actions';
import { ToDoContainer } from './_components/to-do/components';

const Page = async () => {
  const session = await auth();

  return (
    <>
      <div className="fixed flex justify-between w-full">
        <div>{JSON.stringify(session)}</div>
        <form action={logout}>
          <button type="submit">Logout</button>
        </form>
      </div>
      <div className="flex justify-center min-h-screen">
        <ToDoContainer />
      </div>
    </>
  );
};

export default Page;
