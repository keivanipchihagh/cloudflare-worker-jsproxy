# JSProxy
Originally developed by [EtherDream](https://github.com/EtherDream/jsproxy), this serverless JavaScript proxy utilizes [Cloudflare Workers](https://workers.cloudflare.com/) to bypass sanctions and censorship. Although this can indeed be detection, there is almost no way to stop it since many of Cloudflare services become unavailable!

## Upgrades
### HTTP Basic Authentication
Although this method has proven to be **vulnerable** to replay attacks, it works just fine to provide some privacy and reduce absuse of the service (*Cloudflare free plan offers 100k requests per day*). The implementation was inspired by [Pull Request #209](https://github.com/EtherDream/jsproxy/pull/209).

## Credits
- [jsproxy, EtherDream](https://github.com/EtherDream/jsproxy)
- [jsproxy, 51sec](https://github.com/51sec/jsproxy)