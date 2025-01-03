 function possibleChanges(usernames) {
    for (const username of usernames) {
        if (typeof username != 'string') {
            return 'Sorry! Your array contains non-string values';
        }
        if (username != username.toLowerCase()) {
            return 'Sorry! Your array contains non-lowercase values';
        }
    }
  // Write your code here
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  
  function isALowerLetter(username) {
    username = username.toLowerCase();
    const firstLetter = username[0];
    let lowerLetter = firstLetter;
    for (const letter of username) {
      if (alphabet[letter] < alphabet[firstLetter]) {
        lowerLetter = letter;
      }
    }
    if (lowerLetter == firstLetter) {
      return 'NO';
    } else {
      return 'YES';
    }
  }
  
  function resultArray(usernames) {
    const result = [];
    for (const username of usernames) {
      result.push(isALowerLetter(username));
    }
    return result;
  }

  function sumOfAllUsernamesLength (usernames) {
    let sum = 0;
    for (const username of usernames) {
      sum += username.length;
    }
    return sum;
  }


  if (usernames.length >= 1 && usernames.length <= Math.pow(10, 5)) {
    if (sumOfAllUsernamesLength(usernames) > Math.pow(10, 6)) {
      return 'Sorry! Your array contains too long values';
    }
    return resultArray(usernames);
  } else {
    return 'Sorry! Your array is not in range (1 <= usernames.length <= 10**5)';
  }
}


console.log(possibleChanges(['foo', 'bar', 'alice']));