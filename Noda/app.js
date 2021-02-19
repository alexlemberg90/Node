const fs = require('fs');
const path = require('path');
const girlTime = path.join(__dirname, '1800');
const boyTime = path.join(__dirname, '2000');

function sort(girlTime, boyTime) {

    fs.readdir(girlTime, (e, files) => {
        if (e) {
            console.log(e);
            return;
        }

        files.forEach(file => {
            fs.readFile(path.join(girlTime, file), (e, info) => {
                if (e) {
                    console.log(e);
                    return;
                }

                const json = JSON.parse(info.toString());

                if (json.gender === 'male') {
                    fs.rename(path.join(girlTime, file), path.join(boyTime, file), e => {
                        if (e) {
                            console.log(e);
                        }
                    })
                }
            })
        })
    })
}

    fs.readdir(boyTime, (e, files) => {
        if (e) {
            console.log(e);
            return;
        }

        files.forEach(file => {
            fs.readFile(path.join(boyTime, file), (e, info) => {
                if (e) {
                    console.log(e);
                    return;
                }

                const json = JSON.parse(info.toString());

                if (json.gender === 'female') {
                    fs.rename(path.join(boyTime, file), path.join(girlTime, file), e => {
                        if (e) {
                            console.log(e);
                        }
                    })
                }
            })
        })
    })



sort(girlTime, boyTime);
