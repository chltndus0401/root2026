// 협찬사 상세 페이지 (THANKS-TO 의 일화·컬러에너지 로고를 누르면 열림)
// 주소: /sponsors/<slug>  ·  slug 는 site.js 의 SPONSORS 와 같아야 함
// 소개 문구에서 **굵게** 로 감싼 부분은 굵은 글씨로 표시됨
import tingleProduct from '../assets/sponsor-tingle-product.webp';
import colorEnergyProduct from '../assets/sponsor-colorenergy-product.webp';

export const SPONSOR_PAGES = {
  tingle: {
    title: '일화 팅글 X ROOT',
    subtitle: '음료를 더 깨끗하고 건강하게',
    links: [{ type: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/ilhwa_official' }],
    product: '레몬애사비소다',
    note: '수량 소진 시 조기 마감',
    image: tingleProduct,
    imageAlt: '일화 팅글 레몬애사비소다 캔 음료',
    points: [
      '애사비와 레몬의 만남으로 **혈당관리**와 **디톡스**를 동시에',
      '상큼하게, 맛있게 즐기는 **리프레시 과즙 탄산 드링크**',
      '입안 가득 산뜻하게 퍼지는 **레몬의 상큼함**',
      '부담 없는 **무설탕, 저칼로리** 음료',
    ],
  },
  colorenergy: {
    title: '컬러에너지 X ROOT',
    subtitle: '나를 위한 건강 루틴, 컬러에너지',
    links: [
      { type: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/my_color_energy' },
      { type: 'store', label: '네이버 스마트스토어', href: 'https://smartstore.naver.com/my_color_energy/products/11097286853' },
    ],
    product: '패션후르츠즙',
    note: '수량 소진 시 조기 마감',
    image: colorEnergyProduct,
    imageAlt: '컬러에너지 패션후르츠즙 상자와 스틱, 음료 한 잔',
    points: [
      '**비타민C & 항산화 성분**으로 **피로 회복** 및 **컨디션 관리**',
      '**상큼한 산미**로 **기분 전환**',
      '**스틱형 개별 포장**으로 언제 어디서나 **간편하게**',
      '부담 없는 **과일 베이스** 음료',
    ],
  },
};
