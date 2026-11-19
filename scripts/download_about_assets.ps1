$baseUrl = "https://www.figma.com/api/mcp/asset/df3b4d1e-f1f2-44b4-a9b7-b6133b472913"
$assets = @{
    "about-hero.png"  = "c3efc.png"
    "insta-1.png"     = "bc845.png"
    "insta-2.png"     = "0c7a0.png"
    "insta-3.png"     = "c5c20.png"
    "insta-4.png"     = "5243b.png"
    "insta-5.png"     = "78d17.png"
    "faq-arrow.svg"   = "83293.svg"
}

foreach ($item in $assets.GetEnumerator()) {
    $outPath = "public\assets\" + $item.Key
    $url = "$baseUrl/" + $item.Value
    Write-Host "Downloading $($item.Key)..."
    curl.exe -f -s -L -o $outPath $url
}
Write-Host "All About assets downloaded successfully."
