
![logo](src/common/imgs/logo.png)

## Webpack static page builder

Webpack static page builder is a pre-built multilingual website solution base on [Webpack](https://webpack.js.org/).

* Integrated Webpack 5 with [Bootstrap 5](https://getbootstrap.com/), [Swiper 7](https://swiperjs.com/) and [jQuery 3](https://jquery.com/).
* One set of code to generate in-built multilingual sites, easy to maintainance.
* Build-time localization is better for the SEO than the Run-time localization.

### Prerequisites

- Install [Node.js](https://nodejs.org/) which includes [Node Package Manager](https://www.npmjs.com)

### Usage

1. Install the dependencies after cloned the code repository.

```bash
npm install
```

2. Run development mode, your default web browser will pop up with port 8080 and watching any changes, modify codes in this pre-built website to become the site you want to build.

```bash
npm run start
```

3. Run production mode, a new directory "dist" will generated includes all the multilingual sites, which you can put them all to the www root in your production server.

```bash
npm run build
```

### Changelog

[Learn about the latest improvements](./CHANGELOG).

### License

Webpack static page builder is [MIT licensed](./LICENSE).
