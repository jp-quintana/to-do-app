'use client';

import { useState, useEffect } from 'react';
import { useDebounce } from '@/app/hooks/useDebounce';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ReactComponent from './extension';
import UniqueID from '@tiptap-pro/extension-unique-id';

export const ToDoList = () => {
  const [input, setInput] = useState('');

  const debounceValue = useDebounce(input);

  useEffect(() => {
    if (debounceValue) {
      window.localStorage.setItem('editor-content', debounceValue);
    }
  }, [debounceValue]);

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
      if (
        editor.state.doc.textContent.trim().length === 1 &&
        editor.getJSON().content?.[0].type === 'paragraph'
      ) {
        editor.commands.setContent({
          type: 'doc',
          content: [
            {
              type: 'toDoNode',
              content: [{ type: 'text', text: editor.state.doc.textContent }],
            },
          ],
        });
      }

      if (
        editor.state.doc.textContent.trim().length > 1 &&
        editor.getJSON().content?.[0].type === 'paragraph'
      ) {
        const json = editor.getJSON();
        json.content?.shift();
        editor.commands.setContent(json);
        editor.commands.focus('start');
      }

      // if (editor.state.doc.textContent.trim().length === 0) {
      //   editor.commands.setContent({
      //     type: 'doc',
      //     content: [{ type: 'toDoNode' }],
      //   });
      // }

      setInput(JSON.stringify(editor.getJSON()));
    },
  });

  return <EditorContent editor={editor} />;
};
