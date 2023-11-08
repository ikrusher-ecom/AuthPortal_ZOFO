/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true
};

module.exports = nextConfig;

module.exports = {
	env: {
		devDir: 'http://localhost:3000',
		prodDir: 'https://auth-portal-jet.vercel.app/',
		mongodbURI: 'mongodb+srv://ikrusher-custom:wpyLX5LxPbgukfTB@cluster0.nscjp.mongodb.net/shopifyDB?retryWrites=true&w=majority',
		mongodbID: 'shopifyDB',
		mode: 'prod'
	},
	images: {
		domains: ['auth-portal-jet.vercel.app']
	},
	eslint: {
		ignoreDuringBuilds: true
	}
};
