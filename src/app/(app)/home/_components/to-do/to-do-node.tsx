'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';

import { Circle, Check, Square, SquareCheck, GripVertical } from 'lucide-react';

interface ToDoNodeProps {
  node: any;
  deleteNode: () => void;
  updateAttributes: any;
}

export const ToDoNode = ({
  node,
  deleteNode,
  updateAttributes,
}: ToDoNodeProps) => {
  const handleDone = () => {
    updateAttributes({
      done: !node.attrs.done,
    });
    console.log(node);
    // deleteNode();
  };

  return (
    <NodeViewWrapper className="hover:bg-muted-foreground/10 rounded-sm flex gap-x-3 items-center py-1 relative group">
      <GripVertical className="absolute left-[-24px] opacity-0 group-hover:opacity-100 transition-opacity cursor-grab" />
      {/* <div className="absolute top-1">
        <div
          onClick={handleDone}
          className="flex justify-center items-center relative group cursor-pointer"
        >
          <Check
            size={14}
            strokeWidth={3}
            className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-100"
          />
          <Circle />
        </div>
      </div> */}
      {/* <Checkbox
        defaultChecked={node.attrs.done}
        onCheckedChange={handleDone}
        className="absolute top-2 left-1"
      /> */}
      {!node.attrs.done ? (
        <Square
          onClick={handleDone}
          className="absolute top-1 left-1 cursor-pointer"
        />
      ) : (
        <SquareCheck
          onClick={handleDone}
          className="absolute top-1 left-1 cursor-pointer"
        />
      )}

      <div className="pl-9 w-full">
        <NodeViewContent />
      </div>
    </NodeViewWrapper>
  );
};
