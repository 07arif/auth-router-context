/*
BASIC ContextAPI setup:
--------------------
1.Context API : share auth state with other components (across the application)
2. Create an UserContext
3.ContextProvider with passed children
4. Set the UserContext in the index.js
5.  to consume the context: export the AuthContext from UserContext
6.Now at Heder or Home () anywhere else: UseContext hook to get the info in the context


AuthIntegration:
---------------
1.use getAuth by passing the app from firebaseConfig
2.create a function : createUser to return createUserWithEmailAndPassword(auth,email,password)
3.
*/