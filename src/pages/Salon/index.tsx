import { FadeInSection } from '@/components/FadeInSection';
import {
  ArrowUpOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  MenuOutlined,
  PhoneOutlined,
  ScissorOutlined,
} from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  ConfigProvider,
  DatePicker,
  Drawer,
  FloatButton,
  Form,
  Input,
  Layout,
  Menu,
  Rate,
  Row,
  Select,
  TimePicker,
  Typography,
} from 'antd';
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const services = [
    {
      id: 1,
      title: 'Cắt Tóc Nam',
      description: 'Kiểu tóc hiện đại, phong cách và chuyên nghiệp',
      price: '150.000đ',
      duration: '45 phút',
      image:
        'https://images.unsplash.com/photo-1541533848490-bc8115cd6522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      id: 2,
      title: 'Cắt Tóc Nữ',
      description: 'Tạo kiểu theo xu hướng mới nhất',
      price: '200.000đ',
      duration: '60 phút',
      image:
        'https://images.unsplash.com/photo-1770253980732-dfed1cfdfa43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      id: 3,
      title: 'Nhuộm Tóc',
      description: 'Màu sắc đa dạng, bền màu lâu dài',
      price: '400.000đ+',
      duration: '120 phút',
      image:
        'https://images.unsplash.com/photo-1511920771146-1a7271092231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      id: 4,
      title: 'Uốn/Duỗi Tóc',
      description: 'Công nghệ hiện đại, an toàn cho tóc',
      price: '500.000đ+',
      duration: '150 phút',
      image:
        'https://images.unsplash.com/photo-1768363646793-d58847947aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      id: 5,
      title: 'Dưỡng Tóc',
      description: 'Phục hồi tóc hư tổn, mềm mượt tự nhiên',
      price: '250.000đ',
      duration: '45 phút',
      image:
        'https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      id: 6,
      title: 'Tạo Kiểu Đặc Biệt',
      description: 'Phù hợp cho sự kiện, tiệc cưới',
      price: '300.000đ+',
      duration: '90 phút',
      image:
        'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
  ];

  const testimonials = [
    {
      name: 'Nguyễn Minh Anh',
      rating: 5,
      comment:
        'Dịch vụ tuyệt vời, thợ cắt rất chuyên nghiệp và tận tâm. Tôi rất hài lòng với kiểu tóc mới!',
    },
    {
      name: 'Trần Hải Long',
      rating: 5,
      comment:
        'Không gian salon sạch sẽ, thoáng mát. Giá cả hợp lý, sẽ quay lại lần sau.',
    },
    {
      name: 'Lê Thu Hà',
      rating: 5,
      comment:
        'Nhuộm tóc ở đây màu rất đẹp và bền. Nhân viên nhiệt tình tư vấn chu đáo.',
    },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1776850476481-2bccba2e35c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1600948836587-02c1842c9140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1759134155377-4207d89b39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1600948835780-9c4a8b55cf50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  ];

  const menuItems = [
    { key: 'home', label: 'Trang Chủ', href: '#home' },
    { key: 'services', label: 'Dịch Vụ', href: '#services' },
    { key: 'gallery', label: 'Thư Viện', href: '#gallery' },
    { key: 'testimonials', label: 'Đánh Giá', href: '#testimonials' },
    { key: 'contact', label: 'Liên Hệ', href: '#contact' },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#d97706',
          borderRadius: 8,
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', background: '#fff' }}>
        {/* Header */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Header
            style={{
              position: 'fixed',
              zIndex: 1000,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: scrolled ? '#fff' : 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              boxShadow: scrolled
                ? '0 2px 8px rgba(0,0,0,0.1)'
                : '0 1px 2px rgba(0,0,0,0.05)',
              transition: 'all 0.3s',
              padding: '0 50px',
            }}
          >
            <motion.div
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              whileHover={{ scale: 1.05 }}
            >
              <ScissorOutlined style={{ fontSize: '32px', color: '#d97706' }} />
              <Text strong style={{ fontSize: '20px', color: '#000' }}>
                Toni Hair Salon
              </Text>
            </motion.div>

            {/* Desktop Menu */}
            <Menu
              mode="horizontal"
              style={{
                flex: 1,
                minWidth: 0,
                justifyContent: 'flex-end',
                border: 'none',
                background: 'transparent',
              }}
              className="desktop-menu"
              items={[
                ...menuItems.map((item) => ({
                  key: item.key,
                  label: <a href={item.href}>{item.label}</a>,
                })),
                {
                  key: 'book',
                  label: (
                    <Button
                      type="primary"
                      shape="round"
                      icon={<CalendarOutlined />}
                    >
                      Đặt Lịch Ngay
                    </Button>
                  ),
                },
              ]}
            />

            {/* Mobile Menu Button */}
            <Button
              className="mobile-menu-button"
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setIsMenuOpen(true)}
              style={{ display: 'none' }}
            />
          </Header>
        </motion.div>

        {/* Mobile Drawer */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setIsMenuOpen(false)}
          open={isMenuOpen}
        >
          <Menu
            mode="vertical"
            items={[
              ...menuItems.map((item) => ({
                key: item.key,
                label: (
                  <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </a>
                ),
              })),
              {
                key: 'book',
                label: (
                  <Button
                    type="primary"
                    block
                    shape="round"
                    icon={<CalendarOutlined />}
                  >
                    Đặt Lịch Ngay
                  </Button>
                ),
              },
            ]}
          />
        </Drawer>

        <Content>
          {/* Hero Section */}
          <section
            id="home"
            ref={heroRef}
            style={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              marginTop: '64px',
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                y: heroY,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1776850476481-2bccba2e35c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
                alt="Hair Salon Interior"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.5)',
                }}
              />
            </motion.div>

            <motion.div
              style={{
                position: 'relative',
                zIndex: 10,
                textAlign: 'center',
                color: '#fff',
                padding: '0 20px',
                opacity: heroOpacity,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Title
                  level={1}
                  style={{
                    fontSize: '4rem',
                    color: '#fff',
                    marginBottom: '24px',
                  }}
                >
                  Toni Hair Salon
                </Title>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Paragraph
                  style={{
                    fontSize: '1.5rem',
                    color: '#fff',
                    marginBottom: '32px',
                    maxWidth: '800px',
                  }}
                >
                  Nơi Phong Cách Gặp Gỡ Sự Hoàn Hảo
                </Paragraph>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{
                  display: 'flex',
                  gap: '16px',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="primary"
                    size="large"
                    shape="round"
                    icon={<CalendarOutlined />}
                    style={{
                      padding: '12px 32px',
                      height: 'auto',
                      fontSize: '18px',
                    }}
                  >
                    Đặt Lịch Hẹn
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="large"
                    shape="round"
                    style={{
                      padding: '12px 32px',
                      height: 'auto',
                      fontSize: '18px',
                      background: '#fff',
                      color: '#000',
                    }}
                  >
                    Xem Dịch Vụ
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </section>

          {/* Services Section */}
          <section
            id="services"
            style={{ padding: '80px 20px', background: '#fafafa' }}
          >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <FadeInSection>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                  <Title
                    level={2}
                    style={{ fontSize: '3rem', marginBottom: '16px' }}
                  >
                    Dịch Vụ Của Chúng Tôi
                  </Title>
                  <Paragraph
                    style={{
                      fontSize: '1.25rem',
                      color: '#666',
                      maxWidth: '800px',
                      margin: '0 auto',
                    }}
                  >
                    Trải nghiệm dịch vụ làm đẹp tóc chuyên nghiệp với đội ngũ
                    thợ tay nghề cao
                  </Paragraph>
                </div>
              </FadeInSection>

              <Row gutter={[24, 24]}>
                {services.map((service, index) => (
                  <Col xs={24} sm={12} lg={8} key={service.id}>
                    <FadeInSection delay={index * 0.1}>
                      <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Card
                          hoverable
                          cover={
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.4 }}
                              style={{ overflow: 'hidden', height: '256px' }}
                            >
                              <img
                                alt={service.title}
                                src={service.image}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                }}
                              />
                            </motion.div>
                          }
                          styles={{
                            body: { padding: '24px' },
                          }}
                        >
                          <Title level={4}>{service.title}</Title>
                          <Paragraph
                            style={{ color: '#666', marginBottom: '16px' }}
                          >
                            {service.description}
                          </Paragraph>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}
                          >
                            <div>
                              <Text
                                strong
                                style={{ fontSize: '20px', color: '#d97706' }}
                              >
                                {service.price}
                              </Text>
                              <br />
                              <Text type="secondary">
                                <ClockCircleOutlined /> {service.duration}
                              </Text>
                            </div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button type="primary" shape="round">
                                Đặt Lịch
                              </Button>
                            </motion.div>
                          </div>
                        </Card>
                      </motion.div>
                    </FadeInSection>
                  </Col>
                ))}
              </Row>
            </div>
          </section>

          {/* Gallery Section */}
          <section
            id="gallery"
            style={{ padding: '80px 20px', background: '#fff' }}
          >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <FadeInSection>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                  <Title
                    level={2}
                    style={{ fontSize: '3rem', marginBottom: '16px' }}
                  >
                    Không Gian Salon
                  </Title>
                  <Paragraph style={{ fontSize: '1.25rem', color: '#666' }}>
                    Không gian hiện đại, sang trọng và thoải mái
                  </Paragraph>
                </div>
              </FadeInSection>

              <Row gutter={[16, 16]}>
                {gallery.map((image, index) => (
                  <Col xs={24} md={12} key={index}>
                    <FadeInSection
                      delay={index * 0.15}
                      direction={index % 2 === 0 ? 'left' : 'right'}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        style={{
                          position: 'relative',
                          height: '320px',
                          borderRadius: '16px',
                          overflow: 'hidden',
                          cursor: 'pointer',
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          transition={{ duration: 0.5 }}
                          style={{ width: '100%', height: '100%' }}
                        >
                          <img
                            src={image}
                            alt={`Gallery ${index + 1}`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background:
                              'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                            display: 'flex',
                            alignItems: 'flex-end',
                            padding: '24px',
                          }}
                        >
                          <Text style={{ color: '#fff', fontSize: '20px' }}>
                            Không gian {index + 1}
                          </Text>
                        </motion.div>
                      </motion.div>
                    </FadeInSection>
                  </Col>
                ))}
              </Row>
            </div>
          </section>

          {/* Testimonials Section */}
          <section
            id="testimonials"
            style={{ padding: '80px 20px', background: '#fafafa' }}
          >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <FadeInSection>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                  <Title
                    level={2}
                    style={{ fontSize: '3rem', marginBottom: '16px' }}
                  >
                    Khách Hàng Nói Gì
                  </Title>
                  <Paragraph style={{ fontSize: '1.25rem', color: '#666' }}>
                    Sự hài lòng của khách hàng là niềm tự hào của chúng tôi
                  </Paragraph>
                </div>
              </FadeInSection>

              <Row gutter={[24, 24]}>
                {testimonials.map((testimonial, index) => (
                  <Col xs={24} md={8} key={index}>
                    <FadeInSection delay={index * 0.2}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Card
                          style={{
                            height: '100%',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          }}
                        >
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.2 + 0.3 }}
                          >
                            <Rate
                              disabled
                              defaultValue={testimonial.rating}
                              style={{ marginBottom: '16px' }}
                            />
                          </motion.div>
                          <Paragraph
                            italic
                            style={{ color: '#666', marginBottom: '24px' }}
                          >
                            "{testimonial.comment}"
                          </Paragraph>
                          <Text strong>{testimonial.name}</Text>
                        </Card>
                      </motion.div>
                    </FadeInSection>
                  </Col>
                ))}
              </Row>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            style={{ padding: '80px 20px', background: '#fff' }}
          >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <FadeInSection>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                  <Title
                    level={2}
                    style={{ fontSize: '3rem', marginBottom: '16px' }}
                  >
                    Liên Hệ & Đặt Lịch
                  </Title>
                  <Paragraph style={{ fontSize: '1.25rem', color: '#666' }}>
                    Hãy để chúng tôi chăm sóc mái tóc của bạn
                  </Paragraph>
                </div>
              </FadeInSection>

              <Row gutter={[48, 48]}>
                <Col xs={24} lg={12}>
                  <FadeInSection direction="left">
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '32px',
                      }}
                    >
                      {[
                        {
                          icon: <EnvironmentOutlined />,
                          title: 'Địa Chỉ',
                          content: '123 Nguyễn Huệ, Quận 1, TP.HCM',
                        },
                        {
                          icon: <PhoneOutlined />,
                          title: 'Điện Thoại',
                          content: '(028) 1234 5678',
                        },
                        {
                          icon: <MailOutlined />,
                          title: 'Email',
                          content: 'contact@tonihair.vn',
                        },
                        {
                          icon: <ClockCircleOutlined />,
                          title: 'Giờ Mở Cửa',
                          content: [
                            'Thứ 2 - Thứ 7: 9:00 - 21:00',
                            'Chủ Nhật: 10:00 - 20:00',
                          ],
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                          style={{ display: 'flex', gap: '16px' }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            style={{
                              width: '56px',
                              height: '56px',
                              borderRadius: '50%',
                              background: '#fef3c7',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '24px',
                              color: '#d97706',
                              flexShrink: 0,
                            }}
                          >
                            {item.icon}
                          </motion.div>
                          <div>
                            <Title level={5}>{item.title}</Title>
                            {Array.isArray(item.content) ? (
                              item.content.map((line, i) => (
                                <Paragraph
                                  key={i}
                                  style={{ margin: 0, color: '#666' }}
                                >
                                  {line}
                                </Paragraph>
                              ))
                            ) : (
                              <Paragraph style={{ margin: 0, color: '#666' }}>
                                {item.content}
                              </Paragraph>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </FadeInSection>
                </Col>

                <Col xs={24} lg={12}>
                  <FadeInSection direction="right">
                    <motion.div
                      whileHover={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    >
                      <Card
                        title="Đặt Lịch Hẹn"
                        style={{
                          background: '#fafafa',
                        }}
                      >
                        <Form layout="vertical">
                          <Form.Item
                            label="Họ và Tên"
                            name="name"
                            rules={[{ required: true }]}
                          >
                            <Input placeholder="Nguyễn Văn A" size="large" />
                          </Form.Item>
                          <Form.Item
                            label="Số Điện Thoại"
                            name="phone"
                            rules={[{ required: true }]}
                          >
                            <Input placeholder="0901 234 567" size="large" />
                          </Form.Item>
                          <Form.Item
                            label="Dịch Vụ"
                            name="service"
                            rules={[{ required: true }]}
                          >
                            <Select placeholder="Chọn dịch vụ" size="large">
                              {services.map((service) => (
                                <Option key={service.id} value={service.title}>
                                  {service.title}
                                </Option>
                              ))}
                            </Select>
                          </Form.Item>
                          <Row gutter={16}>
                            <Col span={12}>
                              <Form.Item
                                label="Ngày Hẹn"
                                name="date"
                                rules={[{ required: true }]}
                              >
                                <DatePicker
                                  style={{ width: '100%' }}
                                  size="large"
                                  placeholder="Chọn ngày"
                                />
                              </Form.Item>
                            </Col>
                            <Col span={12}>
                              <Form.Item
                                label="Giờ Hẹn"
                                name="time"
                                rules={[{ required: true }]}
                              >
                                <TimePicker
                                  style={{ width: '100%' }}
                                  size="large"
                                  format="HH:mm"
                                  placeholder="Chọn giờ"
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Form.Item>
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Button
                                type="primary"
                                size="large"
                                block
                                htmlType="submit"
                                style={{
                                  height: 'auto',
                                  padding: '12px',
                                  fontSize: '18px',
                                }}
                              >
                                Xác Nhận Đặt Lịch
                              </Button>
                            </motion.div>
                          </Form.Item>
                        </Form>
                      </Card>
                    </motion.div>
                  </FadeInSection>
                </Col>
              </Row>
            </div>
          </section>
        </Content>

        {/* Footer */}
        <Footer
          style={{ background: '#1f2937', color: '#fff', padding: '48px 20px' }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Row gutter={[32, 32]}>
              <Col xs={24} md={8}>
                <FadeInSection direction="up">
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '16px',
                      }}
                    >
                      <ScissorOutlined
                        style={{ fontSize: '32px', color: '#d97706' }}
                      />
                      <Text strong style={{ fontSize: '20px', color: '#fff' }}>
                        Toni Hair Salon
                      </Text>
                    </div>
                    <Paragraph style={{ color: '#9ca3af' }}>
                      Nơi mang đến phong cách tóc hoàn hảo cho bạn
                    </Paragraph>
                  </motion.div>
                </FadeInSection>
              </Col>

              <Col xs={24} md={8}>
                <FadeInSection direction="up" delay={0.1}>
                  <Title level={5} style={{ color: '#fff' }}>
                    Liên Kết
                  </Title>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    {menuItems.map((link, index) => (
                      <motion.div
                        key={link.key}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <a href={link.href} style={{ color: '#9ca3af' }}>
                          {link.label}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </FadeInSection>
              </Col>

              <Col xs={24} md={8}>
                <FadeInSection direction="up" delay={0.2}>
                  <Title level={5} style={{ color: '#fff' }}>
                    Theo Dõi Chúng Tôi
                  </Title>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    {[
                      { icon: <FacebookOutlined />, key: 'fb' },
                      { icon: <LinkedinOutlined />, key: 'li' },
                      { icon: <InstagramOutlined />, key: 'ig' },
                    ].map((social, index) => (
                      <motion.div
                        key={social.key}
                        whileHover={{ scale: 1.2, backgroundColor: '#d97706' }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: '#374151',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '20px',
                          color: '#fff',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                        }}
                      >
                        {social.icon}
                      </motion.div>
                    ))}
                  </div>
                </FadeInSection>
              </Col>
            </Row>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{
                borderTop: '1px solid #374151',
                marginTop: '32px',
                paddingTop: '32px',
                textAlign: 'center',
                color: '#9ca3af',
              }}
            >
              <Text style={{ color: '#9ca3af' }}>
                &copy; 2026 Toni Hair Salon. All rights reserved.
              </Text>
            </motion.div>
          </div>
        </Footer>

        {/* Floating Buttons */}
        <FloatButton.BackTop icon={<ArrowUpOutlined />} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <FloatButton
            icon={<CalendarOutlined />}
            type="primary"
            style={{
              right: 24,
              bottom: 80,
            }}
            badge={{ dot: true }}
            tooltip="Đặt Lịch Ngay"
          />
        </motion.div>
      </Layout>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu-button {
            display: none !important;
          }
        }
      `}</style>
    </ConfigProvider>
  );
}
