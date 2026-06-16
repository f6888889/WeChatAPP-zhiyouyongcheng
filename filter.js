let d='';
process.stdin.on('data',c=>d+=c);
process.stdin.on('end',()=>process.stdout.write(d.replace(/微信小程序项目/g,'项目')));
