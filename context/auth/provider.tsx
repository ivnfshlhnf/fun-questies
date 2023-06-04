import { useRouter, useSegments } from 'expo-router';
import * as React from 'react';
import { IUser, UserContextType } from '../../types/@types.user';

export const AuthContext = React.createContext<UserContextType | null>(null);

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext) as UserContextType;
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user: IUser | null) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';
    console.log("file: provider.tsx:19 ~ React.useEffect ~ segments:", segments)

    console.log("file: provider.tsx:25 ~ React.useEffect ~ user.id:", user)
    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      console.log('redirecting to signin')
      router.replace('/sign-in');
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace('/');
    }
  }, [user, segments, router]);
}

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setAuth] = React.useState<IUser | null>(null);

  const setUser = (_user: IUser) => {
    console.log('setting user')
    const loginUser: IUser = {
      name: _user.name,
      password: _user.password,
      id: _user.id,
    };
    setAuth(loginUser);
  };

  const signOut = () => {
    setAuth(null);
  };

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        setUser,
        signOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
