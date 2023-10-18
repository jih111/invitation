import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import * as S from "./styled";
import {
  sourceCodePro400,
  sourceCodePro500,
  sourceCodePro700,
} from "styles/fonts";
import Script from "next/script";

declare global {
  interface Window {
    kakao: any;
  }
}
const Home = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  const initMap = () => {
    if (typeof window === "undefined") return;

    window.kakao.maps.load(function () {
      const { kakao } = window;
      var container = document.getElementById("map");

      var options = {
        center: new kakao.maps.LatLng(37.5266725068019, 126.8987459483112),
        level: 4,
      };

      const map = new kakao.maps.Map(container, options);

      var marker = new kakao.maps.Marker({
        // 지도 중심좌표에 마커를 생성합니다
        position: map.getCenter(),
      });
      // 지도에 마커를 표시합니다
      marker.setMap(map);
    });
  };

  return (
    <S.Layout>
      <S.Visual>
        <S.VideoWrapper>
          <video autoPlay muted>
            <source src="/sample.mp4" type="video/mp4" />
          </video>
        </S.VideoWrapper>
      </S.Visual>
      <S.Letter>
        <p className="image" data-aos="fade-up">
          😍
        </p>
        <p data-aos="fade-up" className={sourceCodePro700.className}>
          예쁜 예감이 들었다.
          <br />
          우리는 언제나 손을 잡고 있게 될 것이다.
        </p>
        <p data-aos="fade-up">{"이이체<연인>"}</p>
      </S.Letter>
      <S.Letter>
        <h2 className={sourceCodePro700.className} data-aos="fade-up">
          소중한 분들을 초대합니다.
        </h2>
        <p className="image" data-aos="fade-up">
          😍
        </p>
        <p data-aos="fade-up" className={sourceCodePro400.className}>
          함께 있을 때 가장 나다운 모습이 되고, <br />
          함께 있을 때 미래를 꿈꾸게 하는 사람을 만나 <br /> 함께 맞는 여덟 번째
          겨울, 결혼합니다.
        </p>
        <p data-aos="fade-up" className={sourceCodePro400.className}>
          지금처럼 서로의 가장 친한 친구가 되어 <br />
          예쁘고 행복하게 잘 살겠습니다.
          <br /> 저희의 새로운 시작을 함께 축복해주세요.
        </p>
      </S.Letter>

      <S.MapWrapper>
        <Script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_TOKEN}`}
          onLoad={initMap}
        />
        <div id="map" ref={mapRef} />
      </S.MapWrapper>

      <S.Letter>
        <div data-aos="fade-up">
          <h3 className={sourceCodePro500.className}>지하철 이용시</h3>
          <p className={sourceCodePro400.className}>
            2호선 영등포구청역 4번출구 도보3분(영등포경찰서 방변)
          </p>
        </div>

        <div data-aos="fade-up">
          <h3 className={sourceCodePro500.className}>버스 이용시</h3>
          <p className={sourceCodePro400.className}>
            영등포경찰서, 영등포구청역 하차 후 도보 이용
            <br />
            일반: 5 / 지선 : 5620, 6637
            <br />
            마을 : 영등포02
          </p>
        </div>

        <div data-aos="fade-up">
          <h3 className={sourceCodePro500.className}>자가용 이용시</h3>
          <p className={sourceCodePro400.className}>
            네비게이션 [서울 영등포구 국회대로38길 2] 검색
          </p>
        </div>
      </S.Letter>

      <S.Letter>
        <p className="image" data-aos="fade-up">
          😍
        </p>
        <h2 className={sourceCodePro700.className} data-aos="fade-up">
          마음 전하실 곳
        </h2>
        <p className={sourceCodePro400.className} data-aos="fade-up">
          참석이 어려우신 분들을 위헤
          <br />
          계좌번호를 기재하였습니다.
          <br />
          너그러운 마음으로 양해 부탁드립니다.
        </p>
      </S.Letter>
    </S.Layout>
  );
};

export default Home;
