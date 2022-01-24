import { User } from "./src/models/user.interface";

let users: User[] = [];

export default users;

/*
    Validation
        1. All fields are required
        2. Login validation is required.
        3. Password must contain letters and numbers.
        4. Age must be a number.(4-130)
        In case of any property does not meet the validation requirements or the field is abset, return 400 Bad Request.
*/
