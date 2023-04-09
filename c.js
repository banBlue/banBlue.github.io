// !/usr/bin/env node
const { exec } = require('child_process');

// 执行 git pull
exec('git pull', (error, stdout, stderr) => {
  if (error) {
    console.error(`执行 git pull 出错：${error}`);
    return;
  }

  console.log('代码拉取成功！');

  // 执行 git add .
  exec('git add .', (error, stdout, stderr) => {
    if (error) {
      console.error(`执行 git add 出错：${error}`);
      return;
    }

    // 执行 git commit -m .
    exec('git commit -m "commit message"', (error, stdout, stderr) => {
      if (error) {
        console.error(`执行 git commit 出错：${error}`);
        return;
      }

      // 执行 git push
      exec('git push', (error, stdout, stderr) => {
        if (error) {
          console.error(`执行 git push 出错：${error}`);
          return;
        }

        console.log('代码提交成功！');
      });
    });
  });
});