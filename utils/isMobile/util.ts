import isBrowser from "@utils/isBrowser";

const mobilePlatformRegExp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i

const utility = () => isBrowser() && mobilePlatformRegExp.test(navigator.userAgent);

export default utility;