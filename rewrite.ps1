[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$env:FILTER_BRANCH_SQUELCH_WARNING = '1'
git filter-branch -f --msg-filter 'powershell -Command "[Console]::OutputEncoding = [System.Text.Encoding]::UTF8; $input | ForEach-Object { $_ -replace ''微信小程序项目'', ''项目'' }"' -- --all
