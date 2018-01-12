import * as createDebug from 'debug';
import * as querystring from 'querystring';
import { BadRequestError } from '../error/badRequest';

import { Service } from '../service';
import * as util from '../utils/util';

const debug = createDebug('gmo-service:service:card');

/**
 * 会員登録in
 * @memberof services/member
 * @interface ISaveMemberArgs
 */
export interface ISaveMemberArgs {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * サイトパスワード
     */
    sitePass: string;
    /**
     * 会員ID
     */
    memberId: string;
    /**
     * 会員名
     */
    memberName?: string;
}
/**
 * 会員登録out
 * @memberof services/member
 * @interface ISaveMemberResult
 */
export interface ISaveMemberResult {
    /**
     * 会員ID
     */
    memberId: string;
}

/**
 * 会員更新in
 * @memberof services/member
 * @interface IUpdateMemberArgs
 */
export interface IUpdateMemberArgs {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * サイトパスワード
     */
    sitePass: string;
    /**
     * 会員ID
     */
    memberId: string;
    /**
     * 会員名
     */
    memberName?: string;
}
/**
 * 会員更新out
 * @memberof services/member
 * @interface IUpdateMemberResult
 */
export interface IUpdateMemberResult {
    /**
     * 会員ID
     */
    memberId: string;
}

/**
 * 会員削除in
 * @memberof services/member
 * @interface IDeleteMemberArgs
 */
export interface IDeleteMemberArgs {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * サイトパスワード
     */
    sitePass: string;
    /**
     * 会員ID
     */
    memberId: string;
}
/**
 * 会員削除out
 * @memberof services/member
 * @interface IDeleteMemberResult
 */
export interface IDeleteMemberResult {
    /**
     * 会員ID
     */
    memberId: string;
}

/**
 * 会員参照in
 * @memberof services/member
 * @interface ISearchMemberArgs
 */
export interface ISearchMemberArgs {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * サイトパスワード
     */
    sitePass: string;
    /**
     * 会員ID
     */
    memberId: string;
}
/**
 * 会員参照out
 * @memberof services/member
 * @interface ISearchMemberResult
 */
export interface ISearchMemberResult {
    /**
     * 会員ID
     */
    memberId: string;
    /**
     * 会員名
     */
    memberName: string;
    /**
     * 削除フラグ（0:未削除 を返却します。）
     */
    deleteFlag: string;
}

/**
 * カード登録・更新in
 * @memberof services/card
 * @interface ISaveCardArgs
 */
export interface ISaveCardArgs {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * サイトパスワード
     */
    sitePass: string;
    /**
     * 会員ID
     */
    memberId: string;
    /**
     * カード登録連番モード（0:論理モード(デフォルト)1:物理モード）
     */
    seqMode?: util.SeqMode;
    /**
     * カード登録連番（登録時は、入力不可です。更新時は、更新する値を設定します。）
     */
    cardSeq?: number;
    /**
     * 洗替・継続課金フラグ（0:継続課金対象としない(デフォルト)1:継続課金対象とする）
     */
    defaultFlag?: string;
    /**
     * カード会社略称
     */
    cardName?: string;
    /**
     * カード番号
     */
    cardNo?: string;
    /**
     * カードパスワード
     */
    cardPass?: string;
    /**
     * 有効期限
     */
    expire?: string;
    /**
     * 名義人
     */
    holderName?: string;
    /**
     * トークン
     */
    token?: string;
}
/**
 * カード登録・更新out
 * @memberof services/card
 * @interface ISaveCardResult
 */
export interface ISaveCardResult {
    /**
     * カード登録連番
     */
    cardSeq: string;
    /**
     * カード番号
     */
    cardNo: string;
    /**
     * 仕向先コード
     */
    forward: string;
    // /**
    //  * 国際ブランド
    //  */
    // brand?: string;
    // /**
    //  * 国内発行フラグ
    //  */
    // domesticFlag?: string;
    // /**
    //  * イシュアコード
    //  */
    // issuerCode?: string;
    // /**
    //  * デビット／プリペイドフラグ
    //  */
    // debitPrepaidFlag?: string;
    // /**
    //  * デビット／プリペイドカード発行会社名
    //  */
    // debitPrepaidIssuerName?: string;
    // /**
    //  * 最終仕向先のカード会社コード
    //  */
    // forwardFinal?: string;
}

/**
 * カード削除in
 * @memberof services/card
 * @interface IDeleteCardArgs
 */
export interface IDeleteCardArgs {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * サイトパスワード
     */
    sitePass: string;
    /**
     * 会員ID
     */
    memberId: string;
    /**
     * カード登録連番モード
     */
    seqMode?: util.SeqMode;
    /**
     * カード登録連番
     */
    cardSeq: string;
}
/**
 * カード削除out
 * @memberof services/card
 * @interface IDeleteCardResult
 */
export interface IDeleteCardResult {
    /**
     * カード登録連番
     */
    cardSeq: string;
}

/**
 * カード参照in
 * @memberof services/card
 * @interface ISearchCardArgs
 */
export interface ISearchCardArgs {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * サイトパスワード
     */
    sitePass: string;
    /**
     * 会員ID
     */
    memberId: string;
    /**
     * カード登録連番モード（0:論理モード1:物理モード）
     */
    seqMode: util.SeqMode;
    /**
     * カード登録連番
     */
    cardSeq?: string;
}
/**
 * カード参照out
 * @memberof services/card
 * @interface ISearchCardResult
 */
export interface ISearchCardResult {
    /**
     * カード登録連番
     */
    cardSeq: string;
    /**
     * 洗替・継続課金フラグ
     */
    defaultFlag: string;
    /**
     * カード会社略称
     */
    cardName: string;
    /**
     * カード番号
     */
    cardNo: string;
    /**
     * 有効期限
     */
    expire: string;
    /**
     * 名義人
     */
    holderName: string;
    /**
     * 削除フラグ（入力パラメータのカード登録連番モードが物理の場合のみ返却します。0:未削除1:削除済）
     */
    deleteFlag: string;
    // /**
    //  * 国際ブランド
    //  */
    // brand?: string;
    // /**
    //  * 国内発行フラグ
    //  */
    // domesticFlag?: string;
    // /**
    //  * イシュアコード
    //  */
    // issuerCode?: string;
    // /**
    //  * デビット／プリペイドフラグ
    //  */
    // debitPrepaidFlag?: string;
    // /**
    //  * デビット／プリペイドカード発行会社名
    //  */
    // debitPrepaidIssuerName?: string;
    // /**
    //  * 最終仕向先のカード会社コード
    //  */
    // forwardFinal?: string;
}

/**
 * 会員クレジットカードサービス
 * @class
 */
export class CardService extends Service {

    /**
     * 会員登録
     * @memberof services/member
     * @function saveMember
     * @param {ISaveMemberArgs} args 会員登録in
     * @param {string} args.siteId サイトID
     * @param {string} args.sitePass サイトパスワード
     * @param {string} args.memberId 会員ID
     * @param {string | undefined} args.memberName 会員名
     * @returns {Promise<ISaveMemberResult>} 会員登録out
     */
    public async saveMember(args: ISaveMemberArgs): Promise<ISaveMemberResult> {
        debug('requesting...', args);
        const body = await this.request({
            uri: '/payment/SaveMember.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId,
                MemberName: args.memberName
            }
        });
        debug('request processed.', body);

        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            throw new BadRequestError(body);
        }

        return {
            memberId: <string>result.MemberID
        };
    }

    /**
     * 会員更新
     * @memberof services/member
     * @function updateMember
     * @param {IUpdateMemberArgs} args 会員更新in
     * @param {string} args.siteId サイトID
     * @param {string} args.sitePass サイトパスワード
     * @param {string} args.memberId 会員ID
     * @param {string | undefined} args.memberName 会員名
     * @returns {Promise<IUpdateMemberResult>} 会員更新out
     */
    public async updateMember(args: IUpdateMemberArgs): Promise<IUpdateMemberResult> {
        debug('requesting...', args);
        const body = await this.request({
            uri: '/payment/UpdateMember.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId,
                MemberName: args.memberName
            }
        });
        debug('request processed.', body);

        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            throw new BadRequestError(body);
        }

        return {
            memberId: <string>result.MemberID
        };
    }

    /**
     * 会員削除
     * @memberof services/member
     * @function deleteMember
     * @param {ISaveMemberArgs} args 会員削除in
     * @param {string} args.siteId サイトID
     * @param {string} args.sitePass サイトパスワード
     * @param {string} args.memberId 会員ID
     * @returns {Promise<ISaveMemberResult>} 会員削除out
     */
    public async deleteMember(args: IDeleteMemberArgs): Promise<IDeleteMemberResult> {
        debug('requesting...', args);
        const body = await this.request({
            uri: '/payment/DeleteMember.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId
            }
        });
        debug('request processed.', body);

        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            throw new BadRequestError(body);
        }

        return {
            memberId: <string>result.MemberID
        };
    }

    /**
     * 会員参照
     * @memberof services/member
     * @function searchMember
     * @param {ISearchMemberArgs} args 会員参照in
     * @param {string} args.siteId サイトID
     * @param {string} args.sitePass サイトパスワード
     * @param {string} args.memberId 会員ID
     * @returns {Promise<ISearchMemberResult>} 会員参照out
     */
    public async searchMember(args: ISearchMemberArgs): Promise<ISearchMemberResult | null> {
        debug('requesting...', args);
        const body = await this.request({
            uri: '/payment/SearchMember.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId
            }
        });
        debug('request processed.', body);

        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            const error = new BadRequestError(body);

            // 指定されたサイトIDと会員IDの会員が存在しない場合、nullを返すように、特別扱い
            if (error.errors.length === 1 && error.errors[0].info === 'E01390002') {
                return null;
            }

            throw error;
        }

        return {
            memberId: <string>result.MemberID,
            memberName: <string>result.MemberName,
            deleteFlag: <string>result.DeleteFlag
        };
    }

    /**
     * カード登録・更新
     * @memberof services/card
     * @function saveCard
     * @param {ISaveCardArgs} args カード登録・更新in
     * @param {string} args.siteId サイトID
     * @param {string} args.sitePass サイトパスワード
     * @param {string} args.memberId 会員ID
     * @param {util.SeqMode} args.seqMode カード登録連番モード（0:論理モード(デフォルト)1:物理モード）
     * @param {number} args.cardSeq カード登録連番（登録時は、入力不可です。更新時は、更新する値を設定します。）
     * @param {string} args.defaultFlag 洗替・継続課金フラグ（0:継続課金対象としない(デフォルト)1:継続課金対象とする）
     * @param {string} args.cardName カード会社略称
     * @param {string} args.cardNo カード番号
     * @param {string} args.cardPass カードパスワード
     * @param {string} args.expire 有効期限
     * @param {string} args.holderName 名義人
     * @param {string} args.token トークン
     * @returns {Promise<ISaveCardResult>} カード登録・更新out
     */
    public async saveCard(args: ISaveCardArgs): Promise<ISaveCardResult> {
        debug('requesting...', args);
        const body = await this.request({
            uri: '/payment/SaveCard.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId,
                SeqMode: args.seqMode,
                CardSeq: args.cardSeq,
                DefaultFlag: args.defaultFlag,
                CardName: args.cardName,
                CardNo: args.cardNo,
                CardPass: args.cardPass,
                Expire: args.expire,
                HolderName: args.holderName,
                Token: args.token
            }
        });
        debug('request processed.', body);

        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            throw new BadRequestError(body);
        }

        return {
            cardSeq: <string>result.CardSeq,
            cardNo: <string>result.CardNo,
            forward: <string>result.Forward
            // brand: result.Brand,
            // domesticFlag: result.DomesticFlag,
            // issuerCode: result.IssuerCode,
            // debitPrepaidFlag: result.DebitPrepaidFlag,
            // debitPrepaidIssuerName: result.DebitPrepaidIssuerName,
            // forwardFinal: result.ForwardFinal
        };
    }

    /**
     * カード削除
     * @memberof services/card
     * @function deleteCard
     * @param {IDeleteCardArgs} args カード削除in
     * @param {string} args.siteId サイトID
     * @param {string} args.sitePass サイトパスワード
     * @param {string} args.memberId 会員ID
     * @param {util.SeqMode} args.seqMode カード登録連番モード（0:論理モード(デフォルト)1:物理モード）
     * @param {string} args.cardSeq カード登録連番
     * @returns {Promise<IDeleteCardResult>} カード削除out
     */
    public async deleteCard(args: IDeleteCardArgs): Promise<IDeleteCardResult> {
        debug('requesting...', args);
        const body = await this.request({
            uri: '/payment/DeleteCard.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId,
                SeqMode: args.seqMode,
                CardSeq: args.cardSeq
            }
        });
        debug('request processed.', body);

        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            throw new BadRequestError(body);
        }

        return {
            cardSeq: <string>result.CardSeq
        };
    }

    /**
     * カード参照
     * @memberof services/card
     * @function searchCard
     * @param {ISearchCardArgs} args カード参照in
     * @param {string} args.siteId サイトID
     * @param {string} args.sitePass サイトパスワード
     * @param {string} args.memberId 会員ID
     * @param {util.SeqMode} args.seqMode カード登録連番モード（0:論理モード1:物理モード）
     * @param {string} args.cardSeq カード登録連番
     * @returns {Promise<ISearchCardResult[]>} カード参照out
     */
    public async searchCard(args: ISearchCardArgs): Promise<ISearchCardResult[]> {
        debug('requesting...', args);
        const body = await this.request({
            uri: '/payment/SearchCard.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId,
                SeqMode: args.seqMode,
                CardSeq: args.cardSeq
            }
        });
        debug('request processed.', body);

        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            const error = new BadRequestError(body);

            // 会員は存在してカードが存在しない場合、空配列を返すように、特別扱い
            if (error.errors.length === 1 && error.errors[0].info === 'E01240002') {
                return [];
            }

            throw error;
        }

        const cardSeqArry: string[] = (<string>result.CardSeq).split('|');
        const defaultFlagArry: string[] = (<string>result.DefaultFlag).split('|');
        const cardNameArry: string[] = (<string>result.CardName).split('|');
        const cardNoArry: string[] = (<string>result.CardNo).split('|');
        const expireArry: string[] = (<string>result.Expire).split('|');
        const holderNameArry: string[] = (<string>result.HolderName).split('|');
        const deleteFlagArry: string[] = (<string>result.DeleteFlag).split('|');

        return cardSeqArry.map((cardSeq, index) => {
            return {
                cardSeq: cardSeq,
                defaultFlag: defaultFlagArry[index],
                cardName: cardNameArry[index],
                cardNo: cardNoArry[index],
                expire: expireArry[index],
                holderName: holderNameArry[index],
                deleteFlag: deleteFlagArry[index]
            };
        });
    }
}