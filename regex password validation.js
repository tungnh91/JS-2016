function validate(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}

/*Explanation
/^
(?=.*\d)	contain at least one digit
(?=.*[a-z])	contain at least one lower case
(?=.*[A-Z]) contain at least one upper case
[a-zA-Z0-9]{6,}	contain at least 6 characters from the aforementioned.
$/