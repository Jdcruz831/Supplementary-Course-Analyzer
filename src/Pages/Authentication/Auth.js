import React, { createContext, useContext, useState } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "../../utils/firebase";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    const login = (userData) => {
        const login = async (userData) => {
            const { email, password } = userData; // Assuming you're passing email and password
          
            try {
              const userCredential = await signInWithEmailAndPassword(auth, email, password);
              const user = userCredential.user;
          
              // Here, you could set the user in your state
              setUser({
                uid: user.uid,
                email: user.email,
                token: await user.getIdToken(), // You can store the token if needed
              });
          
              // Optionally, store token in localStorage for future use
              localStorage.setItem('authToken', await user.getIdToken());
            } catch (error) {
              console.error('Error logging in:', error);
              //show error message to the user
            }
    };
  
    const logout = () => {
        try {
            signOut(auth); // Firebase sign out
            setUser(null); //clear user
        
            // clear the token from localStorage
            localStorage.removeItem('authToken');
          } catch (error) {
            console.error('Error logging out:', error);
            // Handle error (e.g., show error message to the user)
          }
    };
  
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
} 
export const useAuth = () => useContext(AuthContext);