'use client';

import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';

export const ToDoNode = () => {
  return (
    <NodeViewWrapper>
      <span contentEditable={false}>New node</span>

      <NodeViewContent />
    </NodeViewWrapper>
  );
};
