'use client';

import Placeholder from '@tiptap/extension-placeholder';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ReactComponent from './extension';
import UniqueID from '@tiptap-pro/extension-unique-id';

export const ToDoList = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      ReactComponent,
      Placeholder.configure({
        emptyNodeClass: 'my-custom-is-empty-class',
        showOnlyCurrent: false,
      }),
      UniqueID.configure({
        types: [],
      }),
    ],
    content: `<react-component />`,
  });

  return <EditorContent editor={editor} />;
};
