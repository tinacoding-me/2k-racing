import type { IconName } from "../components/ui/Icon";

// Thay thông tin cửa hàng tại đây; các component dùng chung một nguồn dữ liệu.
export const shop = {
  name: "2K RACING",
  phone: "0902 842 526",
  tel: "0902842526",
  address: "118 Hồ Tùng Mậu, Quận 1, TP.HCM",
  hours: "08:00 – 20:00",
  zalo: "https://zalo.me/0902842526",
  maps: "https://www.google.com/maps/search/?api=1&query=118+Hồ+Tùng+Mậu+Quận+1+TPHCM",
};
export const navigation = [
  ["Trang chủ", "#trang-chu"],
  ["Giới thiệu", "#gioi-thieu"],
  ["Dịch vụ", "#dich-vu"],
  ["Phụ tùng", "#phu-tung"],
  ["Liên hệ", "#lien-he"],
];

export type HeroMediaItem =
  | { id: string; kind: "image"; image: string; alt: string }
  | { id: string; kind: "video"; src: string; poster: string; alt: string };

// Thứ tự slideshow hero; thêm hoặc thay media tại đây.
export const heroMedia: HeroMediaItem[] = [
  {
    id: "vario",
    kind: "image",
    image: "vario-custom",
    alt: "Xe Vario với mặt nạ thể thao tại 2K RACING",
  },
  {
    id: "workshop-1",
    kind: "video",
    src: "/media/videos/workshop-01.mp4",
    poster: "sh-detail",
    alt: "Video thực tế tại xưởng 2K RACING 1",
  },
  {
    id: "sh",
    kind: "image",
    image: "sh-street",
    alt: "Honda SH với phong cách đường phố",
  },
  {
    id: "suspension",
    kind: "image",
    image: "suspension-premium",
    alt: "Chi tiết phụ tùng và phuộc nâng cấp",
  },
  {
    id: "workshop-2",
    kind: "video",
    src: "/media/videos/workshop-02.mp4",
    poster: "brake-upgrade",
    alt: "Video thực tế tại xưởng 2K RACING 2",
  },
  {
    id: "paint",
    kind: "image",
    image: "paint-finish",
    alt: "Chi tiết bề mặt sơn xe hoàn thiện",
  },
];
export type Service = {
  id: string;
  title: string;
  short: string;
  icon: IconName;
  description: string;
  includes: string[];
};
export const services: Service[] = [
  {
    id: "son-xe",
    title: "Sơn xe & decal",
    short: "Diện mạo mới. Chất riêng của bạn.",
    icon: "paint",
    description:
      "Làm mới diện mạo xế yêu với màu sơn và thiết kế decal phù hợp phong cách của bạn. Tư vấn phương án sau khi kiểm tra bề mặt thực tế.",
    includes: [
      "Tư vấn màu sắc và ý tưởng decal",
      "Kiểm tra, xử lý bề mặt trước thi công",
      "Kiểm tra hoàn thiện cùng khách hàng",
    ],
  },
  {
    id: "ppf",
    title: "Dán PPF & keo bảo vệ",
    short: "Giữ vẻ đẹp theo từng hành trình.",
    icon: "shield",
    description:
      "Thêm lớp bảo vệ cho bề mặt sơn, giúp hạn chế những vết xước nhẹ trong quá trình sử dụng. Vật liệu và phạm vi dán được thống nhất trước khi thi công.",
    includes: [
      "Tư vấn vị trí cần bảo vệ",
      "Vệ sinh, chuẩn bị bề mặt",
      "Hướng dẫn chăm sóc sau khi dán",
    ],
  },
  {
    id: "rua-xe",
    title: "Rửa xe & phụ tùng",
    short: "Sạch từng chi tiết. Chuẩn từng món.",
    icon: "wrench",
    description:
      "Chăm sóc ngoại hình và kiểm tra những chi tiết cần thay thế. Chọn phụ tùng theo dòng xe, tình trạng thực tế và nhu cầu sử dụng.",
    includes: [
      "Vệ sinh và chăm sóc xe",
      "Tư vấn phụ tùng phù hợp",
      "Kiểm tra sau khi lắp đặt",
    ],
  },
  {
    id: "bao-duong",
    title: "Bảo dưỡng & nâng cấp",
    short: "Vận hành êm. Tự tin cầm lái.",
    icon: "gear",
    description:
      "Kiểm tra các hạng mục vận hành và tư vấn bảo dưỡng theo tình trạng xe. Mọi hạng mục và chi phí cần được khách hàng xác nhận trước khi thực hiện.",
    includes: [
      "Kiểm tra nồi, phanh và hệ thống treo",
      "Tư vấn bảo dưỡng theo tình trạng",
      "Trao đổi hạng mục trước khi thi công",
    ],
  },
  {
    id: "kinh",
    title: "Dán kính cách nhiệt",
    short: "Giảm nắng nóng. Thêm thoải mái.",
    icon: "sun",
    description:
      "Tư vấn giải pháp phim cách nhiệt theo loại kính, phương tiện và nhu cầu thực tế. Vui lòng liên hệ để kiểm tra tính phù hợp trước khi đặt lịch.",
    includes: [
      "Tư vấn loại phim và độ truyền sáng",
      "Kiểm tra bề mặt kính",
      "Hướng dẫn sử dụng và bảo quản",
    ],
  },
  {
    id: "den",
    title: "Bi cầu & đèn Audi",
    short: "Dấu ấn ánh sáng. Nổi bật chất xe.",
    icon: "light",
    description:
      "Tư vấn nâng cấp hệ thống chiếu sáng tương thích với xe. Chú trọng vị trí lắp đặt, đường điện và căn chỉnh luồng sáng sau thi công.",
    includes: [
      "Kiểm tra hệ thống điện",
      "Tư vấn cấu hình đèn tương thích",
      "Căn chỉnh ánh sáng phù hợp",
    ],
  },
  {
    id: "decal",
    title: "Decal đổi màu",
    short: "Một màu mới. Một cá tính mới.",
    icon: "palette",
    description:
      "Thay đổi phong cách bằng decal với lựa chọn màu sắc và hiệu ứng đa dạng. Tư vấn mẫu trực tiếp trước khi chốt phương án.",
    includes: [
      "Chọn màu và hiệu ứng bề mặt",
      "Tư vấn phối màu theo kiểu dáng xe",
      "Hoàn thiện và hướng dẫn chăm sóc",
    ],
  },
  {
    id: "tai-nha",
    title: "Giao nhận & dán tại nhà",
    short: "Bạn ở đâu. Chúng tôi sẵn sàng.",
    icon: "truck",
    description:
      "Trao đổi phương án giao nhận xe hoặc dán tại nhà theo khu vực và điều kiện thi công. Cửa hàng sẽ xác nhận lịch, phạm vi và chi phí trực tiếp.",
    includes: [
      "Trao đổi khu vực phục vụ",
      "Thống nhất thời gian và địa điểm",
      "Xác nhận điều kiện thi công phù hợp",
    ],
  },
];
export const directory = [
  {
    title: "Làm đẹp & bảo vệ",
    items: ["Sơn dàn áo", "Dán PPF bảo vệ", "Decal thiết kế", "Decal đổi màu"],
  },
  {
    title: "Chăm sóc & bảo dưỡng",
    items: [
      "Rửa xe chi tiết",
      "Bảo dưỡng nồi",
      "Kiểm tra hệ thống phanh",
      "Bảo dưỡng định kỳ",
    ],
  },
  {
    title: "Phụ tùng & nâng cấp",
    items: [
      "Phuộc & hệ thống treo",
      "Tay thắng & cùm phanh",
      "Đồ chơi CNC",
      "Bi cầu & đèn xe",
    ],
  },
  {
    title: "Tiện ích cho bạn",
    items: [
      "Dán kính cách nhiệt",
      "Dán keo tại nhà",
      "Giao nhận xe",
      "Tư vấn cấu hình xe",
    ],
  },
];
export type GalleryItem = {
  image: string;
  title: string;
  category: "Xe hoàn thiện" | "Sơn & decal" | "Phụ tùng";
  caption: string;
};
export const gallery: GalleryItem[] = [
  {
    image: "vario-custom",
    title: "Vario · Dấu ấn riêng",
    category: "Xe hoàn thiện",
    caption: "Diện mạo sắc nét, điểm nhấn ánh sáng đầy cá tính.",
  },
  {
    image: "sh-street",
    title: "Honda SH · Phong cách đường phố",
    category: "Xe hoàn thiện",
    caption: "Những chi tiết làm nên phong cách của chủ xe.",
  },
  {
    image: "paint-finish",
    title: "Sắc sơn · Hoàn thiện bề mặt",
    category: "Sơn & decal",
    caption: "Cận cảnh chi tiết sơn trong quá trình hoàn thiện.",
  },
  {
    image: "suspension-premium",
    title: "Hệ thống treo · Nâng cấp",
    category: "Phụ tùng",
    caption: "Phụ tùng thực tế tại cửa hàng 2K RACING.",
  },
  {
    image: "paint-process",
    title: "Dàn áo · Chuẩn bị sơn",
    category: "Sơn & decal",
    caption: "Chăm chút từng chi tiết trước khi lên màu.",
  },
  {
    image: "brake-upgrade",
    title: "Tay thắng · Chi tiết khác biệt",
    category: "Phụ tùng",
    caption: "Cận cảnh cụm tay thắng và bình dầu trên xe.",
  },
  {
    image: "sh-detail",
    title: "Honda SH · Góc nhìn cận cảnh",
    category: "Xe hoàn thiện",
    caption: "Hình ảnh xe thực tế tại xưởng.",
  },
];
export const products = [
  {
    image: "suspension-display",
    title: "Phuộc & hệ thống treo",
    label: "VẬN HÀNH",
    description: "Tư vấn theo dòng xe và tải trọng.",
  },
  {
    image: "brake-detail",
    title: "Tay thắng & cùm phanh",
    label: "KIỂM SOÁT",
    description: "Chú trọng cảm giác và sự tương thích.",
  },
  {
    image: "suspension-kit",
    title: "Bộ phụ kiện nâng cấp",
    label: "HIỆU NĂNG",
    description: "Hoàn thiện cấu hình theo nhu cầu.",
  },
  {
    image: "suspension-accessories",
    title: "Đồ chơi & chi tiết CNC",
    label: "PHONG CÁCH",
    description: "Điểm nhấn nhỏ, cá tính khác biệt.",
  },
];
export type Article = {
  title: string;
  image: string;
  label: string;
  readTime: string;
  intro: string;
  paragraphs: { heading: string; text: string }[];
};
export const articles: Article[] = [
  {
    title: "Một màu sơn mới. Một diện mạo khác.",
    image: "paint-process",
    label: "SƠN & LÀM ĐẸP",
    readTime: "4 phút đọc",
    intro:
      "Quy trình sơn xe chuyên nghiệp tại 2K RACING bắt đầu từ việc hiểu mong muốn của chủ xe và kiểm tra bề mặt.",
    paragraphs: [
      {
        heading: "Chuẩn bị quyết định chất lượng",
        text: "Dàn áo cần được kiểm tra, vệ sinh và xử lý các khuyết điểm trước khi sơn. Hạng mục xử lý phụ thuộc vào chất liệu và tình trạng thực tế.",
      },
      {
        heading: "Thống nhất màu và phương án",
        text: "Nên xem mẫu màu trực tiếp dưới nhiều điều kiện ánh sáng. Trao đổi rõ phạm vi sơn, thời gian dự kiến và điều kiện bảo hành trước khi thi công.",
      },
      {
        heading: "Chăm sóc sau khi nhận xe",
        text: "Tuân thủ thời gian ổn định bề mặt được kỹ thuật viên hướng dẫn. Sử dụng sản phẩm vệ sinh phù hợp và tránh chà xát mạnh lên lớp sơn mới.",
      },
    ],
  },
  {
    title: "PPF: lớp bảo vệ cho những hành trình dài.",
    image: "paint-finish",
    label: "CHĂM SÓC XE",
    readTime: "3 phút đọc",
    intro:
      "Lợi ích của dán PPF bảo vệ sơn xe máy nằm ở việc hạn chế tác động nhẹ lên bề mặt trong quá trình sử dụng.",
    paragraphs: [
      {
        heading: "Bảo vệ đúng kỳ vọng",
        text: "PPF có thể hỗ trợ hạn chế trầy xước nhẹ. Khả năng bảo vệ phụ thuộc vật liệu, độ dày, vị trí dán và cách sử dụng; không ngăn được mọi va đập.",
      },
      {
        heading: "Vị trí nào nên dán?",
        text: "Những vùng thường xuyên tiếp xúc như phần yếm, mặt nạ hoặc các chi tiết gần vị trí để chân có thể được ưu tiên. Kỹ thuật viên sẽ kiểm tra và tư vấn trực tiếp.",
      },
      {
        heading: "Giữ lớp phim bền đẹp",
        text: "Vệ sinh nhẹ nhàng, tránh xịt áp lực cao sát mép phim và làm theo hướng dẫn chăm sóc của loại vật liệu đã chọn.",
      },
    ],
  },
  {
    title: "Nâng cấp bi cầu LED: sáng đúng, đẹp chất.",
    image: "vario-custom",
    label: "KINH NGHIỆM NÂNG CẤP",
    readTime: "5 phút đọc",
    intro:
      "Nâng cấp đèn Bi-cầu LED cần chú ý cả độ tương thích, luồng sáng và điều kiện vận hành.",
    paragraphs: [
      {
        heading: "Bắt đầu từ hệ thống điện",
        text: "Cần kiểm tra nguồn điện, không gian lắp đặt và cấu tạo cụm đèn. Chọn cấu hình phù hợp giúp hạn chế phát sinh trong quá trình sử dụng.",
      },
      {
        heading: "Căn chỉnh sau lắp đặt",
        text: "Luồng sáng cần được căn chỉnh để hỗ trợ quan sát và hạn chế gây chói cho người đối diện. Không chỉ lựa chọn theo công suất hoặc độ sáng quảng cáo.",
      },
      {
        heading: "Trao đổi trước khi nâng cấp",
        text: "Hãy hỏi rõ phương án thi công, khả năng hoàn nguyên, bảo hành và các yêu cầu liên quan đến việc sử dụng phương tiện trước khi quyết định.",
      },
    ],
  },
  {
    title: "Bận rộn? Để việc chăm xe thuận tiện hơn.",
    image: "sh-street",
    label: "DỊCH VỤ TẠI NHÀ",
    readTime: "3 phút đọc",
    intro:
      "Dịch vụ dán keo/PPF tận nhà là lựa chọn cần được sắp xếp trước để có điều kiện thi công phù hợp.",
    paragraphs: [
      {
        heading: "Xác nhận khu vực và lịch hẹn",
        text: "Liên hệ cửa hàng, cung cấp địa chỉ và hạng mục mong muốn. Phạm vi phục vụ, lịch hẹn và phí di chuyển sẽ được xác nhận trực tiếp.",
      },
      {
        heading: "Chuẩn bị không gian",
        text: "Khu vực thi công cần sạch, có đủ ánh sáng, hạn chế bụi và phù hợp điều kiện thời tiết. Một số hạng mục sẽ cần thực hiện tại xưởng.",
      },
      {
        heading: "Kiểm tra khi bàn giao",
        text: "Cùng kiểm tra bề mặt, mép dán và nhận hướng dẫn chăm sóc. Giữ thông tin hạng mục để tiện trao đổi sau khi hoàn thành.",
      },
    ],
  },
];
export const imageUrl = (name: string) => `/media/images/${name}.webp`;
