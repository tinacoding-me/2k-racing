"""Đổi tên, tối ưu ảnh đầu vào; giữ bản gốc trong assets/originals."""
from pathlib import Path
from PIL import Image, ImageOps
import shutil

ROOT = Path(__file__).resolve().parents[1]
ORIGINALS = ROOT / 'assets' / 'originals'
IMAGES = ROOT / 'public' / 'media' / 'images'
VIDEOS = ROOT / 'public' / 'media' / 'videos'
HERO = ROOT / 'public' / 'media' / 'hero'
for folder in (ORIGINALS, IMAGES, VIDEOS, HERO):
    folder.mkdir(parents=True, exist_ok=True)

PHOTO_MAP = {
    'Logo.jpg': 'logo',
    'mẫu - sơn.jpg': 'paint-process',
    'mẫu sơn 2.jpg': 'paint-finish',
    'mẫu - thắng xe.jpg': 'brake-detail',
    'mẫu thắng xe 2.jpg': 'brake-upgrade',
    'mẫu - xe -3 .jpg': 'sh-street',
    'mẫu-xe-1.jpg': 'honda-lead-detail',
    'mẫu-xe-2.jpg': 'honda-ab-custom',
    'mẫu phuộc -3.jpg': 'suspension-kit',
    'mẫu phuộc 3.jpg': 'suspension-display',
    'mẫu-phuộc.jpg': 'suspension-accessories',
    'mẫu-phuộc-2.jpg': 'suspension-premium',
}
for original, name in PHOTO_MAP.items():
    source = ROOT / original
    retained = ORIGINALS / original
    if source.exists():
        shutil.move(str(source), str(retained))
    if retained.exists():
        with Image.open(retained) as image:
            image = ImageOps.exif_transpose(image).convert('RGB')
            # Bản hero riêng: giữ độ phân giải nguồn, giảm nén cho ảnh lớn/poster.
            if name in {'honda-ab-custom', 'sh-street', 'suspension-premium',
                        'paint-finish', 'honda-lead-detail', 'brake-upgrade'}:
                image.save(HERO / f'{name}.webp', 'WEBP', quality=94, method=6)
            image.thumbnail((1500, 1800))
            image.save(IMAGES / f'{name}.webp', 'WEBP', quality=86)

for source, target in {
    '0e44967a-798f-4303-b660-47e6059d8178.mp4': 'workshop-01.mp4',
    '487242d8-0909-4e04-99d2-54189ab435c1.mp4': 'workshop-02.mp4',
}.items():
    if (ROOT / source).exists():
        shutil.move(str(ROOT / source), str(VIDEOS / target))
