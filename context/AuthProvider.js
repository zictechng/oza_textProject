import React, {useState, useEffect} from 'react';
import { AuthContext } from './AuthContext';

export default function AuthProvider({children}) {

  return (
    <AuthContext>
        {children}
    </AuthContext>
  );
}
