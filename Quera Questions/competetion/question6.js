// let teamAndDays = readline().split(' ').map(Number);
// const team = teamAndDays[0];
// const days = teamAndDays[1];
// const matches = [];
// for (let day = 0; day < days; day++) {
//     matches.push(readline().split(' ').map(Number))
// }

function solve(n, m, matches) {
  const head = Array(n).fill(-1);
  const tail = Array(n).fill(-1);
  const nxt = Array(m).fill(-1);

  const last = Array(m).fill(0);

  const sz = Array(n).fill(0);

  const score = Array.from({ length: m }, () => new Map());

  function addScore(medal, team, add) {
    const mp = score[medal];
    mp.set(team, (mp.get(team) || 0) + add);
  }

  function pushBack(team, medal, day) {
    if (head[team] === -1) {
      head[team] = tail[team] = medal;
    } else {
      nxt[tail[team]] = medal;
      tail[team] = medal;
    }
    nxt[medal] = -1;
    sz[team]++;
    last[medal] = day;
  }

  function merge(winner, loser, day) {
    if (loser === winner) return;

    if (sz[winner] < sz[loser]) {
      const t = winner; winner = loser; loser = t;
    }

    let cur = head[loser];
    while (cur !== -1) {
      const nights = day - last[cur];
      if (nights > 0) addScore(cur, winner, nights);
      last[cur] = day;

      const nx = nxt[cur];
      if (head[winner] === -1) {
        head[winner] = tail[winner] = cur;
        nxt[cur] = -1;
      } else {
        nxt[tail[winner]] = cur;
        nxt[cur] = -1;
        tail[winner] = cur;
      }

      sz[winner]++;
      sz[loser]--;
      cur = nx;
    }

    head[loser] = tail[loser] = -1;
  }

  for (let day = 0; day < m; day++) {
    const a = matches[day][0];
    const b = matches[day][1];
    const winner = a, loser = b;

    pushBack(winner, day, day);

    merge(winner, loser, day);
  }

  for (let team = 0; team < n; team++) {
    let cur = head[team];
    while (cur !== -1) {
      const nights = m - last[cur];
      if (nights > 0) addScore(cur, team, nights);
      cur = nxt[cur];
    }
  }

  const ans = Array(n).fill(0);

  for (let medal = 0; medal < m; medal++) {
    let bestTeam = 0;
    let bestCnt = -1;

    for (let [t, c] of score[medal].entries()) {
      if (c > bestCnt || (c === bestCnt && t < bestTeam)) {
        bestCnt = c;
        bestTeam = t;
      }
    }
    ans[bestTeam]++;
  }

  return ans.join(' ');
}

// console.log(solve(team,days,matches));
console.log(solve(3,4,[[0,1],[2,1],[1,0],[2,1]]));
console.log(solve(6,10,[[2,5],[3,0],[4,2],[0,1],[4,3],[2,4],[0,3],[0,2],[5,2],[5,0]]));
