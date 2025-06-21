# Convert all .tsx files to .jsx
Get-ChildItem -Path .\src -Recurse -Filter *.tsx | ForEach-Object {
    $newName = $_.FullName -replace '\.tsx$', '.jsx'
    Rename-Item -Path $_.FullName -NewName $newName
    Write-Host "Renamed: $($_.FullName) -> $newName"
}

# Convert all .ts files to .js
Get-ChildItem -Path .\src -Recurse -Filter *.ts | ForEach-Object {
    $newName = $_.FullName -replace '\.ts$', '.js'
    Rename-Item -Path $_.FullName -NewName $newName
    Write-Host "Renamed: $($_.FullName) -> $newName"
}

# Remove TypeScript configuration files
$tsConfigs = @('tsconfig.json', 'tsconfig.node.json', 'tsconfig.app.json')
foreach ($file in $tsConfigs) {
    if (Test-Path $file) {
        Remove-Item $file
        Write-Host "Removed: $file"
    }
}

Write-Host "Conversion completed!"
