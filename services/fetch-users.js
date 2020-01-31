const rp = require('request-promise');
module.exports = {
    fetchPosts: function (req, res) {
        rp('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // Process html...
                res.send(JSON.parse(response));

            })
            .catch(function (err) {
                // Crawling failed...
            });

    }
}
