import { SlideContent, SlideLayout } from './types';
import { 
  Activity, 
  ShieldCheck, 
  Server, 
  Zap, 
  Cpu, 
  Video, 
  Database, 
  Lock, 
  Scale, 
  GitBranch, 
  Award, 
  CheckCircle,
  Network
} from 'lucide-react';

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    layout: SlideLayout.TITLE,
    title: "HOPITA TELE-REHABILITATION PLATFORM",
    subtitle: "",
    points: [
      "Hopita – Cloud‑Native, AI‑Powered Digital Health Platform",
      "Mô hình Multi‑Tenant SaaS cho bệnh viện quy mô lớn",
      "Định hướng Enterprise‑grade, Long‑term, No Vendor Lock‑in"
    ],
    icon: Activity
  },
  {
    id: 2,
    layout: SlideLayout.BULLET_POINTS,
    title: "NGUYÊN TẮC THIẾT KẾ CÔNG NGHỆ",
    subtitle: "Technology Principles",
    points: [
      "Performance by Design – Hiệu năng là tiêu chuẩn mặc định",
      "Security & Privacy by Design – Bảo mật từ cốt lõi kiến trúc",
      "Scalable by Architecture – Khả năng mở rộng không giới hạn",
      "Replaceable Components – Các module AI/Video/Cloud độc lập, dễ thay thế",
      "Thiết kế thực dụng: Tối ưu cho vận hành y tế thực tế"
    ],
    icon: Scale
  },
  {
    id: 3,
    layout: SlideLayout.GRID,
    title: "KIẾN TRÚC TỔNG THỂ",
    subtitle: "Reference Architecture: Microservices + Cloud Native",
    gridItems: [
      {
        title: "Client Layer (Presentation)",
        items: [
          "Mobile App: React Native (iOS/Android) - offline-first, sync khi có mạng",
          "Web Portal: Next.js (SSR/SSG) - tối ưu SEO, load nhanh",
          "PWA Support: Cài đặt như native app, hoạt động offline",
          "Responsive Design: Tương thích mọi kích thước màn hình"
        ]
      },
      {
        title: "API Gateway (Entry Point)",
        items: [
          "Kong/NGINX: Load balancing, SSL termination, request routing",
          "OAuth2 + JWT: Authentication/Authorization chuẩn enterprise",
          "Rate Limiting: Chống abuse, giới hạn 1000 req/phút/user",
          "API Versioning: Hỗ trợ đa phiên bản (v1, v2) không breaking changes",
          "Request Validation: Schema validation, sanitize input ngăn chặn injection"
        ]
      },
      {
        title: "Core Microservices (Business Logic)",
        items: [
          "Auth Service: Quản lý user, roles, permissions (RBAC)",
          "Tenant Service: Multi-tenant management, data isolation",
          "Patient Service: Hồ sơ bệnh nhân, lịch sử điều trị (FHIR compatible)",
          "Rehab Program Service: Bài tập phục hồi, video mẫu, lịch tập",
          "Session Service: Quản lý phiên tập, ghi nhận kết quả AI scoring",
          "Analytics Service: Báo cáo, dashboard, export dữ liệu",
          "Notification Service: Email, SMS, Push notification (Firebase/SNS)"
        ]
      },
      {
        title: "Integration & Infrastructure",
        items: [
          "AI Adapter: Interface chuẩn cho KemTai/MediaPipe/PoseNet SDK",
          "Video Adapter: WebRTC signaling, recording, streaming",
          "Message Queue: RabbitMQ/Kafka cho async tasks (email, export report)",
          "Kubernetes (K8s): Container orchestration, auto-scaling, self-healing",
          "Service Mesh (Istio): Traffic management, circuit breaker, observability",
          "CI/CD: GitHub Actions → Docker → K8s deployment tự động"
        ]
      }
    ],
    icon: Server
  },
  {
    id: 4,
    layout: SlideLayout.INFRA_DIAGRAM,
    title: "INFRASTRUCTURE & SECURITY MODEL",
    subtitle: "Deep Dive: Bảo mật đa lớp & Tự động mở rộng",
    points: [
      "Layer 1 - DDoS Protection: AWS Shield/Cloudflare - chặn tấn công DDoS lớn",
      "Layer 2 - WAF & Load Balancer: AWS WAF/ALB - lọc traffic độc hại, phân tải",
      "Layer 3 - API Gateway: Kong/NGINX - authentication, rate limiting, SSL termination",
      "Layer 4 - Kubernetes Cluster: Auto-scaling microservices, self-healing containers",
      "Layer 5 - Data Layer: Sharded PostgreSQL + Redis Cluster - isolated & encrypted"
    ],
    icon: Network
  },
  {
    id: 5,
    layout: SlideLayout.TWO_COLUMN,
    title: "HIỆU NĂNG HỆ THỐNG",
    subtitle: "Performance by Design - Thiết kế cho quy mô lớn",
    columns: {
      left: {
        title: "Thiết kế cho tải cao",
        items: [
          "Concurrent Users: Hỗ trợ 10,000+ CCU đồng thời (concurrent users)",
          "Multi-Hospital: 100+ bệnh viện vận hành song song trên cùng infrastructure",
          "Low Latency: API response time < 200ms (p95), < 100ms (p50)",
          "Video Streaming: WebRTC ultra-low latency < 100ms cho telehealth",
          "AI Processing: Real-time pose estimation 30fps trên browser",
          "Database Performance: Read 10,000 qps, Write 2,000 qps với sharding"
        ]
      },
      right: {
        title: "Cơ chế tối ưu hóa",
        items: [
          "Kubernetes HPA: Auto-scale pods dựa trên CPU/Memory/Custom metrics (RPS)",
          "Stateless Services: Mọi service không lưu state, scale horizontal dễ dàng",
          "Redis Cluster: Distributed caching cho session, hot data (hit rate > 95%)",
          "CDN (CloudFront/Cloudflare): Cache static assets (images, videos) gần user",
          "Database Sharding: Phân tán data theo tenant_id, tránh single point bottleneck",
          "Connection Pooling: Tái sử dụng DB connections, giảm overhead tạo connection mới",
          "Async Processing: Queue-based (RabbitMQ) cho heavy tasks (AI analysis, video encoding)",
          "Code Optimization: Lazy loading, pagination, index database đầy đủ"
        ]
      }
    },
    icon: Zap
  },
  {
    id: 6,
    layout: SlideLayout.TWO_COLUMN,
    title: "NỀN TẢNG AI - POWERED BY KEMTAI",
    subtitle: "Kiến trúc SDK linh hoạt - Dễ dàng tích hợp & thay thế",
    columns: {
      left: {
        title: "Kiến trúc SDK & Tích hợp",
        items: [
          "SDK-Based Architecture: KemTai SDK được tích hợp dưới dạng module độc lập",
          "Plug-and-Play Design: Dễ dàng swap sang SDK khác (MediaPipe, PoseNet, OpenPose) mà không ảnh hưởng hệ thống",
          "Adapter Pattern: AI Adapter Layer chuẩn hóa interface, bất kỳ AI engine nào cũng tương thích",
          "Browser-based Edge AI: Chạy trực tiếp trên trình duyệt, không cần GPU server",
          "Device Agnostic: Hoạt động trên mọi Laptop, Tablet, Mobile (chỉ cần Webcam)",
          "No Vendor Lock-in: Không phụ thuộc vào một nhà cung cấp AI duy nhất"
        ]
      },
      right: {
        title: "Ứng dụng theo dõi bài tập & Tính điểm",
        items: [
          "Motion Tracking: Theo dõi 44 điểm khớp trên cơ thể (vai, khuỷu, hông, gối...) theo thời gian thực",
          "Exercise Matching: So sánh động tác người dùng với video bài tập mẫu của bác sĩ/PT",
          "Real-time Feedback: Phản hồi ngay lập tức khi động tác sai (giọng nói + overlay hình ảnh)",
          "Rep Counting: Đếm số lần lặp lại bài tập tự động (ví dụ: 10 cái gập khuỷu tay)",
          "ROM Measurement: Đo biên độ vận động (Range of Motion) chính xác bằng góc độ khớp",
          "Adherence Scoring: Chấm điểm mức độ tuân thủ bài tập (0-100 điểm) dựa trên độ chính xác động tác",
          "Progress Tracking: Theo dõi tiến độ phục hồi qua từng phiên tập, tạo biểu đồ xu hướng",
          "Data Export: Xuất dữ liệu điểm số, ROM, reps để bác sĩ đánh giá lâm sàng"
        ]
      }
    },
    icon: Cpu
  },
  {
    id: 7,
    layout: SlideLayout.GRID,
    title: "VIDEO & TELEHEALTH TECHNOLOGY",
    subtitle: "Tối ưu hóa Hiệu năng & Bảo mật dữ liệu",
    gridItems: [
      {
        title: "High Performance",
        items: [
           "WebRTC Ultra-Low Latency (< 100ms)",
           "Adaptive Bitrate: Tự động điều chỉnh theo băng thông mạng",
           "Hỗ trợ độ phân giải HD/4K mượt mà"
        ]
      },
      {
         title: "Advanced Security",
         items: [
            "End-to-End Encryption (E2EE) cho mọi luồng video/audio",
            "Tuân thủ nghiêm ngặt HIPAA & GDPR cho dữ liệu Telehealth",
            "Ephemeral Tokens: Cơ chế xác thực dùng một lần"
         ]
      },
      {
         title: "Network Resilience",
         items: [
            "Tối ưu hóa đặc biệt cho mạng 4G/5G tại Việt Nam",
            "Packet Loss Concealment: Giảm thiểu giật lag khi mạng yếu",
            "Automatic Failover & Reconnect thông minh"
         ]
      },
      {
         title: "Secure Recording",
         items: [
            "Encrypted Cloud Recording: Lưu trữ phiên khám bảo mật",
            "Audit Trail: Ghi vết toàn bộ quá trình truy cập video",
            "Consent Management tích hợp sẵn"
         ]
      }
    ],
    icon: Video
  },
  {
    id: 8,
    layout: SlideLayout.MULTI_TENANT_ARCH,
    title: "MULTI‑TENANT & DATA ISOLATION",
    subtitle: "Tối ưu chi phí & Vận hành tập trung",
    points: [
      "Cost Efficiency: Shared Infrastructure",
      "Unified Updates: Zero-downtime maintenance",
      "Strict Isolation: Row-Level Security"
    ],
    icon: Database
  },
  {
    id: 9,
    layout: SlideLayout.GRID,
    title: "BẢO MẬT DỮ LIỆU Y TẾ",
    subtitle: "Security by Design: Bảo vệ đa lớp theo chuẩn quốc tế",
    gridItems: [
      {
        title: "1. Data Encryption (Mã hóa dữ liệu)",
        items: [
          "In-transit: TLS 1.3 - mã hóa mọi kết nối HTTPS/WebSocket/gRPC",
          "At-rest: AES-256-GCM - mã hóa database, file storage, backups",
          "End-to-End Encryption: Video/audio calls sử dụng DTLS-SRTP (WebRTC)",
          "Key Management: AWS KMS/HashiCorp Vault - quản lý khóa tập trung, rotation tự động"
        ]
      },
      {
        title: "2. Access Control (Kiểm soát truy cập)",
        items: [
          "RBAC đa cấp: 5 roles (Admin, Doctor, Therapist, Patient, Support)",
          "Attribute-Based Access: Kiểm soát dựa trên tenant_id, department, location",
          "Least Privilege: Mỗi user chỉ được quyền tối thiểu cần thiết",
          "MFA (Multi-Factor Authentication): Bắt buộc cho admin/doctor",
          "Session Management: Auto logout sau 15 phút idle, max 1 device/user"
        ]
      },
      {
        title: "3. Audit & Monitoring (Giám sát & Ghi vết)",
        items: [
          "Immutable Audit Logs: Ghi lại mọi hành động (WHO, WHAT, WHEN, WHERE)",
          "Real-time Monitoring: Prometheus + Grafana cảnh báo hành vi bất thường",
          "SIEM Integration: Splunk/ELK phân tích log phát hiện tấn công",
          "User Activity Tracking: Theo dõi login, data access, export, delete",
          "Compliance Reporting: Báo cáo tự động cho thanh tra, audit trail 7 năm"
        ]
      },
      {
        title: "4. Data Privacy (Bảo vệ riêng tư)",
        items: [
          "Data Minimization: Chỉ thu thập dữ liệu tối thiểu cần thiết",
          "Anonymization: Ẩn danh hóa dữ liệu cho mục đích nghiên cứu/thống kê",
          "Consent Management: Quản lý đồng ý sử dụng dữ liệu, rõ ràng minh bạch",
          "Data Residency: Lưu trữ trong nước theo Nghị định 13/2023/NĐ-CP"
        ]
      },
      {
        title: "5. Compliance & Standards (Tuân thủ)",
        items: [
          "HIPAA-aligned: Thiết kế theo chuẩn bảo mật y tế Mỹ (mặc dù chưa bắt buộc VN)",
          "GDPR-ready: Sẵn sàng mở rộng EU với quyền riêng tư dữ liệu",
          "Nghị định 13/2023: Tuân thủ bảo vệ dữ liệu cá nhân Việt Nam",
          "ISO 27001 roadmap: Kế hoạch chứng nhận an toàn thông tin quốc tế",
          "Regular Audits: Đánh giá bảo mật định kỳ bởi đội ngũ độc lập"
        ]
      }
    ],
    icon: Lock
  },
  {
    id: 10,
    layout: SlideLayout.TWO_COLUMN,
    title: "TUÂN THỦ & TIÊU CHUẨN",
    subtitle: "Hành lang pháp lý & Tiêu chuẩn quốc tế",
    columns: {
        left: {
            title: "Quy định Việt Nam",
            items: [
                "Tuân thủ Nghị định 13/2023/NĐ‑CP",
                "Bảo vệ dữ liệu cá nhân & dữ liệu sức khỏe",
                "Quy định lưu trữ dữ liệu trong nước"
            ]
        },
        right: {
            title: "Tiêu chuẩn Quốc tế",
            items: [
                "Định hướng kiến trúc theo chuẩn HIPAA (Mỹ)",
                "Tương thích tiêu chuẩn GDPR (EU)",
                "Privacy‑by‑Design ngay từ khâu thiết kế"
            ]
        }
    },
    icon: ShieldCheck
  },
  {
    id: 11,
    layout: SlideLayout.TWO_COLUMN,
    title: "DEVOPS & VẬN HÀNH",
    subtitle: "Automated & Reliable Operations",
    columns: {
      left: {
        title: "Automation Pipeline",
        items: [
          "CI/CD tự động 100%: GitHub Actions - tự động build, test, deploy khi commit code",
          "Automated Testing: Unit tests, Integration tests, E2E tests chạy tự động mỗi PR",
          "Code Quality Gates: SonarQube kiểm tra chất lượng code, bắt buộc pass mới được merge",
          "Blue-Green Deployment: Deploy phiên bản mới song song, chuyển traffic không downtime",
          "Canary Release: Triển khai từng phần (5% → 25% → 100%) để phát hiện lỗi sớm",
          "Auto Rollback: Tự động quay lại phiên bản cũ khi phát hiện error rate tăng đột biến",
          "Infrastructure as Code: Terraform quản lý toàn bộ hạ tầng, dễ dàng tái tạo môi trường"
        ]
      },
      right: {
        title: "System Reliability",
        items: [
          "Real-time Monitoring: Prometheus + Grafana theo dõi CPU, RAM, Response Time 24/7",
          "APM (Application Performance Monitoring): New Relic/DataDog phát hiện bottleneck",
          "Centralized Logging: ELK Stack (Elasticsearch, Logstash, Kibana) tập trung logs toàn hệ thống",
          "Distributed Tracing: Jaeger theo dõi request qua các microservices, tìm lỗi nhanh chóng",
          "Alerting System: PagerDuty/Slack thông báo ngay khi có incident (downtime, high latency)",
          "Backup & Disaster Recovery: Backup database mỗi 30 phút, RTO < 4h, RPO < 1h",
          "Cross-region Replication: Dữ liệu được replicate sang region khác, đảm bảo 99.99% uptime",
          "Health Checks: Kubernetes livenessProbe & readinessProbe tự động restart container lỗi"
        ]
      }
    },
    icon: GitBranch
  },
  {
    id: 12,
    layout: SlideLayout.BULLET_POINTS,
    title: "GIÁ TRỊ CÔNG NGHỆ CỐT LÕI",
    subtitle: "Lợi thế cạnh tranh của nền tảng Hopita",
    points: [
      "Hiệu năng vượt trội: Ổn định dài hạn, chi phí vận hành tối ưu",
      "An toàn tuyệt đối: Dữ liệu y tế được bảo vệ đa lớp",
      "Độc lập công nghệ: Không phụ thuộc nhà cung cấp (No Vendor Lock-in)",
      "Làm chủ hệ thống: Dễ dàng mở rộng và tùy biến tính năng",
      "Khả năng tích hợp mở: Dễ dàng kết nối HIS/EMR/LIS"
    ],
    icon: Award
  },
  {
    id: 13,
    layout: SlideLayout.TITLE,
    title: "KẾT LUẬN",
    subtitle: "",
    points: [
      "✓ Kiến trúc Cloud-Native hiện đại, khả năng mở rộng không giới hạn",
      "✓ Tích hợp AI theo dõi bài tập & tính điểm tự động, linh hoạt thay đổi SDK",
      "✓ Bảo mật đa lớp theo chuẩn quốc tế (HIPAA-aligned, GDPR-ready)",
      "✓ Multi-tenant SaaS tối ưu chi phí, dễ vận hành",
      "✓ DevOps tự động hóa 100%, monitoring & backup toàn diện",
      "✓ Sẵn sàng triển khai quy mô lớn cho các bệnh viện tại Việt Nam"
    ],
    icon: CheckCircle
  }
];