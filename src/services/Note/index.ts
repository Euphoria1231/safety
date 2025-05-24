import { request } from "../request";
import { CreateNoteReq, GetNoteDetailRes, NoteListRes } from "./type";

const useNoteService = () => {
  const getNoteList = (token: string): Promise<NoteListRes> => {
    return request('get', '/notes', null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const postCreateNote = (token: string, note: CreateNoteReq) => {
    const formData = new FormData();

    // 添加标题和内容到FormData
    if (note.title) {
      formData.append('title', note.title);
    } else {
      formData.append('title', '无标题');
    }
    if (note.content) {
      formData.append('content', note.content);
    } else {
      formData.append('content', '');
    }

    // 添加背景图片（如果有）
    if (note.background_image) {
      formData.append('background_image', note.background_image);
    }

    return request('post', '/notes', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  const deleteNote = (token: string, noteId: string) => {
    return request('delete', `/notes/${noteId}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const getNoteDetail = (token: string, noteId: string): Promise<GetNoteDetailRes> => {
    return request('get', `/notes/${noteId}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return {
    getNoteList,
    postCreateNote,
    deleteNote,
    getNoteDetail,
  };
};

export default useNoteService;
