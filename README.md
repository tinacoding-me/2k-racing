# 2K RACING

Landing page React + TypeScript + Vite, thuần frontend. Giao diện trắng chủ đạo, điểm nhấn đỏ và chữ đen. Tất cả component được xây dựng riêng, không dùng thư viện UI có sẵn. Tailwind CSS sử dụng CDN theo yêu cầu; layout đặt trong `src/styles/index.css`, bảng màu trong `src/styles/theme.css`.

## Chạy dự án

Yêu cầu Node.js 20.19+ hoặc 22.12+.

```bash
npm install
npm run dev
```

Mở URL được Vite in ra (mặc định http://127.0.0.1:5173).

```bash
npm run build    # Kiểm tra TypeScript và build production
npm run preview  # Xem thử bản build
npm run format   # Định dạng mã nguồn bằng Prettier
```

Để triển khai, đưa nội dung `dist/` lên static hosting. Google Fonts, Tailwind CDN và Google Maps cần kết nối internet. Khi chạy trong môi trường chặn CDN, cần đổi Tailwind sang build cục bộ trước khi triển khai.

## Cấu trúc

```text
assets/originals/       Ảnh JPG gốc, giữ nguyên để chỉnh sửa sau này
public/media/
  images/              12 ảnh WebP đã tối ưu, tên không dấu
  videos/              2 video thực tế tại xưởng
scripts/
  prepare-media.py     Script tạo ảnh WebP (cần Python + Pillow)
src/
  components/
    layout/            Header, BrandRail, Footer, menu mobile, nút liên hệ
    sections/          Hero, HeroMedia, BrandMarquee, Services, About, Showcase, News, Contact, VideoPlayer
    ui/                Icon SVG, SectionHeading, Modal
  data/content.ts      Thông tin cửa hàng, dịch vụ, phụ tùng, bài viết, gallery
  hooks/               Trạng thái header và section đang xem
  styles/index.css     Tokens, các section, responsive, reduced motion
  styles/theme.css     Bảng màu trắng – đỏ – đen của toàn trang
  styles/hero.css      Hero toàn màn hình, header trong suốt/thu gọn, chữ dọc
  App.tsx              Ghép trang và điều phối modal
  main.tsx             React entry point
```

## Thay nội dung

- Sửa địa chỉ, hotline, Zalo tại `src/data/content.ts`.
- Ảnh hiển thị dùng `imageUrl('tên-file')`; thay ảnh cùng tên tại `public/media/images/` hoặc cập nhật dữ liệu.
- Hai video lần lượt là `workshop-01.mp4` và `workshop-02.mp4`.
- Đổi bảng màu và màu chủ đạo `--red` trong `src/styles/theme.css`.
- Danh sách dịch vụ, nhóm tra cứu, bài viết và phụ tùng nằm trong `src/data/content.ts`.
- Slideshow hero dùng danh sách `heroMedia` trong `src/data/content.ts`: thêm/sắp xếp ảnh và video tại đây. Ảnh giữ 6 giây; video tự phát không tiếng và chuyển khi kết thúc.
- Khi thay địa chỉ cần cập nhật cả URL Google Maps iframe trong `Footer.tsx`.

## Các tương tác

- Header fixed: trong suốt, logo lớn khi trên hero; thu gọn về nền trắng khi cuộn khỏi hero. Gạch chân cập nhật theo section đang xem. Menu mobile xổ xuống ngay dưới navbar và đóng khi chọn mục, bấm bên ngoài, nhấn Escape hoặc chuyển sang desktop.
- Hero phủ toàn màn hình, ảnh/video dùng `object-fit: cover`. Chữ “2K RACING” xếp dọc dưới logo, thu nhỏ vào lề và luôn hiển thị khi cuộn trang.
- Các section theo thứ tự navbar: Trang chủ → Giới thiệu → Dịch vụ → Phụ tùng → Liên hệ. Gallery nằm sau Dịch vụ; bài viết nằm sau Phụ tùng, trước Liên hệ.
- Hero luân phiên ảnh/video, có nút trước/sau, chọn mục và tạm dừng. Tạm ngưng khi hero rời màn hình, chuyển tab hoặc mở modal; tự bỏ qua video không phát được.
- Nút “Liên hệ ngay” trên navbar cuộn tới khối hotline và Zalo.
- Card dịch vụ mở chi tiết; nút tư vấn dẫn về phần liên hệ.
- Gallery lọc theo danh mục, mở ảnh lớn, xem thêm/thu gọn.
- Các nút tư vấn phụ tùng dẫn về phần liên hệ.
- Modal xem hai video và đọc đầy đủ bốn bài viết.
- Khách muốn hẹn lịch gọi trực tiếp `0902 842 526` hoặc nhắn Zalo để trao đổi và thống nhất với cửa hàng. Không có form, luồng đặt lịch trực tuyến hay backend/database.
- Nút hotline dùng `tel:`, Zalo dùng số được cung cấp, Google Maps có iframe và link chỉ đường.
- Dialog hỗ trợ Escape, focus trap và trả focus về nút mở. Có skip link, focus visible và reduced motion.

## Nội dung cần cập nhật khi đưa vào sử dụng

Chưa có URL chính thức của Facebook, YouTube, TikTok. Các icon hiện thông báo kênh đang cập nhật và dẫn khách sang Zalo; thay bằng link chính thức trong `Footer.tsx` khi có. Không gán đường dẫn giả hoặc tự đoán tên tài khoản.

Không tự gán chứng nhận ISO, kinh nghiệm 10 năm, chính sách bảo hành, mức giá hay đánh giá khách hàng chưa được cung cấp. Bài viết là nội dung giới thiệu có thể biên tập lại.

Ảnh stock không được sử dụng: ưu tiên toàn bộ hình ảnh/video thật đã cung cấp. Ảnh gốc giữ tại `assets/originals`, bản WebP được tạo bằng script. Chạy lại script nếu cần tái tạo; ảnh dùng cùng thư mục gốc hiện có sẽ được cập nhật.
