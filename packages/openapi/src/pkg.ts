import axios from 'axios';
import semver from 'semver';

const RegistryUrl = 'https://registry.npmjs.org/';

export function getNpmInfo(npmName: string) {
  if (!npmName) {
    return null;
  }
  const registryUrl = RegistryUrl;
  const npmInfoUrl = registryUrl + npmName;
  return axios
    .get(npmInfoUrl)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
      return null;
    })
    .catch((err) => {
      Promise.reject(err);
    });
}

export async function getNpmVersions(npmName: string) {
  const data = await getNpmInfo(npmName);
  if (data) {
    return Object.keys(data.versions);
  } else {
    return [];
  }
}

export async function getNpmLatestVersion(npmName: string) {
  const versions = await getNpmVersions(npmName);
  if (versions) {
    return versions.sort((a, b) => (semver.gt(b, a) ? 1 : -1))[0];
  }
  return null;
}

export function getMyNpmLatestVersion() {
  return getNpmLatestVersion('@ywwlmm/openapi');
}
