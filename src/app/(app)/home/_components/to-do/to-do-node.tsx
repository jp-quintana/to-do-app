'use client';

import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';

import { Circle, Check } from 'lucide-react';

interface ToDoNodeProps {
  node: any;
  deleteNode: () => void;
}

export const ToDoNode = ({ node, deleteNode }: ToDoNodeProps) => {
  const handleDone = () => {
    console.log(node.textContent);
    // deleteNode();
  };

  return (
    <NodeViewWrapper className="hover:bg-muted-foreground/10 rounded-sm flex gap-x-3 items-center py-1 relative">
      <div className="absolute top-1">
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
      </div>
      <div className="pl-8">
        <NodeViewContent />
      </div>
    </NodeViewWrapper>
  );
};
