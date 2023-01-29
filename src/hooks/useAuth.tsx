import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase.config";

const useAuth = () => {
  let initial: any;
  const [currentUser, setCurrentUser] = useState(initial);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  });
  return { currentUser };
};

export default useAuth;
