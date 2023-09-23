export const checkValidData = (email, password) => {
   // const nameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
   const emailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
   const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   
   // if(!nameValid){
   //    return "Please enter valid name"
   // }
   if(!emailValid){
      return "Email is not valid"
   }
   if(!passwordValid){
      return "Password is not valid"
   }
   return null;
}