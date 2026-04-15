#!/bin/bash
# Optimizar imágenes del portafolio para web
# Ejecutar desde la raíz del proyecto: bash scripts/optimize-images.sh
#
# Requiere: macOS con sips (incluido por defecto)
# Entrada:  app/ClientesRenoa/*.png
# Salida:   public/portfolio/*.jpg (max 1200px, JPEG calidad 80)

SOURCE_DIR="app/ClientesRenoa"
OUTPUT_DIR="public/portfolio"

mkdir -p "$OUTPUT_DIR"

for img in "$SOURCE_DIR"/*.{jpg,jpeg,png,JPG,JPEG,PNG}; do
  [ -f "$img" ] || continue
  filename=$(basename "$img")
  name="${filename%.*}"
  out="$OUTPUT_DIR/${name}.jpg"

  echo "Optimizando: $filename"
  sips --resampleWidth 1200 "$img" --out "/tmp/${name}.png" 2>/dev/null
  sips -s format jpeg -s formatOptions 80 "/tmp/${name}.png" --out "$out" 2>/dev/null
  rm -f "/tmp/${name}.png"
  echo "  → $out ($(du -h "$out" | cut -f1))"
done

echo ""
echo "✓ Imágenes optimizadas en: $OUTPUT_DIR"
echo "  Tamaños: $(ls -lh $OUTPUT_DIR/*.jpg 2>/dev/null | awk '{print $5, $9}' | xargs)"
