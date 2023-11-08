/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true
};

module.exports = nextConfig;

module.exports = {
	env: {
		devDir: 'http://localhost:3000',
		prodDir: 'https://authenticity.ikrusher.com',
		mongodbURI: 'mongodb+srv://ikrusher-custom:wpyLX5LxPbgukfTB@cluster0.nscjp.mongodb.net/shopifyDB?retryWrites=true&w=majority',
		mongodbID: 'shopifyDB',
		mode: 'dev'
	},
	images: {
		domains: ['authenticity.ikrusher.com']
	},
	eslint: {
		ignoreDuringBuilds: true
	}
};
