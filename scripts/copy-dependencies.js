"use strict";

const path = require("path");
const fs = require("fs");
const modulesDir = "node_modules";
const targetDir = "static/plugins";
const toCopy = new Map();

// Bootstrap
toCopy.set("bootstrap/dist/js/bootstrap.min.js", "bootstrap/bootstrap.min.js");
toCopy.set("bootstrap/dist/css/bootstrap.min.css", "bootstrap/bootstrap.min.css");

// jQuery
toCopy.set("jquery/dist/jquery.min.js", "jQuery/jquery.min.js");

// fuse.js
toCopy.set("fuse.js/dist/fuse.js", "search/fuse.min.js");
toCopy.set("mark.js/dist/mark.min.js", "search/mark.js");

// slick-carousel
toCopy.set("slick-carousel/slick/slick.min.js", "slick/slick.min.js");
toCopy.set("slick-carousel/slick/slick.css", "slick/slick.css");
toCopy.set("slick-carousel/slick/ajax-loader.gif", "slick/ajax-loader.gif");
toCopy.set("slick-carousel/slick/fonts/slick.eot", "slick/fonts/slick.eot");
toCopy.set("slick-carousel/slick/fonts/slick.svg", "slick/fonts/slick.svg");
toCopy.set("slick-carousel/slick/fonts/slick.ttf", "slick/fonts/slick.ttf");
toCopy.set("slick-carousel/slick/fonts/slick.woff", "slick/fonts/slick.woff");

// venobox
toCopy.set("venobox/venobox/venobox.min.js", "venobox/venobox.min.js");
toCopy.set("venobox/venobox/venobox.css", "venobox/venobox.css");

// Perform copy
for (const [from, to] of toCopy) {
  const fromPath = path.join(modulesDir, from);
  const toPath = path.join(targetDir, to);
  fs.copyFile(fromPath, toPath, (err) => {
    if (err) {
      throw err;
    }

    console.log(`Copied ${fromPath} to ${toPath}`);
  });
}
