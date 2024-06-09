'use client';

import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';

import { Checkbox } from '@/components/ui/checkbox';

interface ToDoNodeProps {
  selected: boolean;
}

export const ToDoNode = ({ selected }: ToDoNodeProps) => {
  return (
    <NodeViewWrapper className="border flex gap-x-3 items-center">
      <Checkbox onCheckedChange={() => console.log('hola')} />
      <NodeViewContent />
    </NodeViewWrapper>
  );
};
