module.exports = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'http://skillshare.test/:path*',
            },
        ];
    },
};
