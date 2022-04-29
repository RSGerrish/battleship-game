const Ship = (length) => {
  let sunk = false;
  let hit = [];
  
  const constructHit = (length) => {
    for(let i = 0; i < length; i++) {
      hit.push(false);
    }
  };

  const directHit = (pos) => {
    hit[pos] = true;
    sunk = isSunk();
  };

  const isSunk = () => {
    const res = hit.filter(cond => cond === false);
    if(res.length === length) {
      return true;
    } else {
      return false;
    }
  }

  constructHit(length);
  return {length, sunk, hit, directHit};
}

export default Ship;