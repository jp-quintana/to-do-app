'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import ReactComponent from './extension';

export const ToDoList = () => {
  const editor = useEditor({
    extensions: [StarterKit, ReactComponent],
    content: `
    <react-component>
    <p>This is editable. You can create a new component by pressing Mod+Enter.</p>
    </react-component>
    `,
  });

  return <EditorContent editor={editor} />;
};
