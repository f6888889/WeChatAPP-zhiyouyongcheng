const { execSync } = require('child_process');

// 设置环境变量
process.env.FILTER_BRANCH_SQUELCH_WARNING = '1';

// 使用 node 作为 msg-filter，正确处理中文
const filterCmd = `node -e "let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>process.stdout.write(d.replace(/\\u5fae\\u4fe1\\u5c0f\\u7a0b\\u5e8f\\u9879\\u76ee/g,'\\u9879\\u76ee')))"`;

try {
  const result = execSync(`git filter-branch -f --msg-filter "${filterCmd}" -- --all`, {
    encoding: 'utf8',
    stdio: 'inherit'
  });
  console.log('Success');
} catch (error) {
  console.error('Error:', error.message);
}
