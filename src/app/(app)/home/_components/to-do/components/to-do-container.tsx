import { Separator } from '@/components/ui/separator';
import ToDoHeader from './to-do-header';

const ToDoContainer = () => {
  return (
    <div className="my-20 max-w-[708px] w-[90%] h-full flex flex-col space-y-4">
      <ToDoHeader />
      <Separator className="bg-foreground" />
    </div>
  );
};

export default ToDoContainer;
