export const fetchOssImage = (fileList) => {
  if (fileList.length === 0) {
    return new Promise<string[]>((resolve, _reject) => {
      resolve([]);
    });
  }

  let promises: Array<Promise<string>> = [];
  fileList.forEach((fileUrl) => {
    const promise = uni.getImageInfo({ src: fileUrl }).then((res) => res.path);
    promises.push(promise);
  });

  return new Promise<string[]>((resolve, _reject) => {
    Promise.all(promises).then((res) => {
      promises = [];
      resolve(res);
    });
  });
};
