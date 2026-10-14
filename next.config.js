/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        // Lets iOS and Android open the file straight in Contacts
        source: '/artem-antonenko.vcf',
        headers: [
          { key: 'Content-Type', value: 'text/vcard; charset=utf-8' },
          { key: 'Content-Disposition', value: 'attachment; filename="Artem-Antonenko.vcf"' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
