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
        types: ['toDoNode'],
      }),
    ],
    content: JSON.parse(
      window.localStorage.getItem('editor-content') ||
        '{"type":"doc","content":[{"type":"toDoNode"}]}'
    ),
    onUpdate: ({ editor }) => {
      if (editor.state.doc.textContent.trim().length === 0)
        editor.commands.setContent({
          type: 'doc',
          content: [{ type: 'toDoNode' }],
        });
      const jsonContent = JSON.stringify(editor.getJSON());
      window.localStorage.setItem('editor-content', jsonContent);
    },
  });

  return <EditorContent editor={editor} />;
};
