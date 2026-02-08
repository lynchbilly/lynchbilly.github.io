#!/usr/bin/env bash
set -euo pipefail

# =========================
# CONFIG
# =========================
DOMAIN="https://hogwildcoding.com"   # your custom domain
SITE_DIR="."                        # github pages usually serves repo root
PAGES=(index.html skills.html about.html contact.html)

# Your social profiles for schema
SAME_AS_1="https://github.com/lynchbilly/lynchbilly.github.io"
SAME_AS_2="https://youtube.com/@hogwildcoding?si=euQ6KlkR5m6Uoa-m"

# Image paths after rename/move
OG_IMAGE="/images/billy-james-lynch-hog-wild-coding-banner.png"
PERSON_IMAGE="/images/billy-james-lynch.jpg"  # optional, only if you add a headshot

cd "$SITE_DIR"

# =========================
# PRECHECK
# =========================
for f in "${PAGES[@]}"; do
  if [[ ! -f "$f" ]]; then
    echo "❌ Missing $f in $(pwd). Edit PAGES array in script if your filenames differ."
    exit 1
  fi
done

STAMP="$(date +%Y%m%d_%H%M%S)"
BACKUP_DIR="_seo_backup_$STAMP"
mkdir -p "$BACKUP_DIR"
cp -a *.html "$BACKUP_DIR/" 2>/dev/null || true
[[ -f sitemap.xml ]] && cp -a sitemap.xml "$BACKUP_DIR/" || true
[[ -f robots.txt ]] && cp -a robots.txt "$BACKUP_DIR/" || true

echo "✅ Backup saved: $BACKUP_DIR"

# =========================
# IMAGES (optional rename/move)
# =========================
mkdir -p images

move_if_exists () {
  local src="$1"
  local dst="$2"
  if [[ -f "$src" ]]; then
    mv -f "$src" "$dst"
    echo "🖼️  $src  ->  $dst"
  fi
}

# Rename the ones you showed in your HTML
move_if_exists "file_00000000359071f88d9c0e35cd93e4eb (1).png" "images/billy-james-lynch-hog-wild-coding-banner.png"
move_if_exists "home.jpeg (1).png" "images/home-tile.png"
move_if_exists "skills.jpeg (1).png" "images/skills-tile.png"
move_if_exists "about.jpeg (1).png" "images/about-tile.png"
move_if_exists "contact (1).jpeg" "images/contact-tile.jpg"

# Optional: if you have a headshot, drop it in repo root named headshot.jpg then this will move it
move_if_exists "headshot.jpg" "images/billy-james-lynch.jpg"

# Update HTML references across pages
for f in *.html; do
  [[ -f "$f" ]] || continue
  sed -i \
    -e 's|/file_00000000359071f88d9c0e35cd93e4eb (1)\.png|/images/billy-james-lynch-hog-wild-coding-banner.png|g' \
    -e 's|/home\.jpeg (1)\.png|/images/home-tile.png|g' \
    -e 's|/skills\.jpeg (1)\.png|/images/skills-tile.png|g' \
    -e 's|/about\.jpeg (1)\.png|/images/about-tile.png|g' \
    -e 's|/contact \(1\)\.jpeg|/images/contact-tile.jpg|g' \
    "$f"
done

# =========================
# Add canonical + OG + Twitter to all pages
# =========================
inject_head_block () {
  local file="$1"
  local page_url

  if [[ "$file" == "index.html" ]]; then
    page_url="${DOMAIN}/"
  else
    page_url="${DOMAIN}/${file}"
  fi

  local ogimg="${DOMAIN}${OG_IMAGE}"

  local block
  block=$'\n'"  <link rel=\"canonical\" href=\"${page_url}\">"$'\n\n'"  <meta property=\"og:type\" content=\"website\">"$'\n'"  <meta property=\"og:title\" content=\"Billy James Lynch | Lynch Programmer | Hog Wild Coding\">"$'\n'"  <meta property=\"og:description\" content=\"React, Python, Java, Firebase systems, automation, AI foundations, PC building, and lifecycle-driven problem solving in Arkansas.\">"$'\n'"  <meta property=\"og:url\" content=\"${page_url}\">"$'\n'"  <meta property=\"og:image\" content=\"${ogimg}\">"$'\n'"  <meta property=\"og:image:width\" content=\"1200\">"$'\n'"  <meta property=\"og:image:height\" content=\"630\">"$'\n\n'"  <meta name=\"twitter:card\" content=\"summary_large_image\">"$'\n'"  <meta name=\"twitter:title\" content=\"Billy James Lynch | Hog Wild Coding\">"$'\n'"  <meta name=\"twitter:description\" content=\"React • Python • Firebase • Automation • PC Builds\">"$'\n'"  <meta name=\"twitter:image\" content=\"${ogimg}\">"$'\n'

  # Skip if already present
  if grep -q 'rel="canonical"' "$file"; then
    echo "↪️  $file already has canonical; skipping head inject."
    return
  fi

  # Insert after meta description if present, else after viewport
  if grep -q '<meta name="description"' "$file"; then
    awk -v INS="$block" '
      {print}
      $0 ~ /<meta name="description"/ && !done {print INS; done=1}
    ' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
    echo "✅ Injected SEO tags after description in $file"
  elif grep -q '<meta name="viewport"' "$file"; then
    awk -v INS="$block" '
      {print}
      $0 ~ /<meta name="viewport"/ && !done {print INS; done=1}
    ' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
    echo "✅ Injected SEO tags after viewport in $file"
  else
    echo "⚠️ No viewport/description tag found in $file; not injecting."
  fi
}

for f in "${PAGES[@]}"; do
  inject_head_block "$f"
done

# =========================
# Upgrade Person JSON-LD (index.html)
# =========================
if [[ -f "index.html" ]]; then
  perl -0777 -i -pe '
    s#<script type="application/ld\+json">\s*.*?\s*</script>#<script type="application/ld+json">\n  {\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Person\",\n    \"name\": \"Billy James Lynch\",\n    \"alternateName\": [\"Lynch Programmer\", \"Wild Hog Coding\", \"Hog Wild Coding\"],\n    \"jobTitle\": \"Software Engineer\",\n    \"url\": \"'"${DOMAIN}"'\",\n    \"image\": \"'"${DOMAIN}${PERSON_IMAGE}"'\",\n    \"knowsAbout\": [\n      \"Python\",\n      \"Java\",\n      \"JavaScript\",\n      \"React\",\n      \"Firebase\",\n      \"Web Applications\",\n      \"Automation\",\n      \"Machine Learning Foundations\",\n      \"LLMOps\",\n      \"Problem Solving\",\n      \"Software Development Lifecycle\",\n      \"System Architecture\",\n      \"PC Building\"\n    ],\n    \"sameAs\": [\n      \"'"${SAME_AS_1}"'\",\n      \"'"${SAME_AS_2}"'\"\n    ]\n  }\n  </script>#s
  ' index.html
  echo "✅ Updated Person schema in index.html"
fi

# =========================
# sitemap.xml + robots.txt
# =========================
echo "🗺️  Writing sitemap.xml ..."
{
  echo '<?xml version="1.0" encoding="UTF-8"?>'
  echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  echo "  <url><loc>${DOMAIN}/</loc></url>"
  for p in "${PAGES[@]}"; do
    [[ "$p" == "index.html" ]] && continue
    echo "  <url><loc>${DOMAIN}/${p}</loc></url>"
  done
  echo '</urlset>'
} > sitemap.xml

echo "🤖 Writing robots.txt ..."
{
  echo "User-agent: *"
  echo "Allow: /"
  echo ""
  echo "Sitemap: ${DOMAIN}/sitemap.xml"
} > robots.txt

# =========================
# Commit + push
# =========================
echo "📦 Committing changes..."
git add -A

if git diff --cached --quiet; then
  echo "ℹ️ No changes staged. Nothing to commit."
else
  git commit -m "SEO: add sitemap/robots + canonical/OG + image cleanup"
  echo "🚀 Pushing to GitHub..."
  git push
fi

echo ""
echo "✅ DONE."
echo "Now verify these URLs in your browser:"
echo "  ${DOMAIN}/sitemap.xml"
echo "  ${DOMAIN}/robots.txt"
