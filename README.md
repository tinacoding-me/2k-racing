# 2K RACING

Landing page React + TypeScript + Vite, thuần frontend. Phong cách Garage Showreel với nền đen/trắng, đỏ racing và điểm nhấn vàng. Tất cả component được xây dựng riêng, không dùng thư viện UI có sẵn. Tailwind CSS sử dụng CDN theo yêu cầu; layout nền tảng đặt trong `src/styles/index.css`, hệ màu và giao diện các section trong `src/styles/theme.css`.

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
  hero/                Ảnh hero/poster giữ độ phân giải gốc, WebP quality 94
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
  styles/theme.css     Theme poster đen – trắng – đỏ – vàng cho toàn trang
  styles/hero.css      Hero toàn màn hình, header trong suốt/thu gọn, chữ dọc
  styles/motion.css    Timeline mở hero và hiệu ứng hiện nội dung khi cuộn
  App.tsx              Ghép trang và điều phối modal
  main.tsx             React entry point
```

## Thay nội dung

- Sửa địa chỉ, hotline, Zalo tại `src/data/content.ts`.
- Ảnh hiển thị dùng `imageUrl('tên-file')`; thay ảnh cùng tên tại `public/media/images/` hoặc cập nhật dữ liệu.
- Ảnh xe Honda Air Blade dùng tên `honda-ab-custom`; ảnh cận cảnh Honda LEAD dùng `honda-lead-detail` (có bản thường và bản hero). Script chuẩn bị media dùng cùng tên này.
- Hai video lần lượt là `workshop-01.mp4` và `workshop-02.mp4`.
- Đổi bảng màu `--ink`, `--red`, `--yellow` trong `src/styles/theme.css`.
- Danh sách dịch vụ, nhóm tra cứu, bài viết và phụ tùng nằm trong `src/data/content.ts`.
- Slideshow hero dùng danh sách `heroMedia` trong `src/data/content.ts`: thêm/sắp xếp ảnh và video tại đây, `topic` chọn nhãn dịch vụ sáng lên cạnh poster. Ảnh giữ 6 giây; video tự phát không tiếng và chuyển khi kết thúc.
- Hotline, Zalo, Facebook và địa chỉ dùng chung `shop` trong `src/data/content.ts`. Link chỉ đường và iframe Google Maps tự lấy địa chỉ này.

## Các tương tác

- Header fixed: logo kèm chữ ngang trên hero trong suốt ở đầu trang; thu gọn về nền đen ngay khi cuộn quá 24px và chỉ mở lại khi về trong 8px đầu trang. Gạch chân vàng cập nhật theo section đang xem. Menu chuyển sang dropdown dưới 1280px và đóng khi chọn mục, bấm bên ngoài, nhấn Escape hoặc chuyển sang desktop.
- Navbar giữ nguyên khung và chiều cao khi đổi trạng thái; hàng menu trượt nhẹ, logo thu bằng `transform`, nền và thanh thông tin fade trong 520ms. Hai ngưỡng cuộn riêng tránh đổi trạng thái liên tục ở đầu trang, không phụ thuộc chiều cao hero. Theo yêu cầu chuyển mượt, riêng navbar giữ animation nhỏ khi bật reduced motion; các section khác vẫn giảm chuyển động.
- Hero theo bố cục Garage Showreel: nền đen, dải đỏ chéo, chữ “2K RACING” lớn nằm sau poster. Desktop dùng khung media dọc nghiêng nhẹ, giới hạn chiều cao 660px; mobile chuyển media thành nền với wordmark và điều khiển ở đáy. Ảnh hero dùng bản xuất riêng từ ảnh gốc tại `public/media/hero/`. Chữ thương hiệu dọc ở lề xuất hiện khi cuộn khỏi hero.
- Các section theo thứ tự navbar: Trang chủ → Giới thiệu → Dịch vụ → Dự án → Phụ tùng → Kinh nghiệm → Liên hệ. Một danh sách `navigation` dùng chung cho menu desktop, mobile và xác định section đang xem.
- Hero luân phiên ảnh/video, có nút trước/sau, chọn mục và tạm dừng. Tạm ngưng khi hero rời màn hình, chuyển tab hoặc mở modal; tự bỏ qua video không phát được.
- Hero có timeline mở trang chung trong `useHeroIntro.ts`: mảng đỏ quét vào, poster trượt/nghiêng về vị trí, tiêu đề và CTA xuất hiện lần lượt. Chữ lớn chạy theo thứ tự G → N → I → C → A → R → K → 2, xuất phát cách nhau 90ms; chờ số 2 về vị trí mới kết thúc intro. Chờ font tối đa 1 giây; toàn cảnh chạy khoảng 1,8 giây, một lần mỗi lượt mở trang, không lặp khi đổi slide hay cuộn.
- `useScrollReveal.ts` dùng chung một IntersectionObserver để hiện các khối khi cuộn tới, sau đó ngừng theo dõi. Các thẻ hiện so le; gallery mới sau khi lọc cũng được đăng ký. Nội dung vẫn có sẵn, ảnh tiếp tục dùng lazy loading; điều hướng bằng menu/bàn phím luôn hiện ngay nội dung đích. Intro và scroll reveal được bật riêng theo yêu cầu kể cả khi trình duyệt bật reduced motion.
- Nút “Khám phá xưởng” mở video trong dialog; các nhãn dịch vụ cạnh poster dẫn đến section Dịch vụ. Hiệu ứng chuyển poster tôn trọng reduced motion.
- Nút “Liên hệ ngay” trên navbar cuộn tới khối hotline và Zalo.
- Card dịch vụ mở chi tiết; nút tư vấn dẫn về phần liên hệ.
- Gallery lọc theo danh mục, mở ảnh lớn, xem thêm/thu gọn.
- Các nút tư vấn phụ tùng dẫn về phần liên hệ.
- Modal xem hai video và đọc đầy đủ bốn bài viết.
- Khách muốn hẹn lịch gọi trực tiếp `0354836329` hoặc nhắn Zalo để trao đổi và thống nhất với cửa hàng. Không có form, luồng đặt lịch trực tuyến hay backend/database.
- Nút hotline dùng `tel:0354836329`; Zalo dẫn tới `https://zalo.me/0354836329`. Facebook có link chính thức ở footer và nút tròn nổi cạnh Zalo. Google Maps có iframe và link chỉ đường đến 67 Đường số 5, Phước Long, Hồ Chí Minh.
- Dialog hỗ trợ Escape, focus trap và trả focus về nút mở. Có skip link, focus visible và reduced motion.

## Nội dung cần cập nhật khi đưa vào sử dụng

Facebook đã có URL chính thức trong `shop.facebook`. Chưa có URL chính thức của YouTube và TikTok; hai icon này hiện thông báo kênh đang cập nhật và dẫn khách sang Zalo. Thay bằng link chính thức trong `Footer.tsx` khi có.

Không tự gán chứng nhận ISO, kinh nghiệm 10 năm, chính sách bảo hành, mức giá hay đánh giá khách hàng chưa được cung cấp. Bài viết là nội dung giới thiệu có thể biên tập lại.

Ảnh stock không được sử dụng: ưu tiên toàn bộ hình ảnh/video thật đã cung cấp. Ảnh gốc giữ tại `assets/originals`, bản WebP được tạo bằng script. Chạy lại script nếu cần tái tạo; ảnh dùng cùng thư mục gốc hiện có sẽ được cập nhật.
