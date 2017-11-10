/**
 * Created by guoshuyu on 2017/11/7.
 */
import {NativeModules} from 'react-native';
import I18n from 'react-native-i18n'

const {RNI18n} = NativeModules;

I18n.fallbacks = true;

I18n.defaultLocale = "zh-CN";


I18n.translations = {
    'en': {
        appName: 'GSYGitHubApp',
        netError: 'network error',
        netTimeout: 'network timeout',
        tabRecommended: 'Recommend',
        tabDynamic: 'Dynamic',
        tabMy: 'My',
    },
    'zh-CN': {
        appName: 'GSYGitHubApp',
        netError: '网络错误',
        netTimeout: '网络超时',
        tabRecommended: '推荐',
        tabDynamic: '动态',
        tabMy: '我的',
    }
};

export const changeLocale = function (multilingual) {
    if (multilingual == 'local' || !multilingual) {
        I18n.locale = (RNI18n && RNI18n.locale) ? RNI18n.locale.replace(/_/, '-') : ''
    } else {
        I18n.locale = multilingual
    }

    // for ios
    if (I18n.locale.indexOf('zh-Hans') != -1) {
        I18n.locale = 'zh-CN'
    } else if (I18n.locale.indexOf('zh-Hant') != -1 || I18n.locale == 'zh-HK' || I18n.locale == 'zh-MO') {
        I18n.locale = 'zh-CN'
    }
};

export default function (name, option1, option2) {
    return I18n.t(name, option1, option2)
}