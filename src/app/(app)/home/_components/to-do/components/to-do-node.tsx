'use client';

import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';

import { Checkbox } from '@/components/ui/checkbox';

interface ToDoNodeProps {
  selected: boolean;
  deleteNode: () => void;
}

export const ToDoNode = ({ selected, deleteNode }: ToDoNodeProps) => {
  const handleCheck = () => {
    deleteNode();
  };

  return (
    <NodeViewWrapper className="border flex gap-x-3 items-center">
      <Checkbox onCheckedChange={handleCheck} />
      <NodeViewContent />
    </NodeViewWrapper>
  );
};
