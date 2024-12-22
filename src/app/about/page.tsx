import Header from '../components/Header'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-48 h-48 overflow-hidden rounded-full">
              <Image
                src="/image.jpg"
                alt="Monisha Ellish"
                width={192} // adjust as needed
                height={192} // adjust as needed
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold">Monisha Ellish</h2>
            <p className="text-center text-gray-700">
            I am a passionate and dynamic web developer with expertise in HTML, CSS, JavaScript, React, and Next.js. I am highly enthusiastic about learning and always exploring new technologies to stay ahead in the field of web development. My focus is on creating intuitive, functional, and visually appealing websites that deliver exceptional user experiences.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

