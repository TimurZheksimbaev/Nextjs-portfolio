'use client';
import Image from 'next/image';
import JavaCertificate from '../../assets/Java certificate.png';
import PythonCertificate from '../../assets/Python certificate.png';
import GoAlgoCertificate from '../../assets/GoAlgo certificate.png';
import '../../styles/Certificates.css';

export default function Certificates() {
  const images = [JavaCertificate, PythonCertificate, GoAlgoCertificate];

  return (
    <div className="certificates-container">
      <h2>Certificates & Achievements</h2>
      <div className="certificates-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="certificate-card"
            style={{
              animationDelay: `${index * 0.2}s`,
              animationName:
                index % 2 === 0 ? 'slideInFromBottom' : 'slideInFromTop',
            }}
          >
            <Image
              src={image}
              alt={`Certificate ${index}`}
              width={500}
              className="certificate-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
