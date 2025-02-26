'use client'
import { motion } from "framer-motion";

const AWSBlog = () => {
  const services = [
    {
      title: "1️⃣ Amazon EC2 (Elastic Compute Cloud)",
      description:
        "Amazon EC2 provides scalable computing capacity in the cloud. It allows users to launch virtual servers, known as instances, on demand.",
      features: [
        "⚡ **Scalable compute power** for running applications.",
        "🔄 **On-demand, Reserved, and Spot instances** available.",
        "🛡️ **Security groups and IAM roles** to control access.",
        "📊 **Auto Scaling** to handle traffic changes.",
      ],
      image: "https://source.unsplash.com/1600x900/?server,cloud",
    },
    {
      title: "2️⃣ Amazon S3 (Simple Storage Service)",
      description:
        "Amazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance.",
      features: [
        "☁️ **Store unlimited amounts** of data securely.",
        "🔄 **Multiple storage classes** (Standard, Glacier, IA, etc.).",
        "🔐 **Data encryption** at rest and in transit.",
        "🛠️ **Lifecycle policies** for automatic data transitions.",
      ],
      image: "https://source.unsplash.com/1600x900/?storage,data",
    },
    {
      title: "3️⃣ AWS Lambda",
      description:
        "AWS Lambda lets you run code without provisioning or managing servers. Just upload your code and Lambda takes care of the rest.",
      features: [
        "🚀 **Serverless compute** that runs on-demand.",
        "💰 **Pay-per-use** pricing with no idle costs.",
        "📌 **Supports multiple languages** (Node.js, Python, Java, etc.).",
        "🛡️ **Automatically scales** based on workload.",
      ],
      image: "https://source.unsplash.com/1600x900/?serverless,code",
    },
    {
      title: "4️⃣ Amazon RDS (Relational Database Service)",
      description:
        "Amazon RDS is a managed database service that makes it easy to set up, operate, and scale databases in the cloud.",
      features: [
        "📊 **Supports MySQL, PostgreSQL, MariaDB, SQL Server, and more.**",
        "🔄 **Automated backups and Multi-AZ deployments.**",
        "🔧 **Simplifies database administration tasks.**",
        "💡 **Performance monitoring with Amazon CloudWatch.**",
      ],
      image: "https://source.unsplash.com/1600x900/?database,cloud",
    },
    {
      title: "5️⃣ Amazon DynamoDB",
      description:
        "DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.",
      features: [
        "⚡ **Single-digit millisecond latency.**",
        "🌍 **Global Tables** for multi-region access.",
        "🔄 **On-demand and provisioned capacity modes.**",
        "🔐 **Built-in security and encryption.**",
      ],
      image: "https://source.unsplash.com/1600x900/?database,nosql",
    },
    {
      title: "6️⃣ Amazon VPC (Virtual Private Cloud)",
      description:
        "Amazon VPC lets you create a logically isolated network within AWS where you can launch resources in a secure environment.",
      features: [
        "🔗 **Custom IP addressing and subnets.**",
        "🛡️ **Security Groups and Network ACLs for traffic control.**",
        "🌐 **Direct Connect for private connectivity.**",
        "🔄 **Elastic Load Balancer integration.**",
      ],
      image: "https://source.unsplash.com/1600x900/?network,security",
    },
    {
      title: "7️⃣ AWS IAM (Identity and Access Management)",
      description:
        "AWS IAM helps manage access to AWS services securely by creating users, roles, and policies.",
      features: [
        "🔐 **Fine-grained access control with policies.**",
        "👥 **Multi-factor authentication (MFA) support.**",
        "🔄 **Integration with AWS Organizations.**",
        "📌 **Temporary security credentials with STS.**",
      ],
      image: "https://source.unsplash.com/1600x900/?security,cloud",
    },
    {
      title: "8️⃣ AWS CloudFront",
      description:
        "AWS CloudFront is a content delivery network (CDN) that delivers data, videos, and applications to users globally.",
      features: [
        "🚀 **Reduces latency for content delivery.**",
        "🛡️ **Security with AWS Shield integration.**",
        "🌍 **Edge locations across the globe.**",
        "🔄 **Automatic failover for high availability.**",
      ],
      image: "https://source.unsplash.com/1600x900/?cdn,cloud",
    },
    {
      title: "9️⃣ AWS CloudWatch",
      description:
        "AWS CloudWatch is a monitoring service for AWS cloud resources and applications.",
      features: [
        "📊 **Real-time monitoring and alerting.**",
        "🔄 **Log collection and analytics.**",
        "🛠️ **Integration with Lambda for automated responses.**",
        "📌 **Custom dashboards for visualization.**",
      ],
      image: "https://source.unsplash.com/1600x900/?monitoring,logs",
    },
    {
      title: "🔟 AWS SQS (Simple Queue Service)",
      description:
        "AWS SQS is a fully managed message queuing service that enables decoupling of components in a distributed system.",
      features: [
        "📥 **Supports Standard and FIFO queues.**",
        "🔄 **Scalable message processing.**",
        "📌 **Encryption for message security.**",
        "💡 **Integration with AWS Lambda for event-driven applications.**",
      ],
      image: "https://source.unsplash.com/1600x900/?queue,messaging",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-64 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/aws.png')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="bg-black/60  text-white w-full h-full flex items-center justify-center">
          <motion.h1
            className="text-4xl font-bold text-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            🔥Top 10 AWS Services Explained
          </motion.h1>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4">
              {service.title}
            </h2>
            {/* <img
              src={service.image}
              alt={service.title}
              className="rounded-lg w-full h-60 object-cover mb-4"
            /> */}
            <p className="mb-4">{service.description}</p>
            <ul className="list-disc pl-6 space-y-2">
              {service.features.map((feature, fIndex) => (
                <li key={fIndex} dangerouslySetInnerHTML={{ __html: feature }} />
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AWSBlog;
