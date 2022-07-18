export const validEmail = new RegExp(
   "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
 );

 export const validPassword  = (password: string, confirmation: string) => {

   return password === confirmation && password.length > 5 && confirmation.length> 5 && password.length > 0 && confirmation.length >0;
 }