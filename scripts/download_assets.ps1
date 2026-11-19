$baseUrl = "https://www.figma.com/api/mcp/asset/7082c199-aa4f-4f59-af0c-04a90d5d6a54"
$assets = @{
    "hero-banner.png"   = "d6fdd.png"
    "mosaic-1.png"      = "2a17c.png"
    "mosaic-2.png"      = "64545.png"
    "mosaic-3.png"      = "20b08.png"
    "mosaic-4.png"      = "b5666.png"
    "mosaic-5.png"      = "3b4d7.png"
    "featured-lineart.png" = "4fd96.png"
    "featured-1.png"    = "56d8e.png"
    "featured-2.png"    = "8b8d9.png"
    "featured-3.png"    = "af9bd.png"
    "about-left.png"    = "efbd1.png"
    "about-right.png"   = "b585f.png"
    "team-portrait.png" = "9f21d.png"
    "arrow-down.svg"    = "1f3b9.svg"
    "quote-mark.svg"    = "34cc1.svg"
    "divider-h.svg"     = "d94f8.svg"
    "divider-v.svg"     = "b21ea.svg"
    "arrow-up.svg"      = "e1f13.svg"
    "footer-line.svg"   = "1b83f.svg"
    "icon-location.svg" = "2f6ac.svg"
    "icon-email.svg"    = "92567.svg"
    "icon-phone.svg"    = "57226.svg"
    "slider-arrow.svg"  = "8f791.svg"
}

foreach ($item in $assets.GetEnumerator()) {
    $outPath = "public\assets\" + $item.Key
    $url = "$baseUrl/" + $item.Value
    Write-Host "Downloading $($item.Key)..."
    curl.exe -f -s -L -o $outPath $url
}
Write-Host "All assets downloaded successfully."
