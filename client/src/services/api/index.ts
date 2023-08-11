import axios from 'axios';

const BASE_URL = 'http://apis.data.go.kr/B551011/KorService1/';

export const DetailCommon = async (): Promise<any> => {
  try {
    const response = await axios.get(
      `${BASE_URL}detailCommon1?MobileOS=IOS&MobileApp=MobileApp&contentId=1&contentTypeId=12&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=5&pageNo=1&serviceKey=d43ufcyxActi3JqQD7ChAF1fQRpNtUKnMMva9eqph76M4H2%2BW6jwDkqSu21J8jKElh1ouSzsvcxW2dgbzeVTRA%3D%3D`
    );
    return response;
  } catch (error: any) {
    throw error;
  }
};
