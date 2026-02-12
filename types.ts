
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'analyst' | 'manager';
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export type ViewType = 
  | 'dashboard' 
  | 'data-capture' 
  | 'analysis' 
  | 'risk' 
  | 'settings' 
  | 'alerts' 
  | 'context';
