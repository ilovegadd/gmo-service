"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GMO = require("../../lib/index");
/**
 * creditサンプル
 */
const orderId = Date.now().toString();
const amount = 1800;
GMO.services.credit.entryTran({
    shopId: 'your shopId',
    shopPass: 'sour shopPass',
    orderId: orderId,
    jobCd: GMO.utils.util.JobCd.Auth,
    amount: amount
}).then((entryTranResult) => {
    GMO.services.credit.execTran({
        accessId: entryTranResult.accessId,
        accessPass: entryTranResult.accessPass,
        orderId: orderId,
        method: GMO.utils.util.Method.Lump,
        cardNo: '4111111111111111',
        expire: '2012',
        securityCode: '123'
    }).then((execTranResult) => {
        // tslint:disable-next-line:no-console
        console.log(execTranResult);
        GMO.services.credit.alterTran({
            shopId: 'your shopId',
            shopPass: 'sour shopPass',
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            jobCd: GMO.utils.util.JobCd.Sales,
            amount: amount
        }).then((result) => {
            // tslint:disable-next-line:no-console
            console.log(result);
        }, (err) => {
            console.error(err);
        });
    }, (err) => {
        console.error(err);
    });
}, (err) => {
    console.error(err);
});
