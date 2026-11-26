"""Đổi tên, tối ưu ảnh đầu vào; giữ bản gốc trong assets/originals."""
from pathlib import Path
from PIL import Image, ImageOps
import argparse
import shutil

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--only', nargs='+', help='Chỉ xử lý các tên file đầu vào được chọn')
selected = set(parser.parse_args().only or [])

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
    'bửng-sơn.jpg': 'paint-side-panel',
    'mặt-nạ-sơn.jpg': 'paint-front-mask',
    'linh-kiện-xe.jpg': 'upgrade-components',
}
for original, name in PHOTO_MAP.items():
    if selected and original not in selected:
        continue
    source = next((p for p in (ROOT / original, IMAGES / original) if p.is_file()), None)
    retained = ORIGINALS / original
    if source:
        shutil.move(str(source), str(retained))
    if retained.exists():
        with Image.open(retained) as image:
            image = ImageOps.exif_transpose(image).convert('RGB')
            # Bản hero riêng: giữ độ phân giải nguồn, giảm nén cho ảnh lớn/poster.
            if name in {'honda-ab-custom', 'sh-street', 'suspension-premium',
                        'paint-finish', 'honda-lead-detail', 'brake-upgrade',
                        'paint-front-mask'}:
                image.save(HERO / f'{name}.webp', 'WEBP', quality=94, method=6)
            image.thumbnail((1500, 1800))
            image.save(IMAGES / f'{name}.webp', 'WEBP', quality=86)

for source, target in {
    '0e44967a-798f-4303-b660-47e6059d8178.mp4': 'workshop-01.mp4',
    '487242d8-0909-4e04-99d2-54189ab435c1.mp4': 'workshop-02.mp4',
    'video-sơn.mp4': 'paint-detail.mp4',
}.items():
    if selected and source not in selected:
        continue
    incoming = next((p for p in (ROOT / source, VIDEOS / source) if p.is_file()), None)
    retained = ORIGINALS / source
    if incoming:
        shutil.move(str(incoming), str(retained))
    if retained.exists():
        shutil.copy2(retained, VIDEOS / target)
    if target == 'paint-detail.mp4' and (VIDEOS / target).exists():
        # OpenCV chỉ dùng để lấy poster, không mã hóa lại video hay phóng độ phân giải.
        import cv2
        capture = cv2.VideoCapture(str(VIDEOS / target))
        try:
            capture.set(cv2.CAP_PROP_POS_MSEC, 500)
            ok, frame = capture.read()
            if not ok:
                raise RuntimeError('Không đọc được khung poster video sơn')
            poster = Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
            poster.save(IMAGES / 'paint-video-poster.webp', 'WEBP', quality=88, method=6)
            poster.save(HERO / 'paint-video-poster.webp', 'WEBP', quality=94, method=6)
        finally:
            capture.release()
