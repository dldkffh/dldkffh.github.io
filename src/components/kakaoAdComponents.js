import React from 'react';

const html = `<ins
class="kakao_ad_area"
style="display:none;"
data-ad-unit="DAN-YNC5GGYBYGAah2B4"
data-ad-width="250"
data-ad-height="250"></ins>
<script
type="text/javascript"
src="//t1.daumcdn.net/kas/static/ba.min.js"
async></script>`;

export default function kakaoAdComponents() {
  return <div dangerouslySetInnerHTML={{__html: html}}></div>;
}
