/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState, useCallback } from 'react';
import useNoteService from '../../services/Note';
import { AuthContext } from '../../contexts/Auth';
import { Toast } from '@ant-design/react-native';
import { CreateNoteReq, Note, NoteListResItem } from '../../services/Note/type';

const useNote = () => {
  const { getNoteList, postCreateNote, deleteNote, getNoteDetail } = useNoteService();
  const { state } = useContext(AuthContext);
  const [noteList, setNoteList] = useState<NoteListResItem[]>([]);
  const [loading, setLoading] = useState(false);

  const getNoteListAll = async () => {
    if (!state.token) {
      Toast.fail('请先登录');
      return;
    }

    try {
      setLoading(true);
      const res = await getNoteList(state.token);
      console.log('获取笔记列表', res.data.notes);
      setNoteList(res.data.notes);
    } catch (err: any) {
      console.log('获取笔记列表失败', err);
      Toast.fail(err.message || '获取笔记列表失败');
    } finally {
      setLoading(false);
    }
  }

  const createNote = useCallback(async (note: CreateNoteReq) => {
    if (!state.token) {
      Toast.fail('请先登录');
      return;
    }

    try {
      console.log('开始创建笔记', note);
      const res = await postCreateNote(state.token, note);
      console.log('创建笔记成功', res);

      if (res && res.data && res.data.note) {
        // 重新获取笔记列表
        await getNoteListAll();
        return res.data.note;
      } else {
        throw new Error('创建笔记响应数据格式错误');
      }
    } catch (err: any) {
      console.error('创建笔记失败', err);

      // 更详细的错误信息
      let errorMessage = '创建笔记失败';
      if (err.message) {
        errorMessage += `: ${err.message}`;
      } else if (typeof err === 'string') {
        errorMessage += `: ${err}`;
      }

      Toast.fail(errorMessage);
      throw err;
    }
  }, [state.token]);

  const deleteNoteById = useCallback(async (noteId: string) => {
    if (!state.token) {
      Toast.fail('请先登录');
      return;
    }

    try {
      await deleteNote(state.token, noteId);
      Toast.success('删除笔记成功');
      // 重新获取笔记列表
      await getNoteListAll();
    } catch (err: any) {
      console.log('删除笔记失败', err);
      Toast.fail(err.message || '删除笔记失败');
      throw err;
    }
  }, [state.token]);

  const getNoteDetailById = useCallback(async (noteId: string): Promise<Note | null> => {
    if (!state.token) {
      Toast.fail('请先登录');
      return null;
    }

    try {
      const res = await getNoteDetail(state.token, noteId);
      console.log('获取笔记详情成功', res);
      return res.data.note;
    } catch (err: any) {
      console.log('获取笔记详情失败', err);
      Toast.fail(err.message || '获取笔记详情失败');
      return null;
    }
  }, [state.token]);

  // 组件挂载时获取笔记列表
  useEffect(() => {
    if (state.token) {
      getNoteListAll();
    }
  }, [state.token]);

  useEffect(() => {
    console.log('noteList', noteList);
  }, [noteList]);

  return {
    noteList,
    createNote,
    deleteNoteById,
    getNoteDetailById,
    refreshNoteList: getNoteListAll,
    loading,
  };
};

export default useNote;
