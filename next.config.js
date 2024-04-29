/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true
};

module.exports = nextConfig;

module.exports = {
	env: {
		devDir: 'http://localhost:3000',
		prodDir: 'https://auth-portal-zofo.vercel.app/',
		mongodbURI: 'mongodb+srv://ikrusher-custom:wpyLX5LxPbgukfTB@cluster0.nscjp.mongodb.net/shopifyDB?retryWrites=true&w=majority',
		mongodbID: 'shopifyZofo',
		mode: 'prod'
	},
	images: {
		domains: ['auth-portal-zofo.vercel.app']
	},
	eslint: {
		ignoreDuringBuilds: true
	}
};
