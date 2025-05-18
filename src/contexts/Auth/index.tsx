import { createContext, useMemo, useReducer } from 'react';
import { AuthAction, IAuthState } from './type';

interface IAuthContext {
  state: IAuthState,
  dispatch: React.Dispatch<AuthAction>
}

export const AuthContext = createContext<IAuthContext>({
  state: { is_logged_in: false },
  dispatch: () => { },
});

const AuthReducer = (state: IAuthState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.payload };
    case 'LOGOUT':
      return { ...state, is_logged_in: false };
    default:
      return state;
  }
};
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    is_logged_in: false,
  });

  const contextValue = useMemo(() => ({
    state,
    dispatch,
  }), [state, dispatch]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};


