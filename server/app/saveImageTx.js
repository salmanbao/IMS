'use strict';
var path = require('path');
var helper = require('./helper.js');
var logger = helper.getLogger('saveImageTx');
var invoke = require('./invoke-transaction.js');

const mime = require('mime-types');
const crypto = require('crypto');
const images = require("images");
const uuidv4 = require('uuid/v4');


var saveImage = async function (peerNames, channelName, chaincodeName, item, username, org_name, res) {
    logger.debug(">>> saveImage() ...");
    res.set('Content-Type', 'application/json');

    let jsonArr = [];

    let imageName = item.itemDetail + "." + mime.extension(item.itemImageType);
    let base64Image = item.itemImage.split(';base64,').pop();

    item.itemImageName = imageName
    item.currentOwnerID = username;
    item.aesKey = crypto.randomBytes(32).toString('base64');
    item.itemImage = helper.encrypt(item.itemImage, item.aesKey);
    item.itemID = uuidv4().toString();
    item.timeStamp = helper.getTimestamp();
    jsonArr.push(JSON.stringify(item));

    logger.debug(">>> saveImage() : args: %s", jsonArr);
    var data = await invoke.invokeChaincode(peerNames, channelName, chaincodeName, jsonArr, item.fcn, username, org_name);
    if (data) {
        images(Buffer.from(base64Image, 'base64'))
            .size(400)
            .save(path.join(__dirname, '../public/images', imageName), {
                quality: 50
            });
        let result = JSON.parse(data);
        result.itemImage = helper.decrypt(result.itemImage, result.aesKey);
        return result;
    } else {
        return 'Failed to invoke the transaction ! check the logs for the details';
    }
}

exports.saveImage = saveImage;