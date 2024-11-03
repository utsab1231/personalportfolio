import CardComponent from "./components/CardComponent";

function Services() {
  const data = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We build websites that are fast, secure, and easy to manage. We develop websites that are responsive and mobile-friendly. We use the latest technologies to build websites that are fast and secure.",
    },
    {
      id: 2,
      title: "Tutor Services",
      description:
        "We provide tutoring services for students of all ages. We offer one-on-one tutoring sessions to help students improve their grades and achieve their academic goals. Our tutors are experienced and qualified professionals who are dedicated to helping students succeed.",
    },
    {
      id: 3,
      title: "Graphic Design",
      description:
        "We create custom designs that are unique and eye-catching. We design logos, business cards, brochures, and more. Our designs are creative, professional, and affordable. We work closely with our clients to ensure that their vision is brought to life.",
    },
    {
      id: 4,
      title: "Digital Marketing",
      description:
        "We help businesses grow their online presence and reach more customers. We offer a range of digital marketing services, including SEO, social media marketing, and email marketing. We work with businesses of all sizes to develop customized marketing strategies that drive results.",
    },
  ];
  return (
    <div>
      <CardComponent data={data} />
    </div>
  );
}
export default Services;
