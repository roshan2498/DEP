### CRUD shoud have following operations for User:

    2.1
        1. get user by id.
        2. create and update user.
        3. get auto-suggest list from limit users, sorted by login property and filtered by loginSubstring in the login property.
            getAutoSuggestUsers(loginSubstring,limit)
        4. remove user (soft delete - user gets marked with isDeleted flag, but not removed from the collection.)
        5. Store user's collection in service memory (while the service is running).

    2.2
        Add server side validation for create/update of users entity.
        1. all fields are required.
        2. login validation is required.
        3. password must contain letters and numbers.
        4. user's age must be between 4 and 130

        (In case of any property does not meet the requirements or the field is absent, return 400 bad requrest) and detailed error message.


