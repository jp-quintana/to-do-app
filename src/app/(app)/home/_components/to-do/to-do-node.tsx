'use client';

import { useState } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';

import { Circle, Check, Square, SquareCheck, GripVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  const [drag, setDrag] = useState(false);
  const [done, setDone] = useState(false);

  const handleDone = () => {
    setDone(true);
    updateAttributes({
      done: true,
    });

    setTimeout(() => {
      deleteNode();
    }, 700);
  };

  return (
    <NodeViewWrapper
      className={cn(
        'hover:bg-muted-foreground/10 rounded-sm flex gap-x-3 items-center py-1 relative group select-none',
        done && 'opacity-0 transition-opacity duration-700'
      )}
      contentEditable={!drag && !node.attrs.done}
    >
      <GripVertical
        onMouseDown={() => setDrag(true)}
        onMouseMove={() => setDrag(false)}
        className={cn(
          'absolute left-[-24px] opacity-0 group-hover:opacity-100 transition-opacity cursor-grab select-none',
          done && 'pointer-events-none'
        )}
        data-drag-handle
      />
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
          className="absolute top-1 left-1 cursor-pointer select-none"
        />
      ) : (
        <SquareCheck className="absolute top-1 left-1 cursor-pointer select-none" />
      )}

      <div className="pl-9 w-full">
        <NodeViewContent />
      </div>
    </NodeViewWrapper>
  );
};
