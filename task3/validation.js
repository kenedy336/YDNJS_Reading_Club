function titleValidation(val) {
  const reg = /^[a-z1-9A-Z\-:\.]{1,50}$/;
  return reg.test(val);
}

function authorValidation(val) {
  const reg = /^[a-zA-Z\-\.]{1,50}$/;
  return reg.test(val);
}

function IsbnValidation(val) {
  const reg = /^[1-9\-]{1,20}$/;
  return reg.test(val);
}

