import { Base64 } from 'js-base64';

export interface AccountInfo {
  address: string;
  amr: string[];
  aud: string;
  auth_time: number;
  client_id: string;
  email: string;
  email_verified: string;
  exp: number;
  iat: number;
  idp: string;
  iss: string;
  name: string;
  sub: string;
  role: string;
  nbf: number;
}

export function getAccountInfoFromAccessToken(accessToken: string): Partial<AccountInfo> {
  if (accessToken) {
    const accessInfo = Base64.decode(accessToken.split(/\.(.+?)\./g)[1]);
    return JSON.parse(accessInfo) as AccountInfo;
  }
  return {};
}

export function tokenIsExpired(userInfo: API.IdentityModelTokenCacheItem) {
  const now = new Date().getTime();
  const expiresIn = userInfo.expiresIn;
  const expired = (now - new Date(userInfo.creationTime).getTime()) / 1000 > expiresIn - 300;
  return expired;
}
