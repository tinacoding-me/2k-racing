import { services, directory } from "../../data/content";
import type { Service } from "../../data/content";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";

export function Services({
  onService,
}: {
  onService: (service: Service) => void;
}) {
  return (
    <section id="dich-vu" className="section-pad services-section">
      <div className="site-container">
        <div className="heading-row">
          <SectionHeading
            eyebrow="CHĂM XE TOÀN DIỆN"
            title="XẾ YÊU CẦN GÌ?"
            accent="2K LO."
          />
          <p>
            Từ làm đẹp đến nâng cấp vận hành.
            <br />
            Tìm đúng dịch vụ cho hành trình của bạn.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <button
              key={service.id}
              className="service-card"
              onClick={() => onService(service)}
            >
              <span className="service-icon">
                <Icon name={service.icon} size={32} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.short}</p>
              <span className="service-explore">
                Khám phá dịch vụ
                <Icon name="plus" size={18} />
              </span>
            </button>
          ))}
        </div>
        <div className="service-directory">
          <div className="directory-label">
            <Icon name="menu" size={16} /> DANH MỤC DỊCH VỤ
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {directory.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      <a href="#lien-he">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
